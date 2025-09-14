"use client";

import { FormField, TextInput, SubmitBar } from "@/app/components/auth/authForms";
import { useMemo, useState } from "react";

type Values = { email: string; password: string; passwordConf: string };
type Errors = { email?: string; password?: string; passwordConf?: string };

// 정규식
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// 최소 6자, 숫자 1개 이상, 특수문자 1개 이상(요구사항 반영)
const pwNumberRe = /[0-9]/;
const pwSpecialRe = /[!@#$%^&*()_\-+={[}\]|\\:;"'<>,.?/]/;

export default function OwnerRegisterPage() {
  const [values, setValues] = useState<Values>({
    email: "",
    password: "",
    passwordConf: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);

  // 단일 진실원: 현재 values를 기반으로 전체 에러 계산
  const validate = (v: Values): Errors => {
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
  };

  // values가 바뀔 때마다 현재 에러를 미리 산출
  const currentErrors = useMemo(() => validate(values), [values]);

  // 폼 유효성: 에러가 없고, 필수값이 모두 존재
  const isValid = useMemo(() => {
    if (!values.email || !values.password || !values.passwordConf) return false;
    return Object.keys(currentErrors).length === 0;
  }, [values, currentErrors]);

  // 필드 변경 핸들러: 값 갱신 후 해당 필드 에러만 반영(UX를 위해)
  const onChange =
    (name: keyof Values) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const nextValues = { ...values, [name]: e.target.value };
      setValues(nextValues);

      // 해당 필드의 에러만 추출해서 반영
      const nextAllErrors = validate(nextValues);
      setErrors((prev) => ({ ...prev, [name]: nextAllErrors[name] }));
    };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 제출 시점에 전체 재검증(신뢰성)
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      // 에러 있으면 제출 중단
      return;
    }

    try {
      setSubmitting(true);
      // ✅ 모든 검증 통과 → 제출 로직 수행 (API 호출 등)
      // await api.signup(values);
      console.log("submitted!", values);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <div className="max-w-[1280px] md:px-8 2xl:px-16 box-content flex flex-col gap-8 justify-center items-center px-0 mx-auto min-h-[100vh] sm:w-full sm:my-auto">
        <a
          style={{ width: 200, height: 30 }}
          className="inline-flex focus:outline-none relative"
          href="/"
        />
        <div>
          <div className="mobilians">
            <div className="relative mx-auto w-screen bg-white sm:w-[450px] sm:border sm:border-gray-300 sm:overflow-hidden sm:rounded-lg">
              <div className="flex flex-col min-h-[578px] sm:py-6">
                <div className="flex px-5 py-[15px] w-full">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 512 512"
                    className="text-2xl"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z" />
                  </svg>
                  <span className="block flex-auto w-full text-center headline-semibold-18">
                    Sign up
                  </span>
                </div>

                <div className="flex flex-col flex-1 [&>*]:flex [&>*]:flex-col [&>*]:flex-1">
                  <div>
                    <div className="space-y-8 my-6 px-8">
                      <form onSubmit={onSubmit} className="flex flex-col grow shrink-0 basis-auto">
                        <FormField id="email" label="Email" error={errors.email}>
                          <TextInput
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Email"
                            value={values.email}
                            onChange={onChange("email")}
                            hasError={!!errors.email}
                            aria-describedby={errors.email ? "email-error" : undefined}
                            aria-invalid={!!errors.email}
                            autoComplete="email"
                            spellCheck={false}
                          />
                        </FormField>

                        <FormField id="password" label="Password" error={errors.password}>
                          <TextInput
                            id="password"
                            name="password"
                            type="password"
                            placeholder="***********"
                            value={values.password}
                            onChange={onChange("password")}
                            hasError={!!errors.password}
                            aria-describedby={errors.password ? "password-error" : undefined}
                            aria-invalid={!!errors.password}
                            autoComplete="new-password"
                            spellCheck={false}
                          />
                        </FormField>

                        <FormField
                          id="passwordConf"
                          label="Password Confirmation"
                          error={errors.passwordConf}
                        >
                          <TextInput
                            id="passwordConf"
                            name="passwordConf"
                            type="password"
                            placeholder="***********"
                            value={values.passwordConf}
                            onChange={onChange("passwordConf")}
                            hasError={!!errors.passwordConf}
                            aria-describedby={
                              errors.passwordConf ? "passwordConf-error" : undefined
                            }
                            aria-invalid={!!errors.passwordConf}
                            autoComplete="new-password"
                            spellCheck={false}
                          />
                        </FormField>

                        {/* ✅ 폼 유효 + 미제출일 때만 활성화(검정), 그 외엔 비활성(회색) */}
                        <SubmitBar disabled={!isValid || submitting} />

                        {/* 하단 고정 바와 본문 겹침 방지용 여백(모바일) */}
                        <div className="w-full h-20 sm:hidden" />
                      </form>
                    </div>
                    <div className="w-full h-20 sm:hidden" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>      

      <div className="Toastify" />
    </>
  );
}