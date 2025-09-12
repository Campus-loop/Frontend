'use client'

import Image from "next/image";
import { useFormStore } from "@/app/auth/forget/password/useFormStore";

export default function passwordForgetPage(){

  



    

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
                    <fieldset>
                      <legend className="mb-[12px]">Email</legend>
                      <div className="block">
                        <input
                          id="userName"
                          name="userName"
                          type="text"
                          placeholder="abcd@email.edu"
                          className="md:px-5 w-full appearance-none text-input lg:text-sm font-body min-h-12 transition duration-200 ease-in-out focus:shadow focus:bg-white focus:border-primary !border-1 !border-rose-500 box-border py-[12px] px-[16px] bg-white text-[14px] placeholder-[#9CA3AF] border-solid rounded border-[#DADEE5] border rounded-md"
                          autoComplete="off"
                          spellCheck="false"
                          aria-invalid="true"
                        />

                        {/* <p className="my-2 text-xs text-rose-500">
                          it is not the email
                        </p> */}

                      </div>
                    </fieldset>
                    
                  </div>

                  
                  <div className="px-5 py-3 mt-auto w-full bg-white fixed bottom-0 left-0 border-t border-jnGray-300 sm:relative sm:mt-auto sm:border-t-0">
                    <span style={{ display: "contents", cursor: "pointer" }}>
                      <button
                        type="submit"
                        className="rounded inline-flex justify-center items-center gap-2 px-4 py-[14px] w-full h-13 text-white border active:border-jnGray-700 pointer-events-none bg-jnGray-400 border-jnGray-400"
                        name="submit"
                      >
                        <span className="font-medium text-inherit body-medium-16">
                          Submit
                        </span>
                      </button>
                    </span>
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