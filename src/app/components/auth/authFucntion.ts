"use client";

import { useMemo, useState } from "react";
import type { Values, Errors } from "@/app/components/auth/authForms";
import { validateRegister } from "@/app/components/auth/authForms";


export function useRegisterForm() {
  const [values, setValues] = useState<Values>({ email: "", password: "", passwordConf: "" });
  const [touched, setTouched] = useState<Partial<Record<keyof Values, boolean>>>({});
  const [submitting, setSubmitting] = useState(false);

  const allErrors = useMemo(() => validateRegister(values), [values]);

  const isValid = useMemo(() => {
    if (!values.email || !values.password || !values.passwordConf) return false;
    return Object.keys(allErrors).length === 0;
  }, [values, allErrors]);

  const setField = (name: keyof Values) => (value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const onChange = (name: keyof Values) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setField(name)(e.target.value);
  };

  const onSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    submitFn: (values: Values) => Promise<void>
  ) => {
    e.preventDefault();
    setTouched({ email: true, password: true, passwordConf: true });

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

  return { values, setField, onChange, visibleErrors, allErrors, touched, isValid, submitting, onSubmit };
}





export function useLoginForm() {
  type LoginValues = { email: string; password: string };
type LoginErrors = { email?: string; password?: string };
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateLogin(v: LoginValues): LoginErrors {
  const next: LoginErrors = {};

  // 로그인에서는 과한 조건 걸지 말고 최소만
  if (!v.email) next.email = "Email is required";
  else if (!emailRe.test(v.email)) next.email = "Enter a valid email";

  if (!v.password) next.password = "Password is required";

  return next;
}


  const [values, setValues] = useState<LoginValues>({ email: "", password: "" });
  const [touched, setTouched] = useState<Partial<Record<keyof LoginValues, boolean>>>({});
  const [submitting, setSubmitting] = useState(false);

  const allErrors = useMemo(() => validateLogin(values), [values]);

  // 로그인 UX: 처음부터 에러 띄우지 말고 touched 된 것만
  const visibleErrors: LoginErrors = useMemo(() => {
    const v: LoginErrors = {};
    (Object.keys(allErrors) as (keyof LoginValues)[]).forEach((k) => {
      if (touched[k]) v[k] = allErrors[k];
    });
    return v;
  }, [allErrors, touched]);

  const isValid = useMemo(() => {
    return values.email !== "" && values.password !== "" && Object.keys(allErrors).length === 0;
  }, [values, allErrors]);

  const onChange =
    (name: keyof LoginValues) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setValues((prev) => ({ ...prev, [name]: value }));
      setTouched((prev) => ({ ...prev, [name]: true }));
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

  return { values, onChange, visibleErrors, isValid, submitting, onSubmit };
}