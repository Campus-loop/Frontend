import { useState, useMemo } from "react";

// For email and input validation
type Values = { email: string; password: string; passwordConf: string };
type Errors = { email?: string; password?: string; passwordConf?: string };

// 정규식
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// 최소 6자, 숫자 1개 이상, 특수문자 1개 이상(요구사항 반영)
const pwNumberRe = /[0-9]/;
const pwSpecialRe = /[!@#$%^&*()_\-+={[}\]|\\:;"'<>,.?/]/;

export function validateRegister(v: Values): Errors {
  const next: Errors = {};

  // Email
  if (!emailRe.test(v.email)) {
    next.email = "Enter a valid email address";
  } else if (!v.email.endsWith(".edu")) {
    next.email = "Only .edu emails are allowed";
  }

  // Password
  if (v.password.length < 6) {
    next.password = "Password must be at least 6 characters";
  } else if (!pwNumberRe.test(v.password)) {
    next.password = "Password must include at least one number";
  } else if (!pwSpecialRe.test(v.password)) {
    next.password = "Password must include at least one special character";
  }

  // Password Confirmation
  if (v.passwordConf !== v.password) {
    next.passwordConf = "Passwords do not match";
  }

  return next;
}

export function useRegisterForm() {
  const [values, setValues] = useState<Values>({
    email: "",
    password: "",
    passwordConf: "",
  });

  // UX: touched 없으면 입력 전부터 에러가 떠서 짜증나니까
  const [touched, setTouched] = useState<Partial<Record<keyof Values, boolean>>>(
    {}
  );

  const [submitting, setSubmitting] = useState(false);

  const allErrors = useMemo(() => validateRegister(values), [values]);

  const isValid = useMemo(() => {
    if (!values.email || !values.password || !values.passwordConf) return false;
    return Object.keys(allErrors).length === 0;
  }, [values, allErrors]);

  const setField =
    (name: keyof Values) => (value: string) => {
      setValues((prev) => ({ ...prev, [name]: value }));
      setTouched((prev) => ({ ...prev, [name]: true }));
    };

  const onChange =
    (name: keyof Values) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setField(name)(e.target.value);
    };

  const onSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    submitFn: (values: Values) => Promise<void> // API 호출 등을 바깥에서 주입
  ) => {
    e.preventDefault();

    // 제출 시 전체 touched 처리 (에러 표시)
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

  // 보여줄 에러는 "touched 된 것만"
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