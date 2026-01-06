"use client";

import { useMemo, useState } from "react";
import type { Values, Errors } from "@/app/components/auth/authForms";
import { validateRegister } from "@/app/components/auth/authForms";

/* ---------------------------
   Login: types + validator는 밖으로 빼는 게 정석
--------------------------- */
type LoginValues = { email: string; name:string; password: string };
type LoginErrors = { email?: string; name?:string; password?: string };

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateLogin(v: LoginValues): LoginErrors {
  const next: LoginErrors = {};

  if (!v.email) next.email = "Email is required";
  else if (!emailRe.test(v.email)) next.email = "Enter a valid email";

  if (!v.password) next.password = "Password is required";

  return next;
}

/* ---------------------------
   Register
--------------------------- */
export function useRegisterForm() {
  const [values, setValues] = useState<Values>({
    email: "",
    name: "",
    password: "",
    passwordConf: "",
  });

  const [touched, setTouched] = useState<Partial<Record<keyof Values, boolean>>>(
    {}
  );
  const [submitting, setSubmitting] = useState(false);

  const allErrors = useMemo(() => validateRegister(values), [values]);

  const isValid = useMemo(() => {
    // ✅ name도 포함 (원래 코드엔 빠져있었음)
    if (!values.email || !values.name || !values.password || !values.passwordConf)
      return false;
    return Object.keys(allErrors).length === 0;
  }, [values, allErrors]);

  const setField = (name: keyof Values) => (value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const onChange =
    (name: keyof Values) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setField(name)(e.target.value);
    };

  const onSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    submitFn: (values: Values) => Promise<void>
  ) => {
    e.preventDefault();

    // ✅ 제출 시 모든 필드 touched 처리 (원래 name 빠짐)
    setTouched({
      email: true,
      name: true,
      password: true,
      passwordConf: true,
    });

    const errs = validateRegister(values);
    if (Object.keys(errs).length > 0) return;

    try {
      setSubmitting(true);
      await submitFn(values);
    } finally {
      setSubmitting(false);
    }
  };

  const visibleErrors: Errors = useMemo(() => {
    const v: Errors = {};
    (Object.keys(allErrors) as (keyof Values)[]).forEach((k) => {
      if (touched[k]) v[k] = allErrors[k];
    });
    return v;
  }, [allErrors, touched]);

  return {
    values,
    setField,
    onChange,
    visibleErrors,
    allErrors,
    touched,
    isValid,
    submitting,
    onSubmit,
  };
}

/* ---------------------------
   Login
--------------------------- */
export function useLoginForm() {
  const [values, setValues] = useState<LoginValues>({ email: "", name:"", password: "" });
  const [touched, setTouched] = useState<
    Partial<Record<keyof LoginValues, boolean>>
  >({});
  const [submitting, setSubmitting] = useState(false);

  const allErrors = useMemo(() => validateLogin(values), [values]);

  const visibleErrors: LoginErrors = useMemo(() => {
    const v: LoginErrors = {};
    (Object.keys(allErrors) as (keyof LoginValues)[]).forEach((k) => {
      if (touched[k]) v[k] = allErrors[k];
    });
    return v;
  }, [allErrors, touched]);

  const isValid = useMemo(() => {
    return (
      values.email !== "" &&
      values.password !== "" &&
      Object.keys(allErrors).length === 0
    );
  }, [values, allErrors]);

  const setField = (name: keyof LoginValues) => (value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const onChange =
    (name: keyof LoginValues) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setField(name)(e.target.value);
    };

  const onSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    submitFn: (values: LoginValues) => Promise<void>
  ) => {
    e.preventDefault();
    setTouched({ email: true, password: true });

    const errs = validateLogin(values);
    if (Object.keys(errs).length > 0) return;

    try {
      setSubmitting(true);
      await submitFn(values);
    } finally {
      setSubmitting(false);
    }
  };

  return { values, setField, onChange, visibleErrors, isValid, submitting, onSubmit };
}