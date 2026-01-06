"use client";


import { FormField, TextInput, SubmitBar } from "@/app/components/auth/authForms";
import { useLoginForm } from "@/app/components/auth/authFucntion";
import { useRouter } from "next/navigation";

export default function loginPage(){
  const { values, onChange, visibleErrors, isValid, submitting, onSubmit } = useLoginForm();

  const router = useRouter();


  const submitFn = async (v: typeof values) => {
    console.log(values)
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include", // 쿠키 쓰면 필요
      body: JSON.stringify(v),
    });

    // 서버가 에러 응답이면 throw 해서 UI에서 잡게
    if (!res.ok) {
      console.log(res)
      const data = await res.json().catch(() => null);
      throw new Error(data?.message ?? "Login Failed");
    }

    // 성공 응답 파싱
    const data = await res.json();

    // 예: 회원가입 성공하면 로그인 페이지로
    router.push("/auth/login");
  };

    return (
        <>
  <div id="__next">
    <div className="max-w-[1280px] md:px-8 2xl:px-16 box-content flex flex-col gap-8 justify-center items-center px-0 mx-auto min-h-[100vh] sm:w-full sm:my-auto">
      <a
        style={{ width: 200, height: 30 }}
        className="inline-flex focus:outline-none relative"
        href="/"
      >

      </a>
      <div>
        <div type="mobilians">
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
                  <form className="flex flex-col grow shrink-0 basis-auto" onSubmit={(e) => onSubmit(e, submitFn)}>
                    <div className="space-y-8 my-6 px-8">
                      <fieldset>
                        <div className="block">
                        <FormField id="email" label="Email" error={visibleErrors.email}>
        <TextInput
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={onChange("email")}
          hasError={!!visibleErrors.email}
        />
      </FormField>
                        </div>
                      </fieldset>

                      <fieldset>
                        <div className="block">
                        <FormField id="password" label="Password" error={visibleErrors.password}>
        <TextInput
          id="password"
          name="password"
          type="password"
          value={values.password}
          onChange={onChange("password")}
          hasError={!!visibleErrors.password}
        />
      </FormField>
                        </div>
                      </fieldset>
                    </div>
                    <div className="px-5 py-3 mt-auto w-full bg-white fixed bottom-0 left-0 border-t border-jnGray-300 sm:relative sm:mt-auto sm:border-t-0">
                    <SubmitBar disabled={!isValid || submitting} />
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
  </div>

  
    
</>

    ); 
}