

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
                                placeholder={0}
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
                            id="headlessui-listbox-button-:r4:"
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
                          disabled=""
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
  </div>
  <next-route-announcer>
    <p
      aria-live="assertive"
      id="__next-route-announcer__"
      role="alert"
      style={{
        border: 0,
        clip: "rect(0px, 0px, 0px, 0px)",
        height: 1,
        margin: "-1px",
        overflow: "hidden",
        padding: 0,
        position: "absolute",
        top: 0,
        width: 1,
        whiteSpace: "nowrap",
        overflowWrap: "normal"
      }}
    >
      중고나라 - 안심되는 중고거래
    </p>
  </next-route-announcer>
  <reach-portal />
  <reach-portal />
  <ins
    className="adsbygoogle adsbygoogle-noablate"
    style={{ display: "none !important" }}
    data-adsbygoogle-status="done"
    data-ad-status="unfilled"
  >
    <div
      id="aswift_0_host"
      style={{
        border: "medium",
        height: 0,
        width: 0,
        margin: 0,
        padding: 0,
        position: "relative",
        visibility: "visible",
        backgroundColor: "transparent",
        display: "inline-block"
      }}
    >
      <iframe
        id="aswift_0"
        name="aswift_0"
        style={{
          left: 0,
          position: "absolute",
          top: 0,
          border: 0,
          width: "undefinedpx",
          height: "undefinedpx",
          minHeight: "auto",
          maxHeight: "none",
          minWidth: "auto",
          maxWidth: "none"
        }}
        sandbox="allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
        frameBorder={0}
        marginWidth={0}
        marginHeight={0}
        vspace={0}
        hspace={0}
        allowTransparency="true"
        scrolling="no"
        src="https://googleads.g.doubleclick.net/pagead/ads?client=ca-pub-5776516316749134&output=html&adk=1812271804&adf=3025194257&abgtt=6&lmt=1755181600&plaf=1%3A2%2C2%3A2%2C7%3A2&plat=1%3A128%2C2%3A128%2C3%3A128%2C4%3A128%2C8%3A128%2C9%3A32776%2C16%3A8388608%2C17%3A32%2C24%3A32%2C25%3A32%2C30%3A1081344%2C32%3A32%2C41%3A32%2C42%3A32&format=0x0&url=https%3A%2F%2Fweb.joongna.com%2Fsignin%3FerrorCode%3D400130%26uniqueId%3D141770344%26errorMessage%3D%25EC%259D%25BC%25EC%25B9%2598%25ED%2595%2598%25EB%258A%2594%2B%25EC%25A0%2595%25EB%25B3%25B4%25EA%25B0%2580%2B%25EC%2597%2586%25EC%258A%25B5%25EB%258B%2588%25EB%258B%25A4.%26type%3Dmobilians&pra=5&wgl=1&aihb=0&asro=0&aifxl=29_18~30_19&aiapm=0.1542&aiapmd=0.25178&aiapmi=0.16&aiapmid=1&aiact=0.5423&aiactd=0.7&aicct=0.7&aicctd=0.5799&ailct=0.5849&ailctd=0.65&aimart=4&aimartd=4&dt=1755181600744&bpp=1&bdt=874&idt=143&shv=r20250813&mjsv=m202508110101&ptt=9&saldr=aa&abxe=1&cookie=ID%3D8b77655b2589cd68%3AT%3D1755002242%3ART%3D1755139026%3AS%3DALNI_MY-bQqWiCFlNj6ioYZZKi5dATQEgw&gpic=UID%3D0000125c261cdcff%3AT%3D1755002242%3ART%3D1755139026%3AS%3DALNI_MbactmEoOy9GNw80pAKqcpYRGYh7w&eo_id_str=ID%3D8e1ad6efbde67bab%3AT%3D1755002242%3ART%3D1755139026%3AS%3DAA-AfjYitUynZ0H4CVUPP72u7Cn1&nras=1&correlator=8055180400758&frm=20&pv=2&u_tz=-240&u_his=7&u_h=1440&u_w=3440&u_ah=1415&u_aw=3440&u_cd=30&u_sd=1&adx=-12245933&ady=-12245933&biw=3390&bih=1330&scr_x=0&scr_y=0&eid=31093040%2C31093861%2C31093925%2C31093928%2C31093940%2C31093974%2C95362656%2C95367635%2C95368378%2C95368525%2C95359266%2C95368429&oid=2&pvsid=800760712731145&tmod=946613462&uas=0&nvt=1&fsapi=1&ref=https%3A%2F%2Fnid.naver.com%2F&fc=1920&brdim=4910%2C-50%2C4910%2C-50%2C3440%2C-50%2C3440%2C1415%2C3390%2C1330&vis=1&rsz=%7C%7Cs%7C&abl=NS&fu=32768&bc=31&bz=1.01&pgls=CAk.&ifi=1&uci=a!1&fsb=1&dtd=149"
        data-google-container-id="a!1"
        tabIndex={0}
        title="Advertisement"
        aria-label="Advertisement"
        data-load-complete="true"
      />
    </div>
  </ins>
  <iframe
    src="https://www.google.com/recaptcha/api2/aframe"
    width={0}
    height={0}
    style={{ display: "none" }}
  />
</>

    ); 
}