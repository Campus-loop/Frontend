'use client';

export default function UsedMarketPage() {
  return (
    <>
  <div className="mx-auto px-5 md:px-8 2xl:px-16 box-content pt-8 pb-16 bg-white lg:pt-[72px] lg:pb-20 max-w-[1024px] min-[1600px]:max-w-[1280px]">
    <div className="w-full 2xl:-ms-9">
      <div className="relative">
        <h1 className="a11yHidden">
          수입명품 중고거래 | 중고나라 - 안심되는 중고거래
        </h1>
        <h2 className="text-[28px] font-normal mb-[10px]">검색 결과</h2>
        <button className="absolute right-1 top-2 lg:hidden">
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0.7"
              y1="2.85664"
              x2="19.3"
              y2="2.85664"
              stroke="#141313"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
            <line
              x1="0.7"
              y1="9.99922"
              x2="19.3"
              y2="9.99922"
              stroke="#141313"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
            <line
              x1="0.7"
              y1="17.1438"
              x2="19.3"
              y2="17.1437"
              stroke="#141313"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
            <circle
              cx="13.2552"
              cy="2.83333"
              r="1.83333"
              fill="white"
              stroke="#141313"
              strokeWidth="1.4"
            />
            <circle
              cx="13.2552"
              cy="17.2335"
              r="1.83333"
              fill="white"
              stroke="#141313"
              strokeWidth="1.4"
            />
            <circle
              cx="6.11458"
              cy="10.0326"
              r="1.83333"
              fill="white"
              stroke="#141313"
              strokeWidth="1.4"
            />
          </svg>
        </button>
        <table className="hidden w-full lg:table filterTable">
          <tbody className="[&>tr]:border-b [&>tr]:border-jnGray-300">
            <tr>
              <td className="flex items-center justify-between">
                <p>카테고리</p>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="none"
                  >
                    <path
                      stroke="#9CA3AF"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.2"
                      d="M8 2v12M2 8h12"
                    />
                  </svg>
                </button>
              </td>
              <td>
                <div className="flex items-center w-full chawkbazarBreadcrumb">
                  <ol className="flex flex-wrap items-center w-full mt-0 lg:mt-0">
                    <li className="flex-shrink-0 px-0 mt-0 text-sm break-all transition duration-200 ease-in text-body first:ps-0 last:pe-0 hover:text-heading">
                      <a
                        className="text-base font-semibold text-jnBlack font-semibold text-base text-jnBlack"
                        href="/search"
                      >
                        전체
                      </a>
                    </li>
                    <li className="pl-0 mx-2 mt-0 text-sm leading-5 text-jnGray-500 lg:mt-0">
                      &gt;
                    </li>
                    <li className="flex-shrink-0 px-0 mt-0 text-sm break-all transition duration-200 ease-in text-body first:ps-0 last:pe-0 hover:text-heading">
                      <a
                        className="text-base font-semibold text-jnBlack font-semibold text-base text-jnBlack"
                        href="/search?category=1"
                      >
                        수입명품
                      </a>
                    </li>
                  </ol>
                </div>
              </td>
            </tr>
            <tr>
              <td>가격</td>
              <td className="price-filter">
                <input
                  type="text"
                  className="w-[152px] border rounded border-jnGray-200 py-[10px] px-4 text-sm font-medium"
                  placeholder="최소 가격"
                  data-idx={0}
                />
                <span className="mx-[6px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={10}
                    height={4}
                    fill="none"
                    className="inline"
                  >
                    <path
                      fill="#5A616B"
                      d="M7.895.628 9.297.62q0 .651-.182 1.205-.182.545-.515.947-.326.401-.788.628-.454.22-1 .22-.636 0-1.129-.25-.484-.258-1.045-.773a3.5 3.5 0 0 0-.652-.507 1.25 1.25 0 0 0-.651-.182.94.94 0 0 0-.584.182 1.14 1.14 0 0 0-.378.5 2 2 0 0 0-.137.757H.796q0-.659.183-1.197.18-.545.507-.931.333-.395.788-.606a2.3 2.3 0 0 1 1-.213q.636 0 1.144.266.516.265 1.046.757.363.349.659.523.295.174.628.174a1 1 0 0 0 .599-.19q.257-.196.401-.537a1.95 1.95 0 0 0 .144-.765"
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  className="w-[152px] border rounded border-jnGray-200 py-[10px] px-4 text-sm font-medium"
                  placeholder="최대 가격"
                  data-idx={1}
                />
                <button
                  data-routerlink="true"
                  className="w-full mt-3 lg:mt-0 lg:w-auto bg-jnBlack py-[10px] px-4 m-0 lg:mx-2 rounded text-sm font-medium text-white"
                >
                  적용
                </button>
              </td>
            </tr>
            <tr>
              <td>옵션</td>
              <td>
                <ul className="flex undefined">
                  <li className="mr-5">
                    <label className="flex items-center justify-start text-base font-medium break-all cursor-pointer text-jnBlack [&>input]:hidden [&>span]:text-base ps-1">
                      <input type="checkbox" id="certifiedSellerYn" />
                      <svg
                        width={20}
                        height={20}
                        viewBox="2 2 20 20"
                        fill="#C2C6CE"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-1 pointer-events-none"
                        data-routerlink="true"
                      >
                        <path
                          d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                          stroke="#C2C6CE"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16 9L10.5 14.5L8 12"
                          stroke="#FFFFFF"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>인증셀러 상품</span>
                    </label>
                  </li>
                  <li className="mr-5">
                    <label className="flex items-center justify-start text-base font-medium break-all cursor-pointer text-jnBlack [&>input]:hidden [&>span]:text-base ps-1">
                      <input type="checkbox" id="productFilterType" />
                      <svg
                        width={20}
                        height={20}
                        viewBox="2 2 20 20"
                        fill="#C2C6CE"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-1 pointer-events-none"
                        data-routerlink="true"
                      >
                        <path
                          d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                          stroke="#C2C6CE"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16 9L10.5 14.5L8 12"
                          stroke="#FFFFFF"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>카페상품 제외</span>
                    </label>
                  </li>
                  <li className="mr-5">
                    <label className="flex items-center justify-start text-base font-medium break-all cursor-pointer text-jnBlack [&>input]:hidden [&>span]:text-base ps-1">
                      <input type="checkbox" id="saleYn" />
                      <svg
                        width={20}
                        height={20}
                        viewBox="2 2 20 20"
                        fill="#0DCC5A"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-1 pointer-events-none"
                        data-routerlink="true"
                      >
                        <path
                          d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                          stroke="#0DCC5A"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16 9L10.5 14.5L8 12"
                          stroke="#fff"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>판매완료 상품 제외</span>
                    </label>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>선택한 필터</td>
              <td>
                <div className="flex items-center justify-between w-full h-full border-none">
                  <div className="flex flex-wrap">
                    <div className="flex items-center flex-shrink-0 py-2 pl-3 mb-2 mr-2 text-sm font-medium border rounded lg:m-0 lg:border-none lg:p-0 lg:text-base border-jnGray-300 text-jnBlack">
                      <span className="truncate">수입명품</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="none"
                        data-routerlink="true"
                        className="flex-shrink-0 w-4 text-sm cursor-pointer ms-1 me-3 text-body fill-jnGray-600"
                      >
                        <g
                          stroke="#787E89"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          clipPath="url(#close-icon_svg__a)"
                        >
                          <path d="M13 3 3 13M3 3l10 10" />
                        </g>
                        <defs>
                          <clipPath id="close-icon_svg__a">
                            <path fill="#fff" d="M0 0h16v16H0z" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="flex items-center flex-shrink-0 py-2 pl-3 mb-2 mr-2 text-sm font-medium border rounded lg:m-0 lg:border-none lg:p-0 lg:text-base border-jnGray-300 text-jnBlack">
                      <span className="truncate">판매완료 상품 제외</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="none"
                        data-routerlink="true"
                        className="flex-shrink-0 w-4 text-sm cursor-pointer ms-1 me-3 text-body fill-jnGray-600"
                      >
                        <g
                          stroke="#787E89"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          clipPath="url(#close-icon_svg__a)"
                        >
                          <path d="M13 3 3 13M3 3l10 10" />
                        </g>
                        <defs>
                          <clipPath id="close-icon_svg__a">
                            <path fill="#fff" d="M0 0h16v16H0z" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <button
                    data-routerlink="true"
                    className="text-sm underline text-jnGray-700 whitespace-nowrap"
                  >
                    초기화
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div tabIndex={0} aria-labelledby="product-list-price-title">
        <h4 className="mb-2 text-lg font-semibold lg:mt-[52px] lg:mb-4">
          <span className="relative">
            <span
              id="product-list-price-title"
              className="relative text-jnBlack"
            >
              현재 페이지의 상품 가격을 비교해봤어요
            </span>
          </span>
        </h4>
        <div className="flex flex-col overflow-hidden lg:rounded-lg lg:flex-row lg:bg-jnGray-100">
          <div
            className="relative flex flex-1 justify-between items-center py-[18px] px-6 !mt-0 mb-2 rounded-lg bg-jnGray-100 lg:px-12 lg:py-6 lg:bg-none lg:mb-0 before:-left-0.5 before:block before:absolute before:w-[1px] before:h-8 before:bg-jnGray-300 before:content-none"
            aria-labelledby="product-item-price-title-1"
            tabIndex={0}
          >
            <span
              id="product-item-price-title-1"
              className="font-medium text-sm text-jnGray-800 lg:text-base min-[1600px]:text-lg"
            >
              평균 가격
            </span>
            <span
              tabIndex={0}
              className="font-bold text-lg text-jnGray-800 lg:text-xl min-[1600px]:text-2xl"
            >
              2,924,136원
            </span>
          </div>
          <div
            className="relative flex flex-1 justify-between items-center py-[18px] px-6 !mt-0 mb-2 rounded-lg bg-jnGray-100 lg:px-12 lg:py-6 lg:bg-none lg:mb-0 before:-left-0.5 before:block before:absolute before:w-[1px] before:h-8 before:bg-jnGray-300"
            aria-labelledby="product-item-price-title-2"
            tabIndex={0}
          >
            <span
              id="product-item-price-title-2"
              className="font-medium text-sm text-jnGray-800 lg:text-base min-[1600px]:text-lg"
            >
              가장 높은 가격
            </span>
            <span
              tabIndex={0}
              className="font-bold text-lg text-jnGray-800 lg:text-xl min-[1600px]:text-2xl"
            >
              38,500,000원
            </span>
          </div>
          <div
            className="relative flex flex-1 justify-between items-center py-[18px] px-6 !mt-0 mb-2 rounded-lg bg-jnGray-100 lg:px-12 lg:py-6 lg:bg-none lg:mb-0 before:-left-0.5 before:block before:absolute before:w-[1px] before:h-8 before:bg-jnGray-300"
            aria-labelledby="product-item-price-title-3"
            tabIndex={0}
          >
            <span
              id="product-item-price-title-3"
              className="font-medium text-sm text-jnGray-800 lg:text-base min-[1600px]:text-lg"
            >
              가장 낮은 가격
            </span>
            <span
              tabIndex={0}
              className="font-bold text-lg text-jnGray-800 lg:text-xl min-[1600px]:text-2xl"
            >
              2,000원
            </span>
          </div>
        </div>
      </div>
      <ul className="inline-flex sticky z-10 w-full justify-end bg-white lg:top-[204px] xl:top-[220px] pt-7 pb-5 text-end">
        <li className="text-sm leading-[17px] [&:not(:last-child)]:after:content-[''] after:inline-block after:border after:border-jnGray-300 after:h-[10px] [&:last-of-type]:after:border-none font-semibold text-jnGray-900">
          <button className="px-2">추천순</button>
        </li>
        <li className="text-sm leading-[17px] [&:not(:last-child)]:after:content-[''] after:inline-block after:border after:border-jnGray-300 after:h-[10px] [&:last-of-type]:after:border-none font-medium text-jnGray-600">
          <button className="px-2">최신순</button>
        </li>
        <li className="text-sm leading-[17px] [&:not(:last-child)]:after:content-[''] after:inline-block after:border after:border-jnGray-300 after:h-[10px] [&:last-of-type]:after:border-none font-medium text-jnGray-600">
          <button className="px-2">낮은가격순</button>
        </li>
        <li className="text-sm leading-[17px] [&:not(:last-child)]:after:content-[''] after:inline-block after:border after:border-jnGray-300 after:h-[10px] [&:last-of-type]:after:border-none font-medium text-jnGray-600">
          <button className="px-2">높은가격순</button>
        </li>
      </ul>
      <ul className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 min-[1600px]:grid-cols-5 gap-x-3 lg:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8 search-results [&_div]:ps-0">
        <li className="">
          <a
            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
            href="/product/217076443"
          >
            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
              <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
              <img
                alt="라도 캡틴쿡 42mm"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://img2.joongna.com/media/original/2025/08/07/1754568560857kJ8_HQw3S.jpg?impolicy=thumb&size=150"
              />
              <div className="absolute bottom-2 z-20 right-2 w-6 h-6">
                <label htmlFor=":r2:" className="relative cursor-pointer">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none w-6 h-6"
                  >
                    <path
                      d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                      strokeWidth="1.5"
                      stroke="white"
                      fill="#9ca3afb4"
                    />
                  </svg>
                </label>
                <input id=":r2:" type="checkbox" className="a11yHidden" />
              </div>
            </div>
            <div className="w-full overflow-hidden p-2 px-0">
              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                라도 캡틴쿡 42mm
              </h2>
              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                1,400,000원
              </div>
              <div className="my-1 min-h-6">
                <span className="text-sm text-gray-400">엄궁동</span>
                <span className="mx-1 text-sm text-gray-400">|</span>
                <span className="text-sm text-gray-400">-46510초 전</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                <div className="text-xs text-gray-400 text-muted">
                  찜 8 ∙ 채팅 1
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
            href="/product/216253555"
          >
            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
              <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
              <img
                alt="오메가 씨마스터300 신형 검판"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://img2.joongna.com/cafe-article-data/live/2025/07/26/1112781085/1753515622268_000_W3q9H_main.jpeg?impolicy=thumb&size=150"
              />
              <div className="absolute bottom-2 z-20 right-2 w-6 h-6">
                <label htmlFor=":r3:" className="relative cursor-pointer">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none w-6 h-6"
                  >
                    <path
                      d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                      strokeWidth="1.5"
                      stroke="white"
                      fill="#9ca3afb4"
                    />
                  </svg>
                </label>
                <input id=":r3:" type="checkbox" className="a11yHidden" />
              </div>
            </div>
            <div className="w-full overflow-hidden p-2 px-0">
              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                오메가 씨마스터300 신형 검판
              </h2>
              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                5,100,000원
              </div>
              <div className="my-1 min-h-6">
                <span className="text-sm text-gray-400">공항동</span>
                <span className="mx-1 text-sm text-gray-400">|</span>
                <span className="text-sm text-gray-400">-46250초 전</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                <div className="text-xs text-gray-400 text-muted">
                  찜 3 ∙ 채팅 0
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            rel="sponsored noreferrer"
            target="_blank"
            className="group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col item-start transition duration-200 ease-in-out transform  bg-white"
            role="button"
            title="향오래가는 향기 냄새좋은 퍼퓸 수입 명품 바디워시 바디젤 대용량 바디샤워 이태리 제품"
            href="https://io.cpczapi38a.kr/adlanding/?adid=91&subid=joongna55&landing_url=https%3A%2F%2Flink.coupang.com%2Fre%2FAFFSDP%3Flptag%3DAF1784908%26subid%3Djoongna55%26pageKey%3D8207753236%26itemId%3D17021787471%26vendorItemId%3D84197347740%26traceid%3DV0-153-f9d120d66b46751d%26requestid%3D20250821111643105208124089%26token%3D31850C%257CMIXED&adtype=2"
          >
            <div className="flex relative overflow-hidden rounded-md pt-[100%] w-full dim mb-3 md:mb-3.5">
              <img
                alt="향오래가는 향기 냄새좋은 퍼퓸 수입 명품 바디워시 바디젤 대용량 바디샤워 이태리 제품"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover rounded-s-md hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://ads-partners.coupang.com/image1/vGFFO6gcFBRJgUBXvPwGzfHhwtJuRR33u38_wIHReEKr7qkgy93nFtZjU-gYQ709nK-jWzeWxq1rP6h_giqOLVnOb8ePuoOMKIuDNzAMU0rwK2_yenTzh5UtgvkJrhI-5Ch_ePPbAkSMuiLrZhbFTSoc8-jKsR6Epp-_bQ8degieLqpty_N2yL8Y38Dzq3KAO7NnWPx7d7W42hawanMuhPkDrtfMf3OoEeDMcDxazy8L_EaJU3bu0t2GPKUY5w3auXeyq9_bdrEgK-vkRUJ0RcbKdzpmkbGSbhOKGUVCpY181DwxoehadGzoY-ySkBF0cZkgSbkeFoUchRk8PE48fUsg9Sg="
              />
            </div>
            <div className="w-full overflow-hidden p-2 md:px-2.5 xl:px-4">
              <h2 className="line-clamp-2 text-heading min-h-[2lh] text-sm md:text-base">
                향오래가는 향기 냄새좋은 퍼퓸 수입 명품 바디워시 바디젤 대용량
                바디샤워 이태리 제품
              </h2>
              <div
                className="font-semibold sm:text-base mt-0.5 space-s-2 lg:text-lg lg:mt-1.5
     text-heading"
              >
                20,000원
              </div>
              <div className="my-1 flex items-center">
                <span className="text-sm text-gray-400   line-clamp-1">
                  쿠팡
                </span>
                <div className="flex items-center whitespace-nowrap">
                  <span className="mx-1 text-sm text-gray-400">|</span>
                  <span className="text-sm text-gray-400">광고</span>
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
            href="/product/184294987"
          >
            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
              <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
              <img
                alt="에르메스 남성 로퍼 구두 260"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://img2.joongna.com/media/original/2024/09/09/1725852151149wIY_khbbZ.jpg?impolicy=thumb&size=150"
              />
              <div className="absolute bottom-2 z-20 right-2 w-6 h-6">
                <label htmlFor=":r2i:" className="relative cursor-pointer">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none w-6 h-6"
                  >
                    <path
                      d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                      strokeWidth="1.5"
                      stroke="white"
                      fill="#9ca3afb4"
                    />
                  </svg>
                </label>
                <input id=":r2i:" type="checkbox" className="a11yHidden" />
              </div>
            </div>
            <div className="w-full overflow-hidden p-2 px-0">
              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                에르메스 남성 로퍼 구두 260
              </h2>
              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                320,000원
              </div>
              <div className="my-1 min-h-6">
                <span className="text-sm text-gray-400">-46349초 전</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                <div className="text-xs text-gray-400 text-muted">
                  찜 2 ∙ 채팅 0
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
            href="/product/203685516"
          >
            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
              <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
              <img
                alt="토즈 남성 로퍼 구두 260"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://img2.joongna.com/media/original/2025/03/10/1741593227129ILM_UL6p4.jpg?impolicy=thumb&size=150"
              />
              <div className="absolute bottom-2 z-20 right-2 w-6 h-6">
                <label htmlFor=":r2j:" className="relative cursor-pointer">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none w-6 h-6"
                  >
                    <path
                      d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                      strokeWidth="1.5"
                      stroke="white"
                      fill="#9ca3afb4"
                    />
                  </svg>
                </label>
                <input id=":r2j:" type="checkbox" className="a11yHidden" />
              </div>
            </div>
            <div className="w-full overflow-hidden p-2 px-0">
              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                토즈 남성 로퍼 구두 260
              </h2>
              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                150,000원
              </div>
              <div className="my-1 min-h-6">
                <span className="text-sm text-gray-400">용신동</span>
                <span className="mx-1 text-sm text-gray-400">|</span>
                <span className="text-sm text-gray-400">-46342초 전</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                <div className="text-xs text-gray-400 text-muted">
                  찜 2 ∙ 채팅 0
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
            href="/product/211563851"
          >
            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
              <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
              <img
                alt="폴로 랄프로렌 페더웨이 트윌셔츠 여름용 새상품 팝니다. ( 화이트 / M사이즈 )"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://img2.joongna.com/cafe-article-data/live/2025/06/03/1107454496/1748936894522_000_cz4s6_main.jpg?impolicy=thumb&size=150"
              />
              <div className="absolute bottom-2 z-20 right-2 w-6 h-6">
                <label htmlFor=":r2k:" className="relative cursor-pointer">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none w-6 h-6"
                  >
                    <path
                      d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                      strokeWidth="1.5"
                      stroke="white"
                      fill="#9ca3afb4"
                    />
                  </svg>
                </label>
                <input id=":r2k:" type="checkbox" className="a11yHidden" />
              </div>
            </div>
            <div className="w-full overflow-hidden p-2 px-0">
              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                폴로 랄프로렌 페더웨이 트윌셔츠 여름용 새상품 팝니다. ( 화이트 /
                M사이즈 )
              </h2>
              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                139,000원
              </div>
              <div className="my-1 min-h-6">
                <span className="text-sm text-gray-400">-46048초 전</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                <div className="text-xs text-gray-400 text-muted">
                  찜 2 ∙ 채팅 0
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
            href="/product/217170531"
          >
            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
              <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
              <img
                alt="스톤아일랜드 스윔팬츠 반바지"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://img2.joongna.com/media/original/2025/08/11/17549172861126L4_9gdTY.jpg?impolicy=thumb&size=150"
              />
              <div className="absolute bottom-2 z-20 right-2 w-6 h-6">
                <label htmlFor=":r2l:" className="relative cursor-pointer">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none w-6 h-6"
                  >
                    <path
                      d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                      strokeWidth="1.5"
                      stroke="white"
                      fill="#9ca3afb4"
                    />
                  </svg>
                </label>
                <input id=":r2l:" type="checkbox" className="a11yHidden" />
              </div>
            </div>
            <div className="w-full overflow-hidden p-2 px-0">
              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                스톤아일랜드 스윔팬츠 반바지
              </h2>
              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                67,000원
              </div>
              <div className="my-1 min-h-6">
                <span className="text-sm text-gray-400">-46033초 전</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                <div className="text-xs text-gray-400 text-muted">
                  찜 2 ∙ 채팅 2
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
            href="/product/217344417"
          >
            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
              <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
              <img
                alt="루이비통 모노그램 체인 팔찌"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://img2.joongna.com/media/original/2025/08/12/1754962135744gbk_17LAY.jpg?impolicy=thumb&size=150"
              />
              <div className="absolute bottom-2 z-20 right-2 w-6 h-6">
                <label htmlFor=":r2m:" className="relative cursor-pointer">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none w-6 h-6"
                  >
                    <path
                      d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                      strokeWidth="1.5"
                      stroke="white"
                      fill="#9ca3afb4"
                    />
                  </svg>
                </label>
                <input id=":r2m:" type="checkbox" className="a11yHidden" />
              </div>
            </div>
            <div className="w-full overflow-hidden p-2 px-0">
              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                루이비통 모노그램 체인 팔찌
              </h2>
              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                85,000원
              </div>
              <div className="my-1 min-h-6">
                <span className="text-sm text-gray-400">-46030초 전</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                <div className="text-xs text-gray-400 text-muted">
                  찜 2 ∙ 채팅 0
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
            href="/product/215448816"
          >
            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
              <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
              <img
                alt="루이비통 클러치"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://img2.joongna.com/media/original/2025/07/17/1752683031850913_9TSK0.jpg?impolicy=thumb&size=150"
              />
              <div className="absolute bottom-2 z-20 right-2 w-6 h-6">
                <label htmlFor=":r2n:" className="relative cursor-pointer">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none w-6 h-6"
                  >
                    <path
                      d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                      strokeWidth="1.5"
                      stroke="white"
                      fill="#9ca3afb4"
                    />
                  </svg>
                </label>
                <input id=":r2n:" type="checkbox" className="a11yHidden" />
              </div>
            </div>
            <div className="w-full overflow-hidden p-2 px-0">
              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                루이비통 클러치
              </h2>
              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                820,000원
              </div>
              <div className="my-1 min-h-6">
                <span className="text-sm text-gray-400">의창동</span>
                <span className="mx-1 text-sm text-gray-400">|</span>
                <span className="text-sm text-gray-400">-46679초 전</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                <div className="text-xs text-gray-400 text-muted">
                  찜 1 ∙ 채팅 0
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            rel="sponsored noreferrer"
            target="_blank"
            className="group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col item-start transition duration-200 ease-in-out transform  bg-white"
            role="button"
            title="레이밴 RX4379VD 2000 53 공식수입 스퀘어 뿔테 오버사이즈 아시안핏 레이벤 안경테"
            href="https://io.cpczapi38a.kr/adlanding/?adid=91&subid=joongna55&landing_url=https%3A%2F%2Flink.coupang.com%2Fre%2FAFFSDP%3Flptag%3DAF1784908%26subid%3Djoongna55%26pageKey%3D8957404843%26itemId%3D26209039620%26vendorItemId%3D93188140767%26traceid%3DV0-153-18f6688901a80e4d%26requestid%3D20250821111643105208124089%26token%3D31850C%257CMIXED&adtype=2"
          >
            <div className="flex relative overflow-hidden rounded-md pt-[100%] w-full dim mb-3 md:mb-3.5">
              <img
                alt="레이밴 RX4379VD 2000 53 공식수입 스퀘어 뿔테 오버사이즈 아시안핏 레이벤 안경테"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover rounded-s-md hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://ads-partners.coupang.com/image1/b2wWwqscFRTHrFYxb3Tm3Ryd31mdWb17TS2uFXU_Td3_Cf3FPsBI38PJG1jlfdQXTz9g-BFGrOWGLC-5-fm6KhFnFA_iirBpdaPkcYZHRDcYMAuVSl_8fzO6CHqJnOsI7jx7LqXgGcb1ZmqRsJoGgbCBZqZZwqm0sT1Fv1g_tr1hOg5Wh5932RuRYYX6m0B0U81iVcQCrgY1T48R7dFFSYOUhMctWwG4tuQI6CUE2m9-bKIKVMZFnsEd55wtIriTpHHY5UVHC7qTksyePx9uokGau4hgPJuDpYAaDrTVHiwWragyNgQglwpEG-Vl0KVB2wEA39FQpxoCLCnXYFq90CHm_zrDxcRCB5U="
              />
            </div>
            <div className="w-full overflow-hidden p-2 md:px-2.5 xl:px-4">
              <h2 className="line-clamp-2 text-heading min-h-[2lh] text-sm md:text-base">
                레이밴 RX4379VD 2000 53 공식수입 스퀘어 뿔테 오버사이즈 아시안핏
                레이벤 안경테
              </h2>
              <div
                className="font-semibold sm:text-base mt-0.5 space-s-2 lg:text-lg lg:mt-1.5
     text-heading"
              >
                107,920원
              </div>
              <div className="my-1 flex items-center">
                <span className="text-sm text-gray-400   line-clamp-1">
                  쿠팡
                </span>
                <div className="flex items-center whitespace-nowrap">
                  <span className="mx-1 text-sm text-gray-400">|</span>
                  <span className="text-sm text-gray-400">광고</span>
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
            href="/product/210395993"
          >
            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
              <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
              <img
                alt="프라다 티셔츠"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://img2.joongna.com/media/original/2025/05/21/1747815198416NwL_rPRCr.jpg?impolicy=thumb&size=150"
              />
              <div className="absolute bottom-2 z-20 right-2 w-6 h-6">
                <label htmlFor=":r2o:" className="relative cursor-pointer">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none w-6 h-6"
                  >
                    <path
                      d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                      strokeWidth="1.5"
                      stroke="white"
                      fill="#9ca3afb4"
                    />
                  </svg>
                </label>
                <input id=":r2o:" type="checkbox" className="a11yHidden" />
              </div>
            </div>
            <div className="w-full overflow-hidden p-2 px-0">
              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                프라다 티셔츠
              </h2>
              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                200,000원
              </div>
              <div className="my-1 min-h-6">
                <span className="text-sm text-gray-400">양주2동</span>
                <span className="mx-1 text-sm text-gray-400">|</span>
                <span className="text-sm text-gray-400">-46393초 전</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                <div className="text-xs text-gray-400 text-muted">
                  찜 1 ∙ 채팅 0
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
            href="/product/215840465"
          >
            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
              <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
              <img
                alt="버버리 캐시미어 머플러"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://img2.joongna.com/media/original/2025/07/21/1753087881839k15_l8uZW.jpg?impolicy=thumb&size=150"
              />
              <div className="absolute bottom-2 z-20 right-2 w-6 h-6">
                <label htmlFor=":r2p:" className="relative cursor-pointer">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none w-6 h-6"
                  >
                    <path
                      d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                      strokeWidth="1.5"
                      stroke="white"
                      fill="#9ca3afb4"
                    />
                  </svg>
                </label>
                <input id=":r2p:" type="checkbox" className="a11yHidden" />
              </div>
            </div>
            <div className="w-full overflow-hidden p-2 px-0">
              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                버버리 캐시미어 머플러
              </h2>
              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                270,000원
              </div>
              <div className="my-1 min-h-6">
                <span className="text-sm text-gray-400">대현동</span>
                <span className="mx-1 text-sm text-gray-400">|</span>
                <span className="text-sm text-gray-400">-46179초 전</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                <div className="text-xs text-gray-400 text-muted">
                  찜 1 ∙ 채팅 0
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
            href="/product/215839923"
          >
            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
              <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
              <img
                alt="몽블랑 마이스터튁 볼펜"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://img2.joongna.com/media/original/2025/07/21/1753087497996ry3_FJYw7.jpg?impolicy=thumb&size=150"
              />
              <div className="absolute bottom-2 z-20 right-2 w-6 h-6">
                <label htmlFor=":r2q:" className="relative cursor-pointer">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none w-6 h-6"
                  >
                    <path
                      d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                      strokeWidth="1.5"
                      stroke="white"
                      fill="#9ca3afb4"
                    />
                  </svg>
                </label>
                <input id=":r2q:" type="checkbox" className="a11yHidden" />
              </div>
            </div>
            <div className="w-full overflow-hidden p-2 px-0">
              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                몽블랑 마이스터튁 볼펜
              </h2>
              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                1,000,000원
              </div>
              <div className="my-1 min-h-6">
                <span className="text-sm text-gray-400">대현동</span>
                <span className="mx-1 text-sm text-gray-400">|</span>
                <span className="text-sm text-gray-400">-46136초 전</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                <div className="text-xs text-gray-400 text-muted">
                  찜 1 ∙ 채팅 1
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
            href="/product/197568132"
          >
            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
              <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
              <img
                alt="순면 롱항아리원피스"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://img2.joongna.com/cafe-article-data/live/2025/01/03/1091414095/1735909746529_000_QoiXL_main.jpg?impolicy=thumb&size=150"
              />
              <div className="absolute bottom-2 z-20 right-2 w-6 h-6">
                <label htmlFor=":r2r:" className="relative cursor-pointer">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none w-6 h-6"
                  >
                    <path
                      d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                      strokeWidth="1.5"
                      stroke="white"
                      fill="#9ca3afb4"
                    />
                  </svg>
                </label>
                <input id=":r2r:" type="checkbox" className="a11yHidden" />
              </div>
            </div>
            <div className="w-full overflow-hidden p-2 px-0">
              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                순면 롱항아리원피스
              </h2>
              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                33,000원
              </div>
              <div className="my-1 min-h-6">
                <span className="text-sm text-gray-400">-46070초 전</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                <div className="text-xs text-gray-400 text-muted">
                  찜 1 ∙ 채팅 0
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
            href="/product/217166129"
          >
            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
              <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
              <img
                alt="티파니앤코 러브스트럭 펜던트 목걸이"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://img2.joongna.com/media/original/2025/08/09/17547091944944lG_bbfYm.jpg?impolicy=thumb&size=150"
              />
              <div className="absolute bottom-2 z-20 right-2 w-6 h-6">
                <label htmlFor=":r2s:" className="relative cursor-pointer">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none w-6 h-6"
                  >
                    <path
                      d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                      strokeWidth="1.5"
                      stroke="white"
                      fill="#9ca3afb4"
                    />
                  </svg>
                </label>
                <input id=":r2s:" type="checkbox" className="a11yHidden" />
              </div>
            </div>
            <div className="w-full overflow-hidden p-2 px-0">
              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                티파니앤코 러브스트럭 펜던트 목걸이
              </h2>
              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                390,000원
              </div>
              <div className="my-1 min-h-6">
                <span className="text-sm text-gray-400">-45978초 전</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                <div className="text-xs text-gray-400 text-muted">
                  찜 1 ∙ 채팅 0
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
            href="/product/215484587"
          >
            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
              <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
              <img
                alt="톰브라운 맨투맨 4 최저가"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://img2.joongna.com/media/original/2025/07/17/1752726850511JiO_5OiM1.jpg?impolicy=thumb&size=150"
              />
              <div className="absolute bottom-2 z-20 right-2 w-6 h-6">
                <label htmlFor=":r2t:" className="relative cursor-pointer">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none w-6 h-6"
                  >
                    <path
                      d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                      strokeWidth="1.5"
                      stroke="white"
                      fill="#9ca3afb4"
                    />
                  </svg>
                </label>
                <input id=":r2t:" type="checkbox" className="a11yHidden" />
              </div>
            </div>
            <div className="w-full overflow-hidden p-2 px-0">
              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                톰브라운 맨투맨 4 최저가
              </h2>
              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                380,000원
              </div>
              <div className="my-1 min-h-6">
                <span className="text-sm text-gray-400">-45945초 전</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                <div className="text-xs text-gray-400 text-muted">
                  찜 1 ∙ 채팅 0
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
            href="/product/217681055"
          >
            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
              <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
              <img
                alt="버버리 스니커즈 37사이즈 (240)"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://img2.joongna.com/media/original/2025/08/17/1755429208468aef_PwW4d.jpg?impolicy=thumb&size=150"
              />
              <div className="absolute bottom-2 z-20 right-2 w-6 h-6">
                <label htmlFor=":r2u:" className="relative cursor-pointer">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none w-6 h-6"
                  >
                    <path
                      d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                      strokeWidth="1.5"
                      stroke="white"
                      fill="#9ca3afb4"
                    />
                  </svg>
                </label>
                <input id=":r2u:" type="checkbox" className="a11yHidden" />
              </div>
            </div>
            <div className="w-full overflow-hidden p-2 px-0">
              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                버버리 스니커즈 37사이즈 (240)
              </h2>
              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                140,000원
              </div>
              <div className="my-1 min-h-6">
                <span className="text-sm text-gray-400">우창동</span>
                <span className="mx-1 text-sm text-gray-400">|</span>
                <span className="text-sm text-gray-400">-45940초 전</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                <div className="text-xs text-gray-400 text-muted">
                  찜 1 ∙ 채팅 0
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
            href="/product/217910852"
          >
            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
              <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
              <img
                alt="정품 부쉐론 콰트로 목걸이 라지 사이즈 신형"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://img2.joongna.com/cafe-article-data/live/2025/08/21/1114960442/1755742581763_000_uox8O_main.jpg?impolicy=thumb&size=150"
              />
              <div className="absolute bottom-2 z-20 right-2 w-6 h-6">
                <label htmlFor=":r2v:" className="relative cursor-pointer">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none w-6 h-6"
                  >
                    <path
                      d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                      strokeWidth="1.5"
                      stroke="white"
                      fill="#9ca3afb4"
                    />
                  </svg>
                </label>
                <input id=":r2v:" type="checkbox" className="a11yHidden" />
              </div>
            </div>
            <div className="w-full overflow-hidden p-2 px-0">
              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                정품 부쉐론 콰트로 목걸이 라지 사이즈 신형
              </h2>
              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                6,200,000원
              </div>
              <div className="my-1 min-h-6">
                <span className="text-sm text-gray-400">-46761초 전</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                <div className="text-xs text-gray-400 text-muted">
                  찜 0 ∙ 채팅 0
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
            href="/product/217910808"
          >
            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
              <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
              <img
                alt="루이비통 멀티플 월렛 모노그램 쉐도우"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://img2.joongna.com/media/original/2025/08/21/1755742405445ZsQ_FRLb0.jpg?impolicy=thumb&size=150"
              />
              <div className="absolute bottom-2 z-20 right-2 w-6 h-6">
                <label htmlFor=":r30:" className="relative cursor-pointer">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none w-6 h-6"
                  >
                    <path
                      d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                      strokeWidth="1.5"
                      stroke="white"
                      fill="#9ca3afb4"
                    />
                  </svg>
                </label>
                <input id=":r30:" type="checkbox" className="a11yHidden" />
              </div>
            </div>
            <div className="w-full overflow-hidden p-2 px-0">
              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                루이비통 멀티플 월렛 모노그램 쉐도우
              </h2>
              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                520,000원
              </div>
              <div className="my-1 min-h-6">
                <span className="text-sm text-gray-400">신창동</span>
                <span className="mx-1 text-sm text-gray-400">|</span>
                <span className="text-sm text-gray-400">-46761초 전</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                <div className="text-xs text-gray-400 text-muted">
                  찜 0 ∙ 채팅 0
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            rel="sponsored noreferrer"
            target="_blank"
            className="group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col item-start transition duration-200 ease-in-out transform  bg-white"
            role="button"
            title="명품양산 미니 가벼운 수입양산 기념일 축하 파티 장식 레이스 우산 공주 파라솔 우산 춤 특이한 양산 구지름 76~82 cm 높이 66-67.5cm"
            href="https://io.cpczapi38a.kr/adlanding/?adid=91&subid=joongna55&landing_url=https%3A%2F%2Flink.coupang.com%2Fre%2FAFFSDP%3Flptag%3DAF1784908%26subid%3Djoongna55%26pageKey%3D6641238827%26itemId%3D15182010882%26vendorItemId%3D82403269266%26traceid%3DV0-153-58fcced1cf944598%26requestid%3D20250821111643105208124089%26token%3D31850C%257CMIXED&adtype=2"
          >
            <div className="flex relative overflow-hidden rounded-md pt-[100%] w-full dim mb-3 md:mb-3.5">
              <img
                alt="명품양산 미니 가벼운 수입양산 기념일 축하 파티 장식 레이스 우산 공주 파라솔 우산 춤 특이한 양산 구지름 76~82 cm 높이 66-67.5cm"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover rounded-s-md hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://ads-partners.coupang.com/image1/OvtrHpPr87quZvHyOg1d2gRa4_P_jJfLT0x5U4GdVTSlzIyxCFrEa2Jvtduo5yIBhJqD_fnrUYbI32ucNZcrzUuL67de_j6pH1Se8NubK_YpNOi_jDPizof1G4e9FPrwcs0OAOjgYDzkR_ptlpoj4BhfHJe-2HLs3u-dzWSlQSKtw1mpQ--QOeG57FMzExrePlz8xvuW-q_gtUOlzDP8l7Tfiyu2FHLUPqPLkYgmUlhwm4JsfZmeIcN25zF-77g5F6UZPBqlEtwhpsHCslhzjLFJnn4_wG2lT0UMKje_uCa18CAt4bngsPEAId_i1QDbSBtoyC89PoV_GgyEQcuv4bwiMFQ="
              />
            </div>
            <div className="w-full overflow-hidden p-2 md:px-2.5 xl:px-4">
              <h2 className="line-clamp-2 text-heading min-h-[2lh] text-sm md:text-base">
                명품양산 미니 가벼운 수입양산 기념일 축하 파티 장식 레이스 우산
                공주 파라솔 우산 춤 특이한 양산 구지름 76~82 cm 높이 66-67.5cm
              </h2>
              <div
                className="font-semibold sm:text-base mt-0.5 space-s-2 lg:text-lg lg:mt-1.5
     text-heading"
              >
                62,600원
              </div>
              <div className="my-1 flex items-center">
                <span className="text-sm text-gray-400   line-clamp-1">
                  쿠팡
                </span>
                <div className="flex items-center whitespace-nowrap">
                  <span className="mx-1 text-sm text-gray-400">|</span>
                  <span className="text-sm text-gray-400">광고</span>
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
            href="/product/217910857"
          >
            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
              <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
              <img
                alt="에르메스 볼리드31 에토프은장"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://img2.joongna.com/cafe-article-data/live/2025/08/21/1114960436/1755742585964_000_khVC9_main.jpg?impolicy=thumb&size=150"
              />
              <div className="absolute bottom-2 z-20 right-2 w-6 h-6">
                <label htmlFor=":r31:" className="relative cursor-pointer">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none w-6 h-6"
                  >
                    <path
                      d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                      strokeWidth="1.5"
                      stroke="white"
                      fill="#9ca3afb4"
                    />
                  </svg>
                </label>
                <input id=":r31:" type="checkbox" className="a11yHidden" />
              </div>
            </div>
            <div className="w-full overflow-hidden p-2 px-0">
              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                에르메스 볼리드31 에토프은장
              </h2>
              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                10,000,000원
              </div>
              <div className="my-1 min-h-6">
                <span className="text-sm text-gray-400">-46758초 전</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                <div className="text-xs text-gray-400 text-muted">
                  찜 0 ∙ 채팅 0
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
            href="/product/217910835"
          >
            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
              <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
              <img
                alt="정품 다미아니 비잔틴 화이트골드 풀다이아"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://img2.joongna.com/cafe-article-data/live/2025/08/21/1114960410/1755742564131_000_BaoZW_main.jpg?impolicy=thumb&size=150"
              />
              <div className="absolute bottom-2 z-20 right-2 w-6 h-6">
                <label htmlFor=":r32:" className="relative cursor-pointer">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none w-6 h-6"
                  >
                    <path
                      d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                      strokeWidth="1.5"
                      stroke="white"
                      fill="#9ca3afb4"
                    />
                  </svg>
                </label>
                <input id=":r32:" type="checkbox" className="a11yHidden" />
              </div>
            </div>
            <div className="w-full overflow-hidden p-2 px-0">
              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                정품 다미아니 비잔틴 화이트골드 풀다이아
              </h2>
              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                35,000,000원
              </div>
              <div className="my-1 min-h-6">
                <span className="text-sm text-gray-400">-46742초 전</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                <div className="text-xs text-gray-400 text-muted">
                  찜 0 ∙ 채팅 0
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
            href="/product/217910810"
          >
            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
              <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
              <img
                alt="정품 다미아니 비잔틴 한정판 화이트골드 루비"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://img2.joongna.com/cafe-article-data/live/2025/08/21/1114960391/1755742560412_000_o60wL_main.jpg?impolicy=thumb&size=150"
              />
              <div className="absolute bottom-2 z-20 right-2 w-6 h-6">
                <label htmlFor=":r33:" className="relative cursor-pointer">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none w-6 h-6"
                  >
                    <path
                      d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                      strokeWidth="1.5"
                      stroke="white"
                      fill="#9ca3afb4"
                    />
                  </svg>
                </label>
                <input id=":r33:" type="checkbox" className="a11yHidden" />
              </div>
            </div>
            <div className="w-full overflow-hidden p-2 px-0">
              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                정품 다미아니 비잔틴 한정판 화이트골드 루비
              </h2>
              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                20,000,000원
              </div>
              <div className="my-1 min-h-6">
                <span className="text-sm text-gray-400">-46732초 전</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                <div className="text-xs text-gray-400 text-muted">
                  찜 0 ∙ 채팅 0
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
            href="/product/217910801"
          >
            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
              <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
              <img
                alt="(개인)디올 b23 로우탑 스니커즈"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://img2.joongna.com/cafe-article-data/live/2025/08/21/1114960371/1755742536115_000_djOxw_main.jpg?impolicy=thumb&size=150"
              />
              <div className="absolute bottom-2 z-20 right-2 w-6 h-6">
                <label htmlFor=":r34:" className="relative cursor-pointer">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none w-6 h-6"
                  >
                    <path
                      d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                      strokeWidth="1.5"
                      stroke="white"
                      fill="#9ca3afb4"
                    />
                  </svg>
                </label>
                <input id=":r34:" type="checkbox" className="a11yHidden" />
              </div>
            </div>
            <div className="w-full overflow-hidden p-2 px-0">
              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                (개인)디올 b23 로우탑 스니커즈
              </h2>
              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                400,000원
              </div>
              <div className="my-1 min-h-6">
                <span className="text-sm text-gray-400">-46716초 전</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                <div className="text-xs text-gray-400 text-muted">
                  찜 0 ∙ 채팅 0
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
            href="/product/217910792"
          >
            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
              <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
              <img
                alt="정품 불가리 세르펜티 바이퍼 팔찌 L 사이즈"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://img2.joongna.com/cafe-article-data/live/2025/08/21/1114960366/1755742542053_000_mQSwv_main.jpg?impolicy=thumb&size=150"
              />
              <div className="absolute bottom-2 z-20 right-2 w-6 h-6">
                <label htmlFor=":r35:" className="relative cursor-pointer">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none w-6 h-6"
                  >
                    <path
                      d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                      strokeWidth="1.5"
                      stroke="white"
                      fill="#9ca3afb4"
                    />
                  </svg>
                </label>
                <input id=":r35:" type="checkbox" className="a11yHidden" />
              </div>
            </div>
            <div className="w-full overflow-hidden p-2 px-0">
              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                정품 불가리 세르펜티 바이퍼 팔찌 L 사이즈
              </h2>
              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                12,800,000원
              </div>
              <div className="my-1 min-h-6">
                <span className="text-sm text-gray-400">-46712초 전</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                <div className="text-xs text-gray-400 text-muted">
                  찜 0 ∙ 채팅 0
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
            href="/product/217270641"
          >
            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
              <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
              <img
                alt="산드로 원피스"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://img2.joongna.com/media/original/2025/08/11/1754865956740z4W_FjmDa.jpg?impolicy=thumb&size=150"
              />
              <div className="absolute bottom-2 z-20 right-2 w-6 h-6">
                <label htmlFor=":r36:" className="relative cursor-pointer">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none w-6 h-6"
                  >
                    <path
                      d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                      strokeWidth="1.5"
                      stroke="white"
                      fill="#9ca3afb4"
                    />
                  </svg>
                </label>
                <input id=":r36:" type="checkbox" className="a11yHidden" />
              </div>
            </div>
            <div className="w-full overflow-hidden p-2 px-0">
              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                산드로 원피스
              </h2>
              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                60,000원
              </div>
              <div className="my-1 min-h-6">
                <span className="text-sm text-gray-400">-46708초 전</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                <div className="text-xs text-gray-400 text-muted">
                  찜 0 ∙ 채팅 0
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
            href="/product/217910762"
          >
            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
              <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
              <img
                alt="정품 까르띠에 에크루드 팔찌 로즈골드 18호"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://img2.joongna.com/cafe-article-data/live/2025/08/21/1114960336/1755742515822_000_bHvt3_main.jpg?impolicy=thumb&size=150"
              />
              <div className="absolute bottom-2 z-20 right-2 w-6 h-6">
                <label htmlFor=":r37:" className="relative cursor-pointer">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none w-6 h-6"
                  >
                    <path
                      d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                      strokeWidth="1.5"
                      stroke="white"
                      fill="#9ca3afb4"
                    />
                  </svg>
                </label>
                <input id=":r37:" type="checkbox" className="a11yHidden" />
              </div>
            </div>
            <div className="w-full overflow-hidden p-2 px-0">
              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                정품 까르띠에 에크루드 팔찌 로즈골드 18호
              </h2>
              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                7,800,000원
              </div>
              <div className="my-1 min-h-6">
                <span className="text-sm text-gray-400">-46696초 전</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                <div className="text-xs text-gray-400 text-muted">
                  찜 0 ∙ 채팅 0
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
            href="/product/217910722"
          >
            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
              <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
              <img
                alt="몽클레어 헤르민퍼 1사이즈"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://img2.joongna.com/media/original/2025/08/21/1755742447631lcU_47SVI.jpg?impolicy=thumb&size=150"
              />
              <div className="absolute bottom-2 z-20 right-2 w-6 h-6">
                <label htmlFor=":r38:" className="relative cursor-pointer">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none w-6 h-6"
                  >
                    <path
                      d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                      strokeWidth="1.5"
                      stroke="white"
                      fill="#9ca3afb4"
                    />
                  </svg>
                </label>
                <input id=":r38:" type="checkbox" className="a11yHidden" />
              </div>
            </div>
            <div className="w-full overflow-hidden p-2 px-0">
              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                몽클레어 헤르민퍼 1사이즈
              </h2>
              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                1,700,000원
              </div>
              <div className="my-1 min-h-6">
                <span className="text-sm text-gray-400">교현.안림동</span>
                <span className="mx-1 text-sm text-gray-400">|</span>
                <span className="text-sm text-gray-400">-46686초 전</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                <div className="text-xs text-gray-400 text-muted">
                  찜 0 ∙ 채팅 0
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
            href="/product/215448731"
          >
            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
              <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
              <img
                alt="입생로랑 케이트백 금장"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://img2.joongna.com/media/original/2025/07/17/175268273057135O_mdXI7.jpg?impolicy=thumb&size=150"
              />
              <div className="absolute bottom-2 z-20 right-2 w-6 h-6">
                <label htmlFor=":r39:" className="relative cursor-pointer">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none w-6 h-6"
                  >
                    <path
                      d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                      strokeWidth="1.5"
                      stroke="white"
                      fill="#9ca3afb4"
                    />
                  </svg>
                </label>
                <input id=":r39:" type="checkbox" className="a11yHidden" />
              </div>
            </div>
            <div className="w-full overflow-hidden p-2 px-0">
              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                입생로랑 케이트백 금장
              </h2>
              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                1,100,000원
              </div>
              <div className="my-1 min-h-6">
                <span className="text-sm text-gray-400">의창동</span>
                <span className="mx-1 text-sm text-gray-400">|</span>
                <span className="text-sm text-gray-400">-46685초 전</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                <div className="text-xs text-gray-400 text-muted">
                  찜 0 ∙ 채팅 0
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            rel="sponsored noreferrer"
            target="_blank"
            className="group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col item-start transition duration-200 ease-in-out transform  bg-white"
            role="button"
            title="코너양면시계 병원 호텔 수입 명품 디지털 벽걸이시계"
            href="https://io.cpczapi38a.kr/adlanding/?adid=91&subid=joongna55&landing_url=https%3A%2F%2Flink.coupang.com%2Fre%2FAFFSDP%3Flptag%3DAF1784908%26subid%3Djoongna55%26pageKey%3D8773797348%26itemId%3D25522934829%26vendorItemId%3D92514763357%26traceid%3DV0-153-387eb2ccabfd0a0d%26requestid%3D20250821111643105208124089%26token%3D31850C%257CMIXED&adtype=2"
          >
            <div className="flex relative overflow-hidden rounded-md pt-[100%] w-full dim mb-3 md:mb-3.5">
              <img
                alt="코너양면시계 병원 호텔 수입 명품 디지털 벽걸이시계"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover rounded-s-md hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://ads-partners.coupang.com/image1/u2r9yolqLZyQlc8RuyNwrG4w2190ic9O97K9Jow8j_QMWvqpkJVRMzkAVrDPVjzAjVIG1TiUbqkcqjqPZ-DJC-wZi4N95H6m-dOp7EdjG0UXSblgWb-WVoIYUOHyK8aZSK6mS12r1lYQV85a1AWxqIF5Iih91NsxcGp2sPiSrTsyy7XdV1oG6aSiMRbOWlcDicn9ZFgGSGtOfXtsKpND4VgUKPQ_WBv-fxfbCYdRUtGN_uBwzAO93-N2M2YKdT9IgFEERPdzYdvfJbhHZvXmO5SkqOO4cqaNq5xUo0SDRfdt993QBoxyLAlGYC09uyb8bS4NgaKhlrB2CyA3Hq7Trmh2yw=="
              />
            </div>
            <div className="w-full overflow-hidden p-2 md:px-2.5 xl:px-4">
              <h2 className="line-clamp-2 text-heading min-h-[2lh] text-sm md:text-base">
                코너양면시계 병원 호텔 수입 명품 디지털 벽걸이시계
              </h2>
              <div
                className="font-semibold sm:text-base mt-0.5 space-s-2 lg:text-lg lg:mt-1.5
     text-heading"
              >
                105,000원
              </div>
              <div className="my-1 flex items-center">
                <span className="text-sm text-gray-400   line-clamp-1">
                  쿠팡
                </span>
                <div className="flex items-center whitespace-nowrap">
                  <span className="mx-1 text-sm text-gray-400">|</span>
                  <span className="text-sm text-gray-400">광고</span>
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
            href="/product/217910753"
          >
            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
              <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
              <img
                alt="정품 부쉐론 쎄뻥 더블 모티브 XS 15cm 사이즈 판매 합니다."
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://img2.joongna.com/cafe-article-data/live/2025/08/21/1114960321/1755742504726_000_zqSwj_main.jpg?impolicy=thumb&size=150"
              />
              <div className="absolute bottom-2 z-20 right-2 w-6 h-6">
                <label htmlFor=":r3a:" className="relative cursor-pointer">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none w-6 h-6"
                  >
                    <path
                      d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                      strokeWidth="1.5"
                      stroke="white"
                      fill="#9ca3afb4"
                    />
                  </svg>
                </label>
                <input id=":r3a:" type="checkbox" className="a11yHidden" />
              </div>
            </div>
            <div className="w-full overflow-hidden p-2 px-0">
              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                정품 부쉐론 쎄뻥 더블 모티브 XS 15cm 사이즈 판매 합니다.
              </h2>
              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                5,700,000원
              </div>
              <div className="my-1 min-h-6">
                <span className="text-sm text-gray-400">-46684초 전</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                <div className="text-xs text-gray-400 text-muted">
                  찜 0 ∙ 채팅 0
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
            href="/product/217910734"
          >
            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
              <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
              <img
                alt="정품 불가리 비제로원 목걸이 화이트골드 파베다이아 세팅"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://img2.joongna.com/cafe-article-data/live/2025/08/21/1114960297/1755742488681_000_9TeEf_main.jpg?impolicy=thumb&size=150"
              />
              <div className="absolute bottom-2 z-20 right-2 w-6 h-6">
                <label htmlFor=":r3b:" className="relative cursor-pointer">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none w-6 h-6"
                  >
                    <path
                      d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                      strokeWidth="1.5"
                      stroke="white"
                      fill="#9ca3afb4"
                    />
                  </svg>
                </label>
                <input id=":r3b:" type="checkbox" className="a11yHidden" />
              </div>
            </div>
            <div className="w-full overflow-hidden p-2 px-0">
              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                정품 불가리 비제로원 목걸이 화이트골드 파베다이아 세팅
              </h2>
              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                5,800,000원
              </div>
              <div className="my-1 min-h-6">
                <span className="text-sm text-gray-400">-46673초 전</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                <div className="text-xs text-gray-400 text-muted">
                  찜 0 ∙ 채팅 0
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
            href="/product/217910746"
          >
            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
              <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
              <img
                alt="정품 까르띠에 5부 다이아몬드 목걸이"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://img2.joongna.com/cafe-article-data/live/2025/08/21/1114960273/1755742506031_000_y1wZ4_main.jpg?impolicy=thumb&size=150"
              />
              <div className="absolute bottom-2 z-20 right-2 w-6 h-6">
                <label htmlFor=":r3c:" className="relative cursor-pointer">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none w-6 h-6"
                  >
                    <path
                      d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                      strokeWidth="1.5"
                      stroke="white"
                      fill="#9ca3afb4"
                    />
                  </svg>
                </label>
                <input id=":r3c:" type="checkbox" className="a11yHidden" />
              </div>
            </div>
            <div className="w-full overflow-hidden p-2 px-0">
              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                정품 까르띠에 5부 다이아몬드 목걸이
              </h2>
              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                6,800,000원
              </div>
              <div className="my-1 min-h-6">
                <span className="text-sm text-gray-400">-46662초 전</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                <div className="text-xs text-gray-400 text-muted">
                  찜 0 ∙ 채팅 0
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
            href="/product/217910745"
          >
            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
              <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
              <img
                alt="데이저스트 텐포인트 구매합니다(청판/검판/초코)"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://img2.joongna.com/cafe-article-data/live/2025/08/21/1114960271/1755742506901_000_0BiD0_main.jpg?impolicy=thumb&size=150"
              />
              <div className="absolute bottom-2 z-20 right-2 w-6 h-6">
                <label htmlFor=":r3d:" className="relative cursor-pointer">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none w-6 h-6"
                  >
                    <path
                      d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                      strokeWidth="1.5"
                      stroke="white"
                      fill="#9ca3afb4"
                    />
                  </svg>
                </label>
                <input id=":r3d:" type="checkbox" className="a11yHidden" />
              </div>
            </div>
            <div className="w-full overflow-hidden p-2 px-0">
              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                데이저스트 텐포인트 구매합니다(청판/검판/초코)
              </h2>
              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                20,000,000원
              </div>
              <div className="my-1 min-h-6">
                <span className="text-sm text-gray-400">-46661초 전</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                <div className="text-xs text-gray-400 text-muted">
                  찜 0 ∙ 채팅 0
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
            href="/product/217194348"
          >
            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
              <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
              <img
                alt="구찌 토트백 라지사이즈(남녀공용"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://img2.joongna.com/media/original/2025/08/09/17547390874824M9_9QgYH.jpg?impolicy=thumb&size=150"
              />
              <div className="absolute bottom-2 z-20 right-2 w-6 h-6">
                <label htmlFor=":r3e:" className="relative cursor-pointer">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none w-6 h-6"
                  >
                    <path
                      d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                      strokeWidth="1.5"
                      stroke="white"
                      fill="#9ca3afb4"
                    />
                  </svg>
                </label>
                <input id=":r3e:" type="checkbox" className="a11yHidden" />
              </div>
            </div>
            <div className="w-full overflow-hidden p-2 px-0">
              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                구찌 토트백 라지사이즈(남녀공용
              </h2>
              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                350,000원
              </div>
              <div className="my-1 min-h-6">
                <span className="text-sm text-gray-400">-46660초 전</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                <div className="text-xs text-gray-400 text-muted">
                  찜 0 ∙ 채팅 0
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
            href="/product/217606291"
          >
            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
              <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
              <img
                alt="구찌 오피디아 반지갑/지갑 정품A급(감정O)"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://img2.joongna.com/media/original/2025/08/16/1755324983441lMn_i55FP.jpg?impolicy=thumb&size=150"
              />
              <div className="absolute bottom-2 z-20 right-2 w-6 h-6">
                <label htmlFor=":r3f:" className="relative cursor-pointer">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none w-6 h-6"
                  >
                    <path
                      d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                      strokeWidth="1.5"
                      stroke="white"
                      fill="#9ca3afb4"
                    />
                  </svg>
                </label>
                <input id=":r3f:" type="checkbox" className="a11yHidden" />
              </div>
            </div>
            <div className="w-full overflow-hidden p-2 px-0">
              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                구찌 오피디아 반지갑/지갑 정품A급(감정O)
              </h2>
              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                260,000원
              </div>
              <div className="my-1 min-h-6">
                <span className="text-sm text-gray-400">무전동</span>
                <span className="mx-1 text-sm text-gray-400">|</span>
                <span className="text-sm text-gray-400">-46641초 전</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                <div className="text-xs text-gray-400 text-muted">
                  찜 0 ∙ 채팅 0
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
            href="/product/217910671"
          >
            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
              <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
              <img
                alt="디올 블랙 오블리크 자카드 스트랩 지퍼 파우치 크로스백"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://img2.joongna.com/media/original/2025/08/21/1755742405603qLc_aODAD.jpg?impolicy=thumb&size=150"
              />
              <div className="absolute bottom-2 z-20 right-2 w-6 h-6">
                <label htmlFor=":r3g:" className="relative cursor-pointer">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none w-6 h-6"
                  >
                    <path
                      d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                      strokeWidth="1.5"
                      stroke="white"
                      fill="#9ca3afb4"
                    />
                  </svg>
                </label>
                <input id=":r3g:" type="checkbox" className="a11yHidden" />
              </div>
              <div className="flex justify-center gap-1 items-center text-left w-fit !px-1 py-1 text-[10px] h-5 lg:!px-2 lg:py-1 lg:text-xs text-white absolute top-0 left-0 rounded-none rounded-br-lg bg-[#00AEAC]/[0.7] font-medium lg:h-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                  className="w-3 h-3 lg:w-3 lg:h-3 text-white"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="m12.816.068-2.474 1.01-.003.003a.9.9 0 0 1-.68 0L7.185.068a.905.905 0 0 0-1.146.421L4.785 2.876a.92.92 0 0 1-.523.446l-2.537.836a.927.927 0 0 0-.61 1.071l.553 2.646a.93.93 0 0 1-.117.68L.139 10.85a.93.93 0 0 0 .212 1.218l2.101 1.666c.188.146.309.36.342.598l.372 2.68c.067.47.47.813.935.796l2.665-.092a.9.9 0 0 1 .64.238l1.984 1.809a.903.903 0 0 0 1.22 0l1.985-1.81a.9.9 0 0 1 .64-.237l2.665.092a.915.915 0 0 0 .935-.796l.372-2.68a.94.94 0 0 1 .342-.598l2.101-1.666a.933.933 0 0 0 .212-1.218L18.45 8.555a.93.93 0 0 1-.117-.68l.553-2.646a.927.927 0 0 0-.61-1.07l-2.537-.837a.92.92 0 0 1-.523-.446L13.962.49a.91.91 0 0 0-1.146-.421m1.816 8.27a1.3 1.3 0 1 0-1.801-1.874L8.545 10.58 6.919 8.953a1.3 1.3 0 1 0-1.84 1.837l2.527 2.53a1.3 1.3 0 0 0 1.82.019z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>인증셀러</span>
              </div>
            </div>
            <div className="w-full overflow-hidden p-2 px-0">
              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                디올 블랙 오블리크 자카드 스트랩 지퍼 파우치 크로스백
              </h2>
              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                1,480,000원
              </div>
              <div className="my-1 min-h-6">
                <span className="text-sm text-gray-400">-46636초 전</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                <div className="text-xs text-gray-400 text-muted">
                  찜 0 ∙ 채팅 0
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
            href="/product/217910701"
          >
            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
              <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
              <img
                alt="정품 고야드 알렉상드르 체인백 스페셜 화이트 컬러"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://img2.joongna.com/cafe-article-data/live/2025/08/21/1114960241/1755742462280_000_hekTL_main.jpg?impolicy=thumb&size=150"
              />
              <div className="absolute bottom-2 z-20 right-2 w-6 h-6">
                <label htmlFor=":r3h:" className="relative cursor-pointer">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none w-6 h-6"
                  >
                    <path
                      d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                      strokeWidth="1.5"
                      stroke="white"
                      fill="#9ca3afb4"
                    />
                  </svg>
                </label>
                <input id=":r3h:" type="checkbox" className="a11yHidden" />
              </div>
            </div>
            <div className="w-full overflow-hidden p-2 px-0">
              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                정품 고야드 알렉상드르 체인백 스페셜 화이트 컬러
              </h2>
              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                2,700,000원
              </div>
              <div className="my-1 min-h-6">
                <span className="text-sm text-gray-400">-46636초 전</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                <div className="text-xs text-gray-400 text-muted">
                  찜 0 ∙ 채팅 0
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
            href="/product/217437520"
          >
            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
              <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
              <img
                alt="구찌 마몬트 크로스/크로스백 스몰 정품A급(감정O)"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://img2.joongna.com/media/original/2025/08/13/17550741828386M8_rpNmY.jpg?impolicy=thumb&size=150"
              />
              <div className="absolute bottom-2 z-20 right-2 w-6 h-6">
                <label htmlFor=":r3i:" className="relative cursor-pointer">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none w-6 h-6"
                  >
                    <path
                      d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                      strokeWidth="1.5"
                      stroke="white"
                      fill="#9ca3afb4"
                    />
                  </svg>
                </label>
                <input id=":r3i:" type="checkbox" className="a11yHidden" />
              </div>
            </div>
            <div className="w-full overflow-hidden p-2 px-0">
              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                구찌 마몬트 크로스/크로스백 스몰 정품A급(감정O)
              </h2>
              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                950,000원
              </div>
              <div className="my-1 min-h-6">
                <span className="text-sm text-gray-400">무전동</span>
                <span className="mx-1 text-sm text-gray-400">|</span>
                <span className="text-sm text-gray-400">-46634초 전</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                <div className="text-xs text-gray-400 text-muted">
                  찜 0 ∙ 채팅 1
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            rel="sponsored noreferrer"
            target="_blank"
            className="group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col item-start transition duration-200 ease-in-out transform  bg-white"
            role="button"
            title="남자명품청바지 라이트블루 워싱 데님 팬츠 클래식 밀라노 프리미엄 청바지"
            href="https://io.cpczapi38a.kr/adlanding/?adid=91&subid=joongna55&landing_url=https%3A%2F%2Flink.coupang.com%2Fre%2FAFFSDP%3Flptag%3DAF1784908%26subid%3Djoongna55%26pageKey%3D8930461991%26itemId%3D26105808246%26vendorItemId%3D93086425439%26traceid%3DV0-153-3c1862ed63673843%26requestid%3D20250821111643105208124089%26token%3D31850C%257CMIXED&adtype=2"
          >
            <div className="flex relative overflow-hidden rounded-md pt-[100%] w-full dim mb-3 md:mb-3.5">
              <img
                alt="남자명품청바지 라이트블루 워싱 데님 팬츠 클래식 밀라노 프리미엄 청바지"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover rounded-s-md hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://ads-partners.coupang.com/image1/z4mB4V1kLozgL_gYz_Q16w6nO8uKjrYf-y1iAIDtPYrXwGnN4qrBehyrw8VV1i0YRoMqAynK_WKz8L8EGS_9Kwo3Dykkz0gVp6iDATJTaT9fqr97RM15OC-T3jUsC3lthJsJ4JKvoGYp3wsTXGGUPy1k-WXnPXWVoCfi-zJQsHc-OXxEZrNcC4P8lCL1UtuIKuKYDdxEKhAJ_v-92tVpzKv27g23nBJioBRxpbMH3_Dy2j1IshyOmBLpIWCBemvvmJZpxQ0_UyIEm2onbzuGnNXuFEC8yC3lwhvXVgHW_R9yuPIWgNL6p4c-jk2FIyIFny-r-Vws-7oSfEFeK3cLO7Ayh6A1pdXJhic="
              />
            </div>
            <div className="w-full overflow-hidden p-2 md:px-2.5 xl:px-4">
              <h2 className="line-clamp-2 text-heading min-h-[2lh] text-sm md:text-base">
                남자명품청바지 라이트블루 워싱 데님 팬츠 클래식 밀라노 프리미엄
                청바지
              </h2>
              <div
                className="font-semibold sm:text-base mt-0.5 space-s-2 lg:text-lg lg:mt-1.5
     text-heading"
              >
                157,500원
              </div>
              <div className="my-1 flex items-center">
                <span className="text-sm text-gray-400   line-clamp-1">
                  쿠팡
                </span>
                <div className="flex items-center whitespace-nowrap">
                  <span className="mx-1 text-sm text-gray-400">|</span>
                  <span className="text-sm text-gray-400">광고</span>
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
            href="/product/217843776"
          >
            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
              <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
              <img
                alt="발렌시아가 폰홀더백/크로스백 정품S급(감정O)구찌루이비통디올프라다고야드샤넬보테가베네타입생로랑셀린느톰브라운버버리미우미우에르메스버킷백호보백클러치가방크로스백숄더백토트백지갑파우치"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://img2.joongna.com/cafe-article-data/live/2025/08/20/1114868513/1755655921880_000_9G7jM_main.jpg?impolicy=thumb&size=150"
              />
              <div className="absolute bottom-2 z-20 right-2 w-6 h-6">
                <label htmlFor=":r3j:" className="relative cursor-pointer">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none w-6 h-6"
                  >
                    <path
                      d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                      strokeWidth="1.5"
                      stroke="white"
                      fill="#9ca3afb4"
                    />
                  </svg>
                </label>
                <input id=":r3j:" type="checkbox" className="a11yHidden" />
              </div>
            </div>
            <div className="w-full overflow-hidden p-2 px-0">
              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                발렌시아가 폰홀더백/크로스백
                정품S급(감정O)구찌루이비통디올프라다고야드샤넬보테가베네타입생로랑셀린느톰브라운버버리미우미우에르메스버킷백호보백클러치가방크로스백숄더백토트백지갑파우치
              </h2>
              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                500,000원
              </div>
              <div className="my-1 min-h-6">
                <span className="text-sm text-gray-400">무전동</span>
                <span className="mx-1 text-sm text-gray-400">|</span>
                <span className="text-sm text-gray-400">-46625초 전</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                <div className="text-xs text-gray-400 text-muted">
                  찜 0 ∙ 채팅 0
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
            href="/product/217910691"
          >
            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
              <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
              <img
                alt="정품 불가리 세르펜티 바이퍼 링 화이트골드 풀파베 XXL"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://img2.joongna.com/cafe-article-data/live/2025/08/21/1114960225/1755742448855_000_ELzmQ_main.jpg?impolicy=thumb&size=150"
              />
              <div className="absolute bottom-2 z-20 right-2 w-6 h-6">
                <label htmlFor=":r3k:" className="relative cursor-pointer">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none w-6 h-6"
                  >
                    <path
                      d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                      strokeWidth="1.5"
                      stroke="white"
                      fill="#9ca3afb4"
                    />
                  </svg>
                </label>
                <input id=":r3k:" type="checkbox" className="a11yHidden" />
              </div>
            </div>
            <div className="w-full overflow-hidden p-2 px-0">
              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                정품 불가리 세르펜티 바이퍼 링 화이트골드 풀파베 XXL
              </h2>
              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                9,800,000원
              </div>
              <div className="my-1 min-h-6">
                <span className="text-sm text-gray-400">-46625초 전</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                <div className="text-xs text-gray-400 text-muted">
                  찜 0 ∙ 채팅 0
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
            href="/product/217839348"
          >
            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
              <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
              <img
                alt="구찌 오피디아 크로스백/탬버린백 새상품급 정품(감정서O)"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://img2.joongna.com/cafe-article-data/live/2025/08/20/1114862483/1755652399494_000_Bz9uA_main.jpg?impolicy=thumb&size=150"
              />
              <div className="absolute bottom-2 z-20 right-2 w-6 h-6">
                <label htmlFor=":r3l:" className="relative cursor-pointer">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none w-6 h-6"
                  >
                    <path
                      d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                      strokeWidth="1.5"
                      stroke="white"
                      fill="#9ca3afb4"
                    />
                  </svg>
                </label>
                <input id=":r3l:" type="checkbox" className="a11yHidden" />
              </div>
            </div>
            <div className="w-full overflow-hidden p-2 px-0">
              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                구찌 오피디아 크로스백/탬버린백 새상품급 정품(감정서O)
              </h2>
              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                900,000원
              </div>
              <div className="my-1 min-h-6">
                <span className="text-sm text-gray-400">무전동</span>
                <span className="mx-1 text-sm text-gray-400">|</span>
                <span className="text-sm text-gray-400">-46622초 전</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                <div className="text-xs text-gray-400 text-muted">
                  찜 0 ∙ 채팅 0
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
            href="/product/217910653"
          >
            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
              <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
              <img
                alt="정품 불가리 세르펜티 바이퍼 팔찌 화이트골드 풀파베 다이아 M 사이즈"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://img2.joongna.com/cafe-article-data/live/2025/08/21/1114960199/1755742427285_000_1hhct_main.jpg?impolicy=thumb&size=150"
              />
              <div className="absolute bottom-2 z-20 right-2 w-6 h-6">
                <label htmlFor=":r3m:" className="relative cursor-pointer">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none w-6 h-6"
                  >
                    <path
                      d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                      strokeWidth="1.5"
                      stroke="white"
                      fill="#9ca3afb4"
                    />
                  </svg>
                </label>
                <input id=":r3m:" type="checkbox" className="a11yHidden" />
              </div>
            </div>
            <div className="w-full overflow-hidden p-2 px-0">
              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                정품 불가리 세르펜티 바이퍼 팔찌 화이트골드 풀파베 다이아 M
                사이즈
              </h2>
              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                38,500,000원
              </div>
              <div className="my-1 min-h-6">
                <span className="text-sm text-gray-400">-46614초 전</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                <div className="text-xs text-gray-400 text-muted">
                  찜 0 ∙ 채팅 0
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
            href="/product/217910660"
          >
            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
              <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
              <img
                alt="아크테릭스 여행 캠핑용 옷파우치 레어템"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://img2.joongna.com/cafe-article-data/live/2025/08/21/1114960185/1755742429639_000_rN6Ai_main.JPG?impolicy=thumb&size=150"
              />
              <div className="absolute bottom-2 z-20 right-2 w-6 h-6">
                <label htmlFor=":r3n:" className="relative cursor-pointer">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none w-6 h-6"
                  >
                    <path
                      d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                      strokeWidth="1.5"
                      stroke="white"
                      fill="#9ca3afb4"
                    />
                  </svg>
                </label>
                <input id=":r3n:" type="checkbox" className="a11yHidden" />
              </div>
            </div>
            <div className="w-full overflow-hidden p-2 px-0">
              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                아크테릭스 여행 캠핑용 옷파우치 레어템
              </h2>
              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                45,000원
              </div>
              <div className="my-1 min-h-6">
                <span className="text-sm text-gray-400">-46605초 전</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                <div className="text-xs text-gray-400 text-muted">
                  찜 0 ∙ 채팅 0
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
            href="/product/217910650"
          >
            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
              <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
              <img
                alt="정품 루이비통 컬러 블라썸 스타 BB 팔찌"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://img2.joongna.com/cafe-article-data/live/2025/08/21/1114960182/1755742419421_000_YjMAd_main.jpg?impolicy=thumb&size=150"
              />
              <div className="absolute bottom-2 z-20 right-2 w-6 h-6">
                <label htmlFor=":r3o:" className="relative cursor-pointer">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none w-6 h-6"
                  >
                    <path
                      d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                      strokeWidth="1.5"
                      stroke="white"
                      fill="#9ca3afb4"
                    />
                  </svg>
                </label>
                <input id=":r3o:" type="checkbox" className="a11yHidden" />
              </div>
            </div>
            <div className="w-full overflow-hidden p-2 px-0">
              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                정품 루이비통 컬러 블라썸 스타 BB 팔찌
              </h2>
              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                2,500,000원
              </div>
              <div className="my-1 min-h-6">
                <span className="text-sm text-gray-400">-46604초 전</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                <div className="text-xs text-gray-400 text-muted">
                  찜 0 ∙ 채팅 0
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
            href="/product/217910631"
          >
            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
              <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
              <img
                alt="24년 11월 플리츠플리즈 스펙트럼 탑"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://img2.joongna.com/cafe-article-data/live/2025/08/21/1114960176/1755742409474_000_PNACL_main.jpg?impolicy=thumb&size=150"
              />
              <div className="absolute bottom-2 z-20 right-2 w-6 h-6">
                <label htmlFor=":r3p:" className="relative cursor-pointer">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none w-6 h-6"
                  >
                    <path
                      d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                      strokeWidth="1.5"
                      stroke="white"
                      fill="#9ca3afb4"
                    />
                  </svg>
                </label>
                <input id=":r3p:" type="checkbox" className="a11yHidden" />
              </div>
            </div>
            <div className="w-full overflow-hidden p-2 px-0">
              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                24년 11월 플리츠플리즈 스펙트럼 탑
              </h2>
              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                196,000원
              </div>
              <div className="my-1 min-h-6">
                <span className="text-sm text-gray-400">-46600초 전</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                <div className="text-xs text-gray-400 text-muted">
                  찜 0 ∙ 채팅 0
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
            href="/product/217910608"
          >
            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
              <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
              <img
                alt="불가리 비제로원 락4밴드 풀박스 62호 쿨거10네고"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://img2.joongna.com/media/original/2025/08/21/1755742292243MaC_dLwhZ.jpg?impolicy=thumb&size=150"
              />
              <div className="absolute bottom-2 z-20 right-2 w-6 h-6">
                <label htmlFor=":r3q:" className="relative cursor-pointer">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none w-6 h-6"
                  >
                    <path
                      d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                      strokeWidth="1.5"
                      stroke="white"
                      fill="#9ca3afb4"
                    />
                  </svg>
                </label>
                <input id=":r3q:" type="checkbox" className="a11yHidden" />
              </div>
            </div>
            <div className="w-full overflow-hidden p-2 px-0">
              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                불가리 비제로원 락4밴드 풀박스 62호 쿨거10네고
              </h2>
              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                2,750,000원
              </div>
              <div className="my-1 min-h-6">
                <span className="text-sm text-gray-400">중계본동</span>
                <span className="mx-1 text-sm text-gray-400">|</span>
                <span className="text-sm text-gray-400">-46594초 전</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                <div className="text-xs text-gray-400 text-muted">
                  찜 0 ∙ 채팅 0
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
            href="/product/217910628"
          >
            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
              <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
              <img
                alt="몽클레어 몽클레르 패딩가디건 핑크 L판매힙니다"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://img2.joongna.com/cafe-article-data/live/2025/08/21/1114960166/1755742414662_000_Byvx9_main.jpg?impolicy=thumb&size=150"
              />
              <div className="absolute bottom-2 z-20 right-2 w-6 h-6">
                <label htmlFor=":r3r:" className="relative cursor-pointer">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none w-6 h-6"
                  >
                    <path
                      d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                      strokeWidth="1.5"
                      stroke="white"
                      fill="#9ca3afb4"
                    />
                  </svg>
                </label>
                <input id=":r3r:" type="checkbox" className="a11yHidden" />
              </div>
            </div>
            <div className="w-full overflow-hidden p-2 px-0">
              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                몽클레어 몽클레르 패딩가디건 핑크 L판매힙니다
              </h2>
              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                450,000원
              </div>
              <div className="my-1 min-h-6">
                <span className="text-sm text-gray-400">-46593초 전</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                <div className="text-xs text-gray-400 text-muted">
                  찜 0 ∙ 채팅 0
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
            href="/product/217910597"
          >
            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
              <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
              <img
                alt="JWANDERSON DRESS 제이더블유앤더슨원피스"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://img2.joongna.com/media/original/2025/08/21/1755742301115BGe_fdu8u.jpg?impolicy=thumb&size=150"
              />
              <div className="absolute bottom-2 z-20 right-2 w-6 h-6">
                <label htmlFor=":r3s:" className="relative cursor-pointer">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none w-6 h-6"
                  >
                    <path
                      d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                      strokeWidth="1.5"
                      stroke="white"
                      fill="#9ca3afb4"
                    />
                  </svg>
                </label>
                <input id=":r3s:" type="checkbox" className="a11yHidden" />
              </div>
            </div>
            <div className="w-full overflow-hidden p-2 px-0">
              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                JWANDERSON DRESS 제이더블유앤더슨원피스
              </h2>
              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                500,000원
              </div>
              <div className="my-1 min-h-6">
                <span className="text-sm text-gray-400">혁신동</span>
                <span className="mx-1 text-sm text-gray-400">|</span>
                <span className="text-sm text-gray-400">-46585초 전</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                <div className="text-xs text-gray-400 text-muted">
                  찜 0 ∙ 채팅 0
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
            href="/product/217910641"
          >
            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
              <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
              <img
                alt="정품 부쉐론 콰트로 목걸이 라지사이즈 신형 제품"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://img2.joongna.com/cafe-article-data/live/2025/08/21/1114960143/1755742416695_000_2JzdR_main.jpg?impolicy=thumb&size=150"
              />
              <div className="absolute bottom-2 z-20 right-2 w-6 h-6">
                <label htmlFor=":r3t:" className="relative cursor-pointer">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none w-6 h-6"
                  >
                    <path
                      d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                      strokeWidth="1.5"
                      stroke="white"
                      fill="#9ca3afb4"
                    />
                  </svg>
                </label>
                <input id=":r3t:" type="checkbox" className="a11yHidden" />
              </div>
            </div>
            <div className="w-full overflow-hidden p-2 px-0">
              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                정품 부쉐론 콰트로 목걸이 라지사이즈 신형 제품
              </h2>
              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                6,300,000원
              </div>
              <div className="my-1 min-h-6">
                <span className="text-sm text-gray-400">-46581초 전</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                <div className="text-xs text-gray-400 text-muted">
                  찜 0 ∙ 채팅 0
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
            href="/product/217910625"
          >
            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
              <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
              <img
                alt="DIOR 정품 별 오블리크 귀걸이 상태최상"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://img2.joongna.com/cafe-article-data/live/2025/08/21/1114960140/1755742396734_000_rz7RO_main.jpg?impolicy=thumb&size=150"
              />
              <div className="absolute bottom-2 z-20 right-2 w-6 h-6">
                <label htmlFor=":r3u:" className="relative cursor-pointer">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none w-6 h-6"
                  >
                    <path
                      d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                      strokeWidth="1.5"
                      stroke="white"
                      fill="#9ca3afb4"
                    />
                  </svg>
                </label>
                <input id=":r3u:" type="checkbox" className="a11yHidden" />
              </div>
            </div>
            <div className="w-full overflow-hidden p-2 px-0">
              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                DIOR 정품 별 오블리크 귀걸이 상태최상
              </h2>
              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                200,000원
              </div>
              <div className="my-1 min-h-6">
                <span className="text-sm text-gray-400">-46580초 전</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                <div className="text-xs text-gray-400 text-muted">
                  찜 0 ∙ 채팅 0
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
            href="/product/217910627"
          >
            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
              <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
              <img
                alt="아크테릭스 그랜빌 크로스바디백 캔버스"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://img2.joongna.com/cafe-article-data/live/2025/08/21/1114960135/1755742409830_000_2f5jT_main.JPG?impolicy=thumb&size=150"
              />
              <div className="absolute bottom-2 z-20 right-2 w-6 h-6">
                <label htmlFor=":r3v:" className="relative cursor-pointer">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none w-6 h-6"
                  >
                    <path
                      d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                      strokeWidth="1.5"
                      stroke="white"
                      fill="#9ca3afb4"
                    />
                  </svg>
                </label>
                <input id=":r3v:" type="checkbox" className="a11yHidden" />
              </div>
            </div>
            <div className="w-full overflow-hidden p-2 px-0">
              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                아크테릭스 그랜빌 크로스바디백 캔버스
              </h2>
              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                135,000원
              </div>
              <div className="my-1 min-h-6">
                <span className="text-sm text-gray-400">-46575초 전</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                <div className="text-xs text-gray-400 text-muted">
                  찜 0 ∙ 채팅 0
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
            href="/product/217910583"
          >
            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
              <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
              <img
                alt="마운틴로버 타르시어 22 430g 경량배낭"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://img2.joongna.com/cafe-article-data/live/2025/08/21/1114960099/1755742373001_000_FVB9W_main.JPG?impolicy=thumb&size=150"
              />
              <div className="absolute bottom-2 z-20 right-2 w-6 h-6">
                <label htmlFor=":r40:" className="relative cursor-pointer">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none w-6 h-6"
                  >
                    <path
                      d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                      strokeWidth="1.5"
                      stroke="white"
                      fill="#9ca3afb4"
                    />
                  </svg>
                </label>
                <input id=":r40:" type="checkbox" className="a11yHidden" />
              </div>
            </div>
            <div className="w-full overflow-hidden p-2 px-0">
              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                마운틴로버 타르시어 22 430g 경량배낭
              </h2>
              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                75,000원
              </div>
              <div className="my-1 min-h-6">
                <span className="text-sm text-gray-400">-46558초 전</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                <div className="text-xs text-gray-400 text-muted">
                  찜 0 ∙ 채팅 0
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
            href="/product/217910588"
          >
            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
              <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
              <img
                alt="루이비통 마이락미BB 체인숄더백 블랙"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://img2.joongna.com/cafe-article-data/live/2025/08/21/1114960086/1755742363480_000_jm7Fb_main.jpg?impolicy=thumb&size=150"
              />
              <div className="absolute bottom-2 z-20 right-2 w-6 h-6">
                <label htmlFor=":r41:" className="relative cursor-pointer">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none w-6 h-6"
                  >
                    <path
                      d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                      strokeWidth="1.5"
                      stroke="white"
                      fill="#9ca3afb4"
                    />
                  </svg>
                </label>
                <input id=":r41:" type="checkbox" className="a11yHidden" />
              </div>
            </div>
            <div className="w-full overflow-hidden p-2 px-0">
              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                루이비통 마이락미BB 체인숄더백 블랙
              </h2>
              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                2,200,000원
              </div>
              <div className="my-1 min-h-6">
                <span className="text-sm text-gray-400">-46550초 전</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                <div className="text-xs text-gray-400 text-muted">
                  찜 0 ∙ 채팅 0
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
            href="/product/217910566"
          >
            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
              <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
              <img
                alt="[정품]루이비통,구찌,에르메스,샤넬,프라다,보테가베네타 LV 체인링크 브레이슬릿 악세서리 팔찌 M0919M 판매합니다."
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://img2.joongna.com/cafe-article-data/live/2025/08/21/1114960075/1755742360580_000_M67DP_main.jpg?impolicy=thumb&size=150"
              />
              <div className="absolute bottom-2 z-20 right-2 w-6 h-6">
                <label htmlFor=":r42:" className="relative cursor-pointer">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none w-6 h-6"
                  >
                    <path
                      d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                      strokeWidth="1.5"
                      stroke="white"
                      fill="#9ca3afb4"
                    />
                  </svg>
                </label>
                <input id=":r42:" type="checkbox" className="a11yHidden" />
              </div>
            </div>
            <div className="w-full overflow-hidden p-2 px-0">
              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                [정품]루이비통,구찌,에르메스,샤넬,프라다,보테가베네타 LV
                체인링크 브레이슬릿 악세서리 팔찌 M0919M 판매합니다.
              </h2>
              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                600,000원
              </div>
              <div className="my-1 min-h-6">
                <span className="text-sm text-gray-400">-46545초 전</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                <div className="text-xs text-gray-400 text-muted">
                  찜 0 ∙ 채팅 0
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
            href="/product/217910512"
          >
            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
              <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
              <img
                alt="고야드 생피에르 카드지갑 국내매장판 그린색상 판매합니다"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://img2.joongna.com/cafe-article-data/live/2025/08/21/1114960009/1755742317590_012_d3o8z_main.jpg?impolicy=thumb&size=150"
              />
              <div className="absolute bottom-2 z-20 right-2 w-6 h-6">
                <label htmlFor=":r43:" className="relative cursor-pointer">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none w-6 h-6"
                  >
                    <path
                      d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                      strokeWidth="1.5"
                      stroke="white"
                      fill="#9ca3afb4"
                    />
                  </svg>
                </label>
                <input id=":r43:" type="checkbox" className="a11yHidden" />
              </div>
            </div>
            <div className="w-full overflow-hidden p-2 px-0">
              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                고야드 생피에르 카드지갑 국내매장판 그린색상 판매합니다
              </h2>
              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                560,000원
              </div>
              <div className="my-1 min-h-6">
                <span className="text-sm text-gray-400">-46510초 전</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                <div className="text-xs text-gray-400 text-muted">
                  찜 0 ∙ 채팅 0
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
            href="/product/217709725"
          >
            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
              <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
              <img
                alt="루이비통 크로스백"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://img2.joongna.com/media/original/2025/08/18/1755482936034ewQ_F5QTt.jpg?impolicy=thumb&size=150"
              />
              <div className="absolute bottom-2 z-20 right-2 w-6 h-6">
                <label htmlFor=":r44:" className="relative cursor-pointer">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none w-6 h-6"
                  >
                    <path
                      d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                      strokeWidth="1.5"
                      stroke="white"
                      fill="#9ca3afb4"
                    />
                  </svg>
                </label>
                <input id=":r44:" type="checkbox" className="a11yHidden" />
              </div>
            </div>
            <div className="w-full overflow-hidden p-2 px-0">
              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                루이비통 크로스백
              </h2>
              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                1,600,000원
              </div>
              <div className="my-1 min-h-6">
                <span className="text-sm text-gray-400">중앙동</span>
                <span className="mx-1 text-sm text-gray-400">|</span>
                <span className="text-sm text-gray-400">-46504초 전</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                <div className="text-xs text-gray-400 text-muted">
                  찜 0 ∙ 채팅 1
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
            href="/product/217751560"
          >
            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
              <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
              <img
                alt="버버리 셔츠 새제품"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://img2.joongna.com/media/original/2025/08/18/1755522381889cMH_wLKsQ.jpg?impolicy=thumb&size=150"
              />
              <div className="absolute bottom-2 z-20 right-2 w-6 h-6">
                <label htmlFor=":r45:" className="relative cursor-pointer">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none w-6 h-6"
                  >
                    <path
                      d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                      strokeWidth="1.5"
                      stroke="white"
                      fill="#9ca3afb4"
                    />
                  </svg>
                </label>
                <input id=":r45:" type="checkbox" className="a11yHidden" />
              </div>
            </div>
            <div className="w-full overflow-hidden p-2 px-0">
              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                버버리 셔츠 새제품
              </h2>
              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                200,000원
              </div>
              <div className="my-1 min-h-6">
                <span className="text-sm text-gray-400">엄궁동</span>
                <span className="mx-1 text-sm text-gray-400">|</span>
                <span className="text-sm text-gray-400">-46500초 전</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                <div className="text-xs text-gray-400 text-muted">
                  찜 0 ∙ 채팅 0
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
            href="/product/217910495"
          >
            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
              <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
              <img
                alt="발렌시아가 쇼퍼백 라지 블랙 삽니다. 구매 도트백"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://img2.joongna.com/cafe-article-data/live/2025/08/21/1114959995/1755742311572_000_h45F2_main.png?impolicy=thumb&size=150"
              />
              <div className="absolute bottom-2 z-20 right-2 w-6 h-6">
                <label htmlFor=":r46:" className="relative cursor-pointer">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none w-6 h-6"
                  >
                    <path
                      d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                      strokeWidth="1.5"
                      stroke="white"
                      fill="#9ca3afb4"
                    />
                  </svg>
                </label>
                <input id=":r46:" type="checkbox" className="a11yHidden" />
              </div>
            </div>
            <div className="w-full overflow-hidden p-2 px-0">
              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                발렌시아가 쇼퍼백 라지 블랙 삽니다. 구매 도트백
              </h2>
              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                77,777원
              </div>
              <div className="my-1 min-h-6">
                <span className="text-sm text-gray-400">-46498초 전</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                <div className="text-xs text-gray-400 text-muted">
                  찜 0 ∙ 채팅 0
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
            href="/product/217776449"
          >
            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
              <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
              <img
                alt="셀린느 크로스백"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://img2.joongna.com/media/original/2025/08/19/1755569447084m3B_juoZB.jpg?impolicy=thumb&size=150"
              />
              <div className="absolute bottom-2 z-20 right-2 w-6 h-6">
                <label htmlFor=":r47:" className="relative cursor-pointer">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none w-6 h-6"
                  >
                    <path
                      d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                      strokeWidth="1.5"
                      stroke="white"
                      fill="#9ca3afb4"
                    />
                  </svg>
                </label>
                <input id=":r47:" type="checkbox" className="a11yHidden" />
              </div>
            </div>
            <div className="w-full overflow-hidden p-2 px-0">
              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                셀린느 크로스백
              </h2>
              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                990,000원
              </div>
              <div className="my-1 min-h-6">
                <span className="text-sm text-gray-400">중앙동</span>
                <span className="mx-1 text-sm text-gray-400">|</span>
                <span className="text-sm text-gray-400">-46493초 전</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                <div className="text-xs text-gray-400 text-muted">
                  찜 0 ∙ 채팅 0
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
            href="/product/216634147"
          >
            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
              <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
              <img
                alt="루이비통 다미에 토트백"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://img2.joongna.com/media/original/2025/07/31/1753941538947N49_zwOHC.jpg?impolicy=thumb&size=150"
              />
              <div className="absolute bottom-2 z-20 right-2 w-6 h-6">
                <label htmlFor=":r48:" className="relative cursor-pointer">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none w-6 h-6"
                  >
                    <path
                      d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                      strokeWidth="1.5"
                      stroke="white"
                      fill="#9ca3afb4"
                    />
                  </svg>
                </label>
                <input id=":r48:" type="checkbox" className="a11yHidden" />
              </div>
            </div>
            <div className="w-full overflow-hidden p-2 px-0">
              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                루이비통 다미에 토트백
              </h2>
              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                1,450,000원
              </div>
              <div className="my-1 min-h-6">
                <span className="text-sm text-gray-400">중앙동</span>
                <span className="mx-1 text-sm text-gray-400">|</span>
                <span className="text-sm text-gray-400">-46481초 전</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                <div className="text-xs text-gray-400 text-muted">
                  찜 0 ∙ 채팅 0
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
            href="/product/217648543"
          >
            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
              <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
              <img
                alt="지방시 판도라 미니백 블랙"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://img2.joongna.com/media/original/2025/08/17/1755396942384gXi_0qm8U.jpg?impolicy=thumb&size=150"
              />
              <div className="absolute bottom-2 z-20 right-2 w-6 h-6">
                <label htmlFor=":r49:" className="relative cursor-pointer">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none w-6 h-6"
                  >
                    <path
                      d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                      strokeWidth="1.5"
                      stroke="white"
                      fill="#9ca3afb4"
                    />
                  </svg>
                </label>
                <input id=":r49:" type="checkbox" className="a11yHidden" />
              </div>
            </div>
            <div className="w-full overflow-hidden p-2 px-0">
              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                지방시 판도라 미니백 블랙
              </h2>
              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                470,000원
              </div>
              <div className="my-1 min-h-6">
                <span className="text-sm text-gray-400">동명면</span>
                <span className="mx-1 text-sm text-gray-400">|</span>
                <span className="text-sm text-gray-400">-46463초 전</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                <div className="text-xs text-gray-400 text-muted">
                  찜 0 ∙ 채팅 0
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
            href="/product/217910448"
          >
            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
              <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
              <img
                alt="팔라스 고어텍스 S-Lite 자켓 (오렌지)"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://img2.joongna.com/cafe-article-data/live/2025/08/21/1114959930/1755742279804_000_5Srdj_main.jpg?impolicy=thumb&size=150"
              />
              <div className="absolute bottom-2 z-20 right-2 w-6 h-6">
                <label htmlFor=":r4a:" className="relative cursor-pointer">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none w-6 h-6"
                  >
                    <path
                      d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                      strokeWidth="1.5"
                      stroke="white"
                      fill="#9ca3afb4"
                    />
                  </svg>
                </label>
                <input id=":r4a:" type="checkbox" className="a11yHidden" />
              </div>
            </div>
            <div className="w-full overflow-hidden p-2 px-0">
              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                팔라스 고어텍스 S-Lite 자켓 (오렌지)
              </h2>
              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                500,000원
              </div>
              <div className="my-1 min-h-6">
                <span className="text-sm text-gray-400">-46460초 전</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                <div className="text-xs text-gray-400 text-muted">
                  찜 0 ∙ 채팅 0
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
            href="/product/217910427"
          >
            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
              <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
              <img
                alt="Levi's LVC 라이트올리브 팬츠 30x32(새상품)(리바이스)"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://img2.joongna.com/cafe-article-data/live/2025/08/21/1114959880/1755742260521_000_VLb4H_main.jpg?impolicy=thumb&size=150"
              />
              <div className="absolute bottom-2 z-20 right-2 w-6 h-6">
                <label htmlFor=":r4b:" className="relative cursor-pointer">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none w-6 h-6"
                  >
                    <path
                      d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                      strokeWidth="1.5"
                      stroke="white"
                      fill="#9ca3afb4"
                    />
                  </svg>
                </label>
                <input id=":r4b:" type="checkbox" className="a11yHidden" />
              </div>
            </div>
            <div className="w-full overflow-hidden p-2 px-0">
              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                Levi's LVC 라이트올리브 팬츠 30x32(새상품)(리바이스)
              </h2>
              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                150,000원
              </div>
              <div className="my-1 min-h-6">
                <span className="text-sm text-gray-400">-46432초 전</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                <div className="text-xs text-gray-400 text-muted">
                  찜 0 ∙ 채팅 0
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
            href="/product/217788688"
          >
            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
              <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
              <img
                alt="미우미우샌들"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://img2.joongna.com/media/original/2025/08/19/1755579667738RCG_GWxbR.jpg?impolicy=thumb&size=150"
              />
              <div className="absolute bottom-2 z-20 right-2 w-6 h-6">
                <label htmlFor=":r4c:" className="relative cursor-pointer">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none w-6 h-6"
                  >
                    <path
                      d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                      strokeWidth="1.5"
                      stroke="white"
                      fill="#9ca3afb4"
                    />
                  </svg>
                </label>
                <input id=":r4c:" type="checkbox" className="a11yHidden" />
              </div>
            </div>
            <div className="w-full overflow-hidden p-2 px-0">
              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                미우미우샌들
              </h2>
              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                1,600,000원
              </div>
              <div className="my-1 min-h-6">
                <span className="text-sm text-gray-400">-46422초 전</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                <div className="text-xs text-gray-400 text-muted">
                  찜 0 ∙ 채팅 0
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
            href="/product/217910389"
          >
            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
              <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
              <img
                alt="랑방옴므 구스조끼 105사이즈"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://img2.joongna.com/cafe-article-data/live/2025/08/21/1114959849/1755742226902_000_enoQv_main.jpg?impolicy=thumb&size=150"
              />
              <div className="absolute bottom-2 z-20 right-2 w-6 h-6">
                <label htmlFor=":r4d:" className="relative cursor-pointer">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none w-6 h-6"
                  >
                    <path
                      d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                      strokeWidth="1.5"
                      stroke="white"
                      fill="#9ca3afb4"
                    />
                  </svg>
                </label>
                <input id=":r4d:" type="checkbox" className="a11yHidden" />
              </div>
            </div>
            <div className="w-full overflow-hidden p-2 px-0">
              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                랑방옴므 구스조끼 105사이즈
              </h2>
              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                210,000원
              </div>
              <div className="my-1 min-h-6">
                <span className="text-sm text-gray-400">-46410초 전</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                <div className="text-xs text-gray-400 text-muted">
                  찜 0 ∙ 채팅 0
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
            href="/product/217910365"
          >
            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
              <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
              <img
                alt="톰포드 안경 케이스"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://img2.joongna.com/media/original/2025/08/21/1755742026060gaq_BBFGv.jpg?impolicy=thumb&size=150"
              />
              <div className="absolute bottom-2 z-20 right-2 w-6 h-6">
                <label htmlFor=":r4e:" className="relative cursor-pointer">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none w-6 h-6"
                  >
                    <path
                      d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                      strokeWidth="1.5"
                      stroke="white"
                      fill="#9ca3afb4"
                    />
                  </svg>
                </label>
                <input id=":r4e:" type="checkbox" className="a11yHidden" />
              </div>
            </div>
            <div className="w-full overflow-hidden p-2 px-0">
              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                톰포드 안경 케이스
              </h2>
              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                15,000원
              </div>
              <div className="my-1 min-h-6">
                <span className="text-sm text-gray-400">청룡동</span>
                <span className="mx-1 text-sm text-gray-400">|</span>
                <span className="text-sm text-gray-400">-46405초 전</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                <div className="text-xs text-gray-400 text-muted">
                  찜 0 ∙ 채팅 1
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
            href="/product/207970462"
          >
            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
              <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
              <img
                alt="구찌 남성 로퍼 구두 275"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://img2.joongna.com/media/original/2025/04/24/1745471641872ZY9_Jj5db.jpg?impolicy=thumb&size=150"
              />
              <div className="absolute bottom-2 z-20 right-2 w-6 h-6">
                <label htmlFor=":r4f:" className="relative cursor-pointer">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none w-6 h-6"
                  >
                    <path
                      d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                      strokeWidth="1.5"
                      stroke="white"
                      fill="#9ca3afb4"
                    />
                  </svg>
                </label>
                <input id=":r4f:" type="checkbox" className="a11yHidden" />
              </div>
            </div>
            <div className="w-full overflow-hidden p-2 px-0">
              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                구찌 남성 로퍼 구두 275
              </h2>
              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                320,000원
              </div>
              <div className="my-1 min-h-6">
                <span className="text-sm text-gray-400">용신동</span>
                <span className="mx-1 text-sm text-gray-400">|</span>
                <span className="text-sm text-gray-400">-46356초 전</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                <div className="text-xs text-gray-400 text-muted">
                  찜 0 ∙ 채팅 0
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
            href="/product/217910334"
          >
            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
              <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
              <img
                alt="루이비통 쁘띠뜨 팔레PM 모노그램 토트백"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://img2.joongna.com/cafe-article-data/live/2025/08/21/1114959760/1755742174356_000_B3U9i_main.jpg?impolicy=thumb&size=150"
              />
              <div className="absolute bottom-2 z-20 right-2 w-6 h-6">
                <label htmlFor=":r4g:" className="relative cursor-pointer">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none w-6 h-6"
                  >
                    <path
                      d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                      strokeWidth="1.5"
                      stroke="white"
                      fill="#9ca3afb4"
                    />
                  </svg>
                </label>
                <input id=":r4g:" type="checkbox" className="a11yHidden" />
              </div>
            </div>
            <div className="w-full overflow-hidden p-2 px-0">
              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                루이비통 쁘띠뜨 팔레PM 모노그램 토트백
              </h2>
              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                2,500,000원
              </div>
              <div className="my-1 min-h-6">
                <span className="text-sm text-gray-400">-46355초 전</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                <div className="text-xs text-gray-400 text-muted">
                  찜 0 ∙ 채팅 0
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
            href="/product/217910335"
          >
            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
              <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
              <img
                alt="아메카지 토이즈맥코이 볼캡"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://img2.joongna.com/cafe-article-data/live/2025/08/21/1114959757/1755742177938_000_OACfL_main.JPG?impolicy=thumb&size=150"
              />
              <div className="absolute bottom-2 z-20 right-2 w-6 h-6">
                <label htmlFor=":r4h:" className="relative cursor-pointer">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none w-6 h-6"
                  >
                    <path
                      d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                      strokeWidth="1.5"
                      stroke="white"
                      fill="#9ca3afb4"
                    />
                  </svg>
                </label>
                <input id=":r4h:" type="checkbox" className="a11yHidden" />
              </div>
            </div>
            <div className="w-full overflow-hidden p-2 px-0">
              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                아메카지 토이즈맥코이 볼캡
              </h2>
              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                120,000원
              </div>
              <div className="my-1 min-h-6">
                <span className="text-sm text-gray-400">-46352초 전</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                <div className="text-xs text-gray-400 text-muted">
                  찜 0 ∙ 채팅 0
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
            href="/product/192647302"
          >
            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
              <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
              <img
                alt="디올 남성 스니커즈 운동화 275"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://img2.joongna.com/media/original/2023/10/15/1697364712030zfq_3wQc6.jpg?impolicy=thumb&size=150"
              />
              <div className="absolute bottom-2 z-20 right-2 w-6 h-6">
                <label htmlFor=":r4i:" className="relative cursor-pointer">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none w-6 h-6"
                  >
                    <path
                      d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                      strokeWidth="1.5"
                      stroke="white"
                      fill="#9ca3afb4"
                    />
                  </svg>
                </label>
                <input id=":r4i:" type="checkbox" className="a11yHidden" />
              </div>
            </div>
            <div className="w-full overflow-hidden p-2 px-0">
              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                디올 남성 스니커즈 운동화 275
              </h2>
              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                150,000원
              </div>
              <div className="my-1 min-h-6">
                <span className="text-sm text-gray-400">-46352초 전</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                <div className="text-xs text-gray-400 text-muted">
                  찜 0 ∙ 채팅 0
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
            href="/product/203787896"
          >
            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
              <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
              <img
                alt="구찌 남성 스니커즈 운동화 285"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://img2.joongna.com/media/original/2025/03/11/17416806779618M2_z5Iby.jpg?impolicy=thumb&size=150"
              />
              <div className="absolute bottom-2 z-20 right-2 w-6 h-6">
                <label htmlFor=":r4j:" className="relative cursor-pointer">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none w-6 h-6"
                  >
                    <path
                      d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                      strokeWidth="1.5"
                      stroke="white"
                      fill="#9ca3afb4"
                    />
                  </svg>
                </label>
                <input id=":r4j:" type="checkbox" className="a11yHidden" />
              </div>
            </div>
            <div className="w-full overflow-hidden p-2 px-0">
              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                구찌 남성 스니커즈 운동화 285
              </h2>
              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                130,000원
              </div>
              <div className="my-1 min-h-6">
                <span className="text-sm text-gray-400">용신동</span>
                <span className="mx-1 text-sm text-gray-400">|</span>
                <span className="text-sm text-gray-400">-46339초 전</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                <div className="text-xs text-gray-400 text-muted">
                  찜 0 ∙ 채팅 0
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
            href="/product/217910330"
          >
            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
              <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
              <img
                alt="슬림55-66 썸머가격내림> 더캐시미어니트 럭키슈에뜨 MSGM 질스튜어트 산드로니트 랄프로렌니트 오일릴리 라코스테 타미힐피거 원피스"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://img2.joongna.com/cafe-article-data/live/2025/08/21/1114959739/1755742154389_000_usSXr_main.jpg?impolicy=thumb&size=150"
              />
              <div className="absolute bottom-2 z-20 right-2 w-6 h-6">
                <label htmlFor=":r4k:" className="relative cursor-pointer">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none w-6 h-6"
                  >
                    <path
                      d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                      strokeWidth="1.5"
                      stroke="white"
                      fill="#9ca3afb4"
                    />
                  </svg>
                </label>
                <input id=":r4k:" type="checkbox" className="a11yHidden" />
              </div>
            </div>
            <div className="w-full overflow-hidden p-2 px-0">
              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                슬림55-66 썸머가격내림&gt; 더캐시미어니트 럭키슈에뜨 MSGM
                질스튜어트 산드로니트 랄프로렌니트 오일릴리 라코스테 타미힐피거
                원피스
              </h2>
              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                11,111원
              </div>
              <div className="my-1 min-h-6">
                <span className="text-sm text-gray-400">-46337초 전</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                <div className="text-xs text-gray-400 text-muted">
                  찜 0 ∙ 채팅 0
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
            href="/product/203783597"
          >
            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
              <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
              <img
                alt="구찌 글리터 여성 스니커즈 운동화 225"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://img2.joongna.com/media/original/2025/03/11/1741678130900muC_mA9Cr.jpg?impolicy=thumb&size=150"
              />
              <div className="absolute bottom-2 z-20 right-2 w-6 h-6">
                <label htmlFor=":r4l:" className="relative cursor-pointer">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none w-6 h-6"
                  >
                    <path
                      d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                      strokeWidth="1.5"
                      stroke="white"
                      fill="#9ca3afb4"
                    />
                  </svg>
                </label>
                <input id=":r4l:" type="checkbox" className="a11yHidden" />
              </div>
            </div>
            <div className="w-full overflow-hidden p-2 px-0">
              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                구찌 글리터 여성 스니커즈 운동화 225
              </h2>
              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                170,000원
              </div>
              <div className="my-1 min-h-6">
                <span className="text-sm text-gray-400">용신동</span>
                <span className="mx-1 text-sm text-gray-400">|</span>
                <span className="text-sm text-gray-400">-46336초 전</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                <div className="text-xs text-gray-400 text-muted">
                  찜 0 ∙ 채팅 0
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
            href="/product/217910321"
          >
            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
              <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
              <img
                alt="아메카지 버즈릭슨 ma-1 마원 알버트 터너 L (40)"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://img2.joongna.com/cafe-article-data/live/2025/08/21/1114959733/1755742165081_000_atro0_main.jpg?impolicy=thumb&size=150"
              />
              <div className="absolute bottom-2 z-20 right-2 w-6 h-6">
                <label htmlFor=":r4m:" className="relative cursor-pointer">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none w-6 h-6"
                  >
                    <path
                      d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                      strokeWidth="1.5"
                      stroke="white"
                      fill="#9ca3afb4"
                    />
                  </svg>
                </label>
                <input id=":r4m:" type="checkbox" className="a11yHidden" />
              </div>
            </div>
            <div className="w-full overflow-hidden p-2 px-0">
              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                아메카지 버즈릭슨 ma-1 마원 알버트 터너 L (40)
              </h2>
              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                900,000원
              </div>
              <div className="my-1 min-h-6">
                <span className="text-sm text-gray-400">-46333초 전</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                <div className="text-xs text-gray-400 text-muted">
                  찜 0 ∙ 채팅 0
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
            href="/product/217910296"
          >
            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
              <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
              <img
                alt="아메카지 리얼맥코이 덱자켓 usn 스텐실 카키 42"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://img2.joongna.com/cafe-article-data/live/2025/08/21/1114959710/1755742130675_000_kc7n5_main.jpg?impolicy=thumb&size=150"
              />
              <div className="absolute bottom-2 z-20 right-2 w-6 h-6">
                <label htmlFor=":r4n:" className="relative cursor-pointer">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none w-6 h-6"
                  >
                    <path
                      d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                      strokeWidth="1.5"
                      stroke="white"
                      fill="#9ca3afb4"
                    />
                  </svg>
                </label>
                <input id=":r4n:" type="checkbox" className="a11yHidden" />
              </div>
            </div>
            <div className="w-full overflow-hidden p-2 px-0">
              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                아메카지 리얼맥코이 덱자켓 usn 스텐실 카키 42
              </h2>
              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                1,000,000원
              </div>
              <div className="my-1 min-h-6">
                <span className="text-sm text-gray-400">-46318초 전</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                <div className="text-xs text-gray-400 text-muted">
                  찜 0 ∙ 채팅 0
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
            href="/product/217868869"
          >
            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
              <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
              <img
                alt="페라가모 남성 로퍼 구두 260"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://img2.joongna.com/media/original/2025/08/20/1755678124680kmi_kzw2I.jpg?impolicy=thumb&size=150"
              />
              <div className="absolute bottom-2 z-20 right-2 w-6 h-6">
                <label htmlFor=":r4o:" className="relative cursor-pointer">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none w-6 h-6"
                  >
                    <path
                      d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                      strokeWidth="1.5"
                      stroke="white"
                      fill="#9ca3afb4"
                    />
                  </svg>
                </label>
                <input id=":r4o:" type="checkbox" className="a11yHidden" />
              </div>
            </div>
            <div className="w-full overflow-hidden p-2 px-0">
              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                페라가모 남성 로퍼 구두 260
              </h2>
              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                180,000원
              </div>
              <div className="my-1 min-h-6">
                <span className="text-sm text-gray-400">용신동</span>
                <span className="mx-1 text-sm text-gray-400">|</span>
                <span className="text-sm text-gray-400">-46317초 전</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                <div className="text-xs text-gray-400 text-muted">
                  찜 0 ∙ 채팅 0
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
            href="/product/217867059"
          >
            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
              <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
              <img
                alt="발리 남성 로퍼 구두 255"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://img2.joongna.com/media/original/2025/08/20/17556765526285UF_xpQSb.jpg?impolicy=thumb&size=150"
              />
              <div className="absolute bottom-2 z-20 right-2 w-6 h-6">
                <label htmlFor=":r4p:" className="relative cursor-pointer">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none w-6 h-6"
                  >
                    <path
                      d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                      strokeWidth="1.5"
                      stroke="white"
                      fill="#9ca3afb4"
                    />
                  </svg>
                </label>
                <input id=":r4p:" type="checkbox" className="a11yHidden" />
              </div>
            </div>
            <div className="w-full overflow-hidden p-2 px-0">
              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                발리 남성 로퍼 구두 255
              </h2>
              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                170,000원
              </div>
              <div className="my-1 min-h-6">
                <span className="text-sm text-gray-400">용신동</span>
                <span className="mx-1 text-sm text-gray-400">|</span>
                <span className="text-sm text-gray-400">-46315초 전</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                <div className="text-xs text-gray-400 text-muted">
                  찜 0 ∙ 채팅 0
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
            href="/product/217910290"
          >
            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
              <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
              <img
                alt="빈티지오메가 쿼츠, 티쏘 르로끌 20주년 한정판"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://img2.joongna.com/cafe-article-data/live/2025/08/21/1114959700/1755742125948_000_GuwPT_main.jpeg?impolicy=thumb&size=150"
              />
              <div className="absolute bottom-2 z-20 right-2 w-6 h-6">
                <label htmlFor=":r4q:" className="relative cursor-pointer">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none w-6 h-6"
                  >
                    <path
                      d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                      strokeWidth="1.5"
                      stroke="white"
                      fill="#9ca3afb4"
                    />
                  </svg>
                </label>
                <input id=":r4q:" type="checkbox" className="a11yHidden" />
              </div>
            </div>
            <div className="w-full overflow-hidden p-2 px-0">
              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                빈티지오메가 쿼츠, 티쏘 르로끌 20주년 한정판
              </h2>
              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                2,000원
              </div>
              <div className="my-1 min-h-6">
                <span className="text-sm text-gray-400">-46310초 전</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                <div className="text-xs text-gray-400 text-muted">
                  찜 0 ∙ 채팅 0
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
            href="/product/217910246"
          >
            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
              <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
              <img
                alt="TOMMY HILFIGER 자켓 2사이즈"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://img2.joongna.com/media/original/2025/08/21/1755742095992TGe_h0LMB.jpg?impolicy=thumb&size=150"
              />
              <div className="absolute bottom-2 z-20 right-2 w-6 h-6">
                <label htmlFor=":r4r:" className="relative cursor-pointer">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none w-6 h-6"
                  >
                    <path
                      d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                      strokeWidth="1.5"
                      stroke="white"
                      fill="#9ca3afb4"
                    />
                  </svg>
                </label>
                <input id=":r4r:" type="checkbox" className="a11yHidden" />
              </div>
            </div>
            <div className="w-full overflow-hidden p-2 px-0">
              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                TOMMY HILFIGER 자켓 2사이즈
              </h2>
              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                40,000원
              </div>
              <div className="my-1 min-h-6">
                <span className="text-sm text-gray-400">-46300초 전</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                <div className="text-xs text-gray-400 text-muted">
                  찜 0 ∙ 채팅 0
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
            href="/product/217854863"
          >
            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
              <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
              <img
                alt="볼워치 엔지니어3 마블라이트36 핑크"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://img2.joongna.com/cafe-article-data/live/2025/08/20/1114884103/1755665444378_000_Bro1k_main.jpg?impolicy=thumb&size=150"
              />
              <div className="absolute bottom-2 z-20 right-2 w-6 h-6">
                <label htmlFor=":r4s:" className="relative cursor-pointer">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none w-6 h-6"
                  >
                    <path
                      d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                      strokeWidth="1.5"
                      stroke="white"
                      fill="#9ca3afb4"
                    />
                  </svg>
                </label>
                <input id=":r4s:" type="checkbox" className="a11yHidden" />
              </div>
            </div>
            <div className="w-full overflow-hidden p-2 px-0">
              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                볼워치 엔지니어3 마블라이트36 핑크
              </h2>
              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                2,500,000원
              </div>
              <div className="my-1 min-h-6">
                <span className="text-sm text-gray-400">양포동</span>
                <span className="mx-1 text-sm text-gray-400">|</span>
                <span className="text-sm text-gray-400">-46296초 전</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                <div className="text-xs text-gray-400 text-muted">
                  찜 0 ∙ 채팅 0
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
            href="/product/217818273"
          >
            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
              <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
              <img
                alt="지샥 MRG-G2000R 모델 박스 풀셋으로 판매합니다"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://img2.joongna.com/media/original/2025/08/19/1755608524363266_4dX9Q.jpg?impolicy=thumb&size=150"
              />
              <div className="absolute bottom-2 z-20 right-2 w-6 h-6">
                <label htmlFor=":r4t:" className="relative cursor-pointer">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none w-6 h-6"
                  >
                    <path
                      d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                      strokeWidth="1.5"
                      stroke="white"
                      fill="#9ca3afb4"
                    />
                  </svg>
                </label>
                <input id=":r4t:" type="checkbox" className="a11yHidden" />
              </div>
            </div>
            <div className="w-full overflow-hidden p-2 px-0">
              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                지샥 MRG-G2000R 모델 박스 풀셋으로 판매합니다
              </h2>
              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                1,800,000원
              </div>
              <div className="my-1 min-h-6">
                <span className="text-sm text-gray-400">-46289초 전</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                <div className="text-xs text-gray-400 text-muted">
                  찜 0 ∙ 채팅 0
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
            href="/product/214567017"
          >
            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
              <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
              <img
                alt="오늘만)뉴발 574 레거시 주황 오렌지 팝니다"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://img2.joongna.com/media/original/2025/07/06/1751806852833V5V_KUoI3.jpg?impolicy=thumb&size=150"
              />
              <div className="absolute bottom-2 z-20 right-2 w-6 h-6">
                <label htmlFor=":r4u:" className="relative cursor-pointer">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none w-6 h-6"
                  >
                    <path
                      d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                      strokeWidth="1.5"
                      stroke="white"
                      fill="#9ca3afb4"
                    />
                  </svg>
                </label>
                <input id=":r4u:" type="checkbox" className="a11yHidden" />
              </div>
            </div>
            <div className="w-full overflow-hidden p-2 px-0">
              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                오늘만)뉴발 574 레거시 주황 오렌지 팝니다
              </h2>
              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                70,000원
              </div>
              <div className="my-1 min-h-6">
                <span className="text-sm text-gray-400">-46281초 전</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                <div className="text-xs text-gray-400 text-muted">
                  찜 0 ∙ 채팅 0
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a
            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
            href="/product/217910253"
          >
            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
              <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
              <img
                alt="마르셀로불론x이스트백 / 콜라보레이션 스네이크 백팩 / FREE"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                src="https://img2.joongna.com/cafe-article-data/live/2025/08/21/1114959650/1755742086430_011_iGnmQ_main.jpg?impolicy=thumb&size=150"
              />
              <div className="absolute bottom-2 z-20 right-2 w-6 h-6">
                <label htmlFor=":r4v:" className="relative cursor-pointer">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none w-6 h-6"
                  >
                    <path
                      d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                      strokeWidth="1.5"
                      stroke="white"
                      fill="#9ca3afb4"
                    />
                  </svg>
                </label>
                <input id=":r4v:" type="checkbox" className="a11yHidden" />
              </div>
            </div>
            <div className="w-full overflow-hidden p-2 px-0">
              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                마르셀로불론x이스트백 / 콜라보레이션 스네이크 백팩 / FREE
              </h2>
              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                280,000원
              </div>
              <div className="my-1 min-h-6">
                <span className="text-sm text-gray-400">-46278초 전</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                <div className="text-xs text-gray-400 text-muted">
                  찜 0 ∙ 채팅 0
                </div>
              </div>
            </div>
          </a>
        </li>
      </ul>
      <div className="bottom-0 py-3 m-auto text-center bg-white lg:mb-2">
        <ul className="flex justify-center space-x-2 space-x-reverse">
          <li className="w-4 mr-2">
            <a
              className="items-center hidden h-full"
              href="/search?category=1&page=0"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" />
              </svg>
            </a>
          </li>
          <li className="w-10 h-10 rounded-md shrink-0 bg-jngreen/80 text-white">
            <a className="block leading-10" href="/search?category=1&page=1">
              1
            </a>
          </li>
          <li className="w-10 h-10 rounded-md shrink-0">
            <a className="block leading-10" href="/search?category=1&page=2">
              2
            </a>
          </li>
          <li className="w-10 h-10 rounded-md shrink-0">
            <a className="block leading-10" href="/search?category=1&page=3">
              3
            </a>
          </li>
          <li className="w-10 h-10 rounded-md shrink-0">
            <a className="block leading-10" href="/search?category=1&page=4">
              4
            </a>
          </li>
          <li className="w-10 h-10 rounded-md shrink-0">
            <a className="block leading-10" href="/search?category=1&page=5">
              5
            </a>
          </li>
          <li className="w-10 h-10 rounded-md shrink-0">
            <a className="block leading-10" href="/search?category=1&page=6">
              6
            </a>
          </li>
          <li className="w-10 h-10 rounded-md shrink-0">
            <a className="block leading-10" href="/search?category=1&page=7">
              7
            </a>
          </li>
          <li className="w-10 h-10 rounded-md shrink-0">
            <a className="block leading-10" href="/search?category=1&page=8">
              8
            </a>
          </li>
          <li className="w-10 h-10 rounded-md shrink-0">
            <a className="block leading-10" href="/search?category=1&page=9">
              9
            </a>
          </li>
          <li className="w-10 h-10 rounded-md shrink-0">
            <a className="block leading-10" href="/search?category=1&page=10">
              10
            </a>
          </li>
          <li className="w-10 h-10 rounded-md shrink-0">
            <a className="block leading-10" href="/search?category=1&page=11">
              11
            </a>
          </li>
          <li className="w-4 mr-2">
            <a
              className="items-center h-full flex"
              href="/search?category=1&page=2"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <div className="flex justify-end">
        <button
          className="rounded-[30px] bg-white/90 border border-jnGray-300 fixed z-10 bottom-10 2xl:translate-x-20"
          id="keyword-notice"
          style={{
            filter: "drop-shadow(rgba(0, 0, 0, 0.06) 2px 2px 12px)",
            opacity: 1
          }}
        >
          <div className="font-semibold my-[13px] ml-5 mr-[60px] text-sm md:my-[15px] md:ml-5 md:mr-[72px] md:text-lg text-jnBlack">
            키워드 알림 받기
          </div>
          <div className="w-12 h-12 absolute -top-[1px] -right-[1px] md:w-[60px] md:h-[60px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={60}
              height={60}
              viewBox="0 0 60 60"
              fill="none"
              className="w-full h-auto"
            >
              <circle cx={30} cy={30} r={30} fill="#0DCC5A" />
              <path
                d="M33.7258 41.8266C35.1672 41.8266 35.9287 43.5329 34.9672 44.606C34.3426 45.305 33.5774 45.864 32.7216 46.2465C31.8659 46.629 30.9389 46.8264 30.0016 46.8256C29.0642 46.8264 28.1373 46.629 27.2816 46.2465C26.4258 45.864 25.6606 45.305 25.036 44.606C24.1162 43.5796 24.7727 41.9749 26.0924 41.8383L26.2757 41.8283L33.7258 41.8266Z"
                fill="white"
              />
              <path
                d="M30 13.5001C32.2629 13.5001 34.1758 15.0048 34.7907 17.0677L34.8673 17.3526L34.8807 17.4243C36.7176 18.4606 38.2829 19.9173 39.4484 21.6751C40.6139 23.4329 41.3464 25.4417 41.5859 27.5372L41.6326 28.0154L41.6643 28.497V33.3809L41.6992 33.6076C41.9274 34.8353 42.6068 35.9333 43.6038 36.6853L43.8821 36.8802L44.1521 37.0452C45.5851 37.8567 45.0852 39.9879 43.5239 40.1512L43.3306 40.1612H16.6695C14.9565 40.1612 14.3583 37.8883 15.848 37.0452C16.4829 36.6859 17.0315 36.192 17.4552 35.5981C17.879 35.0042 18.1676 34.3248 18.3008 33.6076L18.3358 33.3693L18.3375 28.4203C18.4391 26.2439 19.0726 24.1256 20.1826 22.2507C21.2925 20.3759 22.8451 18.8017 24.7045 17.6659L25.1177 17.4226L25.1344 17.351C25.3701 16.3546 25.9058 15.4544 26.6692 14.7721C27.4326 14.0897 28.387 13.658 29.4035 13.5351L29.7068 13.5068L30 13.5001Z"
                fill="white"
              />
            </svg>
          </div>
        </button>
      </div>
      <ins
        className="adsbygoogle max-w-[1280px] lg:my-[60px] my-[40px]"
        style={{ display: "flex", justifyContent: "center", height: 280 }}
        data-ad-client="ca-pub-5776516316749134"
        data-ad-slot={8548265740}
        data-full-width-responsive="true"
        data-ad-format="auto"
        data-adsbygoogle-status="done"
      >
        <div
          id="aswift_1_host"
          style={{
            border: "medium",
            height: 280,
            width: 1024,
            margin: 0,
            padding: 0,
            position: "relative",
            visibility: "visible",
            backgroundColor: "transparent",
            display: "inline-block"
          }}
        />
      </ins>
      <div className="mb-9 sm:mb-[60px]">
        <div className="flex flex-wrap items-center mb-4 md:mb-5">
          <h3 className="md:text-[22px] font-bold text-jnBlack mr-2 text-lg empty:h-7">
            새 상품은 어떠세요?
          </h3>
          <img
            alt="ad"
            loading="lazy"
            width={23}
            height={16}
            decoding="async"
            data-nimg={1}
            style={{ color: "transparent" }}
            src="/main-web/_next/static/media/ad.a5b420c4.png"
          />
        </div>
        <ul className="grid grid-cols-3 sm:grid-cols-5 xl:grid-cols-6 gap-x-3 lg:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8 ">
          <li className="pb-2">
            <div className="group box-border overflow-hidden flex rounded-md bg-white pe-0 md:pb-1 flex-col">
              <a
                href="https://io.cpczapi38a.kr/adlanding/?adid=89&subid=joongna33&landing_url=https%3A%2F%2Flink.coupang.com%2Fre%2FAFFSDP%3Flptag%3DAF1784908%26subid%3Djoongna33%26pageKey%3D8957404843%26itemId%3D26209039620%26vendorItemId%3D93188140767%26traceid%3DV0-153-18f6688901a80e4d%26requestid%3D20250821111643360288987848%26token%3D31850C%257CMIXED&adtype=2"
                rel="sponsored noreferrer"
                target="_blank"
                className="flex mb-3 pb-0 relatvie dim relative pt-[100%] w-full overflow-hidden "
              >
                <span
                  style={{
                    boxSizing: "border-box",
                    display: "block",
                    overflow: "hidden",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0,
                    position: "absolute",
                    inset: 0
                  }}
                >
                  <img
                    alt="레이밴 RX4379VD 2000 53 공식수입 스퀘어 뿔테 오버사이즈 아시안핏 레이벤 안경테"
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                    decoding="async"
                    data-nimg="fill"
                    className="bg-gray-300 object-cover rounded-s-md rounded-md transition duration-150 ease-linear transform hover:scale-105 cursor-pointer"
                    style={{
                      position: "absolute",
                      inset: 0,
                      boxSizing: "border-box",
                      padding: 0,
                      border: "medium",
                      margin: "auto",
                      display: "block",
                      width: 0,
                      height: 0,
                      minWidth: "100%",
                      maxWidth: "100%",
                      minHeight: "100%",
                      maxHeight: "100%"
                    }}
                  />
                  <noscript />
                </span>
              </a>
              <div className="w-full overflow-hidden">
                <div className="h-10">
                  <a
                    href="https://io.cpczapi38a.kr/adlanding/?adid=89&subid=joongna33&landing_url=https%3A%2F%2Flink.coupang.com%2Fre%2FAFFSDP%3Flptag%3DAF1784908%26subid%3Djoongna33%26pageKey%3D8957404843%26itemId%3D26209039620%26vendorItemId%3D93188140767%26traceid%3DV0-153-18f6688901a80e4d%26requestid%3D20250821111643360288987848%26token%3D31850C%257CMIXED&adtype=2"
                    rel="sponsored noreferrer"
                    target="_blank"
                    className="line-clamp-2 text-ellipsis text-sm break-all max-w-[250px] hover:underline text-heading"
                  >
                    레이밴 RX4379VD 2000 53 공식수입 스퀘어 뿔테 오버사이즈
                    아시안핏 레이벤 안경테
                  </a>
                </div>
                <div className="space-s-2 text-heading">
                  <div className="inline-block flex gap-1">
                    <strong>107,920원</strong>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-xs font-normal mr-1 text-gray-400 pt-1 pb-0.5">
                    쿠팡
                  </span>
                </div>
              </div>
            </div>
          </li>
          <li className="pb-2">
            <div className="group box-border overflow-hidden flex rounded-md bg-white pe-0 md:pb-1 flex-col">
              <a
                href="https://io.cpczapi38a.kr/adlanding/?adid=89&subid=joongna33&landing_url=https%3A%2F%2Flink.coupang.com%2Fre%2FAFFSDP%3Flptag%3DAF1784908%26subid%3Djoongna33%26pageKey%3D6641238827%26itemId%3D15182010882%26vendorItemId%3D82403269266%26traceid%3DV0-153-58fcced1cf944598%26requestid%3D20250821111643360288987848%26token%3D31850C%257CMIXED&adtype=2"
                rel="sponsored noreferrer"
                target="_blank"
                className="flex mb-3 pb-0 relatvie dim relative pt-[100%] w-full overflow-hidden "
              >
                <span
                  style={{
                    boxSizing: "border-box",
                    display: "block",
                    overflow: "hidden",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0,
                    position: "absolute",
                    inset: 0
                  }}
                >
                  <img
                    alt="명품양산 미니 가벼운 수입양산 기념일 축하 파티 장식 레이스 우산 공주 파라솔 우산 춤 특이한 양산 구지름 76~82 cm 높이 66-67.5cm"
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                    decoding="async"
                    data-nimg="fill"
                    className="bg-gray-300 object-cover rounded-s-md rounded-md transition duration-150 ease-linear transform hover:scale-105 cursor-pointer"
                    style={{
                      position: "absolute",
                      inset: 0,
                      boxSizing: "border-box",
                      padding: 0,
                      border: "medium",
                      margin: "auto",
                      display: "block",
                      width: 0,
                      height: 0,
                      minWidth: "100%",
                      maxWidth: "100%",
                      minHeight: "100%",
                      maxHeight: "100%"
                    }}
                  />
                  <noscript />
                </span>
              </a>
              <div className="w-full overflow-hidden">
                <div className="h-10">
                  <a
                    href="https://io.cpczapi38a.kr/adlanding/?adid=89&subid=joongna33&landing_url=https%3A%2F%2Flink.coupang.com%2Fre%2FAFFSDP%3Flptag%3DAF1784908%26subid%3Djoongna33%26pageKey%3D6641238827%26itemId%3D15182010882%26vendorItemId%3D82403269266%26traceid%3DV0-153-58fcced1cf944598%26requestid%3D20250821111643360288987848%26token%3D31850C%257CMIXED&adtype=2"
                    rel="sponsored noreferrer"
                    target="_blank"
                    className="line-clamp-2 text-ellipsis text-sm break-all max-w-[250px] hover:underline text-heading"
                  >
                    명품양산 미니 가벼운 수입양산 기념일 축하 파티 장식 레이스
                    우산 공주 파라솔 우산 춤 특이한 양산 구지름 76~82 cm 높이
                    66-67.5cm
                  </a>
                </div>
                <div className="space-s-2 text-heading">
                  <div className="inline-block flex gap-1">
                    <strong>62,600원</strong>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-xs font-normal mr-1 text-gray-400 pt-1 pb-0.5">
                    쿠팡
                  </span>
                </div>
              </div>
            </div>
          </li>
          <li className="pb-2">
            <div className="group box-border overflow-hidden flex rounded-md bg-white pe-0 md:pb-1 flex-col">
              <a
                href="https://io.cpczapi38a.kr/adlanding/?adid=89&subid=joongna33&landing_url=https%3A%2F%2Flink.coupang.com%2Fre%2FAFFSDP%3Flptag%3DAF1784908%26subid%3Djoongna33%26pageKey%3D5917330929%26itemId%3D10479358008%26vendorItemId%3D81917827115%26traceid%3DV0-153-fa29be5ce4d44b63%26clickBeacon%3De16c5da0-7e34-11f0-b195-c515e5d87441%257E3%26requestid%3D20250821111643360288987848%26token%3D31850C%257CMIXED&adtype=2"
                rel="sponsored noreferrer"
                target="_blank"
                className="flex mb-3 pb-0 relatvie dim relative pt-[100%] w-full overflow-hidden "
              >
                <span
                  style={{
                    boxSizing: "border-box",
                    display: "block",
                    overflow: "hidden",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0,
                    position: "absolute",
                    inset: 0
                  }}
                >
                  <img
                    alt="라리브 데스티니 오 드 퍼퓸, 90ml, 1개"
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                    decoding="async"
                    data-nimg="fill"
                    className="bg-gray-300 object-cover rounded-s-md rounded-md transition duration-150 ease-linear transform hover:scale-105 cursor-pointer"
                    style={{
                      position: "absolute",
                      inset: 0,
                      boxSizing: "border-box",
                      padding: 0,
                      border: "medium",
                      margin: "auto",
                      display: "block",
                      width: 0,
                      height: 0,
                      minWidth: "100%",
                      maxWidth: "100%",
                      minHeight: "100%",
                      maxHeight: "100%"
                    }}
                  />
                  <noscript />
                </span>
              </a>
              <div className="w-full overflow-hidden">
                <div className="h-10">
                  <a
                    href="https://io.cpczapi38a.kr/adlanding/?adid=89&subid=joongna33&landing_url=https%3A%2F%2Flink.coupang.com%2Fre%2FAFFSDP%3Flptag%3DAF1784908%26subid%3Djoongna33%26pageKey%3D5917330929%26itemId%3D10479358008%26vendorItemId%3D81917827115%26traceid%3DV0-153-fa29be5ce4d44b63%26clickBeacon%3De16c5da0-7e34-11f0-b195-c515e5d87441%257E3%26requestid%3D20250821111643360288987848%26token%3D31850C%257CMIXED&adtype=2"
                    rel="sponsored noreferrer"
                    target="_blank"
                    className="line-clamp-2 text-ellipsis text-sm break-all max-w-[250px] hover:underline text-heading"
                  >
                    라리브 데스티니 오 드 퍼퓸, 90ml, 1개
                  </a>
                </div>
                <div className="space-s-2 text-heading">
                  <div className="inline-block flex gap-1">
                    <strong>21,050원</strong>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-xs font-normal mr-1 text-gray-400 pt-1 pb-0.5">
                    쿠팡
                  </span>
                </div>
              </div>
            </div>
          </li>
          <li className="pb-2">
            <div className="group box-border overflow-hidden flex rounded-md bg-white pe-0 md:pb-1 flex-col">
              <a
                href="https://io.cpczapi38a.kr/adlanding/?adid=89&subid=joongna33&landing_url=https%3A%2F%2Flink.coupang.com%2Fre%2FAFFSDP%3Flptag%3DAF1784908%26subid%3Djoongna33%26pageKey%3D8773797348%26itemId%3D25522934829%26vendorItemId%3D92514763357%26traceid%3DV0-153-387eb2ccabfd0a0d%26requestid%3D20250821111643360288987848%26token%3D31850C%257CMIXED&adtype=2"
                rel="sponsored noreferrer"
                target="_blank"
                className="flex mb-3 pb-0 relatvie dim relative pt-[100%] w-full overflow-hidden "
              >
                <span
                  style={{
                    boxSizing: "border-box",
                    display: "block",
                    overflow: "hidden",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0,
                    position: "absolute",
                    inset: 0
                  }}
                >
                  <img
                    alt="코너양면시계 병원 호텔 수입 명품 디지털 벽걸이시계"
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                    decoding="async"
                    data-nimg="fill"
                    className="bg-gray-300 object-cover rounded-s-md rounded-md transition duration-150 ease-linear transform hover:scale-105 cursor-pointer"
                    style={{
                      position: "absolute",
                      inset: 0,
                      boxSizing: "border-box",
                      padding: 0,
                      border: "medium",
                      margin: "auto",
                      display: "block",
                      width: 0,
                      height: 0,
                      minWidth: "100%",
                      maxWidth: "100%",
                      minHeight: "100%",
                      maxHeight: "100%"
                    }}
                  />
                  <noscript />
                </span>
              </a>
              <div className="w-full overflow-hidden">
                <div className="h-10">
                  <a
                    href="https://io.cpczapi38a.kr/adlanding/?adid=89&subid=joongna33&landing_url=https%3A%2F%2Flink.coupang.com%2Fre%2FAFFSDP%3Flptag%3DAF1784908%26subid%3Djoongna33%26pageKey%3D8773797348%26itemId%3D25522934829%26vendorItemId%3D92514763357%26traceid%3DV0-153-387eb2ccabfd0a0d%26requestid%3D20250821111643360288987848%26token%3D31850C%257CMIXED&adtype=2"
                    rel="sponsored noreferrer"
                    target="_blank"
                    className="line-clamp-2 text-ellipsis text-sm break-all max-w-[250px] hover:underline text-heading"
                  >
                    코너양면시계 병원 호텔 수입 명품 디지털 벽걸이시계
                  </a>
                </div>
                <div className="space-s-2 text-heading">
                  <div className="inline-block flex gap-1">
                    <strong>105,000원</strong>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-xs font-normal mr-1 text-gray-400 pt-1 pb-0.5">
                    쿠팡
                  </span>
                </div>
              </div>
            </div>
          </li>
          <li className="pb-2">
            <div className="group box-border overflow-hidden flex rounded-md bg-white pe-0 md:pb-1 flex-col">
              <a
                href="https://io.cpczapi38a.kr/adlanding/?adid=89&subid=joongna33&landing_url=https%3A%2F%2Flink.coupang.com%2Fre%2FAFFSDP%3Flptag%3DAF1784908%26subid%3Djoongna33%26pageKey%3D8930461991%26itemId%3D26105808246%26vendorItemId%3D93086425439%26traceid%3DV0-153-3c1862ed63673843%26requestid%3D20250821111643360288987848%26token%3D31850C%257CMIXED&adtype=2"
                rel="sponsored noreferrer"
                target="_blank"
                className="flex mb-3 pb-0 relatvie dim relative pt-[100%] w-full overflow-hidden "
              >
                <span
                  style={{
                    boxSizing: "border-box",
                    display: "block",
                    overflow: "hidden",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0,
                    position: "absolute",
                    inset: 0
                  }}
                >
                  <img
                    alt="남자명품청바지 라이트블루 워싱 데님 팬츠 클래식 밀라노 프리미엄 청바지"
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                    decoding="async"
                    data-nimg="fill"
                    className="bg-gray-300 object-cover rounded-s-md rounded-md transition duration-150 ease-linear transform hover:scale-105 cursor-pointer"
                    style={{
                      position: "absolute",
                      inset: 0,
                      boxSizing: "border-box",
                      padding: 0,
                      border: "medium",
                      margin: "auto",
                      display: "block",
                      width: 0,
                      height: 0,
                      minWidth: "100%",
                      maxWidth: "100%",
                      minHeight: "100%",
                      maxHeight: "100%"
                    }}
                  />
                  <noscript />
                </span>
              </a>
              <div className="w-full overflow-hidden">
                <div className="h-10">
                  <a
                    href="https://io.cpczapi38a.kr/adlanding/?adid=89&subid=joongna33&landing_url=https%3A%2F%2Flink.coupang.com%2Fre%2FAFFSDP%3Flptag%3DAF1784908%26subid%3Djoongna33%26pageKey%3D8930461991%26itemId%3D26105808246%26vendorItemId%3D93086425439%26traceid%3DV0-153-3c1862ed63673843%26requestid%3D20250821111643360288987848%26token%3D31850C%257CMIXED&adtype=2"
                    rel="sponsored noreferrer"
                    target="_blank"
                    className="line-clamp-2 text-ellipsis text-sm break-all max-w-[250px] hover:underline text-heading"
                  >
                    남자명품청바지 라이트블루 워싱 데님 팬츠 클래식 밀라노
                    프리미엄 청바지
                  </a>
                </div>
                <div className="space-s-2 text-heading">
                  <div className="inline-block flex gap-1">
                    <strong>157,500원</strong>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-xs font-normal mr-1 text-gray-400 pt-1 pb-0.5">
                    쿠팡
                  </span>
                </div>
              </div>
            </div>
          </li>
          <li className="pb-2">
            <div className="group box-border overflow-hidden flex rounded-md bg-white pe-0 md:pb-1 flex-col">
              <a
                href="https://io.cpczapi38a.kr/adlanding/?adid=89&subid=joongna33&landing_url=https%3A%2F%2Flink.coupang.com%2Fre%2FAFFSDP%3Flptag%3DAF1784908%26subid%3Djoongna33%26pageKey%3D7774749752%26itemId%3D20999343679%26vendorItemId%3D88063306961%26traceid%3DV0-153-760156b1574d9b8d%26requestid%3D20250821111643360288987848%26token%3D31850C%257CMIXED&adtype=2"
                rel="sponsored noreferrer"
                target="_blank"
                className="flex mb-3 pb-0 relatvie dim relative pt-[100%] w-full overflow-hidden "
              >
                <span
                  style={{
                    boxSizing: "border-box",
                    display: "block",
                    overflow: "hidden",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0,
                    position: "absolute",
                    inset: 0
                  }}
                >
                  <img
                    alt="르뎀 마호가니 원목 엔틱 서랍형 책상 서재 수입 명품 입식 테이블 우드(1600)"
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                    decoding="async"
                    data-nimg="fill"
                    className="bg-gray-300 object-cover rounded-s-md rounded-md transition duration-150 ease-linear transform hover:scale-105 cursor-pointer"
                    style={{
                      position: "absolute",
                      inset: 0,
                      boxSizing: "border-box",
                      padding: 0,
                      border: "medium",
                      margin: "auto",
                      display: "block",
                      width: 0,
                      height: 0,
                      minWidth: "100%",
                      maxWidth: "100%",
                      minHeight: "100%",
                      maxHeight: "100%"
                    }}
                  />
                  <noscript />
                </span>
              </a>
              <div className="w-full overflow-hidden">
                <div className="h-10">
                  <a
                    href="https://io.cpczapi38a.kr/adlanding/?adid=89&subid=joongna33&landing_url=https%3A%2F%2Flink.coupang.com%2Fre%2FAFFSDP%3Flptag%3DAF1784908%26subid%3Djoongna33%26pageKey%3D7774749752%26itemId%3D20999343679%26vendorItemId%3D88063306961%26traceid%3DV0-153-760156b1574d9b8d%26requestid%3D20250821111643360288987848%26token%3D31850C%257CMIXED&adtype=2"
                    rel="sponsored noreferrer"
                    target="_blank"
                    className="line-clamp-2 text-ellipsis text-sm break-all max-w-[250px] hover:underline text-heading"
                  >
                    르뎀 마호가니 원목 엔틱 서랍형 책상 서재 수입 명품 입식
                    테이블 우드(1600)
                  </a>
                </div>
                <div className="space-s-2 text-heading">
                  <div className="inline-block flex gap-1">
                    <strong>1,100,000원</strong>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-xs font-normal mr-1 text-gray-400 pt-1 pb-0.5">
                    쿠팡
                  </span>
                </div>
              </div>
            </div>
          </li>
          <li className="pb-2 max-[479px]:hidden">
            <div className="group box-border overflow-hidden flex rounded-md bg-white pe-0 md:pb-1 flex-col">
              <a
                href="https://io.cpczapi38a.kr/adlanding/?adid=89&subid=joongna33&landing_url=https%3A%2F%2Flink.coupang.com%2Fre%2FAFFSDP%3Flptag%3DAF1784908%26subid%3Djoongna33%26pageKey%3D8972091521%26itemId%3D26259810066%26vendorItemId%3D93238137084%26traceid%3DV0-153-6f6461d43d0fe9e7%26requestid%3D20250821111643360288987848%26token%3D31850C%257CMIXED&adtype=2"
                rel="sponsored noreferrer"
                target="_blank"
                className="flex mb-3 pb-0 relatvie dim relative pt-[100%] w-full overflow-hidden "
              >
                <span
                  style={{
                    boxSizing: "border-box",
                    display: "block",
                    overflow: "hidden",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0,
                    position: "absolute",
                    inset: 0
                  }}
                >
                  <img
                    alt="(수입산 묵은지) 세계3대 비옥토 흑토 고랭지에서 키운 설미 명품 묵은지 김치"
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                    decoding="async"
                    data-nimg="fill"
                    className="bg-gray-300 object-cover rounded-s-md rounded-md transition duration-150 ease-linear transform hover:scale-105 cursor-pointer"
                    style={{
                      position: "absolute",
                      inset: 0,
                      boxSizing: "border-box",
                      padding: 0,
                      border: "medium",
                      margin: "auto",
                      display: "block",
                      width: 0,
                      height: 0,
                      minWidth: "100%",
                      maxWidth: "100%",
                      minHeight: "100%",
                      maxHeight: "100%"
                    }}
                  />
                  <noscript />
                </span>
              </a>
              <div className="w-full overflow-hidden">
                <div className="h-10">
                  <a
                    href="https://io.cpczapi38a.kr/adlanding/?adid=89&subid=joongna33&landing_url=https%3A%2F%2Flink.coupang.com%2Fre%2FAFFSDP%3Flptag%3DAF1784908%26subid%3Djoongna33%26pageKey%3D8972091521%26itemId%3D26259810066%26vendorItemId%3D93238137084%26traceid%3DV0-153-6f6461d43d0fe9e7%26requestid%3D20250821111643360288987848%26token%3D31850C%257CMIXED&adtype=2"
                    rel="sponsored noreferrer"
                    target="_blank"
                    className="line-clamp-2 text-ellipsis text-sm break-all max-w-[250px] hover:underline text-heading"
                  >
                    (수입산 묵은지) 세계3대 비옥토 흑토 고랭지에서 키운 설미
                    명품 묵은지 김치
                  </a>
                </div>
                <div className="space-s-2 text-heading">
                  <div className="inline-block flex gap-1">
                    <strong>22,900원</strong>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-xs font-normal mr-1 text-gray-400 pt-1 pb-0.5">
                    쿠팡
                  </span>
                </div>
              </div>
            </div>
          </li>
          <li className="pb-2 max-[479px]:hidden">
            <div className="group box-border overflow-hidden flex rounded-md bg-white pe-0 md:pb-1 flex-col">
              <a
                href="https://io.cpczapi38a.kr/adlanding/?adid=89&subid=joongna33&landing_url=https%3A%2F%2Flink.coupang.com%2Fre%2FAFFSDP%3Flptag%3DAF1784908%26subid%3Djoongna33%26pageKey%3D7887163348%26itemId%3D21582800395%26vendorItemId%3D88634381677%26traceid%3DV0-153-703bc980244564c3%26requestid%3D20250821111643360288987848%26token%3D31850C%257CMIXED&adtype=2"
                rel="sponsored noreferrer"
                target="_blank"
                className="flex mb-3 pb-0 relatvie dim relative pt-[100%] w-full overflow-hidden "
              >
                <span
                  style={{
                    boxSizing: "border-box",
                    display: "block",
                    overflow: "hidden",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0,
                    position: "absolute",
                    inset: 0
                  }}
                >
                  <img
                    alt="레이벤 레이밴 명품 안경테 RB8422 2890 54 블랙 골드"
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                    decoding="async"
                    data-nimg="fill"
                    className="bg-gray-300 object-cover rounded-s-md rounded-md transition duration-150 ease-linear transform hover:scale-105 cursor-pointer"
                    style={{
                      position: "absolute",
                      inset: 0,
                      boxSizing: "border-box",
                      padding: 0,
                      border: "medium",
                      margin: "auto",
                      display: "block",
                      width: 0,
                      height: 0,
                      minWidth: "100%",
                      maxWidth: "100%",
                      minHeight: "100%",
                      maxHeight: "100%"
                    }}
                  />
                  <noscript />
                </span>
              </a>
              <div className="w-full overflow-hidden">
                <div className="h-10">
                  <a
                    href="https://io.cpczapi38a.kr/adlanding/?adid=89&subid=joongna33&landing_url=https%3A%2F%2Flink.coupang.com%2Fre%2FAFFSDP%3Flptag%3DAF1784908%26subid%3Djoongna33%26pageKey%3D7887163348%26itemId%3D21582800395%26vendorItemId%3D88634381677%26traceid%3DV0-153-703bc980244564c3%26requestid%3D20250821111643360288987848%26token%3D31850C%257CMIXED&adtype=2"
                    rel="sponsored noreferrer"
                    target="_blank"
                    className="line-clamp-2 text-ellipsis text-sm break-all max-w-[250px] hover:underline text-heading"
                  >
                    레이벤 레이밴 명품 안경테 RB8422 2890 54 블랙 골드
                  </a>
                </div>
                <div className="space-s-2 text-heading">
                  <div className="inline-block flex gap-1">
                    <strong>228,800원</strong>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-xs font-normal mr-1 text-gray-400 pt-1 pb-0.5">
                    쿠팡
                  </span>
                </div>
              </div>
            </div>
          </li>
          <li className="pb-2 max-[479px]:hidden">
            <div className="group box-border overflow-hidden flex rounded-md bg-white pe-0 md:pb-1 flex-col">
              <a
                href="https://io.cpczapi38a.kr/adlanding/?adid=89&subid=joongna33&landing_url=https%3A%2F%2Flink.coupang.com%2Fre%2FAFFSDP%3Flptag%3DAF1784908%26subid%3Djoongna33%26pageKey%3D8647935614%26itemId%3D24581597038%26vendorItemId%3D91593354518%26traceid%3DV0-153-5938d524f3c7fc80%26requestid%3D20250821111643360288987848%26token%3D31850C%257CMIXED&adtype=2"
                rel="sponsored noreferrer"
                target="_blank"
                className="flex mb-3 pb-0 relatvie dim relative pt-[100%] w-full overflow-hidden "
              >
                <span
                  style={{
                    boxSizing: "border-box",
                    display: "block",
                    overflow: "hidden",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0,
                    position: "absolute",
                    inset: 0
                  }}
                >
                  <img
                    alt="10개세트 금장단추 빈티지 자켓 고급 명품 의류부자재 단추 E"
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                    decoding="async"
                    data-nimg="fill"
                    className="bg-gray-300 object-cover rounded-s-md rounded-md transition duration-150 ease-linear transform hover:scale-105 cursor-pointer"
                    style={{
                      position: "absolute",
                      inset: 0,
                      boxSizing: "border-box",
                      padding: 0,
                      border: "medium",
                      margin: "auto",
                      display: "block",
                      width: 0,
                      height: 0,
                      minWidth: "100%",
                      maxWidth: "100%",
                      minHeight: "100%",
                      maxHeight: "100%"
                    }}
                  />
                  <noscript />
                </span>
              </a>
              <div className="w-full overflow-hidden">
                <div className="h-10">
                  <a
                    href="https://io.cpczapi38a.kr/adlanding/?adid=89&subid=joongna33&landing_url=https%3A%2F%2Flink.coupang.com%2Fre%2FAFFSDP%3Flptag%3DAF1784908%26subid%3Djoongna33%26pageKey%3D8647935614%26itemId%3D24581597038%26vendorItemId%3D91593354518%26traceid%3DV0-153-5938d524f3c7fc80%26requestid%3D20250821111643360288987848%26token%3D31850C%257CMIXED&adtype=2"
                    rel="sponsored noreferrer"
                    target="_blank"
                    className="line-clamp-2 text-ellipsis text-sm break-all max-w-[250px] hover:underline text-heading"
                  >
                    10개세트 금장단추 빈티지 자켓 고급 명품 의류부자재 단추 E
                  </a>
                </div>
                <div className="space-s-2 text-heading">
                  <div className="inline-block flex gap-1">
                    <strong>18,300원</strong>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-xs font-normal mr-1 text-gray-400 pt-1 pb-0.5">
                    쿠팡
                  </span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <div className="flex flex-wrap items-center mb-0 md:mb-0">
          <h3 className="md:text-[22px] font-bold text-jnBlack mr-2 text-lg empty:h-7">
            파워링크
          </h3>
          <img
            alt="ad"
            loading="lazy"
            width={23}
            height={16}
            decoding="async"
            data-nimg={1}
            style={{ color: "transparent" }}
            src="/main-web/_next/static/media/ad.a5b420c4.png"
          />
        </div>
        <ul>
          <li className="flex border-b-[1px] border-jnGray-200 py-4 gap-3">
            <a
              rel="sponsored noreferrer"
              target="_black"
              href="https://ader.naver.com/v1/EXkjJ9mh0xrNuZzj_7oHXD-mde-WlMLbZBIzuwiZ1mXDSQ-m-eWQImZtd1KqvkX8A1L7HVgZnsU80DoEBmi2qYhdwAl4QlAYA8UMaGfHQzXvXKGHYaHD7gigfy-3YoVKvb7HggV9D5y8iV7AXIFzx0gIPcYj2g6VV6gFjWNFqLw5k97_WsahU0Y38BSSY42KVWciLUfFCtTXfQAAOgzh6E81EdGMkR2CanjT1IsO2wI=?c=m_joongna.ch4&t=0"
              className="flex-none"
            >
              <img
                alt="해외직구는 언제나 직구나라"
                loading="lazy"
                width={100}
                height={100}
                decoding="async"
                data-nimg={1}
                className="rounded-lg w-[88px] h-[88px]"
                style={{ color: "transparent" }}
                src="https://searchad-phinf.pstatic.net/MjAxOTAzMjNfMTk1/MDAxNTUzMzIwMzgyMzE1.EA2ajamYS2hw-Rkl1Y8HMIjUV6AnjV-xEIyUJblTtR0g.pL8npHtSiO0vghqUKCBC11ClVS2rXkN_fXzLNGDy8HEg.JPEG/728914-c428c127-a925-459d-94db-c3f5dbdb1f24.jpg?type=f174_174"
              />
            </a>
            <div className="flex flex-col gap-2 text-xs">
              <a
                rel="sponsored noreferrer"
                target="_black"
                href="https://ader.naver.com/v1/EXkjJ9mh0xrNuZzj_7oHXD-mde-WlMLbZBIzuwiZ1mXDSQ-m-eWQImZtd1KqvkX8A1L7HVgZnsU80DoEBmi2qYhdwAl4QlAYA8UMaGfHQzXvXKGHYaHD7gigfy-3YoVKvb7HggV9D5y8iV7AXIFzx0gIPcYj2g6VV6gFjWNFqLw5k97_WsahU0Y38BSSY42KVWciLUfFCtTXfQAAOgzh6E81EdGMkR2CanjT1IsO2wI=?c=m_joongna.ch4&t=0"
                className="text-jnGray-500 leading-[17px]"
              >
                http://zicgoonara.com
              </a>
              <div className="text-base leading-[22px] text-jnSuccessBlue text-ellipsis break-all line-clamp-1">
                <a
                  rel="sponsored noreferrer"
                  target="_black"
                  href="https://ader.naver.com/v1/EXkjJ9mh0xrNuZzj_7oHXD-mde-WlMLbZBIzuwiZ1mXDSQ-m-eWQImZtd1KqvkX8A1L7HVgZnsU80DoEBmi2qYhdwAl4QlAYA8UMaGfHQzXvXKGHYaHD7gigfy-3YoVKvb7HggV9D5y8iV7AXIFzx0gIPcYj2g6VV6gFjWNFqLw5k97_WsahU0Y38BSSY42KVWciLUfFCtTXfQAAOgzh6E81EdGMkR2CanjT1IsO2wI=?c=m_joongna.ch4&t=0"
                  className="border-b border-jnSuccessBlue mr-1"
                >
                  해외직구는 언제나 직구나라
                </a>
                <a
                  rel="sponsored noreferrer"
                  target="_black"
                  href="https://ader.naver.com/v1/EXkjJ9mh0xrNuZzj_7oHXD-mde-WlMLbZBIzuwiZ1mXDSQ-m-eWQImZtd1KqvkX8A1L7HVgZnsU80DoEBmi2qYhdwAl4QlAYA8UMaGfHQzXvXKGHYaHD7gigfy-3YoVKvb7HggV9D5y8iV7AXIFzx0gIPcYj2g6VV6gFjWNFqLw5k97_WsahU0Y38BSSY42KVWciLUfFCtTXfQAAOgzh6E81EdGMkR2CanjT1IsO2wI=?c=m_joongna.ch4&t=0"
                >
                  • 편하게 견적문의 주세요
                </a>
              </div>
              <a
                rel="sponsored noreferrer"
                target="_black"
                href="https://ader.naver.com/v1/EXkjJ9mh0xrNuZzj_7oHXD-mde-WlMLbZBIzuwiZ1mXDSQ-m-eWQImZtd1KqvkX8A1L7HVgZnsU80DoEBmi2qYhdwAl4QlAYA8UMaGfHQzXvXKGHYaHD7gigfy-3YoVKvb7HggV9D5y8iV7AXIFzx0gIPcYj2g6VV6gFjWNFqLw5k97_WsahU0Y38BSSY42KVWciLUfFCtTXfQAAOgzh6E81EdGMkR2CanjT1IsO2wI=?c=m_joongna.ch4&t=0"
                className="text-gray-900 text-ellipsis line-clamp-2 break-all leading-[17px]"
              >
                아마존 월마트 이베이등 견적전문. 미국 유럽 호주등 업력 14년.
                수입명품
              </a>
              <div className="flex leading-[17px] gap-2">
                각종 포인트 적립 !
              </div>
            </div>
          </li>
          <li className="flex border-b-[1px] border-jnGray-200 py-4 gap-3">
            <div className="flex flex-col gap-2 text-xs">
              <a
                rel="sponsored noreferrer"
                target="_black"
                href="https://ader.naver.com/v1/FDaMQziycTDPYVMMpSsObN7F5ud9eEDwM2i0N6iqqtrQJ9Nw4DsQwuOSSGW3sUixsM1y45_EO-5U1Mz02Bh-QHpxrG3pmG23Xv0qxvcibfhakgr2RMG2vZVGhIojpH5otpaERLKQHcFgszziL58vTBci_os6N34NWIq4Who5QgmJ4PvUqv026IzjRSCinSvuPk9oeeLY0puPmJBlUzR7cipkdi9B-BWMltDnkEhC9ORpMiLaYPZ3l_NAvDnNTWvXdO3w-t8-rS_4_VA8KU8HS_iMzgdZ9hZ2UMi-Xsct13yIy4Y5t_Cz1Su4a2sJ1wDBlJO2SV-py6u1fOCT6OTdq0HeM57eD_ZdWQBQXtuvXXB6YZJapN6qs1MjqILCoJU9bv-LMRsOimLycyl2M7JuryJx9pROsdsfBNuNl6nBBYhoAts1c4vcwoimv3BcYcg_EpPXrI3M5Ugos5f3LQqEekqYFcYL8UwOk__Rl6GrVak=?c=m_joongna.ch4&t=0"
                className="text-jnGray-500 leading-[17px]"
              >
                http://m.gmarket.co.kr
              </a>
              <div className="text-base leading-[22px] text-jnSuccessBlue text-ellipsis break-all line-clamp-1">
                <a
                  rel="sponsored noreferrer"
                  target="_black"
                  href="https://ader.naver.com/v1/FDaMQziycTDPYVMMpSsObN7F5ud9eEDwM2i0N6iqqtrQJ9Nw4DsQwuOSSGW3sUixsM1y45_EO-5U1Mz02Bh-QHpxrG3pmG23Xv0qxvcibfhakgr2RMG2vZVGhIojpH5otpaERLKQHcFgszziL58vTBci_os6N34NWIq4Who5QgmJ4PvUqv026IzjRSCinSvuPk9oeeLY0puPmJBlUzR7cipkdi9B-BWMltDnkEhC9ORpMiLaYPZ3l_NAvDnNTWvXdO3w-t8-rS_4_VA8KU8HS_iMzgdZ9hZ2UMi-Xsct13yIy4Y5t_Cz1Su4a2sJ1wDBlJO2SV-py6u1fOCT6OTdq0HeM57eD_ZdWQBQXtuvXXB6YZJapN6qs1MjqILCoJU9bv-LMRsOimLycyl2M7JuryJx9pROsdsfBNuNl6nBBYhoAts1c4vcwoimv3BcYcg_EpPXrI3M5Ugos5f3LQqEekqYFcYL8UwOk__Rl6GrVak=?c=m_joongna.ch4&t=0"
                  className="border-b border-jnSuccessBlue mr-1"
                >
                  수입명품 G마켓
                </a>
                <a
                  rel="sponsored noreferrer"
                  target="_black"
                  href="https://ader.naver.com/v1/FDaMQziycTDPYVMMpSsObN7F5ud9eEDwM2i0N6iqqtrQJ9Nw4DsQwuOSSGW3sUixsM1y45_EO-5U1Mz02Bh-QHpxrG3pmG23Xv0qxvcibfhakgr2RMG2vZVGhIojpH5otpaERLKQHcFgszziL58vTBci_os6N34NWIq4Who5QgmJ4PvUqv026IzjRSCinSvuPk9oeeLY0puPmJBlUzR7cipkdi9B-BWMltDnkEhC9ORpMiLaYPZ3l_NAvDnNTWvXdO3w-t8-rS_4_VA8KU8HS_iMzgdZ9hZ2UMi-Xsct13yIy4Y5t_Cz1Su4a2sJ1wDBlJO2SV-py6u1fOCT6OTdq0HeM57eD_ZdWQBQXtuvXXB6YZJapN6qs1MjqILCoJU9bv-LMRsOimLycyl2M7JuryJx9pROsdsfBNuNl6nBBYhoAts1c4vcwoimv3BcYcg_EpPXrI3M5Ugos5f3LQqEekqYFcYL8UwOk__Rl6GrVak=?c=m_joongna.ch4&t=0"
                >
                  • 스타배송은 약속한날 도착보장
                </a>
              </div>
              <a
                rel="sponsored noreferrer"
                target="_black"
                href="https://ader.naver.com/v1/FDaMQziycTDPYVMMpSsObN7F5ud9eEDwM2i0N6iqqtrQJ9Nw4DsQwuOSSGW3sUixsM1y45_EO-5U1Mz02Bh-QHpxrG3pmG23Xv0qxvcibfhakgr2RMG2vZVGhIojpH5otpaERLKQHcFgszziL58vTBci_os6N34NWIq4Who5QgmJ4PvUqv026IzjRSCinSvuPk9oeeLY0puPmJBlUzR7cipkdi9B-BWMltDnkEhC9ORpMiLaYPZ3l_NAvDnNTWvXdO3w-t8-rS_4_VA8KU8HS_iMzgdZ9hZ2UMi-Xsct13yIy4Y5t_Cz1Su4a2sJ1wDBlJO2SV-py6u1fOCT6OTdq0HeM57eD_ZdWQBQXtuvXXB6YZJapN6qs1MjqILCoJU9bv-LMRsOimLycyl2M7JuryJx9pROsdsfBNuNl6nBBYhoAts1c4vcwoimv3BcYcg_EpPXrI3M5Ugos5f3LQqEekqYFcYL8UwOk__Rl6GrVak=?c=m_joongna.ch4&t=0"
                className="text-gray-900 text-ellipsis line-clamp-2 break-all leading-[17px]"
              >
                수입명품 유니버스 클럽으로 6개사 혜택을 모두! 15% 쿠폰 등 다양한
                할인 혜택
              </a>
              <ul className="flex gap-2 min-h-8">
                <li className="py-[9.5px] px-3 border border-jnGray-300 rounded font-medium leading-[17px]">
                  <a
                    rel="sponsored noreferrer"
                    target="_black"
                    href="https://ader.naver.com/v1/hJE9rgmy--6I_-s5geQS4Z7tJDE39yAdQ-6tzqe_G5l-cNZbR1463MCw8wL06a7vsiyn-QlEb0AG4nZW8rASazcL-bb_CqWRowGVgtJFibF8CpTRKlO13PcJw7HPm1_xImTpH2Nexhp3lNBos-ORQca9TIZmKHayD7CZuqE7BsEA0YtrovOpYlfNPshFJ2BRQ079nz7YByCjkHzlRCSkUS5a7C3p0y4wKJNCb_cViKwx7nFfnVDoeD4hz5XeNQnTt1osSPXDHfhf8mdZMFEKQimGzxsndsu-DkpZ8tBnq_MUMPhMpyh1ObouZ4lgyL8_u8TIeVmGiJewwc6Rs8GKq987JlnZp1MC51xB2EJ6Z4wlgPLRdlmyVJfvgt5uYqG9lTtq_GPi2l1ymezbGri7tSOfEfhKV-1-qnUawm6f0-I=?c=m_joongna.ch4&t=0"
                  >
                    G마켓베스트
                  </a>
                </li>
                <li className="py-[9.5px] px-3 border border-jnGray-300 rounded font-medium leading-[17px]">
                  <a
                    rel="sponsored noreferrer"
                    target="_black"
                    href="https://ader.naver.com/v1/EZozLxHd9SFJlMeXFwX9vt1SK8Nel8FQ1CEwjhtq1RgGBZEVPngkYy2w-adXkFZSvPvhGJvfDYaSqIS9ANAmE9G_Ud-2fkBHyJnGgSOiHZjFbL99v66iJSDevhwgUZ4cytIOet0A1PT43BnWAyKiBU9W_Xf4M-m2HHT4s9cyBbrox6mDnhdp62hpIfT6FUUwvtuY2vaIhc8pI2rOK82GZI7GPERpgA1oxlco_Y6mcr0TrGLDxyLggwMSULZdPFkNrIs_lj8J-C5ZyY1de9eo0xdJVOPS6uHsbWt7h0gmHR4p2uP0UYBhTrBeUFQ4ETBUI2bCTWtZ1t7ka9neY9rDDmjEbWjMeWD_p_l91tmZXWoHspr5VJcInP6rv_aVMr5L-9y_0GKrfkYx829iVRZ7piHFfNSWoaiYW394Qwn8_68=?c=m_joongna.ch4&t=0"
                  >
                    슈퍼딜특가
                  </a>
                </li>
                <li className="py-[9.5px] px-3 border border-jnGray-300 rounded font-medium leading-[17px]">
                  <a
                    rel="sponsored noreferrer"
                    target="_black"
                    href="https://ader.naver.com/v1/hTzzMxzlMLHt2GRPuGrdz9Du9uSvKZgZK8ZJYtZMqXhyDDbQRrH82PTz2ClfuTYQmkz1yb5EB8ji7_uZJLQMuY6cKPag2u4HuIH0FxKXF9IiKjBfe5GyiIoWZNZ9gu_jdld8sCtyl8J5hGChuFufFt3WB6T-FX8W89MGfQx9oTkKVBMARURCi9QO9LHeocw4zLpBIG4yAFensVF5ID3PmQwbSfim52qX3e1zoXNi5cc42aEB7oPF-wy7e1XN2bbicejOgt0wYnSOI48kjUUM9s8RLlHiwwKSHTjLcZdhGGMRNohrw-hfcGGBFf9SULdzoFGc1E4q9URAxqx6R49DGX6rYOVExxA-wgYpe36uFP9GYh5_yJSBuV2X7cte-BF6oo_EpKNKJiVFe_aGjt2j68GebOxEc5qg1Ri_QEjRZMk=?c=m_joongna.ch4&t=0"
                  >
                    스타배송
                  </a>
                </li>
                <li className="py-[9.5px] px-3 border border-jnGray-300 rounded font-medium leading-[17px]">
                  <a
                    rel="sponsored noreferrer"
                    target="_black"
                    href="https://ader.naver.com/v1/mvMV0Sir3f-Okzu5fAxeKzsDWNNvDL5nzs8nQEsbnL9D68-QCqrTsV1ReY_Djh4LbKVgfITlI7ryh-3Z98ehUZysVap9nYNoNPps9N45BMNfk_cMrP-c_PSWqPLbhI2PakHKy9XYKBYfr14KdIyeobgn1a-Vj3RIl0H-81MDWNfwX_OTalgCaOgZXKfgxdmQuMsAiMRoJE_TIanY9mASM4prZjiSJ-e8hrswRjLmycc1xgcjJg2J0GxGypj89wbBo-hATcKJvUkB5oVS0taJG7kMxBe3gmI2a-U0t2qFPRU0G95uYpzPIHOv_NsC8bAVyp8-i19vrubnw5rCxfg1gEwYbhC2T3zb_mx1JHCTWyU180xay1pnl5g78WoGg-bIQqWCq6Yb0fn4UCUipe04U3s3_dPReeIsP-KjNZlvp0I=?c=m_joongna.ch4&t=0"
                  >
                    유니버스클럽
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="flex border-b-[1px] border-jnGray-200 py-4 gap-3">
            <a
              rel="sponsored noreferrer"
              target="_black"
              href="https://ader.naver.com/v1/ajrApj5ecFRKc5Wabn-t5Q8fRUeJrW2y3xy2-JpLSG_VnZ-T0mTnVWyBsEjU9ohBOphpSJvt58X7FpPmbKw-3Le-a62gPTADOs_haylAOSJBgW2FMdgx3scegZoIWn80yI0XkG0DyKNTWyenu6VyAPBh2AUjoyQsg03HoCPyKd3hR9oLsePJVvyFD8aGyrHEAAGB8DfcFKyVlXwz8d5NZHRoj50JivHbN9x_CinGXseXMGwtg7bMlbZ83QUSRYwOTA1QCdCThZyaJgek9rpClvDqZ1-CE2Sh5EDY-0Qm2Z-Wcq8bzMNozwZKqclgnJB6xxPSoMKlLb033s9hdpar0lyDQDHZvlcq-i9mlnIed2boBzAMSYqHwRN3VZ9uyRRs6WI9u_FNIV2-Xs2yEvyeF_YeFPjHxc1pR5-KPRSPZG0O3HT00N4jg1nDqiGw_6SKU6y3Fen37zUd_ZPbDd2updipwAE9P6WcVZ7_mhU2SEU=?c=m_joongna.ch4&t=0"
              className="flex-none"
            >
              <img
                alt="팹스타일 X 수입명품"
                loading="lazy"
                width={100}
                height={100}
                decoding="async"
                data-nimg={1}
                className="rounded-lg w-[88px] h-[88px]"
                style={{ color: "transparent" }}
                src="https://searchad-phinf.pstatic.net/MjAyNDAzMTlfNzUg/MDAxNzEwODE4NDAwNzc1.ls0dDSg2zM3VDuxF36dDnQ8Iw0a2uNAm4v1bZM-NXWwg.PPsu5Qw9OtXkXLRmUDtzsq3t2BS6JzvUObqd9KdlkRgg.JPEG/360510-99037a45-8ed5-4210-b29a-72867b5c893f.jpg?type=f174_174"
              />
            </a>
            <div className="flex flex-col gap-2 text-xs">
              <a
                rel="sponsored noreferrer"
                target="_black"
                href="https://ader.naver.com/v1/ajrApj5ecFRKc5Wabn-t5Q8fRUeJrW2y3xy2-JpLSG_VnZ-T0mTnVWyBsEjU9ohBOphpSJvt58X7FpPmbKw-3Le-a62gPTADOs_haylAOSJBgW2FMdgx3scegZoIWn80yI0XkG0DyKNTWyenu6VyAPBh2AUjoyQsg03HoCPyKd3hR9oLsePJVvyFD8aGyrHEAAGB8DfcFKyVlXwz8d5NZHRoj50JivHbN9x_CinGXseXMGwtg7bMlbZ83QUSRYwOTA1QCdCThZyaJgek9rpClvDqZ1-CE2Sh5EDY-0Qm2Z-Wcq8bzMNozwZKqclgnJB6xxPSoMKlLb033s9hdpar0lyDQDHZvlcq-i9mlnIed2boBzAMSYqHwRN3VZ9uyRRs6WI9u_FNIV2-Xs2yEvyeF_YeFPjHxc1pR5-KPRSPZG0O3HT00N4jg1nDqiGw_6SKU6y3Fen37zUd_ZPbDd2updipwAE9P6WcVZ7_mhU2SEU=?c=m_joongna.ch4&t=0"
                className="text-jnGray-500 leading-[17px]"
              >
                http://www.fabstyle.co.kr
              </a>
              <div className="text-base leading-[22px] text-jnSuccessBlue text-ellipsis break-all line-clamp-1">
                <a
                  rel="sponsored noreferrer"
                  target="_black"
                  href="https://ader.naver.com/v1/ajrApj5ecFRKc5Wabn-t5Q8fRUeJrW2y3xy2-JpLSG_VnZ-T0mTnVWyBsEjU9ohBOphpSJvt58X7FpPmbKw-3Le-a62gPTADOs_haylAOSJBgW2FMdgx3scegZoIWn80yI0XkG0DyKNTWyenu6VyAPBh2AUjoyQsg03HoCPyKd3hR9oLsePJVvyFD8aGyrHEAAGB8DfcFKyVlXwz8d5NZHRoj50JivHbN9x_CinGXseXMGwtg7bMlbZ83QUSRYwOTA1QCdCThZyaJgek9rpClvDqZ1-CE2Sh5EDY-0Qm2Z-Wcq8bzMNozwZKqclgnJB6xxPSoMKlLb033s9hdpar0lyDQDHZvlcq-i9mlnIed2boBzAMSYqHwRN3VZ9uyRRs6WI9u_FNIV2-Xs2yEvyeF_YeFPjHxc1pR5-KPRSPZG0O3HT00N4jg1nDqiGw_6SKU6y3Fen37zUd_ZPbDd2updipwAE9P6WcVZ7_mhU2SEU=?c=m_joongna.ch4&t=0"
                  className="border-b border-jnSuccessBlue mr-1"
                >
                  팹스타일 X 수입명품
                </a>
                <a
                  rel="sponsored noreferrer"
                  target="_black"
                  href="https://ader.naver.com/v1/ajrApj5ecFRKc5Wabn-t5Q8fRUeJrW2y3xy2-JpLSG_VnZ-T0mTnVWyBsEjU9ohBOphpSJvt58X7FpPmbKw-3Le-a62gPTADOs_haylAOSJBgW2FMdgx3scegZoIWn80yI0XkG0DyKNTWyenu6VyAPBh2AUjoyQsg03HoCPyKd3hR9oLsePJVvyFD8aGyrHEAAGB8DfcFKyVlXwz8d5NZHRoj50JivHbN9x_CinGXseXMGwtg7bMlbZ83QUSRYwOTA1QCdCThZyaJgek9rpClvDqZ1-CE2Sh5EDY-0Qm2Z-Wcq8bzMNozwZKqclgnJB6xxPSoMKlLb033s9hdpar0lyDQDHZvlcq-i9mlnIed2boBzAMSYqHwRN3VZ9uyRRs6WI9u_FNIV2-Xs2yEvyeF_YeFPjHxc1pR5-KPRSPZG0O3HT00N4jg1nDqiGw_6SKU6y3Fen37zUd_ZPbDd2updipwAE9P6WcVZ7_mhU2SEU=?c=m_joongna.ch4&t=0"
                >
                  • 성수동 매장
                </a>
              </div>
              <a
                rel="sponsored noreferrer"
                target="_black"
                href="https://ader.naver.com/v1/ajrApj5ecFRKc5Wabn-t5Q8fRUeJrW2y3xy2-JpLSG_VnZ-T0mTnVWyBsEjU9ohBOphpSJvt58X7FpPmbKw-3Le-a62gPTADOs_haylAOSJBgW2FMdgx3scegZoIWn80yI0XkG0DyKNTWyenu6VyAPBh2AUjoyQsg03HoCPyKd3hR9oLsePJVvyFD8aGyrHEAAGB8DfcFKyVlXwz8d5NZHRoj50JivHbN9x_CinGXseXMGwtg7bMlbZ83QUSRYwOTA1QCdCThZyaJgek9rpClvDqZ1-CE2Sh5EDY-0Qm2Z-Wcq8bzMNozwZKqclgnJB6xxPSoMKlLb033s9hdpar0lyDQDHZvlcq-i9mlnIed2boBzAMSYqHwRN3VZ9uyRRs6WI9u_FNIV2-Xs2yEvyeF_YeFPjHxc1pR5-KPRSPZG0O3HT00N4jg1nDqiGw_6SKU6y3Fen37zUd_ZPbDd2updipwAE9P6WcVZ7_mhU2SEU=?c=m_joongna.ch4&t=0"
                className="text-gray-900 text-ellipsis line-clamp-2 break-all leading-[17px]"
              >
                '오픈런'이 필요없는 신상 명품 만나러가기! 믿을수있는 명품쇼핑몰
              </a>
              <div className="flex leading-[17px] gap-2">
                <span className="font-medium text-jnSuccessBlue">이벤트</span>
                무료배송 당일발송{" "}
              </div>
            </div>
          </li>
          <li className="flex border-b-[1px] border-jnGray-200 py-4 gap-3">
            <a
              rel="sponsored noreferrer"
              target="_black"
              href="https://ader.naver.com/v1/b-Yr2khXEHohq3x-1DKQK7NQ21thn-HhzQJcgUqhQuxWVhp-v8Yj0hIGL6aGFMJLDmtakRkIob-5P11YD1rsf9DyKGscvcMMcFKBLXDSXRFRf9fRrqXcQCudSzqrOzNbgiKdughkpxKfB9E9Wd2ipcIoxHxS-Nht6H47P3CFnvfAXJzzGObz9iNPLgFSWxwL8GqTVwCzkax8dWETvO-04IoZd59GfM4cc7aCBaoxGOvXa0ieXqGQABK6O9ZrZzTnfRZfbE7f7V9pjIf6iK9Q2rUx3vTbixbWQXAQOS4z5oU6XAu_Dzzd6RV424VM9XP9W6wqYVWRVu3_krXGzv4uxhFbffoUTWZUYlaUv7o8hx8fkYBvjn_mW2b63lzA7nDci9AjU0VhM0fmbfWIriUI_ic7xf-4AENAWwrjOKy9uxrfp95jLXIgsw6GUVtSc4jp?c=m_joongna.ch4&t=0"
              className="flex-none"
            >
              <img
                alt="전품목 90% 세일 빈티지톡"
                loading="lazy"
                width={100}
                height={100}
                decoding="async"
                data-nimg={1}
                className="rounded-lg w-[88px] h-[88px]"
                style={{ color: "transparent" }}
                src="https://searchad-phinf.pstatic.net/MjAyMTAzMTdfMTY3/MDAxNjE1OTEyNTgxMTky.5S4Mv8ahViMkKX32nd9kjZw2nNE9ZW3W43Xo6JR-NGkg.KBjbKaMSThaYeRqJ0Nytjim5XEshh6Z2wH4urpdBo70g.JPEG/156294-b7033b28-c1d0-4394-ba5b-3cd6ae7d97c4.jpg?type=f174_174"
              />
            </a>
            <div className="flex flex-col gap-2 text-xs">
              <a
                rel="sponsored noreferrer"
                target="_black"
                href="https://ader.naver.com/v1/b-Yr2khXEHohq3x-1DKQK7NQ21thn-HhzQJcgUqhQuxWVhp-v8Yj0hIGL6aGFMJLDmtakRkIob-5P11YD1rsf9DyKGscvcMMcFKBLXDSXRFRf9fRrqXcQCudSzqrOzNbgiKdughkpxKfB9E9Wd2ipcIoxHxS-Nht6H47P3CFnvfAXJzzGObz9iNPLgFSWxwL8GqTVwCzkax8dWETvO-04IoZd59GfM4cc7aCBaoxGOvXa0ieXqGQABK6O9ZrZzTnfRZfbE7f7V9pjIf6iK9Q2rUx3vTbixbWQXAQOS4z5oU6XAu_Dzzd6RV424VM9XP9W6wqYVWRVu3_krXGzv4uxhFbffoUTWZUYlaUv7o8hx8fkYBvjn_mW2b63lzA7nDci9AjU0VhM0fmbfWIriUI_ic7xf-4AENAWwrjOKy9uxrfp95jLXIgsw6GUVtSc4jp?c=m_joongna.ch4&t=0"
                className="text-jnGray-500 leading-[17px]"
              >
                https://vintagetalk.co.kr
              </a>
              <div className="text-base leading-[22px] text-jnSuccessBlue text-ellipsis break-all line-clamp-1">
                <a
                  rel="sponsored noreferrer"
                  target="_black"
                  href="https://ader.naver.com/v1/b-Yr2khXEHohq3x-1DKQK7NQ21thn-HhzQJcgUqhQuxWVhp-v8Yj0hIGL6aGFMJLDmtakRkIob-5P11YD1rsf9DyKGscvcMMcFKBLXDSXRFRf9fRrqXcQCudSzqrOzNbgiKdughkpxKfB9E9Wd2ipcIoxHxS-Nht6H47P3CFnvfAXJzzGObz9iNPLgFSWxwL8GqTVwCzkax8dWETvO-04IoZd59GfM4cc7aCBaoxGOvXa0ieXqGQABK6O9ZrZzTnfRZfbE7f7V9pjIf6iK9Q2rUx3vTbixbWQXAQOS4z5oU6XAu_Dzzd6RV424VM9XP9W6wqYVWRVu3_krXGzv4uxhFbffoUTWZUYlaUv7o8hx8fkYBvjn_mW2b63lzA7nDci9AjU0VhM0fmbfWIriUI_ic7xf-4AENAWwrjOKy9uxrfp95jLXIgsw6GUVtSc4jp?c=m_joongna.ch4&t=0"
                  className="border-b border-jnSuccessBlue mr-1"
                >
                  전품목 90% 세일 빈티지톡
                </a>
                <a
                  rel="sponsored noreferrer"
                  target="_black"
                  href="https://ader.naver.com/v1/b-Yr2khXEHohq3x-1DKQK7NQ21thn-HhzQJcgUqhQuxWVhp-v8Yj0hIGL6aGFMJLDmtakRkIob-5P11YD1rsf9DyKGscvcMMcFKBLXDSXRFRf9fRrqXcQCudSzqrOzNbgiKdughkpxKfB9E9Wd2ipcIoxHxS-Nht6H47P3CFnvfAXJzzGObz9iNPLgFSWxwL8GqTVwCzkax8dWETvO-04IoZd59GfM4cc7aCBaoxGOvXa0ieXqGQABK6O9ZrZzTnfRZfbE7f7V9pjIf6iK9Q2rUx3vTbixbWQXAQOS4z5oU6XAu_Dzzd6RV424VM9XP9W6wqYVWRVu3_krXGzv4uxhFbffoUTWZUYlaUv7o8hx8fkYBvjn_mW2b63lzA7nDci9AjU0VhM0fmbfWIriUI_ic7xf-4AENAWwrjOKy9uxrfp95jLXIgsw6GUVtSc4jp?c=m_joongna.ch4&t=0"
                >
                  • 매주 2,000장 업데이트!
                </a>
              </div>
              <a
                rel="sponsored noreferrer"
                target="_black"
                href="https://ader.naver.com/v1/b-Yr2khXEHohq3x-1DKQK7NQ21thn-HhzQJcgUqhQuxWVhp-v8Yj0hIGL6aGFMJLDmtakRkIob-5P11YD1rsf9DyKGscvcMMcFKBLXDSXRFRf9fRrqXcQCudSzqrOzNbgiKdughkpxKfB9E9Wd2ipcIoxHxS-Nht6H47P3CFnvfAXJzzGObz9iNPLgFSWxwL8GqTVwCzkax8dWETvO-04IoZd59GfM4cc7aCBaoxGOvXa0ieXqGQABK6O9ZrZzTnfRZfbE7f7V9pjIf6iK9Q2rUx3vTbixbWQXAQOS4z5oU6XAu_Dzzd6RV424VM9XP9W6wqYVWRVu3_krXGzv4uxhFbffoUTWZUYlaUv7o8hx8fkYBvjn_mW2b63lzA7nDci9AjU0VhM0fmbfWIriUI_ic7xf-4AENAWwrjOKy9uxrfp95jLXIgsw6GUVtSc4jp?c=m_joongna.ch4&t=0"
                className="text-gray-900 text-ellipsis line-clamp-2 break-all leading-[17px]"
              >
                아메리칸 수입 구제빈티지. 다양한 컬러&amp;디자인 정품! 매일매일
                업데이트 빈티지톡
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div className="Toastify" />
  <ins
    className="adsbygoogle mx-auto max-w-[1024px] md:my-[40px] mb-[120px] mt-[40px] min-[1600px]:max-w-[1280px]"
    style={{ display: "flex", justifyContent: "center", height: 90 }}
    data-ad-client="ca-pub-5776516316749134"
    data-ad-slot={4378206008}
    data-full-width-responsive="true"
    data-ad-format="horizontal"
    data-adsbygoogle-status="done"
    data-ad-status="filled"
  >
    <div
      id="aswift_2_host"
      style={{
        border: "medium",
        height: 90,
        width: 1024,
        margin: 0,
        padding: 0,
        position: "relative",
        visibility: "visible",
        backgroundColor: "transparent",
        display: "inline-block",
        overflow: "visible"
      }}
    >
      <iframe
        id="aswift_2"
        name="aswift_2"
        style={{
          left: 0,
          position: "absolute",
          top: 0,
          border: 0,
          width: 1024,
          height: 90,
          minHeight: "auto",
          maxHeight: "none",
          minWidth: "auto",
          maxWidth: "none"
        }}
        sandbox="allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
        width={1024}
        height={90}
        src="https://googleads.g.doubleclick.net/pagead/ads?client=ca-pub-5776516316749134&output=html&h=90&slotname=4378206008&adk=1297495410&adf=4057075022&pi=t.ma~as.4378206008&w=1024&fwrn=4&fwrnh=100&lmt=1755742575&rafmt=2&format=1024x90&url=https%3A%2F%2Fweb.joongna.com%2F%3Fsrsltid%3DAfmBOorUcHsReCjI8I0HlIRBKlC3RjTZusAzkeGmUeW1k4uArtI2eiVs&fwr=0&fwrattr=true&rpe=1&resp_fmts=2&wgl=1&aieuf=1&auro=1&abgtt=6&dt=1755742575407&bpp=1&bdt=2032&idt=270&shv=r20250820&mjsv=m202508200101&ptt=9&saldr=aa&abxe=1&cookie=ID%3D8b77655b2589cd68%3AT%3D1755002242%3ART%3D1755610943%3AS%3DALNI_MY-bQqWiCFlNj6ioYZZKi5dATQEgw&gpic=UID%3D0000125c261cdcff%3AT%3D1755002242%3ART%3D1755610943%3AS%3DALNI_MbactmEoOy9GNw80pAKqcpYRGYh7w&eo_id_str=ID%3D8e1ad6efbde67bab%3AT%3D1755002242%3ART%3D1755610944%3AS%3DAA-AfjYitUynZ0H4CVUPP72u7Cn1&prev_fmts=0x0%2C1024x90&nras=1&correlator=2215989797756&frm=20&pv=1&u_tz=-240&u_his=3&u_h=1440&u_w=3440&u_ah=1415&u_aw=3440&u_cd=30&u_sd=1&adx=171&ady=3215&biw=1365&bih=814&scr_x=0&scr_y=0&eid=31094107%2C31094153%2C31094155%2C95362655%2C95368382%2C31094225%2C95368525%2C95359265%2C95368429%2C95369790&oid=2&pvsid=8581790059071270&tmod=1409966102&uas=0&nvt=1&ref=https%3A%2F%2Fwww.google.com%2F&fc=1920&brdim=5376%2C50%2C5376%2C50%2C3440%2C25%2C1430%2C899%2C1380%2C814&vis=1&rsz=%7C%7CeEbr%7C&abl=CS&pfx=0&fu=128&bc=31&bz=1.04&pgls=CAk.&ifi=3&uci=a!3&btvi=2&fsb=1&dtd=273"
        data-google-container-id="a!3"
        tabIndex={0}
        title="Advertisement"
        aria-label="Advertisement"
        data-google-query-id="CN6DvOTqmo8DFUTt9QIdQVQPjA"
        data-load-complete="true"
      />
    </div>
  </ins>
</>

  );
}