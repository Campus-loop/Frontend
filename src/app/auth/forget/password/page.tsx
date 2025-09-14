'use client'

import Image from "next/image";
import { useState } from "react";
import { FormField, TextInput, SubmitBar } from "@/app/components/auth/authForms";

export default function passwordForgetPage(){

  type Errors = { email?: string; password?: string; passwordConf?: string };
  const [values, setValues] = useState({
    email: "",
    password: "",
    passwordConf: "",
  });
  const [errors, setErrors] = useState<Errors>({});

  const onChange =
  (name: keyof typeof values) =>
  (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValues = { ...values, [name]: e.target.value };
    setValues(newValues);

    // 해당 필드만 검사
    let fieldError: string | undefined;
    if (name === "email") {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newValues.email)) {
        fieldError = "It is not education email";
      } else if (!newValues.email.endsWith(".edu")) {
        fieldError = "It is not edu email";
      }
      setErrors((prev) => ({ ...prev, email: fieldError }));
    }
  }
    

    return (
        <>
  <div className="max-w-[1280px] md:px-8 2xl:px-16 box-content flex flex-col gap-8 justify-center items-center px-0 mx-auto min-h-[100vh] sm:w-full sm:my-auto">
    <a
      style={{ width: 200, height: 30 }}
      className="inline-flex focus:outline-none relative"
      href="/"
    >
      <Image
        alt="Joonggonara"
        loading="eager"
        decoding="async"
        data-nimg="fill"
        width={50}
        height={50}
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          inset: 0,
          color: "transparent"
        }}
        src="/main-web/assets/images/custom-logo.svg"
      />
    </a>
    <div>
      <div className="mobilians">
        <div className="relative mx-auto w-screen bg-white sm:w-[450px] sm:border sm:border-gray-300 sm:overflow-hidden sm:rounded-lg">
          <div className="flex flex-col sm:py-6">
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
                Find your password
              </span>
            </div>
            <div className="flex flex-col flex-1 [&>*]:flex [&>*]:flex-col [&>*]:flex-1">
              <div>
                <form className="flex flex-col shrink-0 basis-auto">
                  <div className="space-y-8 my-6 px-8">
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
                        <SubmitBar></SubmitBar> 
                  </div>

                  <div className="w-full h-20 sm:hidden" />
                </form>
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