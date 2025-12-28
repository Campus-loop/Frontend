
import { FormField, TextInput, SubmitBar } from "@/app/components/auth/authForms";

export default function loginPage(){
 

    return (
        <>
  <div id="__next">
    <div className="max-w-[1280px] md:px-8 2xl:px-16 box-content flex flex-col gap-8 justify-center items-center px-0 mx-auto min-h-[100vh] sm:w-full sm:my-auto">
      <a
        style={{ width: 200, height: 30 }}
        className="inline-flex focus:outline-none relative"
        href="/"
      >
        <img
          alt="Joonggonara"
          loading="eager"
          decoding="async"
          data-nimg="fill"
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            color: "transparent"
          }}
          src="/main-web/assets/images/custom-logo.svg"
        />
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
                  <form className="flex flex-col grow shrink-0 basis-auto">
                    <div className="space-y-8 my-6 px-8">
                      <fieldset>
                        <legend className="mb-[12px]">First Name</legend>
                        <div className="block">
                          <input
                            id="userName"
                            name="userName"
                            type="text"
                            placeholder="First Name"
                            className="md:px-5 w-full appearance-none text-input lg:text-sm font-body min-h-12 transition duration-200 ease-in-out focus:shadow focus:bg-white focus:border-primary py-[12px] px-[16px] bg-white text-[14px] placeholder-[#9CA3AF] border-solid rounded border-[#DADEE5] border rounded-md"
                            autoComplete="off"
                            spellCheck="false"
                            aria-invalid="true"
                          />
                          {/* <p className="my-2 text-xs text-rose-500">
                            FirstName
                          </p> */}
                        </div>
                      </fieldset>

                      <fieldset>
                        <legend className="mb-[12px]">Last Name</legend>
                        <div className="block">
                          <input
                            id="userName"
                            name="userName"
                            type="text"
                            placeholder="Last Name"
                            className="md:px-5 w-full appearance-none text-input lg:text-sm font-body min-h-12 transition duration-200 ease-in-out focus:shadow focus:bg-white focus:border-primary !border-1 !border-rose-500 box-border py-[12px] px-[16px] bg-white text-[14px] placeholder-[#9CA3AF] border-solid rounded border-[#DADEE5] border rounded-md"
                            autoComplete="off"
                            spellCheck="false"
                            aria-invalid="true"
                          />
                          <p className="my-2 text-xs text-rose-500">
                            Please Type Your Name
                          </p>
                        </div>
                      </fieldset>
                      <fieldset>
                        <legend className="mb-[12px]">Email</legend>
                        <div className="block">
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
  </div>

  
    
</>

    ); 
}