"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const NewProductPage = () => {

    return (
        <>
            <main
                className="relative flex-grow border-b-2"
                style={{ minHeight: "0px !important", height: "auto !important" }}
            >
                <div className="mx-auto max-w-[1280px] px-5 md:px-8 2xl:px-16 box-content">
                    <section className="mx-auto w-full max-w-[768px] pt-[72px]">
                        <div className="flex px-5 pb-1.5">
                            <div>
                                <input
                                    name="media"
                                    type="file"
                                    multiple={true}
                                    accept="image/png, image/jpeg, image/jpg"
                                    className="hidden"
                                />
                                <button className="flex items-center justify-center w-20 h-20 mr-1.5 bg-jnGray-200 rounded">
                                    <div className="flex flex-col">
                                        <svg
                                            width="32px"
                                            height="32px"
                                            viewBox="0 0 32 32"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className=""
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M15.728 20.4461C13.6481 20.4461 11.9619 18.7599 11.9619 16.68C11.9619 14.6001 13.6481 12.9138 15.728 12.9138C17.8079 12.9138 19.4942 14.6001 19.4942 16.68C19.4942 18.7599 17.8079 20.4461 15.728 20.4461Z"
                                                fill="#C2C6CE"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M10.4564 7.32295C10.9376 6.00587 11.5097 5.15997 12.8118 5.15997H17.9241C19.2253 5.15997 19.7975 6.00463 20.2785 7.32003H20.7897C24.7543 7.32003 27.968 10.4192 27.968 14.2417V19.119C27.968 22.9409 24.7543 26.04 20.7897 26.04H10.6669C6.7023 26.04 3.48798 22.9409 3.48798 19.119V14.2417C3.48798 10.487 6.58918 7.4303 10.4564 7.32295ZM21.3772 16.68C21.3772 19.8001 18.8481 22.3292 15.728 22.3292C12.6079 22.3292 10.0788 19.8001 10.0788 16.68C10.0788 13.5599 12.6079 11.0308 15.728 11.0308C18.8481 11.0308 21.3772 13.5599 21.3772 16.68ZM21.5988 11.88C21.5988 12.4 22.0204 12.8216 22.5403 12.8216C23.0603 12.8216 23.4819 12.4 23.4819 11.88C23.4819 11.36 23.0603 10.9385 22.5403 10.9385C22.0204 10.9385 21.5988 11.36 21.5988 11.88Z"
                                                fill="#C2C6CE"
                                            />
                                        </svg>
                                        <p className="mt-1 text-xs text-jnGray-500">0/10</p>
                                    </div>
                                </button>
                            </div>
                            <div className="overflow-hidden">
                                <div className="os-host os-host-foreign os-theme-dark os-host-resize-disabled os-host-scrollbar-horizontal-hidden os-host-scrollbar-vertical-hidden os-host-transition">
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
                                    <div
                                        className="os-content-glue"
                                        style={{ width: 0, margin: 0, maxWidth: "100%", height: 0 }}
                                    />
                                    <div className="os-padding">
                                        <div className="os-viewport os-viewport-native-scrollbars-invisible os-viewport-native-scrollbars-overlaid">
                                            <div
                                                className="os-content"
                                                style={{
                                                    padding: 0,
                                                    height: "auto",
                                                    width: "100%",
                                                    float: "left"
                                                }}
                                            >
                                                <ul className="flex items-center" />
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
                        <form className="flex flex-col justify-center mt-6 lg:mt-8">
                            <div className="flex flex-col px-5 space-y-5">
                                <div className="block">
                                    <input
                                        id="productTitle"
                                        name="productTitle"
                                        type="text"
                                        placeholder="상품명"
                                        className="py-2 px-4 md:px-5 w-full appearance-none border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:border-heading h-11 md:h-12 focus:outline-none rounded-md"
                                        autoComplete="off"
                                        spellCheck="false"
                                        aria-invalid="false"
                                    />
                                </div>
                                <section name="productCategory">
                                    <div className="flex flex-row w-full overflow-hidden text-sm font-medium h-60">
                                        <div
                                            id="category-depth-1"
                                            className="w-1/3 h-full overflow-y-auto border border-solid rounded border-jnGray-300"
                                        >
                                            <ul className="flex flex-col border-solid border-jnGray-300">
                                                <li className="false h-10 p-3" id="category-1">
                                                    <button>
                                                        <p className="truncate break-keep">수입명품</p>
                                                    </button>
                                                </li>
                                                <li className="false h-10 p-3" id="category-2">
                                                    <button>
                                                        <p className="truncate break-keep">패션의류</p>
                                                    </button>
                                                </li>
                                                <li className="false h-10 p-3" id="category-3">
                                                    <button>
                                                        <p className="truncate break-keep">패션잡화</p>
                                                    </button>
                                                </li>
                                                <li className="false h-10 p-3" id="category-4">
                                                    <button>
                                                        <p className="truncate break-keep">뷰티</p>
                                                    </button>
                                                </li>
                                                <li className="false h-10 p-3" id="category-5">
                                                    <button>
                                                        <p className="truncate break-keep">출산/유아동</p>
                                                    </button>
                                                </li>
                                                <li className="false h-10 p-3" id="category-6">
                                                    <button>
                                                        <p className="truncate break-keep">모바일/태블릿</p>
                                                    </button>
                                                </li>
                                                <li className="false h-10 p-3" id="category-7">
                                                    <button>
                                                        <p className="truncate break-keep">가전제품</p>
                                                    </button>
                                                </li>
                                                <li className="false h-10 p-3" id="category-8">
                                                    <button>
                                                        <p className="truncate break-keep">노트북/PC</p>
                                                    </button>
                                                </li>
                                                <li className="false h-10 p-3" id="category-9">
                                                    <button>
                                                        <p className="truncate break-keep">카메라/캠코더</p>
                                                    </button>
                                                </li>
                                                <li className="false h-10 p-3" id="category-10">
                                                    <button>
                                                        <p className="truncate break-keep">가구/인테리어</p>
                                                    </button>
                                                </li>
                                                <li className="false h-10 p-3" id="category-11">
                                                    <button>
                                                        <p className="truncate break-keep">리빙/생활</p>
                                                    </button>
                                                </li>
                                                <li className="false h-10 p-3" id="category-12">
                                                    <button>
                                                        <p className="truncate break-keep">게임</p>
                                                    </button>
                                                </li>
                                                <li className="false h-10 p-3" id="category-13">
                                                    <button>
                                                        <p className="truncate break-keep">반려동물/취미</p>
                                                    </button>
                                                </li>
                                                <li className="false h-10 p-3" id="category-14">
                                                    <button>
                                                        <p className="truncate break-keep">도서/음반/문구</p>
                                                    </button>
                                                </li>
                                                <li className="false h-10 p-3" id="category-15">
                                                    <button>
                                                        <p className="truncate break-keep">티켓/쿠폰</p>
                                                    </button>
                                                </li>
                                                <li className="false h-10 p-3" id="category-16">
                                                    <button>
                                                        <p className="truncate break-keep">스포츠</p>
                                                    </button>
                                                </li>
                                                <li className="false h-10 p-3" id="category-17">
                                                    <button>
                                                        <p className="truncate break-keep">레저/여행</p>
                                                    </button>
                                                </li>
                                                <li className="false h-10 p-3" id="category-19">
                                                    <button>
                                                        <p className="truncate break-keep">오토바이</p>
                                                    </button>
                                                </li>
                                                <li className="false h-10 p-3" id="category-20">
                                                    <button>
                                                        <p className="truncate break-keep">공구/산업용품</p>
                                                    </button>
                                                </li>
                                                <li className="false h-10 p-3" id="category-21">
                                                    <button>
                                                        <p className="truncate break-keep">무료나눔</p>
                                                    </button>
                                                </li>
                                                <li className="false h-10 p-3" id="category-1348">
                                                    <button>
                                                        <p className="truncate break-keep">중고차</p>
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                        <div
                                            id="category-depth-2"
                                            className="w-1/3 h-full overflow-y-auto border border-solid rounded border-jnGray-300 hidden"
                                        />
                                        <div
                                            id="category-depth-3"
                                            className="w-1/3 h-full overflow-y-auto border border-solid rounded border-jnGray-300 hidden"
                                        />
                                    </div>
                                </section>
                            </div>
                            <div className="flex flex-col px-5 mt-5 mb-8 w-full">
                                <div className="flex flex-row-reverse flex-wrap-reverse gap-2 items-center sm:flex-nowrap sm:flex-row">
                                    <div className="flex justify-between items-center px-4 py-2 mr-2 w-full text-base rounded border border-gray-300 border-solid h-[50px]">
                                        <label
                                            htmlFor="search"
                                            className="flex items-center py-0.5 w-full"
                                        >
                                            <span className="text-jnGray-500">₩</span>
                                            <input
                                                name="productPrice"
                                                type="text"
                                                inputMode="numeric"
                                                className="ml-1 w-2/3 h-11 font-medium bg-white focus:outline-none md:h-12 disabled:opacity-100 placeholder:text-jnGray-500"
                                                placeholder="판매가격"
                                                defaultValue=""
                                            />
                                        </label>
                                    </div>
                                    <a
                                        target="_blank"
                                        className="flex gap-0.5 items-center min-w-fit"
                                        href="https://web.joongna.com/event/989"
                                    >
                                        <div className="flex relative justify-center items-center p-[1px] w-4 h-4">
                                            <div className="absolute rounded-full top-0 left-0 w-full h-full bg-gradient-to-br from-[#26DC4A] to-white animate-spin" />
                                            <svg
                                                width="100%"
                                                height="100%"
                                                viewBox="0 0 10 10"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="relative p-0.5 bg-white rounded-full"
                                            >
                                                <g clipPath="url(#clip0_5032_133230)">
                                                    <path
                                                        d="M6.50206 3.6298C6.28346 2.00195 5.68869 0.833496 4.99738 0.833496C4.36821 0.833496 3.82282 1.79889 3.56593 3.1976C4.05806 3.20592 4.5452 3.30579 4.97962 3.50497C4.9885 3.50885 4.99238 3.51718 4.99294 3.52605C4.99294 3.53826 4.98517 3.55102 4.97075 3.55102C4.69611 3.5599 4.42147 3.57266 4.14739 3.59152C3.93045 3.60706 3.71241 3.6287 3.49492 3.65644C3.25745 3.68695 3.02165 3.72523 2.78974 3.7735C2.6932 3.79237 2.5961 3.8129 2.50012 3.83509C1.48812 4.11638 0.833984 4.56246 0.833984 5.06125C0.833984 5.7115 1.94751 6.26965 3.51489 6.48992C3.74403 8.05452 4.32271 9.16583 4.99738 9.16583C5.61101 9.16583 6.14808 8.24649 6.41384 6.90326C5.86623 6.91325 5.31862 6.81116 4.83481 6.58923C4.81096 6.57813 4.7871 6.56759 4.7638 6.55594C4.74271 6.5454 4.74937 6.50989 4.77434 6.51045C5.04953 6.50878 5.32361 6.50323 5.59825 6.49214C5.89619 6.47882 6.19801 6.45441 6.49595 6.41668C6.65186 6.39671 6.80721 6.37396 6.96034 6.34622C7.40919 6.27132 7.85583 6.16424 8.27416 5.98392C8.42729 5.91734 8.57876 5.84188 8.71913 5.74978C9.00486 5.54283 9.16687 5.3087 9.16687 5.06125C9.16687 4.41321 8.06111 3.8534 6.50206 3.6298Z"
                                                        fill="url(#paint0_linear_5032_133230)"
                                                    />
                                                </g>
                                                <defs>
                                                    <linearGradient
                                                        id="paint0_linear_5032_133230"
                                                        x1="9.16732"
                                                        y1="0.833496"
                                                        x2="3.75065"
                                                        y2="7.0835"
                                                        gradientUnits="userSpaceOnUse"
                                                    >
                                                        <stop stopColor="#0DCC5A" />
                                                        <stop offset={1} stopColor="#009F1F" />
                                                    </linearGradient>
                                                    <clipPath id="clip0_5032_133230">
                                                        <rect width={10} height={10} fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <span className="detail-regular-12 sm:body-regular-16">
                                            안심결제란?
                                        </span>
                                        <svg
                                            width={20}
                                            height={20}
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-3 h-3 -rotate-90 sm:w-4 sm:h-4 rotate-[0deg]"
                                        >
                                            <g clipPath="url(#clip0_2224_69059)">
                                                <path
                                                    d="M4.25 7L10 12.75L15.75 7"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_2224_69059">
                                                    <rect width={20} height={20} fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </a>
                                </div>
                                <div className="mt-2.5 h-4 sm:h-5 detail-medium-12 sm:body-regular-14">
                                    <p className="text-green-700" />
                                </div>
                            </div>
                            <section className="flex flex-col px-5 space-y-5">
                                <div className="relative">
                                    <div>
                                        <textarea
                                            id="productDescription"
                                            name="productDescription"
                                            className="px-4 py-3 items-center w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 bg-white border border-gray-300 focus:shadow focus:outline-none focus:border-heading placeholder-body inline-block w-full px-4 py-4 outline-none align-middle overflow-x-scroll appearance-none resize-none border-solid border border-jnGray-300 placeholder:text-jnGray-500 h-[220px] text-sm"
                                            autoComplete="off"
                                            spellCheck="false"
                                            rows={4}
                                            placeholder="- 상품명(브랜드)																																																- 구매 시기 (년, 월, 일)																																																- 사용 기간																																																- 하자 여부																																																* 실제 촬영한 사진과 함께 상세 정보를 입력해주세요.																																																* 카카오톡 아이디 첨부 시 게시물 삭제 및 이용제재 처리될 수 있어요.																																																 																																																안전하고 건전한 거래환경을 위해 과학기술정보통신부, 한국인터넷진흥원, 중고나라가 함께합니다."
                                            maxLength={1000}
                                            defaultValue={""}
                                        />
                                    </div>
                                    <span className="absolute right-0 text-sm leading-5 text-gray-400">
                                        0 / 1000
                                    </span>
                                </div>
                                <p className="font-semibold">상품상태</p>
                                <div className="flex gap-3">
                                    <button className="h-10 w-[80px] rounded-md border border-solid font-semibold text-base mb-2 text-white bg-jngreen border-jngreen">
                                        중고
                                    </button>
                                    <button className="h-10 w-[80px] rounded-md border border-solid font-semibold text-base mb-2 border-jnblack text-jnblack bg-white">
                                        새상품
                                    </button>
                                </div>
                            </section>
                            <div className="flex flex-col px-5 space-y-5 pt-[1.875rem] pb-[3.25rem]">
                                <div>
                                    <p className="font-semibold">거래방법</p>
                                    <ul className="flex flex-wrap items-start mt-4 [&>*]:mb-2">
                                        <li className="flex items-center justify-center text-sm font-medium truncate break-keep mr-3.5 last:mr-0">
                                            <label htmlFor="isPost" className="flex items-end">
                                                <div className="hidden appearance-none">
                                                    <input
                                                        id="isPost"
                                                        name="tradeType"
                                                        type="checkbox"
                                                        className="py-2 px-4 md:px-5 w-full appearance-none border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-gray-100 border-gray-300 focus:shadow focus:bg-white focus:border-primary rounded-md"
                                                        autoComplete="off"
                                                        spellCheck="false"
                                                        aria-invalid="false"
                                                        defaultValue={0}
                                                    />
                                                </div>
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth={0}
                                                    viewBox="0 0 512 512"
                                                    color="#9CA3AF"
                                                    height={20}
                                                    width={20}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    style={{ color: "rgb(156, 163, 175)" }}
                                                >
                                                    <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z" />
                                                </svg>
                                                <p className="ml-1.5">택배거래</p>
                                            </label>
                                        </li>
                                        <li className="flex items-center justify-center text-sm font-medium truncate break-keep mr-3.5 last:mr-0">
                                            <label htmlFor="isMeet" className="flex items-end">
                                                <div className="hidden appearance-none">
                                                    <input
                                                        id="isMeet"
                                                        name="tradeType"
                                                        type="checkbox"
                                                        className="py-2 px-4 md:px-5 w-full appearance-none border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-gray-100 border-gray-300 focus:shadow focus:bg-white focus:border-primary rounded-md"
                                                        autoComplete="off"
                                                        spellCheck="false"
                                                        aria-invalid="false"
                                                        defaultValue={0}
                                                    />
                                                </div>
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth={0}
                                                    viewBox="0 0 512 512"
                                                    color="#9CA3AF"
                                                    height={20}
                                                    width={20}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    style={{ color: "rgb(156, 163, 175)" }}
                                                >
                                                    <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z" />
                                                </svg>
                                                <p className="ml-1.5">직거래</p>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                                <section className="w-full text-sm font-medium hidden" />
                            </div>
                            <div className="flex relative flex-col gap-4 items-center px-5 py-3">
                                <p className="w-full text-center border-t border-b border-[#DADEE5] py-[17px]">
                                    <svg
                                        width={20}
                                        height={20}
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="inline-block mr-1 w-6 h-6"
                                    >
                                        <path
                                            d="M16 6L8.4375 14L5 10.3636"
                                            stroke="#0DCC5A"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    판매 정보가 실제 상품과 다를 경우, 책임은 판매자에게 있음을
                                    동의합니다.
                                </p>
                                <button
                                    data-variant="flat"
                                    className="text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none rounded-md bg-heading text-white px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-gray-600 hover:shadow-cart w-60 break-keep"
                                    type="submit"
                                >
                                    판매하기
                                </button>
                            </div>
                        </form>
                    </section>
                </div>
                <div className="Toastify" />
            </main>

        </>
    )
}

export default NewProductPage;