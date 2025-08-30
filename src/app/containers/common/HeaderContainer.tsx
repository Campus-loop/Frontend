"use client"

import { useChatStore } from "@/app/stores/chatStores";
import Link from "next/link";

const HeaderContainer = () => {
    return (
        <>
            <header
                id="siteHeader"
                className="headerThree relative z-20 w-full h-16 sm:h-20 lg:h-36 xl:h-40 lg:mt-[60px] max-[480px]:mt-[73px] is-scrolling"
            >
                <div className="ga4_main_top_banner flex h-[60px] w-full cursor-pointer max-[480px]:hidden z-20 fixed top-0 bg-[#141313]">
                    <a
                        target="_blank"
                        className="w-full max-w-[1960px] relative mx-auto"
                        href="https://seller.joonggonara.co.kr/seller-cafe"
                    >
                        <img
                            alt="중고나라 검색페이지 이동 이미지"
                            // fetchpriority="high"
                            decoding="async"
                            data-nimg="fill"
                            className="object-cover h-full mx-auto"
                            src=""
                            style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                inset: 0,
                                color: "transparent"
                            }}
                        />
                    </a>
                </div>

                <div
                    id="header_items_wrapper"
                    className="px-4 md:px-8 lg:px-0 h-16 sm:h-20 lg:h-36 xl:h-40 w-full transition duration-200 ease-in-out border-b border-jnGray-300 fixed z-20 text-gray-700 bg-white innerSticky body-font"
                >
                    <div className="h-full lg:h-20 xl:h-24 px-0 lg:px-8 2xl:px-16 max-w-[1024px] min-[1600px]:max-w-[1280px] flex items-center mx-auto box-content justify-between relative before:absolute before:w-screen before:bg-[#F1F1F1] before:bottom-0">
                        <button
                            aria-label="Menu"
                            className="flex flex-col items-center justify-center flex-shrink-0 outline-none menuBtn start-0 focus:outline-none lg:hidden basis-[24px] w-[24px] h-[24px]"
                        >
                            <svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M5 18H19"
                                    stroke="#141313"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M5 12H19"
                                    stroke="#141313"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M5 6L19 6"
                                    stroke="#141313"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                        <div className="flex flex-1 lg:max-w-[200px]">
                            <a
                                style={{ width: 200, height: 30 }}
                                className="ga4_main_top_logo max-[1023px]:!w-[97px] max-[1023px]:!h-[16px] lg:w-full lg:flex-1 inline-flex focus:outline-none relative"
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
                                    src=""
                                />
                            </a>
                        </div>
                        <div className="relative hidden ms-7 me-7 xl:ms-9 lg:block flex-1">
                            <form
                                role="search"
                                // noValidate=""
                                className="w-full relative flex items-center h-10 overflow-hidden rounded-md bg-jnGray-200 px-3 py-[10px] lg:px-5 space-x-2"
                            >
                                <label
                                    htmlFor="search"
                                    className="flex items-center py-0.5 flex-none w-4 h-4"
                                >
                                    <svg
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-[16px] h-[16px] text-[#9CA3AF]"
                                    >
                                        <path
                                            d="M10.0278 19.0556C14.3233 19.0556 17.8056 15.5733 17.8056 11.2778C17.8056 6.98223 14.3233 3.5 10.0278 3.5C5.73223 3.5 2.25 6.98223 2.25 11.2778C2.25 15.5733 5.73223 19.0556 10.0278 19.0556Z"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="transparent"
                                        />
                                        <path
                                            d="M21 21.8999L15.5 16.8999"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </label>
                                <input
                                    id="search-box"
                                    aria-label="search-box"
                                    autoComplete="off"
                                    placeholder="어떤 상품을 찾으시나요? 카페상품, 앱상품 모두 검색"
                                    className="flex-auto text-sm text-heading bg-transparent placeholder-[#9CA3AF] overflow-hidden text-ellipsis whitespace-nowrap outline-none ga4_main_top_search"
                                    name="search"
                                />
                            </form>
                            <div className="absolute flex items-center h-auto pt-2 overflow-hidden text-xs">
                                <button className="w-5 h-5 border border-jnGray-200 rounded mr-[6px]">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={7}
                                        height={10}
                                        fill="none"
                                        className="ml-[5px] mr-[6px] text-jnGray-500"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 1 1 5l5 4"
                                        />
                                    </svg>
                                </button>
                                <button className="w-5 h-5 border rounded border-jnGray-200">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={7}
                                        height={10}
                                        fill="none"
                                        className="mx-auto rotate-180 text-jnGray-500"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 1 1 5l5 4"
                                        />
                                    </svg>
                                </button>
                                <ul className="flex-1 flex-grow-0 flex space-x-5 ml-3">
                                    <li className="break-keep truncate max-w-[160px]">
                                        <a href="/search/%ED%95%B4%EB%B0%80%ED%84%B4">
                                            <span className="font-semibold">1. </span>해밀턴
                                        </a>
                                    </li>
                                    <li className="break-keep truncate max-w-[160px]">
                                        <a href="/search/ssg">
                                            <span className="font-semibold">2. </span>ssg
                                        </a>
                                    </li>
                                    <li className="break-keep truncate max-w-[160px]">
                                        <a href="/search/5080">
                                            <span className="font-semibold">3. </span>5080
                                        </a>
                                    </li>
                                    <li className="break-keep truncate max-w-[160px]">
                                        <a href="/search/%EB%9D%BC%EB%B6%80%EB%B6%80">
                                            <span className="font-semibold">4. </span>라부부
                                        </a>
                                    </li>
                                    <li className="break-keep truncate max-w-[160px]">
                                        <a href="/search/%EA%B0%A4%EB%9F%AD%EC%8B%9C">
                                            <span className="font-semibold">5. </span>갤럭시
                                        </a>
                                    </li>
                                </ul>
                                <ul className="flex-1 flex-grow-0 space-x-5 ml-3 hidden">
                                    <li className="break-keep truncate max-w-[160px]">
                                        <a href="/search/%EB%85%B8%ED%8A%B8%EB%B6%81">
                                            <span className="font-semibold">6. </span>노트북
                                        </a>
                                    </li>
                                    <li className="break-keep truncate max-w-[160px]">
                                        <a href="/search/%EB%B8%8C%EB%A0%88%EC%9D%B8%EB%A1%AF%20%ED%9B%94%EC%B9%98%EA%B8%B0">
                                            <span className="font-semibold">7. </span>브레인롯 훔치기
                                        </a>
                                    </li>
                                    <li className="break-keep truncate max-w-[160px]">
                                        <a href="/search/%EB%8B%A4%EB%A7%88%EA%B3%A0%EC%B9%98">
                                            <span className="font-semibold">8. </span>다마고치
                                        </a>
                                    </li>
                                    <li className="break-keep truncate max-w-[160px]">
                                        <a href="/search/%EA%B0%A4%EB%9F%AD%EC%8B%9C%ED%83%AD">
                                            <span className="font-semibold">9. </span>갤럭시탭
                                        </a>
                                    </li>
                                    <li className="break-keep truncate max-w-[160px]">
                                        <a href="/search/%EA%B7%B8%EB%9E%9C%EB%93%9C%EC%84%B8%EC%9D%B4%EC%BD%94">
                                            <span className="font-semibold">10. </span>그랜드세이코
                                        </a>
                                    </li>
                                </ul>
                                <ul className="flex-1 flex-grow-0 space-x-5 ml-3 hidden">
                                    <li className="break-keep truncate max-w-[160px]">
                                        <a href="/search/%EC%8A%A4%ED%85%94%EB%9D%BC%EC%9D%B4%EB%B8%8C">
                                            <span className="font-semibold">11. </span>스텔라이브
                                        </a>
                                    </li>
                                    <li className="break-keep truncate max-w-[160px]">
                                        <a href="/search/%ED%94%8C%EC%8A%A45">
                                            <span className="font-semibold">12. </span>플스5
                                        </a>
                                    </li>
                                    <li className="break-keep truncate max-w-[160px]">
                                        <a href="/search/%EC%88%99%EB%B0%95">
                                            <span className="font-semibold">13. </span>숙박
                                        </a>
                                    </li>
                                    <li className="break-keep truncate max-w-[160px]">
                                        <a href="/search/%ED%98%B8%EC%95%BC%20">
                                            <span className="font-semibold">14. </span>호야{" "}
                                        </a>
                                    </li>
                                    <li className="break-keep truncate max-w-[160px]">
                                        <a href="/search/%ED%8F%B4%EC%9B%A8%EC%96%B4">
                                            <span className="font-semibold">15. </span>폴웨어
                                        </a>
                                    </li>
                                </ul>
                                <ul className="flex-1 flex-grow-0 space-x-5 ml-3 hidden">
                                    <li className="break-keep truncate max-w-[160px]">
                                        <a href="/search/%EC%8B%9C%EA%B3%84">
                                            <span className="font-semibold">16. </span>시계
                                        </a>
                                    </li>
                                    <li className="break-keep truncate max-w-[160px]">
                                        <a href="/search/%EB%8B%8C%ED%85%90%EB%8F%84%20%EC%8A%A4%EC%9C%84%EC%B9%982">
                                            <span className="font-semibold">17. </span>닌텐도 스위치2
                                        </a>
                                    </li>
                                    <li className="break-keep truncate max-w-[160px]">
                                        <a href="/search/%EC%8B%A4%EB%B0%94%EB%8B%88%EC%95%88">
                                            <span className="font-semibold">18. </span>실바니안
                                        </a>
                                    </li>
                                    <li className="break-keep truncate max-w-[160px]">
                                        <a href="/search/%EB%8B%8C%EC%9E%90%EA%B3%A0">
                                            <span className="font-semibold">19. </span>닌자고
                                        </a>
                                    </li>
                                    <li className="break-keep truncate max-w-[160px]">
                                        <a href="/search/4070">
                                            <span className="font-semibold">20. </span>4070
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-white flex flex-col h-full w-full z-10 mt-0 rounded absolute h-auto shadow-header hidden mt-4 max-h-64vh lg:max-h-[550px]">
                                <div className="flex w-full h-[52px] mt-2 font-medium" tabIndex={0}>
                                    <button className="flex items-center justify-center w-1/2 mx-5 py-2 text-jnGray-500  border-jnGray-500 hover:bg-[#EBEBEB] !text-jnGray-900 !border-jnGray-900 !border-b-[3px]">
                                        상품
                                    </button>
                                    <button className="flex items-center justify-center w-1/2 mx-5 py-2 text-jnGray-500  border-jnGray-500 hover:bg-[#EBEBEB]">
                                        가게
                                    </button>
                                </div>
                                <div className="os-host os-host-foreign os-theme-thin os-host-flexbox os-host-resize-disabled os-host-scrollbar-horizontal-hidden os-host-scrollbar-vertical-hidden os-host-transition">
                                    <div className="os-resize-observer-host observed">
                                        <div
                                            className="os-resize-observer"
                                            style={{ left: 0, right: "auto" }}
                                        />
                                    </div>
                                    <div
                                        className="os-size-auto-observer observed"
                                        style={{ height: "calc(100% + 1px)", float: "left" }}
                                    >
                                        <div className="os-resize-observer" />
                                    </div>
                                    <div className="os-content-glue" style={{ margin: 0 }} />
                                    <div className="os-padding">
                                        <div className="os-viewport os-viewport-native-scrollbars-invisible os-viewport-native-scrollbars-overlaid">
                                            <div
                                                className="os-content"
                                                style={{ padding: 0, height: "100%", width: "100%" }}
                                            >
                                                <div className="h-full bg-white border rounded-md rounded-t-none border-gray-150">
                                                    <div className="flex justify-center items-center h-[528px]">
                                                        <svg
                                                            width="48px"
                                                            height="48px"
                                                            viewBox="0 0 49 48"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <g clipPath="url(#clip0_1457_156476)">
                                                                <path
                                                                    d="M3.05225 47.2382C1.9325 47.5436 0.905039 46.5161 1.21042 45.3964L5.82304 28.4835L19.9652 42.6256L3.05225 47.2382Z"
                                                                    fill="#DDE1E4"
                                                                />
                                                                <path
                                                                    fillRule="evenodd"
                                                                    clipRule="evenodd"
                                                                    d="M0.500005 24C0.500008 10.7452 11.2452 -1.37836e-06 24.5 -8.87953e-07C37.7548 -3.9755e-07 48.5 10.7452 48.5 24C48.5 37.2548 37.7548 48 24.5 48C11.2452 48 0.500002 37.2548 0.500005 24ZM17.5 23.9998C17.5 22.3438 16.156 20.9998 14.5 20.9998C12.844 20.9998 11.5 22.3438 11.5 23.9998C11.5 25.6558 12.844 26.9998 14.5 26.9998C16.156 26.9998 17.5 25.6558 17.5 23.9998ZM24.5 20.9998C26.156 20.9998 27.5 22.3438 27.5 23.9998C27.5 25.6558 26.156 26.9998 24.5 26.9998C22.844 26.9998 21.5 25.6558 21.5 23.9998C21.5 22.3438 22.844 20.9998 24.5 20.9998ZM37.5 23.9998C37.5 22.3438 36.156 20.9998 34.5 20.9998C32.844 20.9998 31.5 22.3438 31.5 23.9998C31.5 25.6558 32.844 26.9998 34.5 26.9998C36.156 26.9998 37.5 25.6558 37.5 23.9998Z"
                                                                    fill="#DDE1E4"
                                                                />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_1457_156476">
                                                                    <rect
                                                                        width={48}
                                                                        height={48}
                                                                        fill="white"
                                                                        transform="translate(48.5 48) rotate(-180)"
                                                                    />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="os-scrollbar os-scrollbar-horizontal os-scrollbar-unusable os-scrollbar-auto-hidden">
                                        <div className="os-scrollbar-track os-scrollbar-track-off">
                                            <div
                                                className="os-scrollbar-handle"
                                                style={{ transform: "translate(0px, 0px)" }}
                                            />
                                        </div>
                                    </div>
                                    <div className="os-scrollbar os-scrollbar-vertical os-scrollbar-unusable os-scrollbar-auto-hidden">
                                        <div className="os-scrollbar-track os-scrollbar-track-off">
                                            <div
                                                className="os-scrollbar-handle"
                                                style={{ transform: "translate(0px, 0px)" }}
                                            />
                                        </div>
                                    </div>
                                    <div className="os-scrollbar-corner" />
                                </div>
                            </div>
                        </div>
                        <div className="hidden lg:flex relative w-[300px]">
                            <ul className="flex w-full text-sm font-medium list-none text-jnGray-900 break-keep">
                                <li className="flex items-center justify-center pr-3">
                                    <ChatButton />
                                </li>
                                <li className='after:contents-[""] after:absolute after:w-[1px] after:h-4 after:bg-jnGray-300 after:right-0 before:contents-[""] before:absolute before:w-[1px] before:h-4 before:bg-jnGray-300 before:left-0 ga4_main_top_menu relative flex items-center justify-center px-3'>
                                    <Link
                                        className="flex items-center justify-center [&>p]:ml-1"
                                        href="/product/sale"
                                    >
                                        <svg
                                            id="판매하기"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M13.6859 20.6926H4.92323C3.88605 20.6926 3.08773 19.8241 3.20716 18.8409L4.49579 8.32142C4.5775 7.63983 5.18096 7.12109 5.89756 7.12109H15.8168C16.5334 7.12109 17.1369 7.6338 17.2186 8.32142L17.91 14.0701"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                            />
                                            <path
                                                d="M8.35938 9.35156V9.5868C8.35938 10.7751 9.47828 11.7462 10.8486 11.7462C12.219 11.7462 13.3379 10.7751 13.3379 9.5868V9.35156"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M7.35938 7.72983V6.25112C7.35938 4.34555 8.90414 2.80078 10.8097 2.80078V2.80078C12.7153 2.80078 14.26 4.34555 14.26 6.25112V7.72983"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                            />
                                            <path
                                                d="M17.1179 22.4245C19.3694 22.4245 21.1968 20.5969 21.1968 18.347C21.1968 16.0972 19.3694 14.2695 17.1179 14.2695C14.8665 14.2695 13.0391 16.0972 13.0391 18.347C13.0391 20.5969 14.8665 22.4245 17.1179 22.4245Z"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M17.1406 19.9298V16.7461"
                                                stroke="currentColor"
                                                strokeWidth="1.2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M15.5312 18.3439H18.7149"
                                                stroke="currentColor"
                                                strokeWidth="1.2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        <p id="판매하기">판매하기</p>
                                    </Link>
                                </li>
                                <li className="relative flex flex-1 pl-3">
                                    
                                    <Link className="flex items-center justify-center [&>p]:ml-1"
                                          href="/mypage"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            fill="none"
                                            size={24}
                                        >
                                            <path
                                                stroke="#141313"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                                d="M16.775 7.716a3.619 3.619 0 1 1-7.238.005 3.619 3.619 0 0 1 7.238-.005M13.15 13.371c-4.026 0-7.298 3.184-7.4 7.145h14.8c-.102-3.961-3.374-7.145-7.4-7.145"
                                            />
                                        </svg>
                                        <p>마이</p>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <button
                            aria-label="search-button"
                            className="flex items-center justify-center flex-shrink-0 ga4_main_top_search end-0 focus:outline-none lg:hidden basis-[24px] w-[24px] h-[24px]"
                        >
                            <svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-[24px] h-[24px]"
                            >
                                <path
                                    d="M10.0278 19.0556C14.3233 19.0556 17.8056 15.5733 17.8056 11.2778C17.8056 6.98223 14.3233 3.5 10.0278 3.5C5.73223 3.5 2.25 6.98223 2.25 11.2778C2.25 15.5733 5.73223 19.0556 10.0278 19.0556Z"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="white"
                                />
                                <path
                                    d="M21 21.8999L15.5 16.8999"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="md:px-8 2xl:px-16 lg:flex lg:h-16 items-center min-[1600px]:max-w-[1280px] max-w-[1024px] hidden headerBottom mx-auto box-content">
                        <div className="relative flex-shrink-0 categoryMenu hidden lg:block">
                            <div className="flex items-center justify-center gap-2 px-3.5 xl:px-4 text-sm relative before:absolute before:-bottom-2.5 before:h-2.5 before:w-full before:z-10 font-semibold text-white transition-colors rounded-md cursor-pointer h-11 bg-heading hover:bg-black">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 20 20"
                                    className="text-xl"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                카테고리
                            </div>
                            <div className="absolute invisible bg-white opacity-0 subMenu shadow-header start-0">
                                <ul className="py-5 text-sm text-body max-h-[480px] overflow-y-scroll">
                                    <li className="">
                                        <a
                                            className="flex items-center py-2 ps-5 xl:ps-7 pe-3 xl:pe-3.5 hover:text-heading hover:bg-gray-300"
                                            href="/search?category=1"
                                        >
                                            수입명품
                                        </a>
                                        <div className="absolute flex bg-white categoryMegaMenu shadow-header w-[630px] xl:w-[1000px] 2xl:w-[1200px] start-full">
                                            <div className="flex-shrink-0">
                                                <div className="scrollbar-show absolute h-[480px] overflow-y-scroll bg-gray-200 megaMenu shadow-header -start-28 xl:start-0">
                                                    <div className="grid grid-cols-5 h-full">
                                                        <ul className="pt-6 even:bg-gray-150 pb-7 2xl:pb-8 2xl:pt-7">
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=101"
                                                                >
                                                                    여성신발
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1001"
                                                                >
                                                                    구두/로퍼
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1002"
                                                                >
                                                                    운동화/스니커즈
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1003"
                                                                >
                                                                    샌들/슬리퍼
                                                                </a>
                                                            </li>
                                                            <li className="border-b border-gray-300 pb-3.5 mb-3">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1004"
                                                                >
                                                                    워커/부츠
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=102"
                                                                >
                                                                    남성신발
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1005"
                                                                >
                                                                    구두/로퍼
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1006"
                                                                >
                                                                    운동화/스니커즈
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1007"
                                                                >
                                                                    샌들/슬리퍼
                                                                </a>
                                                            </li>
                                                            <li className="border-b border-gray-300 pb-3.5 mb-3">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1008"
                                                                >
                                                                    워커/부츠
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=103"
                                                                >
                                                                    가방/핸드백
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1009"
                                                                >
                                                                    숄더백
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1010"
                                                                >
                                                                    크로스백
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1011"
                                                                >
                                                                    토트백
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1012"
                                                                >
                                                                    백팩
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1013"
                                                                >
                                                                    힙색/메신저백
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1014"
                                                                >
                                                                    파우치/클러치백
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1015"
                                                                >
                                                                    서류가방
                                                                </a>
                                                            </li>
                                                            <li className="border-b border-gray-300 pb-3.5 mb-3">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1016"
                                                                >
                                                                    여행가방
                                                                </a>
                                                            </li>
                                                        </ul>
                                                        <ul className="pt-6 even:bg-gray-150 pb-7 2xl:pb-8 2xl:pt-7">
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=104"
                                                                >
                                                                    지갑/벨트
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1017"
                                                                >
                                                                    여성용지갑
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1018"
                                                                >
                                                                    남성용지갑
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1019"
                                                                >
                                                                    머니클립/명함/키지갑
                                                                </a>
                                                            </li>
                                                            <li className="border-b border-gray-300 pb-3.5 mb-3">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1020"
                                                                >
                                                                    벨트/멜빵
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=105"
                                                                >
                                                                    여성의류
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1021"
                                                                >
                                                                    자켓/코트
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1022"
                                                                >
                                                                    패딩/야상/점퍼
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1023"
                                                                >
                                                                    티셔츠/민소매/탑
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1024"
                                                                >
                                                                    니트/스웨터/가디건
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1025"
                                                                >
                                                                    블라우스/남방
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1026"
                                                                >
                                                                    바지/데님
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1027"
                                                                >
                                                                    스커트
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1028"
                                                                >
                                                                    원피스/투피스
                                                                </a>
                                                            </li>
                                                            <li className="border-b border-gray-300 pb-3.5 mb-3">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1029"
                                                                >
                                                                    언더웨어/수영복
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=106"
                                                                >
                                                                    남성의류
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1030"
                                                                >
                                                                    자켓/코트
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1031"
                                                                >
                                                                    패딩/야상/점퍼
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1032"
                                                                >
                                                                    티셔츠/민소매
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1033"
                                                                >
                                                                    니트/스웨터/가디건
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1034"
                                                                >
                                                                    셔츠/남방
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1035"
                                                                >
                                                                    바지/데님
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1036"
                                                                >
                                                                    정장
                                                                </a>
                                                            </li>
                                                            <li className="border-b border-gray-300 pb-3.5 mb-3">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1037"
                                                                >
                                                                    언더웨어/수영복
                                                                </a>
                                                            </li>
                                                        </ul>
                                                        <ul className="pt-6 even:bg-gray-150 pb-7 2xl:pb-8 2xl:pt-7">
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=107"
                                                                >
                                                                    패션잡화
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1038"
                                                                >
                                                                    모자
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1039"
                                                                >
                                                                    넥타이
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1040"
                                                                >
                                                                    장갑/손수건
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1041"
                                                                >
                                                                    머플러/스카프
                                                                </a>
                                                            </li>
                                                            <li className="border-b border-gray-300 pb-3.5 mb-3">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1042"
                                                                >
                                                                    선글라스/안경
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=108"
                                                                >
                                                                    시계/쥬얼리
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1043"
                                                                >
                                                                    여성용시계
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1044"
                                                                >
                                                                    남성용시계
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1045"
                                                                >
                                                                    반지/목걸이/귀걸이
                                                                </a>
                                                            </li>
                                                            <li className="border-b border-gray-300 pb-3.5 mb-3">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1046"
                                                                >
                                                                    팔찌/발찌
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=109"
                                                                >
                                                                    유아동
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1047"
                                                                >
                                                                    영유아
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1048"
                                                                >
                                                                    여아동복
                                                                </a>
                                                            </li>
                                                            <li className="border-b border-gray-300 pb-3.5 mb-3">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1049"
                                                                >
                                                                    남아동복
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=110"
                                                                >
                                                                    기타 수입명품
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="">
                                        <a
                                            className="flex items-center py-2 ps-5 xl:ps-7 pe-3 xl:pe-3.5 hover:text-heading hover:bg-gray-300"
                                            href="/search?category=2"
                                        >
                                            패션의류
                                        </a>
                                        <div className="absolute flex bg-white categoryMegaMenu shadow-header w-[630px] xl:w-[1000px] 2xl:w-[1200px] start-full">
                                            <div className="flex-shrink-0">
                                                <div className="scrollbar-show absolute h-[480px] overflow-y-scroll bg-gray-200 megaMenu shadow-header -start-28 xl:start-0">
                                                    <div className="grid grid-cols-5 h-full">
                                                        <ul className="pt-6 even:bg-gray-150 pb-7 2xl:pb-8 2xl:pt-7">
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=111"
                                                                >
                                                                    여성의류
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1050"
                                                                >
                                                                    티셔츠/캐쥬얼의류
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1051"
                                                                >
                                                                    니트/스웨터/가디건
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1052"
                                                                >
                                                                    원피스/정장
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1053"
                                                                >
                                                                    블라우스/셔츠/남방
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1054"
                                                                >
                                                                    조끼/베스트
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1055"
                                                                >
                                                                    바지/팬츠/청바지
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1056"
                                                                >
                                                                    스커트/치마
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1057"
                                                                >
                                                                    자켓/코트
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1058"
                                                                >
                                                                    패딩/야상/점퍼
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1059"
                                                                >
                                                                    트레이닝복
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1060"
                                                                >
                                                                    언더웨어/잠옷
                                                                </a>
                                                            </li>
                                                            <li className="border-b border-gray-300 pb-3.5 mb-3">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1061"
                                                                >
                                                                    파티복/드레스/기타
                                                                </a>
                                                            </li>
                                                        </ul>
                                                        <ul className="pt-6 even:bg-gray-150 pb-7 2xl:pb-8 2xl:pt-7">
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=112"
                                                                >
                                                                    남성의류
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1062"
                                                                >
                                                                    티셔츠/캐쥬얼의류
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1063"
                                                                >
                                                                    니트/스웨터/가디건
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1064"
                                                                >
                                                                    정장
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1065"
                                                                >
                                                                    조끼/베스트
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1066"
                                                                >
                                                                    셔츠/남방
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1067"
                                                                >
                                                                    바지/팬츠/청바지
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1068"
                                                                >
                                                                    자켓/코트
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1069"
                                                                >
                                                                    패딩/야상/점퍼
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1070"
                                                                >
                                                                    트레이닝복
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1071"
                                                                >
                                                                    언더웨어/잠옷
                                                                </a>
                                                            </li>
                                                            <li className="border-b border-gray-300 pb-3.5 mb-3">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1072"
                                                                >
                                                                    테마의상/기타
                                                                </a>
                                                            </li>
                                                        </ul>
                                                        <ul className="pt-6 even:bg-gray-150 pb-7 2xl:pb-8 2xl:pt-7">
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=113"
                                                                >
                                                                    교복/체육복/단복
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1339"
                                                                >
                                                                    클로젯셰어
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1341"
                                                                >
                                                                    상의/하의
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1342"
                                                                >
                                                                    원피스
                                                                </a>
                                                            </li>
                                                            <li className="border-b border-gray-300 pb-3.5 mb-3">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1343"
                                                                >
                                                                    아우터
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="">
                                        <a
                                            className="flex items-center py-2 ps-5 xl:ps-7 pe-3 xl:pe-3.5 hover:text-heading hover:bg-gray-300"
                                            href="/search?category=3"
                                        >
                                            패션잡화
                                        </a>
                                        <div className="absolute flex bg-white categoryMegaMenu shadow-header w-[630px] xl:w-[1000px] 2xl:w-[1200px] start-full">
                                            <div className="flex-shrink-0">
                                                <div className="scrollbar-show absolute h-[480px] overflow-y-scroll bg-gray-200 megaMenu shadow-header -start-28 xl:start-0">
                                                    <div className="grid grid-cols-5 h-full">
                                                        <ul className="pt-6 even:bg-gray-150 pb-7 2xl:pb-8 2xl:pt-7">
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=114"
                                                                >
                                                                    운동화
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1073"
                                                                >
                                                                    런닝화/워킹화
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1074"
                                                                >
                                                                    단화/캐쥬얼화
                                                                </a>
                                                            </li>
                                                            <li className="border-b border-gray-300 pb-3.5 mb-3">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1075"
                                                                >
                                                                    기타운동화/관련용품
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=115"
                                                                >
                                                                    여성신발
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1076"
                                                                >
                                                                    가보시/웨지힐/통굽
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1077"
                                                                >
                                                                    펌프스/하이힐
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1078"
                                                                >
                                                                    토오픈/오픈힐
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1079"
                                                                >
                                                                    단화/로퍼
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1080"
                                                                >
                                                                    워커/부츠/부티
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1081"
                                                                >
                                                                    샌들/슬리퍼
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1082"
                                                                >
                                                                    슬링백/뮬/블로퍼
                                                                </a>
                                                            </li>
                                                            <li className="border-b border-gray-300 pb-3.5 mb-3">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1083"
                                                                >
                                                                    기타여성신발/관련용품
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=116"
                                                                >
                                                                    남성신발
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1084"
                                                                >
                                                                    단화/로퍼/구두
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1085"
                                                                >
                                                                    워커/부츠
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1086"
                                                                >
                                                                    샌들/슬리퍼
                                                                </a>
                                                            </li>
                                                            <li className="border-b border-gray-300 pb-3.5 mb-3">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1087"
                                                                >
                                                                    기타남성신발/관련용품
                                                                </a>
                                                            </li>
                                                        </ul>
                                                        <ul className="pt-6 even:bg-gray-150 pb-7 2xl:pb-8 2xl:pt-7">
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=117"
                                                                >
                                                                    가방/핸드백
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1088"
                                                                >
                                                                    숄더백
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1089"
                                                                >
                                                                    크로스백
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1090"
                                                                >
                                                                    토트백
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1091"
                                                                >
                                                                    백팩
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1092"
                                                                >
                                                                    힙색/세컨백
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1093"
                                                                >
                                                                    파우치/클러치백
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1094"
                                                                >
                                                                    서류가방
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1095"
                                                                >
                                                                    여행가방
                                                                </a>
                                                            </li>
                                                            <li className="border-b border-gray-300 pb-3.5 mb-3">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1096"
                                                                >
                                                                    기타가방/관련용품
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=118"
                                                                >
                                                                    지갑/벨트
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1097"
                                                                >
                                                                    여성용지갑
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1098"
                                                                >
                                                                    남성용지갑
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1099"
                                                                >
                                                                    머니클립/명함/키지갑
                                                                </a>
                                                            </li>
                                                            <li className="border-b border-gray-300 pb-3.5 mb-3">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1100"
                                                                >
                                                                    벨트/멜빵
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=119"
                                                                >
                                                                    악세서리/귀금속
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1101"
                                                                >
                                                                    반지/귀걸이
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1102"
                                                                >
                                                                    목걸이/팬던트
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1103"
                                                                >
                                                                    팔찌/발찌
                                                                </a>
                                                            </li>
                                                            <li className="border-b border-gray-300 pb-3.5 mb-3">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1104"
                                                                >
                                                                    순금/골드바/돌반지
                                                                </a>
                                                            </li>
                                                        </ul>
                                                        <ul className="pt-6 even:bg-gray-150 pb-7 2xl:pb-8 2xl:pt-7">
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=120"
                                                                >
                                                                    시계
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1105"
                                                                >
                                                                    여성용시계
                                                                </a>
                                                            </li>
                                                            <li className="border-b border-gray-300 pb-3.5 mb-3">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1106"
                                                                >
                                                                    남성용시계
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=121"
                                                                >
                                                                    선글라스/안경
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1107"
                                                                >
                                                                    선글라스
                                                                </a>
                                                            </li>
                                                            <li className="border-b border-gray-300 pb-3.5 mb-3">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1108"
                                                                >
                                                                    안경/안경테
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=122"
                                                                >
                                                                    모자
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1109"
                                                                >
                                                                    스냅백/야구모자
                                                                </a>
                                                            </li>
                                                            <li className="border-b border-gray-300 pb-3.5 mb-3">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1110"
                                                                >
                                                                    패션/방한모자
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=123"
                                                                >
                                                                    기타잡화/관련용품
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="">
                                        <a
                                            className="flex items-center py-2 ps-5 xl:ps-7 pe-3 xl:pe-3.5 hover:text-heading hover:bg-gray-300"
                                            href="/search?category=4"
                                        >
                                            뷰티
                                        </a>
                                        <div className="absolute flex bg-white categoryMegaMenu shadow-header w-[630px] xl:w-[1000px] 2xl:w-[1200px] start-full">
                                            <div className="flex-shrink-0">
                                                <div className="scrollbar-show absolute h-[480px] overflow-y-scroll bg-gray-200 megaMenu shadow-header -start-28 xl:start-0">
                                                    <div className="grid grid-cols-5 h-full">
                                                        <ul className="pt-6 even:bg-gray-150 pb-7 2xl:pb-8 2xl:pt-7">
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=124"
                                                                >
                                                                    스킨케어
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=125"
                                                                >
                                                                    메이크업
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1111"
                                                                >
                                                                    베이스 메이크업
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1112"
                                                                >
                                                                    아이 메이크업
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1113"
                                                                >
                                                                    립 메이크업
                                                                </a>
                                                            </li>
                                                            <li className="border-b border-gray-300 pb-3.5 mb-3">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1114"
                                                                >
                                                                    치크/하이라이터/쉐딩
                                                                </a>
                                                            </li>
                                                        </ul>
                                                        <ul className="pt-6 even:bg-gray-150 pb-7 2xl:pb-8 2xl:pt-7">
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=126"
                                                                >
                                                                    팩/클렌징/필링
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=127"
                                                                >
                                                                    헤어/바디
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=128"
                                                                >
                                                                    향수
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=129"
                                                                >
                                                                    네일케어
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=130"
                                                                >
                                                                    남성 화장품
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=131"
                                                                >
                                                                    가발/기타용품
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="">
                                        <a
                                            className="flex items-center py-2 ps-5 xl:ps-7 pe-3 xl:pe-3.5 hover:text-heading hover:bg-gray-300"
                                            href="/search?category=5"
                                        >
                                            출산/유아동
                                        </a>
                                        <div className="absolute flex bg-white categoryMegaMenu shadow-header w-[630px] xl:w-[1000px] 2xl:w-[1200px] start-full">
                                            <div className="flex-shrink-0">
                                                <div className="scrollbar-show absolute h-[480px] overflow-y-scroll bg-gray-200 megaMenu shadow-header -start-28 xl:start-0">
                                                    <div className="grid grid-cols-5 h-full">
                                                        <ul className="pt-6 even:bg-gray-150 pb-7 2xl:pb-8 2xl:pt-7">
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=132"
                                                                >
                                                                    출산/육아용품
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1115"
                                                                >
                                                                    모유수유용품
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1116"
                                                                >
                                                                    분유수유용품
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1117"
                                                                >
                                                                    튼살크림/스킨케어
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1118"
                                                                >
                                                                    임부복/수유복/언더웨어
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1119"
                                                                >
                                                                    물티슈/기저귀
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1120"
                                                                >
                                                                    분유/이유식
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1121"
                                                                >
                                                                    아기띠/기저귀가방
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1122"
                                                                >
                                                                    신생아/영유아의류
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1123"
                                                                >
                                                                    유아로션/목욕용품
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1124"
                                                                >
                                                                    유아건강/위생용품
                                                                </a>
                                                            </li>
                                                            <li className="border-b border-gray-300 pb-3.5 mb-3">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1125"
                                                                >
                                                                    유모차/웨건
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=133"
                                                                >
                                                                    유아동안전/실내용품
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1126"
                                                                >
                                                                    카시트
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1127"
                                                                >
                                                                    놀이매트
                                                                </a>
                                                            </li>
                                                            <li className="border-b border-gray-300 pb-3.5 mb-3">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1128"
                                                                >
                                                                    보행기/쏘서/바운서/부스터
                                                                </a>
                                                            </li>
                                                        </ul>
                                                        <ul className="pt-6 even:bg-gray-150 pb-7 2xl:pb-8 2xl:pt-7">
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=134"
                                                                >
                                                                    유아동의류
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1129"
                                                                >
                                                                    유아용의류
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1130"
                                                                >
                                                                    아동용의류
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1131"
                                                                >
                                                                    내의/잠옷/속옷
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1132"
                                                                >
                                                                    패딩/자켓
                                                                </a>
                                                            </li>
                                                            <li className="border-b border-gray-300 pb-3.5 mb-3">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1133"
                                                                >
                                                                    한복/소품
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=135"
                                                                >
                                                                    유아동잡화
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1134"
                                                                >
                                                                    구두/운동화/샌들/부츠
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1135"
                                                                >
                                                                    장화/우비/우산
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1136"
                                                                >
                                                                    모자/장갑
                                                                </a>
                                                            </li>
                                                            <li className="border-b border-gray-300 pb-3.5 mb-3">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1137"
                                                                >
                                                                    책가방/여행가방
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=136"
                                                                >
                                                                    유아동가구
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1138"
                                                                >
                                                                    침대/매트리스
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1139"
                                                                >
                                                                    옷장/서랍장
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1140"
                                                                >
                                                                    책상/공부상/책장
                                                                </a>
                                                            </li>
                                                            <li className="border-b border-gray-300 pb-3.5 mb-3">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1141"
                                                                >
                                                                    의자/소파/빈백
                                                                </a>
                                                            </li>
                                                        </ul>
                                                        <ul className="pt-6 even:bg-gray-150 pb-7 2xl:pb-8 2xl:pt-7">
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=137"
                                                                >
                                                                    유아동교구/완구
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1142"
                                                                >
                                                                    신생아완구
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1143"
                                                                >
                                                                    원목교구
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1144"
                                                                >
                                                                    음악놀이/자석교구
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1145"
                                                                >
                                                                    전동차/핫휠
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1146"
                                                                >
                                                                    로봇
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1147"
                                                                >
                                                                    인형/디즈니의상
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1148"
                                                                >
                                                                    블록/레고
                                                                </a>
                                                            </li>
                                                            <li className="border-b border-gray-300 pb-3.5 mb-3">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1149"
                                                                >
                                                                    대형 완구용품
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=138"
                                                                >
                                                                    기타 유아동용품
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="">
                                        <a
                                            className="flex items-center py-2 ps-5 xl:ps-7 pe-3 xl:pe-3.5 hover:text-heading hover:bg-gray-300"
                                            href="/search?category=6"
                                        >
                                            모바일/태블릿
                                        </a>
                                        <div className="absolute flex bg-white categoryMegaMenu shadow-header w-[630px] xl:w-[1000px] 2xl:w-[1200px] start-full">
                                            <div className="flex-shrink-0">
                                                <div className="scrollbar-show absolute h-[480px] overflow-y-scroll bg-gray-200 megaMenu shadow-header -start-28 xl:start-0">
                                                    <div className="grid grid-cols-5 h-full">
                                                        <ul className="pt-6 even:bg-gray-150 pb-7 2xl:pb-8 2xl:pt-7">
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=139"
                                                                >
                                                                    스마트폰
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1150"
                                                                >
                                                                    삼성
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1151"
                                                                >
                                                                    애플
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1152"
                                                                >
                                                                    LG
                                                                </a>
                                                            </li>
                                                            <li className="border-b border-gray-300 pb-3.5 mb-3">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1153"
                                                                >
                                                                    기타 제조사
                                                                </a>
                                                            </li>
                                                        </ul>
                                                        <ul className="pt-6 even:bg-gray-150 pb-7 2xl:pb-8 2xl:pt-7">
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=140"
                                                                >
                                                                    태블릿PC
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1154"
                                                                >
                                                                    삼성
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1155"
                                                                >
                                                                    애플
                                                                </a>
                                                            </li>
                                                            <li className="border-b border-gray-300 pb-3.5 mb-3">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1156"
                                                                >
                                                                    기타 제조사
                                                                </a>
                                                            </li>
                                                        </ul>
                                                        <ul className="pt-6 even:bg-gray-150 pb-7 2xl:pb-8 2xl:pt-7">
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=141"
                                                                >
                                                                    스마트워치/밴드
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=142"
                                                                >
                                                                    일반/피쳐폰
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=143"
                                                                >
                                                                    케이스/거치대/보호필름
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=144"
                                                                >
                                                                    배터리/충전기/케이블
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=145"
                                                                >
                                                                    메모리/젠더/리더기
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="">
                                        <a
                                            className="flex items-center py-2 ps-5 xl:ps-7 pe-3 xl:pe-3.5 hover:text-heading hover:bg-gray-300"
                                            href="/search?category=7"
                                        >
                                            가전제품
                                        </a>
                                        <div className="absolute flex bg-white categoryMegaMenu shadow-header w-[630px] xl:w-[1000px] 2xl:w-[1200px] start-full">
                                            <div className="flex-shrink-0">
                                                <div className="scrollbar-show absolute h-[480px] overflow-y-scroll bg-gray-200 megaMenu shadow-header -start-28 xl:start-0">
                                                    <div className="grid grid-cols-5 h-full">
                                                        <ul className="pt-6 even:bg-gray-150 pb-7 2xl:pb-8 2xl:pt-7">
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=147"
                                                                >
                                                                    냉장고
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=148"
                                                                >
                                                                    TV
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=149"
                                                                >
                                                                    세탁기/건조기
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=150"
                                                                >
                                                                    주방가전
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1157"
                                                                >
                                                                    전기밥솥
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1158"
                                                                >
                                                                    가스/전기레인지
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1159"
                                                                >
                                                                    전자레인지/오븐/제빵기
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1160"
                                                                >
                                                                    정수기/탄산수제조기
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1161"
                                                                >
                                                                    커피기기
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1162"
                                                                >
                                                                    살균기/세척기
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1163"
                                                                >
                                                                    주방소형가전
                                                                </a>
                                                            </li>
                                                            <li className="border-b border-gray-300 pb-3.5 mb-3">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1164"
                                                                >
                                                                    업소용주방가전
                                                                </a>
                                                            </li>
                                                        </ul>
                                                        <ul className="pt-6 even:bg-gray-150 pb-7 2xl:pb-8 2xl:pt-7">
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=151"
                                                                >
                                                                    스마트홈
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1165"
                                                                >
                                                                    인공지능 스피커
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1166"
                                                                >
                                                                    360카메라/홈캠
                                                                </a>
                                                            </li>
                                                            <li className="border-b border-gray-300 pb-3.5 mb-3">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1167"
                                                                >
                                                                    스마트 램프/플러그/스위치
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=152"
                                                                >
                                                                    영상가전
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1168"
                                                                >
                                                                    영상플레이어
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1169"
                                                                >
                                                                    프로젝터/스마트빔
                                                                </a>
                                                            </li>
                                                            <li className="border-b border-gray-300 pb-3.5 mb-3">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1170"
                                                                >
                                                                    전자사전/PMP/DMB
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=153"
                                                                >
                                                                    음향가전
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1171"
                                                                >
                                                                    이어폰/헤드폰
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1172"
                                                                >
                                                                    스피커
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1173"
                                                                >
                                                                    마이크
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1174"
                                                                >
                                                                    음향플레이어
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1175"
                                                                >
                                                                    오디오/홈시어터
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1176"
                                                                >
                                                                    LP/턴테이블
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1177"
                                                                >
                                                                    리시버/앰프
                                                                </a>
                                                            </li>
                                                            <li className="border-b border-gray-300 pb-3.5 mb-3">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1178"
                                                                >
                                                                    보이스레코더
                                                                </a>
                                                            </li>
                                                        </ul>
                                                        <ul className="pt-6 even:bg-gray-150 pb-7 2xl:pb-8 2xl:pt-7">
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=154"
                                                                >
                                                                    계절가전
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1179"
                                                                >
                                                                    공기청정기/가습기/제습기
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1180"
                                                                >
                                                                    히터/난방/온풍기
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1181"
                                                                >
                                                                    전기/온수매트
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1182"
                                                                >
                                                                    에어컨
                                                                </a>
                                                            </li>
                                                            <li className="border-b border-gray-300 pb-3.5 mb-3">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1183"
                                                                >
                                                                    선풍기/냉풍기
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=155"
                                                                >
                                                                    생활가전
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1184"
                                                                >
                                                                    청소기
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1185"
                                                                >
                                                                    비데
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1186"
                                                                >
                                                                    안마기/안마의자
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1187"
                                                                >
                                                                    스탠드/조명
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1188"
                                                                >
                                                                    다리미/미싱/보풀제거기
                                                                </a>
                                                            </li>
                                                            <li className="border-b border-gray-300 pb-3.5 mb-3">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1189"
                                                                >
                                                                    도어록
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=156"
                                                                >
                                                                    미용가전
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1190"
                                                                >
                                                                    드라이기/고데기
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1191"
                                                                >
                                                                    면도기/제모기/이발기
                                                                </a>
                                                            </li>
                                                            <li className="border-b border-gray-300 pb-3.5 mb-3">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1192"
                                                                >
                                                                    구강세정기/전동칫솔
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=157"
                                                                >
                                                                    기타 가전제품
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="">
                                        <a
                                            className="flex items-center py-2 ps-5 xl:ps-7 pe-3 xl:pe-3.5 hover:text-heading hover:bg-gray-300"
                                            href="/search?category=8"
                                        >
                                            노트북/PC
                                        </a>
                                        <div className="absolute flex bg-white categoryMegaMenu shadow-header w-[630px] xl:w-[1000px] 2xl:w-[1200px] start-full">
                                            <div className="flex-shrink-0">
                                                <div className="scrollbar-show absolute h-[480px] overflow-y-scroll bg-gray-200 megaMenu shadow-header -start-28 xl:start-0">
                                                    <div className="grid grid-cols-5 h-full">
                                                        <ul className="pt-6 even:bg-gray-150 pb-7 2xl:pb-8 2xl:pt-7">
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=158"
                                                                >
                                                                    노트북/넷북
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1193"
                                                                >
                                                                    삼성
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1194"
                                                                >
                                                                    애플
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1195"
                                                                >
                                                                    LG
                                                                </a>
                                                            </li>
                                                            <li className="border-b border-gray-300 pb-3.5 mb-3">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1196"
                                                                >
                                                                    기타 제조사
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=159"
                                                                >
                                                                    데스크탑/본체
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1197"
                                                                >
                                                                    일체형PC
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1198"
                                                                >
                                                                    브랜드PC
                                                                </a>
                                                            </li>
                                                            <li className="border-b border-gray-300 pb-3.5 mb-3">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1199"
                                                                >
                                                                    조립PC
                                                                </a>
                                                            </li>
                                                        </ul>
                                                        <ul className="pt-6 even:bg-gray-150 pb-7 2xl:pb-8 2xl:pt-7">
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=160"
                                                                >
                                                                    모니터
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=161"
                                                                >
                                                                    CPU/메인보드
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=162"
                                                                >
                                                                    HDD/SSD/ODD
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=163"
                                                                >
                                                                    RAM/VGA/SOUND
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=164"
                                                                >
                                                                    USB/케이블
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=165"
                                                                >
                                                                    케이스/파워/쿨러
                                                                </a>
                                                            </li>
                                                        </ul>
                                                        <ul className="pt-6 even:bg-gray-150 pb-7 2xl:pb-8 2xl:pt-7">
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=166"
                                                                >
                                                                    키보드/마우스/스피커
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=167"
                                                                >
                                                                    프린터/복합기/잉크/토너
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=168"
                                                                >
                                                                    공유기/랜카드
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=169"
                                                                >
                                                                    소프트웨어
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=170"
                                                                >
                                                                    기타 주변기기
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="">
                                        <a
                                            className="flex items-center py-2 ps-5 xl:ps-7 pe-3 xl:pe-3.5 hover:text-heading hover:bg-gray-300"
                                            href="/search?category=9"
                                        >
                                            카메라/캠코더
                                        </a>
                                        <div className="absolute flex bg-white categoryMegaMenu shadow-header w-[630px] xl:w-[1000px] 2xl:w-[1200px] start-full">
                                            <div className="flex-shrink-0">
                                                <div className="scrollbar-show absolute h-[480px] overflow-y-scroll bg-gray-200 megaMenu shadow-header -start-28 xl:start-0">
                                                    <div className="grid grid-cols-5 h-full">
                                                        <ul className="pt-6 even:bg-gray-150 pb-7 2xl:pb-8 2xl:pt-7">
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=171"
                                                                >
                                                                    DSLR
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=172"
                                                                >
                                                                    미러리스
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=173"
                                                                >
                                                                    디지털카메라
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=174"
                                                                >
                                                                    필름/즉석카메라
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=175"
                                                                >
                                                                    캠코더/액션캠
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=176"
                                                                >
                                                                    기타 카메라
                                                                </a>
                                                            </li>
                                                        </ul>
                                                        <ul className="pt-6 even:bg-gray-150 pb-7 2xl:pb-8 2xl:pt-7">
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=177"
                                                                >
                                                                    카메라렌즈
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=178"
                                                                >
                                                                    삼각대/조명/플래시
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=179"
                                                                >
                                                                    기타 악세서리
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="">
                                        <a
                                            className="flex items-center py-2 ps-5 xl:ps-7 pe-3 xl:pe-3.5 hover:text-heading hover:bg-gray-300"
                                            href="/search?category=10"
                                        >
                                            가구/인테리어
                                        </a>
                                        <div className="absolute flex bg-white categoryMegaMenu shadow-header w-[630px] xl:w-[1000px] 2xl:w-[1200px] start-full">
                                            <div className="flex-shrink-0">
                                                <div className="scrollbar-show absolute h-[480px] overflow-y-scroll bg-gray-200 megaMenu shadow-header -start-28 xl:start-0">
                                                    <div className="grid grid-cols-5 h-full">
                                                        <ul className="pt-6 even:bg-gray-150 pb-7 2xl:pb-8 2xl:pt-7">
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=180"
                                                                >
                                                                    침실가구
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1200"
                                                                >
                                                                    침대/매트리스
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1201"
                                                                >
                                                                    서랍장/옷장
                                                                </a>
                                                            </li>
                                                            <li className="border-b border-gray-300 pb-3.5 mb-3">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1202"
                                                                >
                                                                    화장대/협탁/거울
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=181"
                                                                >
                                                                    거실가구
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1203"
                                                                >
                                                                    소파
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1204"
                                                                >
                                                                    거실테이블/의자
                                                                </a>
                                                            </li>
                                                            <li className="border-b border-gray-300 pb-3.5 mb-3">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1205"
                                                                >
                                                                    거실장/장식장
                                                                </a>
                                                            </li>
                                                        </ul>
                                                        <ul className="pt-6 even:bg-gray-150 pb-7 2xl:pb-8 2xl:pt-7">
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=182"
                                                                >
                                                                    주방가구
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1206"
                                                                >
                                                                    식탁/식탁의자
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1207"
                                                                >
                                                                    렌지대/수납장
                                                                </a>
                                                            </li>
                                                            <li className="border-b border-gray-300 pb-3.5 mb-3">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1208"
                                                                >
                                                                    기타 주방가구
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=183"
                                                                >
                                                                    수납/선반/공간박스
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=184"
                                                                >
                                                                    학생/서재/사무용가구
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=185"
                                                                >
                                                                    기타가구
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=186"
                                                                >
                                                                    침구
                                                                </a>
                                                            </li>
                                                        </ul>
                                                        <ul className="pt-6 even:bg-gray-150 pb-7 2xl:pb-8 2xl:pt-7">
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=187"
                                                                >
                                                                    커튼/카페트
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=188"
                                                                >
                                                                    조명/무드등
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=189"
                                                                >
                                                                    인테리어소품
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=190"
                                                                >
                                                                    이벤트/파티용품
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=191"
                                                                >
                                                                    디퓨저/캔들
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=192"
                                                                >
                                                                    시계/액자/팝아트
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=193"
                                                                >
                                                                    원예
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="">
                                        <a
                                            className="flex items-center py-2 ps-5 xl:ps-7 pe-3 xl:pe-3.5 hover:text-heading hover:bg-gray-300"
                                            href="/search?category=11"
                                        >
                                            리빙/생활
                                        </a>
                                        <div className="absolute flex bg-white categoryMegaMenu shadow-header w-[630px] xl:w-[1000px] 2xl:w-[1200px] start-full">
                                            <div className="flex-shrink-0">
                                                <div className="scrollbar-show absolute h-[480px] overflow-y-scroll bg-gray-200 megaMenu shadow-header -start-28 xl:start-0">
                                                    <div className="grid grid-cols-5 h-full">
                                                        <ul className="pt-6 even:bg-gray-150 pb-7 2xl:pb-8 2xl:pt-7">
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=194"
                                                                >
                                                                    주방용품
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1209"
                                                                >
                                                                    조리도구
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1210"
                                                                >
                                                                    식기/컵/텀블러
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1211"
                                                                >
                                                                    밀폐용기
                                                                </a>
                                                            </li>
                                                            <li className="border-b border-gray-300 pb-3.5 mb-3">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1212"
                                                                >
                                                                    주방잡화
                                                                </a>
                                                            </li>
                                                        </ul>
                                                        <ul className="pt-6 even:bg-gray-150 pb-7 2xl:pb-8 2xl:pt-7">
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=195"
                                                                >
                                                                    식품
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=196"
                                                                >
                                                                    욕실용품
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=197"
                                                                >
                                                                    청소/세탁용품
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=198"
                                                                >
                                                                    생활잡화
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=199"
                                                                >
                                                                    기타 생활용품
                                                                </a>
                                                            </li>
                                                        </ul>
                                                        <ul className="pt-6 even:bg-gray-150 pb-7 2xl:pb-8 2xl:pt-7">
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=246"
                                                                >
                                                                    차량용품
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1325"
                                                                >
                                                                    휠/타이어
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1326"
                                                                >
                                                                    블랙박스/네비게이션
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1327"
                                                                >
                                                                    카오디오/카시트
                                                                </a>
                                                            </li>
                                                            <li className="border-b border-gray-300 pb-3.5 mb-3">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1328"
                                                                >
                                                                    기타 부품/용품
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="">
                                        <a
                                            className="flex items-center py-2 ps-5 xl:ps-7 pe-3 xl:pe-3.5 hover:text-heading hover:bg-gray-300"
                                            href="/search?category=12"
                                        >
                                            게임
                                        </a>
                                        <div className="absolute flex bg-white categoryMegaMenu shadow-header w-[630px] xl:w-[1000px] 2xl:w-[1200px] start-full">
                                            <div className="flex-shrink-0">
                                                <div className="scrollbar-show absolute h-[480px] overflow-y-scroll bg-gray-200 megaMenu shadow-header -start-28 xl:start-0">
                                                    <div className="grid grid-cols-5 h-full">
                                                        <ul className="pt-6 even:bg-gray-150 pb-7 2xl:pb-8 2xl:pt-7">
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=200"
                                                                >
                                                                    PC게임
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=201"
                                                                >
                                                                    플레이스테이션
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=202"
                                                                >
                                                                    PSP
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=203"
                                                                >
                                                                    닌텐도
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=204"
                                                                >
                                                                    Wii
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=205"
                                                                >
                                                                    XBOX
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=206"
                                                                >
                                                                    게임타이틀
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=207"
                                                                >
                                                                    기타 게임
                                                                </a>
                                                            </li>
                                                        </ul>
                                                        <ul className="pt-6 even:bg-gray-150 pb-7 2xl:pb-8 2xl:pt-7" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="">
                                        <a
                                            className="flex items-center py-2 ps-5 xl:ps-7 pe-3 xl:pe-3.5 hover:text-heading hover:bg-gray-300"
                                            href="/search?category=13"
                                        >
                                            반려동물/취미
                                        </a>
                                        <div className="absolute flex bg-white categoryMegaMenu shadow-header w-[630px] xl:w-[1000px] 2xl:w-[1200px] start-full">
                                            <div className="flex-shrink-0">
                                                <div className="scrollbar-show absolute h-[480px] overflow-y-scroll bg-gray-200 megaMenu shadow-header -start-28 xl:start-0">
                                                    <div className="grid grid-cols-5 h-full">
                                                        <ul className="pt-6 even:bg-gray-150 pb-7 2xl:pb-8 2xl:pt-7">
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=208"
                                                                >
                                                                    반려동물
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1213"
                                                                >
                                                                    강아지용품
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1214"
                                                                >
                                                                    고양이용품
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1215"
                                                                >
                                                                    관상어용품
                                                                </a>
                                                            </li>
                                                            <li className="border-b border-gray-300 pb-3.5 mb-3">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1216"
                                                                >
                                                                    기타 반려동물 용품
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=209"
                                                                >
                                                                    키덜트
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1217"
                                                                >
                                                                    피규어/브릭
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1218"
                                                                >
                                                                    프라모델
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1219"
                                                                >
                                                                    레고/조립/블록
                                                                </a>
                                                            </li>
                                                            <li className="border-b border-gray-300 pb-3.5 mb-3">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1220"
                                                                >
                                                                    무선조종/드론/헬리캠
                                                                </a>
                                                            </li>
                                                        </ul>
                                                        <ul className="pt-6 even:bg-gray-150 pb-7 2xl:pb-8 2xl:pt-7">
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=210"
                                                                >
                                                                    핸드메이드/DIY
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1221"
                                                                >
                                                                    자수/뜨개질
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1222"
                                                                >
                                                                    뷰티/아로마/캔들
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1223"
                                                                >
                                                                    아트북/스크래치북
                                                                </a>
                                                            </li>
                                                            <li className="border-b border-gray-300 pb-3.5 mb-3">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1224"
                                                                >
                                                                    DIY/공예
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=211"
                                                                >
                                                                    악기
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1225"
                                                                >
                                                                    건반악기
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1226"
                                                                >
                                                                    현악기
                                                                </a>
                                                            </li>
                                                            <li className="border-b border-gray-300 pb-3.5 mb-3">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1227"
                                                                >
                                                                    관악기/타악기
                                                                </a>
                                                            </li>
                                                        </ul>
                                                        <ul className="pt-6 even:bg-gray-150 pb-7 2xl:pb-8 2xl:pt-7">
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=212"
                                                                >
                                                                    예술작품/골동품/수집
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=213"
                                                                >
                                                                    미술재료/미술도구
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="">
                                        <a
                                            className="flex items-center py-2 ps-5 xl:ps-7 pe-3 xl:pe-3.5 hover:text-heading hover:bg-gray-300"
                                            href="/search?category=14"
                                        >
                                            도서/음반/문구
                                        </a>
                                        <div className="absolute flex bg-white categoryMegaMenu shadow-header w-[630px] xl:w-[1000px] 2xl:w-[1200px] start-full">
                                            <div className="flex-shrink-0">
                                                <div className="scrollbar-show absolute h-[480px] overflow-y-scroll bg-gray-200 megaMenu shadow-header -start-28 xl:start-0">
                                                    <div className="grid grid-cols-5 h-full">
                                                        <ul className="pt-6 even:bg-gray-150 pb-7 2xl:pb-8 2xl:pt-7">
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=214"
                                                                >
                                                                    유아동도서/음반
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1228"
                                                                >
                                                                    0-3세
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1229"
                                                                >
                                                                    4-7세
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1230"
                                                                >
                                                                    8-9세
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1231"
                                                                >
                                                                    10-13세
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1232"
                                                                >
                                                                    그림/놀이/만화책
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1233"
                                                                >
                                                                    학습/전집
                                                                </a>
                                                            </li>
                                                            <li className="border-b border-gray-300 pb-3.5 mb-3">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1234"
                                                                >
                                                                    음반/DVD
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=215"
                                                                >
                                                                    학습/교육
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1235"
                                                                >
                                                                    학습/참고서
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1236"
                                                                >
                                                                    수험서/자격증
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1237"
                                                                >
                                                                    컴퓨터/인터넷
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1238"
                                                                >
                                                                    국어/외국어
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1239"
                                                                >
                                                                    대학교재
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1240"
                                                                >
                                                                    인터넷강의
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1241"
                                                                >
                                                                    백과사전/전집
                                                                </a>
                                                            </li>
                                                            <li className="border-b border-gray-300 pb-3.5 mb-3">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1242"
                                                                >
                                                                    기타 학습도서
                                                                </a>
                                                            </li>
                                                        </ul>
                                                        <ul className="pt-6 even:bg-gray-150 pb-7 2xl:pb-8 2xl:pt-7">
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=216"
                                                                >
                                                                    소설/만화책
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1243"
                                                                >
                                                                    소설책
                                                                </a>
                                                            </li>
                                                            <li className="border-b border-gray-300 pb-3.5 mb-3">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1244"
                                                                >
                                                                    만화책
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=217"
                                                                >
                                                                    여행/취미/레저
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1245"
                                                                >
                                                                    여행/레저도서
                                                                </a>
                                                            </li>
                                                            <li className="border-b border-gray-300 pb-3.5 mb-3">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1246"
                                                                >
                                                                    취미도서
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=218"
                                                                >
                                                                    문학/과학/경영
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1247"
                                                                >
                                                                    문학도서
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1248"
                                                                >
                                                                    과학도서
                                                                </a>
                                                            </li>
                                                            <li className="border-b border-gray-300 pb-3.5 mb-3">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1249"
                                                                >
                                                                    경영도서
                                                                </a>
                                                            </li>
                                                        </ul>
                                                        <ul className="pt-6 even:bg-gray-150 pb-7 2xl:pb-8 2xl:pt-7">
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=219"
                                                                >
                                                                    예술/디자인
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=220"
                                                                >
                                                                    잡지
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=221"
                                                                >
                                                                    기타 도서
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=222"
                                                                >
                                                                    음반/DVD/굿즈
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1250"
                                                                >
                                                                    CD
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1251"
                                                                >
                                                                    DVD
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1252"
                                                                >
                                                                    LP/기타음반
                                                                </a>
                                                            </li>
                                                            <li className="border-b border-gray-300 pb-3.5 mb-3">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1253"
                                                                >
                                                                    스타굿즈
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=223"
                                                                >
                                                                    문구/사무용품
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="">
                                        <a
                                            className="flex items-center py-2 ps-5 xl:ps-7 pe-3 xl:pe-3.5 hover:text-heading hover:bg-gray-300"
                                            href="/search?category=15"
                                        >
                                            티켓/쿠폰
                                        </a>
                                        <div className="absolute flex bg-white categoryMegaMenu shadow-header w-[630px] xl:w-[1000px] 2xl:w-[1200px] start-full">
                                            <div className="flex-shrink-0">
                                                <div className="scrollbar-show absolute h-[480px] overflow-y-scroll bg-gray-200 megaMenu shadow-header -start-28 xl:start-0">
                                                    <div className="grid grid-cols-5 h-full">
                                                        <ul className="pt-6 even:bg-gray-150 pb-7 2xl:pb-8 2xl:pt-7">
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=224"
                                                                >
                                                                    티켓
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1254"
                                                                >
                                                                    콘서트
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1255"
                                                                >
                                                                    스포츠
                                                                </a>
                                                            </li>
                                                            <li className="border-b border-gray-300 pb-3.5 mb-3">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1256"
                                                                >
                                                                    뮤지컬/연극/클래식
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=225"
                                                                >
                                                                    상품권/쿠폰
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1257"
                                                                >
                                                                    백화점/마트/편의점
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1258"
                                                                >
                                                                    영화/문화/게임
                                                                </a>
                                                            </li>
                                                            <li className="border-b border-gray-300 pb-3.5 mb-3">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1259"
                                                                >
                                                                    외식/주유
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=226"
                                                                >
                                                                    여행숙박/이용권
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=227"
                                                                >
                                                                    기타 티켓/쿠폰/이용권
                                                                </a>
                                                            </li>
                                                        </ul>
                                                        <ul className="pt-6 even:bg-gray-150 pb-7 2xl:pb-8 2xl:pt-7" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="">
                                        <a
                                            className="flex items-center py-2 ps-5 xl:ps-7 pe-3 xl:pe-3.5 hover:text-heading hover:bg-gray-300"
                                            href="/search?category=16"
                                        >
                                            스포츠
                                        </a>
                                        <div className="absolute flex bg-white categoryMegaMenu shadow-header w-[630px] xl:w-[1000px] 2xl:w-[1200px] start-full">
                                            <div className="flex-shrink-0">
                                                <div className="scrollbar-show absolute h-[480px] overflow-y-scroll bg-gray-200 megaMenu shadow-header -start-28 xl:start-0">
                                                    <div className="grid grid-cols-5 h-full">
                                                        <ul className="pt-6 even:bg-gray-150 pb-7 2xl:pb-8 2xl:pt-7">
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=228"
                                                                >
                                                                    골프
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1260"
                                                                >
                                                                    드라이버
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1261"
                                                                >
                                                                    우드/유틸리티
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1262"
                                                                >
                                                                    아이언
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1263"
                                                                >
                                                                    웨지/퍼터
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1264"
                                                                >
                                                                    골프백/풀세트
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1265"
                                                                >
                                                                    골프의류/골프화
                                                                </a>
                                                            </li>
                                                            <li className="border-b border-gray-300 pb-3.5 mb-3">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1266"
                                                                >
                                                                    볼/용품/기타
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=229"
                                                                >
                                                                    자전거
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1267"
                                                                >
                                                                    하이브리드/픽시/미니벨로
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1268"
                                                                >
                                                                    로드바이크/사이클
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1269"
                                                                >
                                                                    산악자전거
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1270"
                                                                >
                                                                    전기자전거
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1271"
                                                                >
                                                                    유아/아동자전거
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1272"
                                                                >
                                                                    특수자전거
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1273"
                                                                >
                                                                    자전거용품
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1274"
                                                                >
                                                                    부품/부속/공구
                                                                </a>
                                                            </li>
                                                            <li className="border-b border-gray-300 pb-3.5 mb-3">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1275"
                                                                >
                                                                    악세서리/기타용품
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=230"
                                                                >
                                                                    인라인/스케이트/전동
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1276"
                                                                >
                                                                    인라인/스케이트용품
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1277"
                                                                >
                                                                    스케이트보드용품
                                                                </a>
                                                            </li>
                                                            <li className="border-b border-gray-300 pb-3.5 mb-3">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1278"
                                                                >
                                                                    전기/전동레저용품
                                                                </a>
                                                            </li>
                                                        </ul>
                                                        <ul className="pt-6 even:bg-gray-150 pb-7 2xl:pb-8 2xl:pt-7">
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=231"
                                                                >
                                                                    축구
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1279"
                                                                >
                                                                    축구의류/축구화
                                                                </a>
                                                            </li>
                                                            <li className="border-b border-gray-300 pb-3.5 mb-3">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1280"
                                                                >
                                                                    축구공/용품
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=232"
                                                                >
                                                                    야구
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1281"
                                                                >
                                                                    야구의류/야구화
                                                                </a>
                                                            </li>
                                                            <li className="border-b border-gray-300 pb-3.5 mb-3">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1282"
                                                                >
                                                                    야구공/용품
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=233"
                                                                >
                                                                    농구
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1283"
                                                                >
                                                                    농구의류/농구화
                                                                </a>
                                                            </li>
                                                            <li className="border-b border-gray-300 pb-3.5 mb-3">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1284"
                                                                >
                                                                    농구공/용품
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=234"
                                                                >
                                                                    라켓스포츠
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1285"
                                                                >
                                                                    배드민턴의류/용품
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1286"
                                                                >
                                                                    테니스의류/용품
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1287"
                                                                >
                                                                    스쿼시의류/용품
                                                                </a>
                                                            </li>
                                                            <li className="border-b border-gray-300 pb-3.5 mb-3">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1288"
                                                                >
                                                                    탁구의류/용품
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=235"
                                                                >
                                                                    헬스/요가
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1289"
                                                                >
                                                                    헬스기구
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1290"
                                                                >
                                                                    헬스용품
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1291"
                                                                >
                                                                    요가/필라테스용품
                                                                </a>
                                                            </li>
                                                            <li className="border-b border-gray-300 pb-3.5 mb-3">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1292"
                                                                >
                                                                    보충/보조제
                                                                </a>
                                                            </li>
                                                        </ul>
                                                        <ul className="pt-6 even:bg-gray-150 pb-7 2xl:pb-8 2xl:pt-7">
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=236"
                                                                >
                                                                    수상스포츠
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1293"
                                                                >
                                                                    비키니/여성수영복
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1294"
                                                                >
                                                                    남성수영복
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1295"
                                                                >
                                                                    웨이크바지/래쉬가드
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1296"
                                                                >
                                                                    아동용의류/용품
                                                                </a>
                                                            </li>
                                                            <li className="border-b border-gray-300 pb-3.5 mb-3">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1297"
                                                                >
                                                                    스쿠버/다이빙용품
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=237"
                                                                >
                                                                    겨울스포츠
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1298"
                                                                >
                                                                    스키/보드의류
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1299"
                                                                >
                                                                    스키/보드장비
                                                                </a>
                                                            </li>
                                                            <li className="border-b border-gray-300 pb-3.5 mb-3">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1300"
                                                                >
                                                                    아동용스키/보드
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=238"
                                                                >
                                                                    검도/격투/권투
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1301"
                                                                >
                                                                    도복
                                                                </a>
                                                            </li>
                                                            <li className="border-b border-gray-300 pb-3.5 mb-3">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1302"
                                                                >
                                                                    검도/격투/권투용품
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=239"
                                                                >
                                                                    기타 스포츠
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1347"
                                                                >
                                                                    라브인증 자전거
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1344"
                                                                >
                                                                    로드자전거
                                                                </a>
                                                            </li>
                                                            <li className="border-b border-gray-300 pb-3.5 mb-3">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1345"
                                                                >
                                                                    MTB/그래블
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="">
                                        <a
                                            className="flex items-center py-2 ps-5 xl:ps-7 pe-3 xl:pe-3.5 hover:text-heading hover:bg-gray-300"
                                            href="/search?category=17"
                                        >
                                            레저/여행
                                        </a>
                                        <div className="absolute flex bg-white categoryMegaMenu shadow-header w-[630px] xl:w-[1000px] 2xl:w-[1200px] start-full">
                                            <div className="flex-shrink-0">
                                                <div className="scrollbar-show absolute h-[480px] overflow-y-scroll bg-gray-200 megaMenu shadow-header -start-28 xl:start-0">
                                                    <div className="grid grid-cols-5 h-full">
                                                        <ul className="pt-6 even:bg-gray-150 pb-7 2xl:pb-8 2xl:pt-7">
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=240"
                                                                >
                                                                    등산의류/용품
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1303"
                                                                >
                                                                    남성 등산의류
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1304"
                                                                >
                                                                    여성 등산의류
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1305"
                                                                >
                                                                    등산화/배낭/장비
                                                                </a>
                                                            </li>
                                                            <li className="border-b border-gray-300 pb-3.5 mb-3">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1306"
                                                                >
                                                                    기타 등산용품
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=241"
                                                                >
                                                                    캠핑용품
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1307"
                                                                >
                                                                    텐트/침낭
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1308"
                                                                >
                                                                    취사용품/장비
                                                                </a>
                                                            </li>
                                                            <li className="border-b border-gray-300 pb-3.5 mb-3">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1309"
                                                                >
                                                                    기타 캠핑용품
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=242"
                                                                >
                                                                    낚시용품
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=243"
                                                                >
                                                                    기타 레저/여행용품
                                                                </a>
                                                            </li>
                                                        </ul>
                                                        <ul className="pt-6 even:bg-gray-150 pb-7 2xl:pb-8 2xl:pt-7" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="">
                                        <a
                                            className="flex items-center py-2 ps-5 xl:ps-7 pe-3 xl:pe-3.5 hover:text-heading hover:bg-gray-300"
                                            href="/search?category=19"
                                        >
                                            오토바이
                                        </a>
                                        <div className="absolute flex bg-white categoryMegaMenu shadow-header w-[630px] xl:w-[1000px] 2xl:w-[1200px] start-full">
                                            <div className="flex-shrink-0">
                                                <div className="scrollbar-show absolute h-[480px] overflow-y-scroll bg-gray-200 megaMenu shadow-header -start-28 xl:start-0">
                                                    <div className="grid grid-cols-5 h-full">
                                                        <ul className="pt-6 even:bg-gray-150 pb-7 2xl:pb-8 2xl:pt-7">
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=247"
                                                                >
                                                                    125cc 이하
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=248"
                                                                >
                                                                    125cc 초과
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=249"
                                                                >
                                                                    오토바이 용품
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1329"
                                                                >
                                                                    신차
                                                                </a>
                                                            </li>
                                                        </ul>
                                                        <ul className="pt-6 even:bg-gray-150 pb-7 2xl:pb-8 2xl:pt-7" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="">
                                        <a
                                            className="flex items-center py-2 ps-5 xl:ps-7 pe-3 xl:pe-3.5 hover:text-heading hover:bg-gray-300"
                                            href="/search?category=20"
                                        >
                                            공구/산업용품
                                        </a>
                                        <div className="absolute flex bg-white categoryMegaMenu shadow-header w-[630px] xl:w-[1000px] 2xl:w-[1200px] start-full">
                                            <div className="flex-shrink-0">
                                                <div className="scrollbar-show absolute h-[480px] overflow-y-scroll bg-gray-200 megaMenu shadow-header -start-28 xl:start-0">
                                                    <div className="grid grid-cols-5 h-full">
                                                        <ul className="pt-6 even:bg-gray-150 pb-7 2xl:pb-8 2xl:pt-7">
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=250"
                                                                >
                                                                    드릴/전동공구
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=251"
                                                                >
                                                                    에어/유압
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=252"
                                                                >
                                                                    작업공구
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=253"
                                                                >
                                                                    측정공구
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=254"
                                                                >
                                                                    초경/절삭/접착윤활
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=255"
                                                                >
                                                                    전기/전자
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=256"
                                                                >
                                                                    배관설비/포장운송
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=257"
                                                                >
                                                                    금형공작
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=258"
                                                                >
                                                                    용접기자재
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=259"
                                                                >
                                                                    산업/안전/공구함
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=260"
                                                                >
                                                                    산업자재
                                                                </a>
                                                            </li>
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=261"
                                                                >
                                                                    농기계/농업용공구
                                                                </a>
                                                            </li>
                                                        </ul>
                                                        <ul className="pt-6 even:bg-gray-150 pb-7 2xl:pb-8 2xl:pt-7" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="">
                                        <a
                                            className="flex items-center py-2 ps-5 xl:ps-7 pe-3 xl:pe-3.5 hover:text-heading hover:bg-gray-300"
                                            href="/search?category=21"
                                        >
                                            무료나눔
                                        </a>
                                        <div className="absolute flex bg-white categoryMegaMenu shadow-header w-[630px] xl:w-[1000px] 2xl:w-[1200px] start-full">
                                            <div className="flex-shrink-0">
                                                <div className="scrollbar-show absolute h-[480px] overflow-y-scroll bg-gray-200 megaMenu shadow-header -start-28 xl:start-0">
                                                    <div className="grid grid-cols-5 h-full" />
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="">
                                        <a
                                            className="flex items-center py-2 ps-5 xl:ps-7 pe-3 xl:pe-3.5 hover:text-heading hover:bg-gray-300"
                                            href="/search?category=1348"
                                        >
                                            중고차
                                        </a>
                                        <div className="absolute flex bg-white categoryMegaMenu shadow-header w-[630px] xl:w-[1000px] 2xl:w-[1200px] start-full">
                                            <div className="flex-shrink-0">
                                                <div className="scrollbar-show absolute h-[480px] overflow-y-scroll bg-gray-200 megaMenu shadow-header -start-28 xl:start-0">
                                                    <div className="grid grid-cols-5 h-full">
                                                        <ul className="pt-6 even:bg-gray-150 pb-7 2xl:pb-8 2xl:pt-7">
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1349"
                                                                >
                                                                    국산차
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1351"
                                                                >
                                                                    제네시스
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1352"
                                                                >
                                                                    현대
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1353"
                                                                >
                                                                    기아
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1354"
                                                                >
                                                                    쉐보레(GM대우)
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1355"
                                                                >
                                                                    르노삼성
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1356"
                                                                >
                                                                    쌍용
                                                                </a>
                                                            </li>
                                                            <li className="border-b border-gray-300 pb-3.5 mb-3">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1357"
                                                                >
                                                                    기타 국산차
                                                                </a>
                                                            </li>
                                                        </ul>
                                                        <ul className="pt-6 even:bg-gray-150 pb-7 2xl:pb-8 2xl:pt-7">
                                                            <li className="mb-1.5">
                                                                <a
                                                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1350"
                                                                >
                                                                    수입차
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1358"
                                                                >
                                                                    BMW
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1359"
                                                                >
                                                                    벤츠
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1360"
                                                                >
                                                                    아우디
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1361"
                                                                >
                                                                    폭스바겐
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1362"
                                                                >
                                                                    미니
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1363"
                                                                >
                                                                    렉서스
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1364"
                                                                >
                                                                    도요타
                                                                </a>
                                                            </li>
                                                            <li className="border-b border-gray-300 pb-3.5 mb-3">
                                                                <a
                                                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                                                    href="/search?category=1365"
                                                                >
                                                                    기타 수입차
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <nav className="overscroll-none headerMenu flex w-full h-full relative mask-gradient-left mask-gradient-right mask-none hidden lg:flex ms-3.5 xl:ms-5 min-w-0 overflow-auto flex-1">
                            <div className="menuItem group cursor-pointer shrink-0">
                                <a
                                    target="_self"
                                    className="ga4_main_gnb relative inline-flex items-center px-3 py-3 text-sm font-normal xl:text-base text-heading xl:px-4 group-hover:text-black whitespace-nowrap h-full"
                                    href="/event/list?searchType=ING"
                                >
                                    이벤트
                                </a>
                            </div>
                            <div className="menuItem group cursor-pointer shrink-0">
                                <a
                                    target="_self"
                                    className="ga4_main_gnb relative inline-flex items-center px-3 py-3 text-sm font-normal xl:text-base text-heading xl:px-4 group-hover:text-black whitespace-nowrap h-full"
                                    href="/exhibition/106"
                                >
                                    인증셀러관
                                </a>
                            </div>
                            <div className="menuItem group cursor-pointer shrink-0">
                                <a
                                    target="_blank"
                                    className="ga4_main_gnb relative inline-flex items-center px-3 py-3 text-sm font-normal xl:text-base text-heading xl:px-4 group-hover:text-black whitespace-nowrap h-full"
                                    href="https://web.joongna.com/coupon"
                                >
                                    J쿠폰
                                </a>
                            </div>
                            <div className="menuItem group cursor-pointer shrink-0">
                                <a
                                    target="_self"
                                    className="ga4_main_gnb relative inline-flex items-center px-3 py-3 text-sm font-normal xl:text-base text-heading xl:px-4 group-hover:text-black whitespace-nowrap h-full"
                                    href="/fraud"
                                >
                                    사기조회
                                </a>
                            </div>
                            <div className="menuItem group cursor-pointer shrink-0">
                                <a
                                    target="_self"
                                    className="ga4_main_gnb relative inline-flex items-center px-3 py-3 text-sm font-normal xl:text-base text-heading xl:px-4 group-hover:text-black whitespace-nowrap h-full"
                                    href="/search-price"
                                >
                                    시세조회
                                </a>
                            </div>
                            <div className="menuItem group cursor-pointer shrink-0">
                                <a
                                    target="_self"
                                    className="ga4_main_gnb relative inline-flex items-center px-3 py-3 text-sm font-normal xl:text-base text-heading xl:px-4 group-hover:text-black whitespace-nowrap h-full"
                                    href="/contents"
                                >
                                    읽을거리
                                </a>
                            </div>
                            <div className="cursor-pointer menuItem group shrink-0">
                                <a
                                    className="ga4_main_gnb relative inline-flex items-center px-3 py-3 text-sm font-normal xl:text-base text-heading xl:px-4 group-hover:text-black whitespace-nowrap h-full"
                                    href="/product/212209683#"
                                >
                                    찜한 상품
                                </a>
                            </div>
                        </nav>
                    </div>
                    <div
                        id="progress_bar"
                        className="w-full h-[2px] absolute bottom-0 left-0"
                    />
                </div>
            </header>

        </>
    )
}


const ChatButton = () => {
    const { openDrawer } = useChatStore()
    const handleChatClick = () => {
        openDrawer()
    }
    return (
        <>
            <button className="ga4_main_top_menu flex items-center justify-center" onClick={handleChatClick}>
                <div className="relative cursor-pointer" id="채팅하기">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        fill="none"
                        id="채팅하기"
                        size={24}
                    >
                        <path
                            stroke="#141313"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M20.797 12.2c0 1.639-.438 3.175-1.204 4.5l.46 3.035a.9.9 0 0 1-1.23.968l-2.526-.708a9 9 0 1 1 4.5-7.796"
                            clipRule="evenodd"
                        />
                        <path
                            fill="#141313"
                            stroke="#141313"
                            strokeWidth="0.15"
                            d="M8.864 12.2a1.075 1.075 0 1 0-2.15 0 1.075 1.075 0 0 0 2.15 0Zm4 0a1.075 1.075 0 1 0-2.15 0 1.075 1.075 0 0 0 2.15 0Zm4 0a1.075 1.075 0 1 0-2.15 0 1.075 1.075 0 0 0 2.15 0Z"
                        />
                    </svg>
                </div>
                <p id="채팅하기" className="ml-1">
                    채팅하기
                </p>
            </button>
        </>
    )
}
export default HeaderContainer;