export default function OwnerRegisterPage(){


    return (
        <>
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
          inset: 0,
          color: "transparent"
        }}
        src="/main-web/assets/images/custom-logo.svg"
      />
    </a>
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
                본인 인증
              </span>
            </div>
            <div className="flex flex-col flex-1 [&>*]:flex [&>*]:flex-col [&>*]:flex-1">
              <div>
                <form className="flex flex-col grow shrink-0 basis-auto">
                  <div className="space-y-8 my-6 px-8">
                    <fieldset>
                      <legend className="mb-[12px]">이름</legend>
                      <div className="block">
                        <input
                          id="userName"
                          name="userName"
                          type="text"
                          placeholder="이름 입력"
                          className="md:px-5 w-full appearance-none text-input lg:text-sm font-body min-h-12 transition duration-200 ease-in-out focus:shadow focus:bg-white focus:border-primary !border-1 !border-rose-500 box-border py-[12px] px-[16px] bg-white text-[14px] placeholder-[#9CA3AF] border-solid rounded border-[#DADEE5] border rounded-md"
                          autoComplete="off"
                          spellCheck="false"
                          aria-invalid="true"
                        />
                        <p className="my-2 text-xs text-rose-500">
                          이름을 입력해주세요
                        </p>
                      </div>
                    </fieldset>
                    <fieldset>
                      <legend className="mb-[12px]">주민등록번호</legend>
                      <div className="flex justify-between">
                        <div className="basis-[48%]">
                          <input
                            id="socialNo"
                            name="socialNo"
                            type="text"
                            placeholder="생년월일 6자리"
                            className="md:px-5 w-full appearance-none text-input lg:text-sm font-body min-h-12 transition duration-200 ease-in-out focus:shadow focus:bg-white focus:border-primary py-[12px] px-[16px] bg-white text-[14px] placeholder-[#9CA3AF] border-solid rounded border-[#DADEE5] border rounded-md"
                            autoComplete="off"
                            spellCheck="false"
                            aria-invalid="false"
                            pattern="[0-9]*"
                            inputMode="numeric"
                            maxLength={6}
                          />
                        </div>
                        <span className="w-5 relative after:content-['-'] after:absolute after:top-2 after:left-2" />
                        <div className="basis-[48%] flex-shrink-1">
                          <div className="py-[12px] px-[16px] bg-white text-[14px] placeholder-[#9CA3AF] border-solid rounded border-[#DADEE5] border flex justify-start space-x-1 items-center w-[100%]">
                            <input
                              id="sex"
                              type="text"
                              pattern="[0-9]*"
                              inputMode="numeric"
                              className="w-[20%] text-[14px] placeholder-[#9CA3AF] text-center"
                              maxLength={1}
                              name="sex"
                            />
                            <span className="overflow-hidden tracking-[10px] max-[396px]:tracking-[5px] leading-[11px] text-[11px]">
                              ●●●●●
                            </span>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                    <fieldset>
                      <legend className="mb-[12px]">통신사</legend>
                      <div className="relative mt-1 border border-[#DADEE5] rounded">
                        <button
                          className="relative w-full cursor-default rounded-lg bg-white px-[16px] lg:text-sm py-[12px] text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
                          id="headlessui-listbox-button-:r50:"
                          type="button"
                          aria-haspopup="listbox"
                          aria-expanded="false"
                          data-headlessui-state=""
                        >
                          <span className="block truncate text-black font-normal text-[14px]">
                            선택해 주세요
                          </span>
                          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth={0}
                              viewBox="0 0 24 24"
                              className="w-5 h-5 text-gray-400"
                              aria-hidden="true"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g>
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                              </g>
                            </svg>
                          </span>
                        </button>
                      </div>
                    </fieldset>
                    <fieldset>
                      <legend className="mb-[12px]">휴대폰번호</legend>
                      <div className="block">
                        <input
                          id="phoneNo"
                          name="phoneNo"
                          type="phone"
                          placeholder="-없이 숫자만 입력"
                          className="md:px-5 w-full appearance-none text-input lg:text-sm font-body min-h-12 transition duration-200 ease-in-out focus:shadow focus:bg-white focus:border-primary py-[12px] px-[16px] bg-white text-[14px] placeholder-[#9CA3AF] border-solid rounded border-[#DADEE5] border rounded-md"
                          autoComplete="off"
                          spellCheck="false"
                          aria-invalid="false"
                          pattern="[0-9]*"
                          inputMode="numeric"
                          aria-label="휴대폰 번호를 숫자만 입력"
                        />
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
                          제출하기
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