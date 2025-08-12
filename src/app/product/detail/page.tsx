"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const ProductDetailPage = () => {

    return (
        <>
            <main
                className="relative flex-grow border-b-2"
                style={{ minHeight: "0px !important", height: "auto !important" }}
            >
                <button className="fixed left-1/2 -translate-x-1/2 z-[21] w-fit bottom-[81px] sm:bottom-[33px]">
                    <div className="flex justify-center gap-1 items-center text-left w-fit font-bold rounded-full py-1 h-fit bg-white min-w-max !px-4 !py-2 text-sm border border-jnGray-200 shadow-[0px_4px_8px_0px_rgba(0,0,0,0.12)]">
                        <div className="flex relative justify-center items-center p-[1px] w-4 h-4 text-[#00AEAC]">
                            <div className="absolute rounded-full top-0 left-0 w-full h-full bg-gradient-to-br from-[#26DC4A] to-white animate-spin" />
                            <img
                                alt=""
                                loading="lazy"
                                width={16}
                                height={16}
                                decoding="async"
                                data-nimg={1}
                                className="relative bg-white rounded-full p-[1px]"
                                src="https://img2.joongna.com/icon/product-detail/bottom_banner_default_icon.svg"
                                style={{ color: "transparent" }}
                            />
                        </div>
                        <span>
                            <div className="flex gap-1 items-center body-regular-14">
                                <div
                                    className="[&_strong]:font-semibold"
                                    style={{ color: "rgb(20, 19, 19)" }}
                                >
                                    <strong>안심결제</strong>쓰고 사기 걱정없는 중고거래
                                </div>
                                <svg
                                    width={20}
                                    height={20}
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-4 h-4 -rotate-90 rotate-[0deg]"
                                >
                                    <g clipPath="url(#clip0_2224_69059)">
                                        <path
                                            d="M4.25 7L10 12.75L15.75 7"
                                            stroke="#787E89"
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
                            </div>
                        </span>
                    </div>
                </button>
                <div
                    className="mx-auto md:px-8 2xl:px-16 box-content max-w-[1024px] min-[1600px]:max-w-[1280px] lg:min-h-[950px] px-5"
                    style={{ height: "auto !important", minHeight: "0px !important" }}
                >
                    <div className="items-start block grid-cols-2 lg:grid gap-x-[72px] lg:pt-[72px] lg:pb-[52px] pb-9 pt-0">
                        <div className="overflow-hidden relative rounded-2xl">
                            <div className="carouselWrapper relative product-gallery swiperThumbnail product-gallery-slider lg:sticky lg:top-56 overflow-hidden rounded-2xl">
                                <div
                                    className="swiper swiper-initialized swiper-horizontal swiper-pointer-events"
                                    dir="ltr"
                                >
                                    <div className="swiper-wrapper">
                                        <div
                                            className="swiper-slide swiper-slide-active"
                                            style={{ width: 604 }}
                                        >
                                            <div className="relative overflow-hidden rounded-2xl bg-white min-w-[200px] min-h-[200px] w-full pt-[100%]">
                                                <img
                                                    alt="메가 라부부 스케치 1000%새상품 / 미개봉--0"
                                                    referrerPolicy="no-referrer"
                                                    fetchpriority="high"
                                                    decoding="async"
                                                    data-nimg="fill"
                                                    className="object-contain bg-gray-50 lg:w-[520px] lg:h-[520px] w-[335px] h-[335px]"
                                                    src="https://img2.joongna.com/media/original/2025/06/10/1749554682055QWI_8E2Aa.jpg?impolicy=resizeWatermark3&ftext=aRTxFaIR"
                                                    style={{
                                                        position: "absolute",
                                                        height: "100%",
                                                        width: "100%",
                                                        inset: 0,
                                                        color: "transparent"
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div
                                            className="swiper-slide swiper-slide-next"
                                            style={{ width: 604 }}
                                        >
                                            <div className="relative overflow-hidden rounded-2xl bg-white min-w-[200px] min-h-[200px] w-full pt-[100%]">
                                                <img
                                                    alt="메가 라부부 스케치 1000%새상품 / 미개봉--1"
                                                    referrerPolicy="no-referrer"
                                                    loading="lazy"
                                                    decoding="async"
                                                    data-nimg="fill"
                                                    className="object-contain bg-gray-50 lg:w-[520px] lg:h-[520px] w-[335px] h-[335px]"
                                                    src="https://img2.joongna.com/media/original/2025/06/17/17501599965167ci_9NSva.jpg?impolicy=resizeWatermark3&ftext=aRTxFaIR"
                                                    style={{
                                                        position: "absolute",
                                                        height: "100%",
                                                        width: "100%",
                                                        inset: 0,
                                                        color: "transparent"
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="swiper-slide" style={{ width: 604 }}>
                                            <div className="relative overflow-hidden rounded-2xl bg-white min-w-[200px] min-h-[200px] w-full pt-[100%]">
                                                <img
                                                    alt="메가 라부부 스케치 1000%새상품 / 미개봉--2"
                                                    referrerPolicy="no-referrer"
                                                    loading="lazy"
                                                    decoding="async"
                                                    data-nimg="fill"
                                                    className="object-contain bg-gray-50 lg:w-[520px] lg:h-[520px] w-[335px] h-[335px]"
                                                    src="https://img2.joongna.com/media/original/2025/07/13/17524059510424Jd_UKhNP.jpg?impolicy=resizeWatermark3&ftext=aRTxFaIR"
                                                    style={{
                                                        position: "absolute",
                                                        height: "100%",
                                                        width: "100%",
                                                        inset: 0,
                                                        color: "transparent"
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="swiper-slide" style={{ width: 604 }}>
                                            <div className="relative overflow-hidden rounded-2xl bg-white min-w-[200px] min-h-[200px] w-full pt-[100%]">
                                                <img
                                                    alt="메가 라부부 스케치 1000%새상품 / 미개봉--3"
                                                    referrerPolicy="no-referrer"
                                                    loading="lazy"
                                                    decoding="async"
                                                    data-nimg="fill"
                                                    className="object-contain bg-gray-50 lg:w-[520px] lg:h-[520px] w-[335px] h-[335px]"
                                                    src="https://img2.joongna.com/media/original/2025/07/13/1752405993030B3O_q5v4P.jpg?impolicy=resizeWatermark3&ftext=aRTxFaIR"
                                                    style={{
                                                        position: "absolute",
                                                        height: "100%",
                                                        width: "100%",
                                                        inset: 0,
                                                        color: "transparent"
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    className="w-7 h-7 text-black flex items-center justify-center absolute z-10 transition duration-250 transform -translate-y-1/2 top-1/2 focus:outline-none rounded-full text-sm md:text-base lg:w-9 lg:h-9 lg:text-xl xl:w-10 xl:h-10 3xl:w-12 3xl:h-12 3xl:text-2xl max-[1023px]:hidden left-4 bg-transparent shadow-transparent hover:bg-transparent hover:text-black !text-white !text-6xl swiper-button-disabled"
                                    id="product-gallery-slider-prev"
                                    aria-label="prev-button"
                                    disabled=""
                                >
                                    <svg
                                        width={26}
                                        height={28}
                                        viewBox="0 0 26 28"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="rotate-[0deg]"
                                    >
                                        <g filter="url(#filter0_d_19461_8348)">
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M15.8122 5.34218C16.4517 6.0669 16.3825 7.17278 15.6578 7.81224L8.645 14L15.6578 20.1878C16.3825 20.8273 16.4517 21.9331 15.8122 22.6579C15.1727 23.3826 14.0669 23.4517 13.3421 22.8122L5.26706 15.6872C4.25192 14.7914 4.25192 13.2086 5.26706 12.3129L13.3421 5.1878C14.0669 4.54835 15.1727 4.61747 15.8122 5.34218Z"
                                                fill="white"
                                            />
                                        </g>
                                        <defs>
                                            <filter
                                                id="filter0_d_19461_8348"
                                                x="0.505707"
                                                y="0.75"
                                                width="19.7443"
                                                height="26.5"
                                                filterUnits="userSpaceOnUse"
                                                colorInterpolationFilters="sRGB"
                                            >
                                                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                                <feColorMatrix
                                                    in="SourceAlpha"
                                                    type="matrix"
                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                    result="hardAlpha"
                                                />
                                                <feOffset />
                                                <feGaussianBlur stdDeviation={2} />
                                                <feComposite in2="hardAlpha" operator="out" />
                                                <feColorMatrix
                                                    type="matrix"
                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"
                                                />
                                                <feBlend
                                                    mode="normal"
                                                    in2="BackgroundImageFix"
                                                    result="effect1_dropShadow_19461_8348"
                                                />
                                                <feBlend
                                                    mode="normal"
                                                    in="SourceGraphic"
                                                    in2="effect1_dropShadow_19461_8348"
                                                    result="shape"
                                                />
                                            </filter>
                                        </defs>
                                    </svg>
                                </button>
                                <button
                                    className="w-7 h-7 text-black flex items-center justify-center absolute z-10 transition duration-250 transform -translate-y-1/2 top-1/2 focus:outline-none rounded-full text-sm md:text-base lg:w-9 lg:h-9 lg:text-xl xl:w-10 xl:h-10 3xl:w-12 3xl:h-12 3xl:text-2xl max-[1023px]:hidden right-4 bg-transparent shadow-transparent hover:bg-transparent hover:text-black !text-white !text-6xl"
                                    id="product-gallery-slider-next"
                                    aria-label="next-button"
                                >
                                    <svg
                                        width={26}
                                        height={28}
                                        viewBox="0 0 26 28"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="rotate-[180deg]"
                                    >
                                        <g filter="url(#filter0_d_19461_8348)">
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M15.8122 5.34218C16.4517 6.0669 16.3825 7.17278 15.6578 7.81224L8.645 14L15.6578 20.1878C16.3825 20.8273 16.4517 21.9331 15.8122 22.6579C15.1727 23.3826 14.0669 23.4517 13.3421 22.8122L5.26706 15.6872C4.25192 14.7914 4.25192 13.2086 5.26706 12.3129L13.3421 5.1878C14.0669 4.54835 15.1727 4.61747 15.8122 5.34218Z"
                                                fill="white"
                                            />
                                        </g>
                                        <defs>
                                            <filter
                                                id="filter0_d_19461_8348"
                                                x="0.505707"
                                                y="0.75"
                                                width="19.7443"
                                                height="26.5"
                                                filterUnits="userSpaceOnUse"
                                                colorInterpolationFilters="sRGB"
                                            >
                                                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                                <feColorMatrix
                                                    in="SourceAlpha"
                                                    type="matrix"
                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                    result="hardAlpha"
                                                />
                                                <feOffset />
                                                <feGaussianBlur stdDeviation={2} />
                                                <feComposite in2="hardAlpha" operator="out" />
                                                <feColorMatrix
                                                    type="matrix"
                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"
                                                />
                                                <feBlend
                                                    mode="normal"
                                                    in2="BackgroundImageFix"
                                                    result="effect1_dropShadow_19461_8348"
                                                />
                                                <feBlend
                                                    mode="normal"
                                                    in="SourceGraphic"
                                                    in2="effect1_dropShadow_19461_8348"
                                                    result="shape"
                                                />
                                            </filter>
                                        </defs>
                                    </svg>
                                </button>
                            </div>
                            <div className="absolute top-6 right-6 z-10 px-2 py-1 text-sm text-white bg-black bg-opacity-50 rounded-full pointer-events-none">
                                1/4
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center w-full chawkbazarBreadcrumb pt-5 lg:py-2 pb-[10px]">
                                <ol className="flex flex-wrap items-center w-full mt-0 lg:mt-0">
                                    <li className="flex-shrink-0 px-0 mt-0 text-sm break-all transition duration-200 ease-in text-body first:ps-0 last:pe-0 hover:text-heading">
                                        <a className="text-jnGray-500" href="/">
                                            홈
                                        </a>
                                    </li>
                                    <li className="pl-0 mx-2 mt-0 text-sm leading-5 text-jnGray-500 lg:mt-0">
                                        <svg
                                            width={17}
                                            height={17}
                                            viewBox="0 0 17 17"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="rotate-[0deg]"
                                        >
                                            <path
                                                d="M5.6665 14.1667L10.9796 8.85363C11.1749 8.65837 11.1749 8.34179 10.9796 8.14653L5.6665 2.83341"
                                                stroke="#9CA3AF"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </li>
                                    <li className="flex-shrink-0 px-0 mt-0 text-sm break-all transition duration-200 ease-in text-body first:ps-0 last:pe-0 hover:text-heading">
                                        <a
                                            className="capitalize text-jnGray-500"
                                            href="/search?category=13"
                                        >
                                            반려동물/취미
                                        </a>
                                    </li>
                                    <li className="pl-0 mx-2 mt-0 text-sm leading-5 text-jnGray-500 lg:mt-0">
                                        <svg
                                            width={17}
                                            height={17}
                                            viewBox="0 0 17 17"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="rotate-[0deg]"
                                        >
                                            <path
                                                d="M5.6665 14.1667L10.9796 8.85363C11.1749 8.65837 11.1749 8.34179 10.9796 8.14653L5.6665 2.83341"
                                                stroke="#9CA3AF"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </li>
                                    <li className="flex-shrink-0 px-0 mt-0 text-sm break-all transition duration-200 ease-in text-body first:ps-0 last:pe-0 hover:text-heading">
                                        <a
                                            className="capitalize text-jnGray-500"
                                            href="/search?category=209"
                                        >
                                            키덜트
                                        </a>
                                    </li>
                                    <li className="pl-0 mx-2 mt-0 text-sm leading-5 text-jnGray-500 lg:mt-0">
                                        <svg
                                            width={17}
                                            height={17}
                                            viewBox="0 0 17 17"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="rotate-[0deg]"
                                        >
                                            <path
                                                d="M5.6665 14.1667L10.9796 8.85363C11.1749 8.65837 11.1749 8.34179 10.9796 8.14653L5.6665 2.83341"
                                                stroke="#9CA3AF"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </li>
                                    <li className="flex-shrink-0 px-0 mt-0 text-sm break-all transition duration-200 ease-in text-body first:ps-0 last:pe-0 hover:text-heading">
                                        <a
                                            className="capitalize text-jnblack"
                                            href="/search?category=1217"
                                        >
                                            피규어/브릭
                                        </a>
                                    </li>
                                </ol>
                            </div>
                            <div>
                                <div className="flex justify-between items-center mb-1">
                                    <h1 className="text-lg font-semibold leading-6 md:text-2xl md:leading-[28.64px] text-jnblack mr-2">
                                        메가 라부부 스케치 1000%새상품 / 미개봉
                                    </h1>
                                    <button type="button" aria-label="공유하기">
                                        <svg
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className=""
                                        >
                                            <path
                                                d="M19.5556 12.9408V18.9852C19.5556 19.5196 19.33 20.0321 18.9285 20.4099C18.5271 20.7878 17.9826 21 17.4148 21H5.64074C5.07298 21 4.52848 20.7878 4.12701 20.4099C3.72554 20.0321 3.5 19.5196 3.5 18.9852V7.90373C3.5 7.36937 3.72554 6.85689 4.12701 6.47904C4.52848 6.10119 5.07298 5.88892 5.64074 5.88892H12.063"
                                                stroke="#141313"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M14.8334 4H20C20.2762 4 20.5 4.22386 20.5 4.5V9.66667"
                                                stroke="#141313"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M11.0554 13.4444L20.0276 4.47217"
                                                stroke="#141313"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <div className="flex items-center mb-2 lg:mb-3">
                                    <div className="font-bold md:text-[32px] mr-2 text-[26px] leading-9 md:leading-[38.19px] text-heading">
                                        2,500,000원
                                    </div>
                                </div>
                                <div className="flex justify-between items-center mb-4 text-xs font-normal">
                                    <span className="text-jnGray-500 leading-[15px]">
                                        2025-07-13 · 조회 69991 · 채팅 23 · 찜 246
                                    </span>
                                    <a
                                        className="ga4_product_detail_price"
                                        href="/search-price/%EB%A9%94%EA%B0%80%20%EB%9D%BC%EB%B6%80%EB%B6%80%20%EC%8A%A4%EC%BC%80%EC%B9%98%201000%25%EC%83%88%EC%83%81%ED%92%88%20%2F%20%EB%AF%B8%EA%B0%9C%EB%B4%89?seq=212209683"
                                    >
                                        <span className="leading-4 underline underline-offset-4 text-jnGray-700">
                                            시세조회
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div className="fixed left-0 z-10 w-full bg-white px-4 py-3 shadow-[0_35px_60px_-20px_rgba(0,0,0,0.3)] justify-between lg:hidden hidden top-[var(--header-height)] sm:top-[var(--sm-header-height)] lg:top-[var(--lg-header-height)] xl:top-[var(--xl-header-height)] top-[136px]">
                                <div className="flex flex-col mr-2 w-[calc(100%-56px)]">
                                    <span className="block overflow-hidden w-full font-bold whitespace-nowrap text-ellipsis text-heading">
                                        메가 라부부 스케치 1000%새상품 / 미개봉
                                    </span>
                                    <span>
                                        2,500,000<span className="text-base">원</span>
                                    </span>
                                </div>
                                <div className="inline-block overflow-hidden relative w-12 h-12 rounded">
                                    <img
                                        alt="메가 라부부 스케치 1000%새상품 / 미개봉--0"
                                        referrerPolicy="no-referrer"
                                        loading="lazy"
                                        decoding="async"
                                        data-nimg="fill"
                                        className="object-cover"
                                        src="https://img2.joongna.com/media/original/2025/06/10/1749554682055QWI_8E2Aa.jpg?impolicy=resizeWatermark3&ftext=aRTxFaIR"
                                        style={{
                                            position: "absolute",
                                            height: "100%",
                                            width: "100%",
                                            inset: 0,
                                            color: "transparent"
                                        }}
                                    />
                                </div>
                            </div>
                            <ul className="box-border flex text-center border border-gray-300 rounded items-center py-6 mb-6">
                                <li className="flex flex-col flex-1 basis-[33%] px-3 sm:px-4 relative after:absolute [&:not(:first-child)]:after:content-['']  after:bg-gray-300 after:h-[20px] [&:not(:first-child)]:after:w-[1px] after:left-0 justify-center items-center">
                                    <span className="text-xs font-normal text-jnGray-600 break-keep">
                                        제품상태
                                    </span>
                                    <button
                                        disabled=""
                                        className="block text-sm font-semibold text-jnblack mt-1 "
                                    >
                                        새상품
                                    </button>
                                </li>
                                <li className="flex flex-col flex-1 basis-[33%] px-3 sm:px-4 relative after:absolute [&:not(:first-child)]:after:content-['']  after:bg-gray-300 after:h-[20px] [&:not(:first-child)]:after:w-[1px] after:left-0 justify-center items-center">
                                    <span className="text-xs font-normal text-jnGray-600 break-keep">
                                        거래방식
                                    </span>
                                    <button
                                        disabled=""
                                        className="block text-sm font-semibold text-jnblack mt-1 "
                                    >
                                        택배
                                    </button>
                                </li>
                                <li className="flex flex-col flex-1 basis-[33%] px-3 sm:px-4 relative after:absolute [&:not(:first-child)]:after:content-['']  after:bg-gray-300 after:h-[20px] [&:not(:first-child)]:after:w-[1px] after:left-0 justify-center items-center">
                                    <span className="text-xs font-normal text-jnGray-600 break-keep">
                                        배송비
                                    </span>
                                    <button
                                        disabled=""
                                        className="block text-sm font-semibold text-jnblack mt-1 "
                                    >
                                        별도
                                    </button>
                                </li>
                            </ul>
                            <ul>
                                <li className="hidden" />
                                <li className="hidden" />
                                <li className="">
                                    <div className="block mb-4 sm:mb-5 sm:flex items-start justify-start">
                                        <div className="flex items-center mr-5 min-w-[95px]">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={12}
                                                height={12}
                                                viewBox="0 0 12 12"
                                                fill="none"
                                            >
                                                <rect x="4.5" y="4.5" width={3} height={3} fill="#141313" />
                                            </svg>
                                            <span className="text-xs text-jnGray-700 ml-[6px]">
                                                결제혜택
                                            </span>
                                        </div>
                                        <div className="">
                                            <ul className="pt-1 pl-[18px] sm:items-start sm:flex-col sm:flex sm:p-0">
                                                <li>
                                                    <p className="text-xs font-medium text-jnblack tracking-[0.2px]">
                                                        KB국민카드 12개월 5% 특별 할부 수수료
                                                    </p>
                                                </li>
                                                <li>
                                                    <p className="text-xs font-medium text-jnblack tracking-[0.2px]">
                                                        페이코 최대 2만원 즉시할인
                                                    </p>
                                                </li>
                                                <li>
                                                    <p className="text-xs font-medium text-jnblack tracking-[0.2px]">
                                                        토스페이 2% 즉시할인
                                                    </p>
                                                </li>
                                                <li>
                                                    <p className="text-xs font-medium text-jnblack tracking-[0.2px]">
                                                        우리카드 2,000원 즉시할인
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="hidden" />
                            </ul>
                            <div className="flex items-center space-s-4 pt-4 max-[479px]:fixed max-[479px]:bottom-0 max-[479px]:left-0 max-[479px]:z-20 max-[479px]:w-full max-[479px]:px-4 max-[479px]:pb-4 max-[479px]:bg-white">
                                <div className="w-8 h-8">
                                    <label htmlFor=":r54:" className="relative cursor-pointer">
                                        <svg
                                            width={32}
                                            height={32}
                                            viewBox="0 0 32 32"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="pointer-events-none w-8 h-8"
                                        >
                                            <path
                                                d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                                                strokeWidth="1.5"
                                                stroke="#9CA3AF"
                                                fill="transparent"
                                            />
                                        </svg>
                                    </label>
                                    <input id=":r54:" type="checkbox" className="a11yHidden" />
                                </div>
                                <button
                                    data-variant="slim"
                                    className="text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center placeholder-white focus-visible:outline-none focus:outline-none rounded-md h-11 md:h-12 px-5 py-2 transform-none normal-case hover:shadow-cart ga4_product_detail_bottom w-full bg-white hover:bg-white/90 text-jnblack hover:text-jnblack border-[1px] border-jnblack"
                                >
                                    채팅하기
                                </button>
                                <button
                                    data-variant="slim"
                                    className="text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none rounded-md h-11 md:h-12 px-5 text-white py-2 transform-none normal-case hover:text-white hover:shadow-cart w-full ga4_product_detail_bottom bg-jnblack hover:bg-jnblack/90"
                                >
                                    결제하기
                                </button>
                            </div>
                            <div className="w-full flex flex-col justify-center gap-3 mt-6 py-3 px-1 text-sm font-semibold">
                                <button type="button" className="flex gap-2 w-full items-center">
                                    <span className="a11yHidden">열기</span>
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth={0}
                                        viewBox="0 0 512 512"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z" />
                                    </svg>
                                    <span className="text-inherit">지금 이 상품 시세 확인하기</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="pb-12">
                        <div className="flex flex-wrap items-center mb-4 md:mb-5">
                            <h3 className="md:text-[22px] font-bold text-jnBlack mr-2 text-lg empty:h-7">
                                새 상품은 어떠세요?
                            </h3>
                        </div>
                        <ul className="grid grid-cols lg:grid-cols-3 gap-x-3 lg:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8">
                            <li className="flex py-3 h-[160px] overflow-hidden">
                                <a
                                    href="https://ader.naver.com/v1/egQarFulNyCk0GsgKGaw7QcgWc6MgtaLkmadT8_RiLoB6_9lqIeA4Sgz0fHvlH4XTBQwuGvmkNWs7PSvDU4QU0QM-u4Dksc5U_T8ohMHuezXDwD5-dxgTSOvnIjNpBGKkhl1FTKtQg46sML7x0IlbNvav_oq5JlsEYEnHUFY3EfTG18Z52D1dcdikrTvz7LxuO3qgoptERExu6E0ybr4__FB5we6Zm2KBDtvDRH-lWfkzDQHPKWodCEf3x8JPqF3BRN8sIRa1_iQjL4ecsfH4UPjxIAUk3SeZFlttXIfgIbAsScWc55YhIabRuqYzdMYsPj3779OFGbi-LNFVWh-nw==?c=m_joongna.ch6&t=0"
                                    rel="sponsored noreferrer"
                                    target="_blank"
                                    className="mr-3 flex justify-center items-start min-w-[120px] relative"
                                >
                                    <img
                                        alt="[타이니빌] 알린 키캡 랜덤 키링 피규어 (1EA)"
                                        loading="lazy"
                                        width={120}
                                        height={120}
                                        decoding="async"
                                        data-nimg={1}
                                        className="transition duration-150 ease-linear transform rounded-md cursor-pointer hover:scale-105"
                                        src="https://shopping-phinf.pstatic.net/main_8936314/89363141826.jpg?type=f300"
                                        style={{ color: "transparent" }}
                                    />
                                </a>
                                <div className="flex flex-col justify-start gap-1 py-1 break-all">
                                    <a
                                        href="https://ader.naver.com/v1/egQarFulNyCk0GsgKGaw7QcgWc6MgtaLkmadT8_RiLoB6_9lqIeA4Sgz0fHvlH4XTBQwuGvmkNWs7PSvDU4QU0QM-u4Dksc5U_T8ohMHuezXDwD5-dxgTSOvnIjNpBGKkhl1FTKtQg46sML7x0IlbNvav_oq5JlsEYEnHUFY3EfTG18Z52D1dcdikrTvz7LxuO3qgoptERExu6E0ybr4__FB5we6Zm2KBDtvDRH-lWfkzDQHPKWodCEf3x8JPqF3BRN8sIRa1_iQjL4ecsfH4UPjxIAUk3SeZFlttXIfgIbAsScWc55YhIabRuqYzdMYsPj3779OFGbi-LNFVWh-nw==?c=m_joongna.ch6&t=0"
                                        rel="sponsored noreferrer"
                                        target="_blank"
                                        className="text-sm font-normal text-jnblack hover:underline text-ellipsis line-clamp-2"
                                    >
                                        [타이니빌] 알린 키캡 랜덤 키링 피규어 (1EA)
                                    </a>
                                    <div className="flex gap-1 items-center">
                                        <strong className="text-black">13,900원</strong>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="text-xs font-normal mr-1 text-gray-400">
                                            타이니빌 공식스토어
                                        </span>
                                        <span className="mx-1 text-xs font-normal text-gray-400">|</span>
                                        <span className="text-xs font-normal text-gray-400">광고</span>
                                    </div>
                                </div>
                            </li>
                            <li className="flex py-3 h-[160px] overflow-hidden max-[1023px]:hidden">
                                <a
                                    href="https://ader.naver.com/v1/VV1KIjxBuV6-PFqBldAV1YOIwBKYF9nprCg_n5807IBloB6dDODkC2VUii3vqO-CxpHAQRGAo_FD38w31lCoRZyhP2yk1g5iwS9cd9EGxirJXEWy19e6U_u6mz8zT4L5XLH8uCwORrK1FCDmqrFu3aaqwQgZZHyXJhETzFndMcv98h9rWqQY5QWk17_dfDPFMpUh8xHWqn0-Aeukl0ZWLljGiKHFy2BXcDZjK68h6zhcdEFUOBx4XTbNfQ7WEG23VSb205kdU7X8aINwu5OKvpjeNMctBv0ugeD3OPs69by4QKdUf98hCRl35N8V4oLQ?c=m_joongna.ch6&t=0"
                                    rel="sponsored noreferrer"
                                    target="_blank"
                                    className="mr-3 flex justify-center items-start min-w-[120px] relative"
                                >
                                    <img
                                        alt="[타이니빌] 리로로 페어리테일 하우스 BJD 랜덤 피규어(1EA)"
                                        loading="lazy"
                                        width={120}
                                        height={120}
                                        decoding="async"
                                        data-nimg={1}
                                        className="transition duration-150 ease-linear transform rounded-md cursor-pointer hover:scale-105"
                                        src="https://shopping-phinf.pstatic.net/main_8904584/89045847507.jpg?type=f300"
                                        style={{ color: "transparent" }}
                                    />
                                </a>
                                <div className="flex flex-col justify-start gap-1 py-1 break-all">
                                    <a
                                        href="https://ader.naver.com/v1/VV1KIjxBuV6-PFqBldAV1YOIwBKYF9nprCg_n5807IBloB6dDODkC2VUii3vqO-CxpHAQRGAo_FD38w31lCoRZyhP2yk1g5iwS9cd9EGxirJXEWy19e6U_u6mz8zT4L5XLH8uCwORrK1FCDmqrFu3aaqwQgZZHyXJhETzFndMcv98h9rWqQY5QWk17_dfDPFMpUh8xHWqn0-Aeukl0ZWLljGiKHFy2BXcDZjK68h6zhcdEFUOBx4XTbNfQ7WEG23VSb205kdU7X8aINwu5OKvpjeNMctBv0ugeD3OPs69by4QKdUf98hCRl35N8V4oLQ?c=m_joongna.ch6&t=0"
                                        rel="sponsored noreferrer"
                                        target="_blank"
                                        className="text-sm font-normal text-jnblack hover:underline text-ellipsis line-clamp-2"
                                    >
                                        [타이니빌] 리로로 페어리테일 하우스 BJD 랜덤 피규어(1EA)
                                    </a>
                                    <div className="flex gap-1 items-center">
                                        <strong className="text-black">29,900원</strong>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="text-xs font-normal mr-1 text-gray-400">
                                            타이니빌 공식스토어
                                        </span>
                                        <span className="mx-1 text-xs font-normal text-gray-400">|</span>
                                        <span className="text-xs font-normal text-gray-400">광고</span>
                                    </div>
                                </div>
                            </li>
                            <li className="flex py-3 h-[160px] overflow-hidden max-[1023px]:hidden">
                                <a
                                    href="https://ader.naver.com/v1/_DOaDafpTGWGHaXbbKOQgiyDsQOtwBy-iMQovhae36wpzlM0wVJ7L6ws2SXxHEzvlWuJqV5Uv4w1XTwvOB6G9hZg-7zrE1duneKRdWnmvp9EWTK7X8YEW1NfufUPCro2uTvOB6TB0eNLZI_hHp3dXvshZvx91niV-lJ_szTqR7L9KFQ7qiXjun9SCz5EWOHwamsysFZA09ZKLURR7Lmmq3GOvvhLqIJaI2riUxj04ffBc_CQzjIlK7Nm8kRZYAX3LCpXfpQbYqngiyFooi2eoF5SY7ya2FNSs8Aje083b8W7XLn31wBfCC4goGbsIE5U?c=m_joongna.ch6&t=0"
                                    rel="sponsored noreferrer"
                                    target="_blank"
                                    className="mr-3 flex justify-center items-start min-w-[120px] relative"
                                >
                                    <img
                                        alt="팝마트 본사 정품 라부부 더 몬스터즈 하이라이트 3세대 미개봉 랜덤박스"
                                        loading="lazy"
                                        width={120}
                                        height={120}
                                        decoding="async"
                                        data-nimg={1}
                                        className="transition duration-150 ease-linear transform rounded-md cursor-pointer hover:scale-105"
                                        src="https://shopping-phinf.pstatic.net/main_8945433/89454333539.3.jpg?type=f300"
                                        style={{ color: "transparent" }}
                                    />
                                </a>
                                <div className="flex flex-col justify-start gap-1 py-1 break-all">
                                    <a
                                        href="https://ader.naver.com/v1/_DOaDafpTGWGHaXbbKOQgiyDsQOtwBy-iMQovhae36wpzlM0wVJ7L6ws2SXxHEzvlWuJqV5Uv4w1XTwvOB6G9hZg-7zrE1duneKRdWnmvp9EWTK7X8YEW1NfufUPCro2uTvOB6TB0eNLZI_hHp3dXvshZvx91niV-lJ_szTqR7L9KFQ7qiXjun9SCz5EWOHwamsysFZA09ZKLURR7Lmmq3GOvvhLqIJaI2riUxj04ffBc_CQzjIlK7Nm8kRZYAX3LCpXfpQbYqngiyFooi2eoF5SY7ya2FNSs8Aje083b8W7XLn31wBfCC4goGbsIE5U?c=m_joongna.ch6&t=0"
                                        rel="sponsored noreferrer"
                                        target="_blank"
                                        className="text-sm font-normal text-jnblack hover:underline text-ellipsis line-clamp-2"
                                    >
                                        팝마트 본사 정품 라부부 더 몬스터즈 하이라이트 3세대 미개봉
                                        랜덤박스
                                    </a>
                                    <div className="flex gap-1 items-center">
                                        <strong className="text-black">67,800원</strong>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="text-xs font-normal mr-1 text-gray-400">
                                            오리니크
                                        </span>
                                        <span className="mx-1 text-xs font-normal text-gray-400">|</span>
                                        <span className="text-xs font-normal text-gray-400">광고</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="block lg:flex lg:min-h-[591px] space-y-12 lg:space-y-0 mb-12">
                        <div
                            name="product-description"
                            className="w-full lg:mr-[72px] lg:w-[680px] flex flex-col flex-auto false"
                        >
                            <h3 className="md:text-[22px] lg:pb-5 w-full border-b border-gray-300 basis-[48px] font-bold pb-3 text-jnblack text-lg">
                                상품 정보
                            </h3>
                            <div className="flex-1 basis-[465px] lg:basis-[475px] flex flex-col overflow-y-hidden">
                                <div className="flex flex-col h-auto">
                                    <article className="flex flex-col flex-1">
                                        <p className="flex-1 py-5 text-base font-normal break-words break-all whitespace-pre-line text-jnGray-900">
                                            메가 라부부 스케치 1000% ❣️팝마트 구매 했어요. ❣️영수증 있습니다
                                            ❣️새상품 / 미개봉 ❣️ 정품 판매해요 택배비 30,000 원 교환 / 환불
                                            불가 ⭐️⭐️⭐️⭐️⭐️ 정말 관심 있으시면 연락 주세요. 할인은 안
                                            해요. 리미테이트 제품이기 때문에 추가 생산은 없습니다. 희귀한
                                            제품이며 전 세계적으로 인기가 있어요. ⭐️⭐️⭐️⭐️⭐️ 지금
                                            품절된 선물이라 소장용으로 가장 인기 있는 특별한 선물이나
                                            한정판을 찾는다면 매우 특별한 선물입니다. MEGA LABUBU SKETCH
                                            1000% 2.5 m KRW Product From Popmart Korea Authentic Product
                                            100% CTN :35 / 350 World 🌍 wide No.813 Limited Editions
                                            Delivery 30,000 KRW No Return/ No Refund Money #라부부1000
                                            #라부부
                                        </p>
                                    </article>
                                </div>
                            </div>
                            <button className="w-full py-4 border border-gray-400 rounded">
                                더 보기
                            </button>
                        </div>
                        <div className="basis-[420px]">
                            <div name="product-store" className="w-full lg:w-[420px]">
                                <a
                                    className="flex items-center justify-between w-full pb-3 border-b border-gray-300 lg:pb-5"
                                    href="/store/10250007"
                                >
                                    <h3 className="md:text-[22px] font-bold text-jnBlack text-lg">
                                        가게 정보
                                    </h3>
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth={0}
                                        viewBox="0 0 512 512"
                                        height={24}
                                        width={24}
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z" />
                                    </svg>
                                </a>
                                <div className="flex flex-col">
                                    <div>
                                        <a
                                            className="flex justify-between items-center mt-6 mb-8 w-full"
                                            href="/store/10250007"
                                        >
                                            <div className="flex flex-col gap-1">
                                                <p className="text-lg font-semibold text-jnGray-900">
                                                    aRTxFaIR
                                                </p>
                                            </div>
                                            <div className="flex items-center translate-x-4">
                                                <img
                                                    alt="프로파일"
                                                    loading="lazy"
                                                    width={48}
                                                    height={48}
                                                    decoding="async"
                                                    data-nimg={1}
                                                    className="box-content max-w-none h-12 rounded-full border-4 border-white -translate-x-4"
                                                    src="https://img2.joongna.com/media/original/2025/08/10/1754813321840gB6_J7XeY.jpg"
                                                    style={{ color: "transparent" }}
                                                />
                                            </div>
                                        </a>
                                        <div className="text-sm break-all text-jnGray-500">
                                            리틀랜드스퀘어 팝마트에서 정품을 판매하니다.
                                        </div>
                                        <div>
                                            <div className="flex justify-between mt-2 text-[#0CB650]">
                                                <p className="text-base font-medium">
                                                    신뢰지수
                                                    <span className="ml-1 text-lg font-semibold">598</span>
                                                </p>
                                                <span className="text-sm text-jnGray-500">1,000</span>
                                            </div>
                                            <div className="w-full h-2 bg-[#F1F4F6] rounded overflow-hidden">
                                                <div className="h-full" style={{ width: "59.8%" }}>
                                                    <div className="rounded bg-gradient-to-r from-[#0DCC5A] from-0% to-[#019FB1] to-107.5% w-full h-full animate-width" />
                                                </div>
                                            </div>
                                        </div>
                                        <ul className="box-border flex text-center border border-gray-300 rounded items-center py-[18px] mt-5">
                                            <li className="flex flex-col flex-1 basis-[33%] px-3 sm:px-4 relative after:absolute [&:not(:first-child)]:after:content-['']  after:bg-gray-300 after:h-[20px] [&:not(:first-child)]:after:w-[1px] after:left-0 justify-center items-center">
                                                <span className="text-xs font-normal text-jnGray-600 break-keep">
                                                    안심결제
                                                </span>
                                                <button
                                                    disabled=""
                                                    className="block text-sm font-semibold text-jnblack mt-1 "
                                                >
                                                    0
                                                </button>
                                            </li>
                                            <li className="flex flex-col flex-1 basis-[33%] px-3 sm:px-4 relative after:absolute [&:not(:first-child)]:after:content-['']  after:bg-gray-300 after:h-[20px] [&:not(:first-child)]:after:w-[1px] after:left-0 justify-center items-center">
                                                <span className="text-xs font-normal text-jnGray-600 break-keep">
                                                    거래후기
                                                </span>
                                                <button className="block text-sm font-semibold text-jnblack mt-1 underline underline-offset-[3px]">
                                                    0
                                                </button>
                                            </li>
                                            <li className="flex flex-col flex-1 basis-[33%] px-3 sm:px-4 relative after:absolute [&:not(:first-child)]:after:content-['']  after:bg-gray-300 after:h-[20px] [&:not(:first-child)]:after:w-[1px] after:left-0 justify-center items-center">
                                                <span className="text-xs font-normal text-jnGray-600 break-keep">
                                                    단골
                                                </span>
                                                <button
                                                    disabled=""
                                                    className="block text-sm font-semibold text-jnblack mt-1 "
                                                >
                                                    4
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="2xl:pt-2 mt-5 lg:mt-4">
                                        <div className="carouselWrapper relative">
                                            <div
                                                className="swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden"
                                                dir="ltr"
                                            >
                                                <div
                                                    className="swiper-wrapper"
                                                    style={{ transform: "translate3d(0px, 0px, 0px)" }}
                                                >
                                                    <div
                                                        className="swiper-slide swiper-slide-active"
                                                        style={{ width: 132, marginRight: 12 }}
                                                    >
                                                        <a
                                                            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
                                                            href="/product/204547960"
                                                        >
                                                            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
                                                                <img
                                                                    alt="메가 로얄 몰리 - 버블 1000%"
                                                                    referrerPolicy="no-referrer"
                                                                    loading="lazy"
                                                                    decoding="async"
                                                                    data-nimg="fill"
                                                                    className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                                                                    src="https://img2.joongna.com/media/original/2025/08/12/1754933998189OG9_MefIM.jpg"
                                                                    style={{
                                                                        position: "absolute",
                                                                        height: "100%",
                                                                        width: "100%",
                                                                        inset: 0,
                                                                        color: "transparent"
                                                                    }}
                                                                />
                                                            </div>
                                                            <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                                                                메가 로얄 몰리 - 버블 1000%
                                                            </h2>
                                                            <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                                                                2,700,000원
                                                            </div>
                                                            <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                                                        </a>
                                                    </div>
                                                    <div
                                                        className="swiper-slide swiper-slide-next"
                                                        style={{ width: 132, marginRight: 12 }}
                                                    >
                                                        <a
                                                            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
                                                            href="/product/204556992"
                                                        >
                                                            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
                                                                <img
                                                                    alt="메가 로얄 몰리 x 한 메이린 1000%"
                                                                    referrerPolicy="no-referrer"
                                                                    loading="lazy"
                                                                    decoding="async"
                                                                    data-nimg="fill"
                                                                    className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                                                                    src="https://img2.joongna.com/media/original/2025/08/12/1754933910681TTs_39OBy.jpg"
                                                                    style={{
                                                                        position: "absolute",
                                                                        height: "100%",
                                                                        width: "100%",
                                                                        inset: 0,
                                                                        color: "transparent"
                                                                    }}
                                                                />
                                                            </div>
                                                            <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                                                                메가 로얄 몰리 x 한 메이린 1000%
                                                            </h2>
                                                            <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                                                                2,700,000원
                                                            </div>
                                                            <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                                                        </a>
                                                    </div>
                                                    <div
                                                        className="swiper-slide"
                                                        style={{ width: 132, marginRight: 12 }}
                                                    >
                                                        <a
                                                            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
                                                            href="/product/217180503"
                                                        >
                                                            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
                                                                <img
                                                                    alt="[팝마트] 메가 로얄 몰리 모네 수련 1000%"
                                                                    referrerPolicy="no-referrer"
                                                                    loading="lazy"
                                                                    decoding="async"
                                                                    data-nimg="fill"
                                                                    className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                                                                    src="https://img2.joongna.com/media/original/2025/08/12/1754933844025KJT_5Jjdc.jpg"
                                                                    style={{
                                                                        position: "absolute",
                                                                        height: "100%",
                                                                        width: "100%",
                                                                        inset: 0,
                                                                        color: "transparent"
                                                                    }}
                                                                />
                                                            </div>
                                                            <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                                                                [팝마트] 메가 로얄 몰리 모네 수련 1000%
                                                            </h2>
                                                            <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                                                                2,600,000원
                                                            </div>
                                                            <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                                                        </a>
                                                    </div>
                                                    <div
                                                        className="swiper-slide"
                                                        style={{ width: 132, marginRight: 12 }}
                                                    >
                                                        <a
                                                            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
                                                            href="/product/193604680"
                                                        >
                                                            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
                                                                <img
                                                                    alt="라부부 클래식 백 시리즈 - 라부부 리버시블 플러시 백"
                                                                    referrerPolicy="no-referrer"
                                                                    loading="lazy"
                                                                    decoding="async"
                                                                    data-nimg="fill"
                                                                    className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                                                                    src="https://img2.joongna.com/media/original/2024/11/24/1732422121349X5K_7g3m4.jpg"
                                                                    style={{
                                                                        position: "absolute",
                                                                        height: "100%",
                                                                        width: "100%",
                                                                        inset: 0,
                                                                        color: "transparent"
                                                                    }}
                                                                />
                                                            </div>
                                                            <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                                                                라부부 클래식 백 시리즈 - 라부부 리버시블 플러시 백
                                                            </h2>
                                                            <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                                                                68,000원
                                                            </div>
                                                            <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                                                        </a>
                                                    </div>
                                                    <div
                                                        className="swiper-slide"
                                                        style={{ width: 132, marginRight: 12 }}
                                                    >
                                                        <a
                                                            className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
                                                            href="/product/190867679"
                                                        >
                                                            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
                                                                <img
                                                                    alt="팝 썸머 파티 시리즈 - 몰리 젤리 백팩"
                                                                    referrerPolicy="no-referrer"
                                                                    loading="lazy"
                                                                    decoding="async"
                                                                    data-nimg="fill"
                                                                    className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                                                                    src="https://img2.joongna.com/media/original/2024/10/30/1730285187891pJX_Zhqm6.jpg"
                                                                    style={{
                                                                        position: "absolute",
                                                                        height: "100%",
                                                                        width: "100%",
                                                                        inset: 0,
                                                                        color: "transparent"
                                                                    }}
                                                                />
                                                            </div>
                                                            <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                                                                팝 썸머 파티 시리즈 - 몰리 젤리 백팩
                                                            </h2>
                                                            <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                                                                35,000원
                                                            </div>
                                                            <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="swiper-button-prev swiper-button-disabled" />
                                                <div className="swiper-button-next" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ins
                        className="adsbygoogle max-w-[1280px] lg:mb-[60px] mb-[40px]"
                        data-ad-client="ca-pub-5776516316749134"
                        data-ad-slot={1959145976}
                        data-full-width-responsive="true"
                        data-ad-format="auto"
                        style={{ display: "flex", justifyContent: "center", height: 280 }}
                        data-adsbygoogle-status="done"
                        data-ad-status="unfilled"
                    >
                        <div
                            id="aswift_1_host"
                            style={{
                                border: "none",
                                height: 0,
                                width: 1200,
                                margin: 0,
                                padding: 0,
                                position: "relative",
                                visibility: "visible",
                                backgroundColor: "transparent",
                                display: "inline-block",
                                overflow: "hidden",
                                opacity: 0
                            }}
                        >
                            <iframe
                                id="aswift_1"
                                name="aswift_1"
                                browsingtopics="true"
                                style={{
                                    left: 0,
                                    position: "absolute",
                                    top: 0,
                                    border: 0,
                                    width: 1200,
                                    height: 0,
                                    minHeight: "auto",
                                    maxHeight: "none",
                                    minWidth: "auto",
                                    maxWidth: "none"
                                }}
                                sandbox="allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
                                width={1200}
                                height={0}
                                frameBorder={0}
                                marginWidth={0}
                                marginHeight={0}
                                vspace={0}
                                hspace={0}
                                allowTransparency="true"
                                scrolling="no"
                                allow="attribution-reporting; run-ad-auction"
                                src="https://googleads.g.doubleclick.net/pagead/ads?client=ca-pub-5776516316749134&output=html&h=280&slotname=1959145976&adk=2213366332&adf=3405451595&pi=t.ma~as.1959145976&w=1200&abgtt=6&fwrn=4&fwrnh=100&lmt=1755015117&rafmt=1&format=1200x280&url=https%3A%2F%2Fweb.joongna.com%2Fproduct%2F212209683&fwr=0&fwrattr=true&rpe=1&resp_fmts=3&wgl=1&uach=WyJtYWNPUyIsIjE1LjUuMCIsImFybSIsIiIsIjEzOS4wLjcyNTguNjciLG51bGwsMCxudWxsLCI2NCIsW1siTm90O0E9QnJhbmQiLCI5OS4wLjAuMCJdLFsiR29vZ2xlIENocm9tZSIsIjEzOS4wLjcyNTguNjciXSxbIkNocm9taXVtIiwiMTM5LjAuNzI1OC42NyJdXSwwXQ..&dt=1755015117769&bpp=1&bdt=346141&idt=1&shv=r20250807&mjsv=m202508060101&ptt=9&saldr=aa&abxe=1&cookie=ID%3D5675e679d419dfc8%3AT%3D1755001720%3ART%3D1755014774%3AS%3DALNI_MZ8N6uiObjP8wEw9GzuQKY_bRsUDQ&eo_id_str=ID%3Dc0a834dab0f4c897%3AT%3D1755001720%3ART%3D1755014774%3AS%3DAA-AfjZvldThlbiqmxUQANnv3NBC&prev_fmts=0x0%2C1200x280%2C1200x90%2C1200x280%2C1200x90&nras=1&correlator=3153939693314&frm=20&pv=1&u_tz=540&u_his=9&u_h=1080&u_w=1920&u_ah=1055&u_aw=1920&u_cd=24&u_sd=1&dmc=8&adx=360&ady=1843&biw=1920&bih=968&scr_x=0&scr_y=0&eid=31093927%2C31093934%2C31093974%2C95362655%2C95366911%2C95369083%2C31093960%2C95368521%2C95359266&oid=2&psts=AOrYGsnXkBTRt2AlT53tvNxZR8iVs1pbqC3uyN8eFsAXJlc2_65-LhDU833-8k9fDQO-4fipimvh5OPWFdq129Vx_19uZxl9&pvsid=5921726071043161&tmod=1046127570&uas=3&nvt=2&ref=https%3A%2F%2Fwww.google.com%2F&fc=1920&brdim=-2470%2C-1004%2C-2470%2C-1004%2C1920%2C-1004%2C1920%2C1055%2C1920%2C968&vis=1&rsz=%7Cd%7CEebr%7C&abl=NS&pfx=0&fu=128&bc=31&bz=1&td=1&tdf=2&psd=W251bGwsbnVsbCxudWxsLDNd&nt=1&pgls=CAk.&ifi=7&uci=a!7&btvi=4&fsb=1&dtd=23"
                                data-google-container-id="a!7"
                                tabIndex={0}
                                title="Advertisement"
                                aria-label="Advertisement"
                                data-google-query-id="CNrYuebUhY8DFQxeDwId1Scq9w"
                                data-load-complete="true"
                            />
                        </div>
                    </ins>
                    <div className="2xl:pt-3 mt-7 mb-9 sm:mb-[60px]">
                        <div className="flex flex-wrap items-center mb-4 md:mb-5">
                            <h3 className="md:text-[22px] font-bold text-jnBlack mr-2 text-lg empty:h-7">
                                이런 상품은 어때요?
                            </h3>
                        </div>
                        <div className="carouselWrapper relative productRecommandCarousel">
                            <div
                                className="swiper swiper-initialized swiper-horizontal swiper-pointer-events"
                                dir="ltr"
                            >
                                <div
                                    className="swiper-wrapper"
                                    style={{
                                        transform: "translate3d(-430.667px, 0px, 0px)",
                                        transitionDuration: "0ms"
                                    }}
                                >
                                    <div
                                        className="swiper-slide"
                                        style={{ width: "203.333px", marginRight: 12 }}
                                    >
                                        <div className="relative">
                                            <a
                                                className="group box-border overflow-hidden flex rounded-md cursor-pointer bg-white pe-0 md:pb-1 flex-col items-start"
                                                title="태닝키티와 고전키티컵 세트 일괄"
                                                href="/product/187731325"
                                            >
                                                <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 pb-0">
                                                    <img
                                                        alt="태닝키티와 고전키티컵 세트 일괄"
                                                        referrerPolicy="no-referrer"
                                                        loading="lazy"
                                                        decoding="async"
                                                        data-nimg="fill"
                                                        className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md duration-150 ease-linear transform"
                                                        src="https://img2.joongna.com/cafe-article-data/live/2024/10/04/1079870799/1728014587684_000_gSGMH_main.jpg?impolicy=thumb&size=150"
                                                        style={{
                                                            position: "absolute",
                                                            height: "100%",
                                                            width: "100%",
                                                            inset: 0,
                                                            color: "transparent"
                                                        }}
                                                    />
                                                    <div className="absolute inset-0 z-20 flex items-center justify-center bg-black bg-opacity-[3%]" />
                                                </div>
                                                <div className="w-full overflow-hidden ps-0">
                                                    <h2 className="line-clamp-2 min-h-[2lh] text-sm h-10 text-heading">
                                                        태닝키티와 고전키티컵 세트 일괄
                                                    </h2>
                                                    <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                                                        29,000원
                                                    </div>
                                                    <div className="my-1">
                                                        <span className="text-sm text-gray-400" />
                                                        <span className="text-sm text-gray-400 mx-1 hidden">
                                                            |
                                                        </span>
                                                        <span className="text-sm text-gray-400">7초 전</span>
                                                    </div>
                                                    <div className="flex items-center" />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div
                                        className="swiper-slide swiper-slide-prev"
                                        style={{ width: "203.333px", marginRight: 12 }}
                                    >
                                        <div className="relative">
                                            <a
                                                className="group box-border overflow-hidden flex rounded-md cursor-pointer bg-white pe-0 md:pb-1 flex-col items-start"
                                                title="리리스 태닝 미개봉"
                                                href="/product/217397444"
                                            >
                                                <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 pb-0">
                                                    <img
                                                        alt="리리스 태닝 미개봉"
                                                        referrerPolicy="no-referrer"
                                                        loading="lazy"
                                                        decoding="async"
                                                        data-nimg="fill"
                                                        className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md duration-150 ease-linear transform"
                                                        src="https://img2.joongna.com/cafe-article-data/live/2025/08/13/1114261791/1755015100395_000_5MnKz_main.jpg?impolicy=thumb&size=150"
                                                        style={{
                                                            position: "absolute",
                                                            height: "100%",
                                                            width: "100%",
                                                            inset: 0,
                                                            color: "transparent"
                                                        }}
                                                    />
                                                    <div className="absolute inset-0 z-20 flex items-center justify-center bg-black bg-opacity-[3%]" />
                                                </div>
                                                <div className="w-full overflow-hidden ps-0">
                                                    <h2 className="line-clamp-2 min-h-[2lh] text-sm h-10 text-heading">
                                                        리리스 태닝 미개봉
                                                    </h2>
                                                    <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                                                        100,000원
                                                    </div>
                                                    <div className="my-1">
                                                        <span className="text-sm text-gray-400" />
                                                        <span className="text-sm text-gray-400 mx-1 hidden">
                                                            |
                                                        </span>
                                                        <span className="text-sm text-gray-400">28초 전</span>
                                                    </div>
                                                    <div className="flex items-center" />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div
                                        className="swiper-slide swiper-slide-active"
                                        style={{ width: "203.333px", marginRight: 12 }}
                                    >
                                        <div className="relative">
                                            <a
                                                className="group box-border overflow-hidden flex rounded-md cursor-pointer bg-white pe-0 md:pb-1 flex-col items-start"
                                                title="라부부 (하이라이트,놀자) 판매해요"
                                                href="/product/217397438"
                                            >
                                                <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 pb-0">
                                                    <img
                                                        alt="라부부 (하이라이트,놀자) 판매해요"
                                                        referrerPolicy="no-referrer"
                                                        loading="lazy"
                                                        decoding="async"
                                                        data-nimg="fill"
                                                        className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md duration-150 ease-linear transform"
                                                        src="https://img2.joongna.com/cafe-article-data/live/2025/08/13/1114261786/1755015091241_000_u32JB_main.jpeg?impolicy=thumb&size=150"
                                                        style={{
                                                            position: "absolute",
                                                            height: "100%",
                                                            width: "100%",
                                                            inset: 0,
                                                            color: "transparent"
                                                        }}
                                                    />
                                                    <div className="absolute inset-0 z-20 flex items-center justify-center bg-black bg-opacity-[3%]" />
                                                </div>
                                                <div className="w-full overflow-hidden ps-0">
                                                    <h2 className="line-clamp-2 min-h-[2lh] text-sm h-10 text-heading">
                                                        라부부 (하이라이트,놀자) 판매해요
                                                    </h2>
                                                    <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                                                        36,000원
                                                    </div>
                                                    <div className="my-1">
                                                        <span className="text-sm text-gray-400" />
                                                        <span className="text-sm text-gray-400 mx-1 hidden">
                                                            |
                                                        </span>
                                                        <span className="text-sm text-gray-400">37초 전</span>
                                                    </div>
                                                    <div className="flex items-center" />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div
                                        className="swiper-slide swiper-slide-next"
                                        style={{ width: "203.333px", marginRight: 12 }}
                                    >
                                        <div className="relative">
                                            <a
                                                className="group box-border overflow-hidden flex rounded-md cursor-pointer bg-white pe-0 md:pb-1 flex-col items-start"
                                                title="키키리키(미니), 물고기 경주 보드게임"
                                                href="/product/217397434"
                                            >
                                                <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 pb-0">
                                                    <img
                                                        alt="키키리키(미니), 물고기 경주 보드게임"
                                                        referrerPolicy="no-referrer"
                                                        loading="lazy"
                                                        decoding="async"
                                                        data-nimg="fill"
                                                        className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md duration-150 ease-linear transform"
                                                        src="https://img2.joongna.com/cafe-article-data/live/2025/08/13/1114261781/1755015076715_000_rz3zS_main.jpg?impolicy=thumb&size=150"
                                                        style={{
                                                            position: "absolute",
                                                            height: "100%",
                                                            width: "100%",
                                                            inset: 0,
                                                            color: "transparent"
                                                        }}
                                                    />
                                                    <div className="absolute inset-0 z-20 flex items-center justify-center bg-black bg-opacity-[3%]" />
                                                </div>
                                                <div className="w-full overflow-hidden ps-0">
                                                    <h2 className="line-clamp-2 min-h-[2lh] text-sm h-10 text-heading">
                                                        키키리키(미니), 물고기 경주 보드게임
                                                    </h2>
                                                    <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                                                        22,000원
                                                    </div>
                                                    <div className="my-1">
                                                        <span className="text-sm text-gray-400" />
                                                        <span className="text-sm text-gray-400 mx-1 hidden">
                                                            |
                                                        </span>
                                                        <span className="text-sm text-gray-400">52초 전</span>
                                                    </div>
                                                    <div className="flex items-center" />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div
                                        className="swiper-slide"
                                        style={{ width: "203.333px", marginRight: 12 }}
                                    >
                                        <div className="relative">
                                            <a
                                                className="group box-border overflow-hidden flex rounded-md cursor-pointer bg-white pe-0 md:pb-1 flex-col items-start"
                                                title="가비지타임 갑타 공식 굿즈 조형고 이어폰 파우치 쯔코님 학생증 증사 박병찬 이현성 조형석 허창현 아크릴 키링"
                                                href="/product/215144386"
                                            >
                                                <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 pb-0">
                                                    <img
                                                        alt="가비지타임 갑타 공식 굿즈 조형고 이어폰 파우치 쯔코님 학생증 증사 박병찬 이현성 조형석 허창현 아크릴 키링"
                                                        referrerPolicy="no-referrer"
                                                        loading="lazy"
                                                        decoding="async"
                                                        data-nimg="fill"
                                                        className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md duration-150 ease-linear transform"
                                                        src="https://img2.joongna.com/cafe-article-data/live/2025/07/13/1111518850/1752389403657_000_kyYpT_main.png?impolicy=thumb&size=150"
                                                        style={{
                                                            position: "absolute",
                                                            height: "100%",
                                                            width: "100%",
                                                            inset: 0,
                                                            color: "transparent"
                                                        }}
                                                    />
                                                    <div className="absolute inset-0 z-20 flex items-center justify-center bg-black bg-opacity-[3%]" />
                                                </div>
                                                <div className="w-full overflow-hidden ps-0">
                                                    <h2 className="line-clamp-2 min-h-[2lh] text-sm h-10 text-heading">
                                                        가비지타임 갑타 공식 굿즈 조형고 이어폰 파우치 쯔코님
                                                        학생증 증사 박병찬 이현성 조형석 허창현 아크릴 키링
                                                    </h2>
                                                    <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                                                        5,000원
                                                    </div>
                                                    <div className="my-1">
                                                        <span className="text-sm text-gray-400" />
                                                        <span className="text-sm text-gray-400 mx-1 hidden">
                                                            |
                                                        </span>
                                                        <span className="text-sm text-gray-400">2분 전</span>
                                                    </div>
                                                    <div className="flex items-center" />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div
                                        className="swiper-slide"
                                        style={{ width: "203.333px", marginRight: 12 }}
                                    >
                                        <div className="relative">
                                            <a
                                                className="group box-border overflow-hidden flex rounded-md cursor-pointer bg-white pe-0 md:pb-1 flex-col items-start"
                                                title="팝마트 크라이베이비 표범 핑크 냥이"
                                                href="/product/217397401"
                                            >
                                                <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 pb-0">
                                                    <img
                                                        alt="팝마트 크라이베이비 표범 핑크 냥이"
                                                        referrerPolicy="no-referrer"
                                                        loading="lazy"
                                                        decoding="async"
                                                        data-nimg="fill"
                                                        className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md duration-150 ease-linear transform"
                                                        src="https://img2.joongna.com/media/original/2025/08/13/1755014966833IRN_2YEoO.jpg?impolicy=thumb&size=150"
                                                        style={{
                                                            position: "absolute",
                                                            height: "100%",
                                                            width: "100%",
                                                            inset: 0,
                                                            color: "transparent"
                                                        }}
                                                    />
                                                    <div className="absolute inset-0 z-20 flex items-center justify-center bg-black bg-opacity-[3%]" />
                                                </div>
                                                <div className="w-full overflow-hidden ps-0">
                                                    <h2 className="line-clamp-2 min-h-[2lh] text-sm h-10 text-heading">
                                                        팝마트 크라이베이비 표범 핑크 냥이
                                                    </h2>
                                                    <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                                                        46,000원
                                                    </div>
                                                    <div className="my-1">
                                                        <span className="text-sm text-gray-400" />
                                                        <span className="text-sm text-gray-400 mx-1 hidden">
                                                            |
                                                        </span>
                                                        <span className="text-sm text-gray-400">2분 전</span>
                                                    </div>
                                                    <div className="flex items-center" />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div
                                        className="swiper-slide"
                                        style={{ width: "203.333px", marginRight: 12 }}
                                    >
                                        <div className="relative">
                                            <a
                                                className="group box-border overflow-hidden flex rounded-md cursor-pointer bg-white pe-0 md:pb-1 flex-col items-start"
                                                title="Shf 체인소맨 파워"
                                                href="/product/217397403"
                                            >
                                                <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 pb-0">
                                                    <img
                                                        alt="Shf 체인소맨 파워"
                                                        referrerPolicy="no-referrer"
                                                        loading="lazy"
                                                        decoding="async"
                                                        data-nimg="fill"
                                                        className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md duration-150 ease-linear transform"
                                                        src="https://img2.joongna.com/cafe-article-data/live/2025/08/13/1114261742/1755014978720_000_p7UaY_main.jpeg?impolicy=thumb&size=150"
                                                        style={{
                                                            position: "absolute",
                                                            height: "100%",
                                                            width: "100%",
                                                            inset: 0,
                                                            color: "transparent"
                                                        }}
                                                    />
                                                    <div className="absolute inset-0 z-20 flex items-center justify-center bg-black bg-opacity-[3%]" />
                                                </div>
                                                <div className="w-full overflow-hidden ps-0">
                                                    <h2 className="line-clamp-2 min-h-[2lh] text-sm h-10 text-heading">
                                                        Shf 체인소맨 파워
                                                    </h2>
                                                    <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                                                        40,000원
                                                    </div>
                                                    <div className="my-1">
                                                        <span className="text-sm text-gray-400" />
                                                        <span className="text-sm text-gray-400 mx-1 hidden">
                                                            |
                                                        </span>
                                                        <span className="text-sm text-gray-400">2분 전</span>
                                                    </div>
                                                    <div className="flex items-center" />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div
                                        className="swiper-slide"
                                        style={{ width: "203.333px", marginRight: 12 }}
                                    >
                                        <div className="relative">
                                            <a
                                                className="group box-border overflow-hidden flex rounded-md cursor-pointer bg-white pe-0 md:pb-1 flex-col items-start"
                                                title="구데타마 보이스 키체인 가챠"
                                                href="/product/184675071"
                                            >
                                                <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 pb-0">
                                                    <img
                                                        alt="구데타마 보이스 키체인 가챠"
                                                        referrerPolicy="no-referrer"
                                                        loading="lazy"
                                                        decoding="async"
                                                        data-nimg="fill"
                                                        className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md duration-150 ease-linear transform"
                                                        src="https://img2.joongna.com/media/original/2024/09/12/1726077052601uJV_vo08K.jpg?impolicy=thumb&size=150"
                                                        style={{
                                                            position: "absolute",
                                                            height: "100%",
                                                            width: "100%",
                                                            inset: 0,
                                                            color: "transparent"
                                                        }}
                                                    />
                                                    <div className="absolute inset-0 z-20 flex items-center justify-center bg-black bg-opacity-[3%]" />
                                                </div>
                                                <div className="w-full overflow-hidden ps-0">
                                                    <h2 className="line-clamp-2 min-h-[2lh] text-sm h-10 text-heading">
                                                        구데타마 보이스 키체인 가챠
                                                    </h2>
                                                    <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                                                        30,000원
                                                    </div>
                                                    <div className="my-1">
                                                        <span className="text-sm text-gray-400">회천2동</span>
                                                        <span className="text-sm text-gray-400 mx-1">|</span>
                                                        <span className="text-sm text-gray-400">3분 전</span>
                                                    </div>
                                                    <div className="flex items-center" />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div
                                        className="swiper-slide"
                                        style={{ width: "203.333px", marginRight: 12 }}
                                    >
                                        <div className="relative">
                                            <a
                                                className="group box-border overflow-hidden flex rounded-md cursor-pointer bg-white pe-0 md:pb-1 flex-col items-start"
                                                title="급처)커스텀 레고 사쿠라,필링 드래곤볼사쿠라"
                                                href="/product/217378690"
                                            >
                                                <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 pb-0">
                                                    <img
                                                        alt="급처)커스텀 레고 사쿠라,필링 드래곤볼사쿠라"
                                                        referrerPolicy="no-referrer"
                                                        loading="lazy"
                                                        decoding="async"
                                                        data-nimg="fill"
                                                        className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md duration-150 ease-linear transform"
                                                        src="https://img2.joongna.com/media/original/2025/08/12/1754993266589hNs_G9Lqf.jpg?impolicy=thumb&size=150"
                                                        style={{
                                                            position: "absolute",
                                                            height: "100%",
                                                            width: "100%",
                                                            inset: 0,
                                                            color: "transparent"
                                                        }}
                                                    />
                                                    <div className="absolute inset-0 z-20 flex items-center justify-center bg-black bg-opacity-[3%]" />
                                                </div>
                                                <div className="w-full overflow-hidden ps-0">
                                                    <h2 className="line-clamp-2 min-h-[2lh] text-sm h-10 text-heading">
                                                        급처)커스텀 레고 사쿠라,필링 드래곤볼사쿠라
                                                    </h2>
                                                    <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                                                        1,234원
                                                    </div>
                                                    <div className="my-1">
                                                        <span className="text-sm text-gray-400" />
                                                        <span className="text-sm text-gray-400 mx-1 hidden">
                                                            |
                                                        </span>
                                                        <span className="text-sm text-gray-400">4분 전</span>
                                                    </div>
                                                    <div className="flex items-center" />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div
                                        className="swiper-slide"
                                        style={{ width: "203.333px", marginRight: 12 }}
                                    >
                                        <div className="relative">
                                            <a
                                                className="group box-border overflow-hidden flex rounded-md cursor-pointer bg-white pe-0 md:pb-1 flex-col items-start"
                                                title="레고 마블 커스텀 피규어 (호환)"
                                                href="/product/213501179"
                                            >
                                                <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 pb-0">
                                                    <img
                                                        alt="레고 마블 커스텀 피규어 (호환)"
                                                        referrerPolicy="no-referrer"
                                                        loading="lazy"
                                                        decoding="async"
                                                        data-nimg="fill"
                                                        className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md duration-150 ease-linear transform"
                                                        src="https://img2.joongna.com/media/original/2025/06/24/1750774032947nat_IZFxt.jpg?impolicy=thumb&size=150"
                                                        style={{
                                                            position: "absolute",
                                                            height: "100%",
                                                            width: "100%",
                                                            inset: 0,
                                                            color: "transparent"
                                                        }}
                                                    />
                                                    <div className="absolute inset-0 z-20 flex items-center justify-center bg-black bg-opacity-[3%]" />
                                                </div>
                                                <div className="w-full overflow-hidden ps-0">
                                                    <h2 className="line-clamp-2 min-h-[2lh] text-sm h-10 text-heading">
                                                        레고 마블 커스텀 피규어 (호환)
                                                    </h2>
                                                    <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                                                        1,600원
                                                    </div>
                                                    <div className="my-1">
                                                        <span className="text-sm text-gray-400">수완동</span>
                                                        <span className="text-sm text-gray-400 mx-1">|</span>
                                                        <span className="text-sm text-gray-400">5분 전</span>
                                                    </div>
                                                    <div className="flex items-center" />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div
                                        className="swiper-slide"
                                        style={{ width: "203.333px", marginRight: 12 }}
                                    >
                                        <div className="relative">
                                            <a
                                                className="group box-border overflow-hidden flex rounded-md cursor-pointer bg-white pe-0 md:pb-1 flex-col items-start"
                                                title="넨도로이드 시리즈 대량 싸게 처분합니다"
                                                href="/product/217321622"
                                            >
                                                <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 pb-0">
                                                    <img
                                                        alt="넨도로이드 시리즈 대량 싸게 처분합니다"
                                                        referrerPolicy="no-referrer"
                                                        loading="lazy"
                                                        decoding="async"
                                                        data-nimg="fill"
                                                        className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md duration-150 ease-linear transform"
                                                        src="https://img2.joongna.com/media/original/2025/08/12/1754959309728KaF_oixlX.jpg?impolicy=thumb&size=150"
                                                        style={{
                                                            position: "absolute",
                                                            height: "100%",
                                                            width: "100%",
                                                            inset: 0,
                                                            color: "transparent"
                                                        }}
                                                    />
                                                    <div className="absolute inset-0 z-20 flex items-center justify-center bg-black bg-opacity-[3%]" />
                                                </div>
                                                <div className="w-full overflow-hidden ps-0">
                                                    <h2 className="line-clamp-2 min-h-[2lh] text-sm h-10 text-heading">
                                                        넨도로이드 시리즈 대량 싸게 처분합니다
                                                    </h2>
                                                    <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                                                        999,999원
                                                    </div>
                                                    <div className="my-1">
                                                        <span className="text-sm text-gray-400">신대방제1동</span>
                                                        <span className="text-sm text-gray-400 mx-1">|</span>
                                                        <span className="text-sm text-gray-400">5분 전</span>
                                                    </div>
                                                    <div className="flex items-center" />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div
                                        className="swiper-slide"
                                        style={{ width: "203.333px", marginRight: 12 }}
                                    >
                                        <div className="relative">
                                            <a
                                                className="group box-border overflow-hidden flex rounded-md cursor-pointer bg-white pe-0 md:pb-1 flex-col items-start"
                                                title="팝마트 라부부 인형키링 새상품"
                                                href="/product/217075653"
                                            >
                                                <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 pb-0">
                                                    <img
                                                        alt="팝마트 라부부 인형키링 새상품"
                                                        referrerPolicy="no-referrer"
                                                        loading="lazy"
                                                        decoding="async"
                                                        data-nimg="fill"
                                                        className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md duration-150 ease-linear transform"
                                                        src="https://img2.joongna.com/media/original/2025/08/07/17545677608970q1_oyjMD.jpg?impolicy=thumb&size=150"
                                                        style={{
                                                            position: "absolute",
                                                            height: "100%",
                                                            width: "100%",
                                                            inset: 0,
                                                            color: "transparent"
                                                        }}
                                                    />
                                                    <div className="absolute inset-0 z-20 flex items-center justify-center bg-black bg-opacity-[3%]" />
                                                </div>
                                                <div className="w-full overflow-hidden ps-0">
                                                    <h2 className="line-clamp-2 min-h-[2lh] text-sm h-10 text-heading">
                                                        팝마트 라부부 인형키링 새상품
                                                    </h2>
                                                    <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                                                        23,000원
                                                    </div>
                                                    <div className="my-1">
                                                        <span className="text-sm text-gray-400">신정7동</span>
                                                        <span className="text-sm text-gray-400 mx-1">|</span>
                                                        <span className="text-sm text-gray-400">5분 전</span>
                                                    </div>
                                                    <div className="flex items-center" />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div
                                        className="swiper-slide"
                                        style={{ width: "203.333px", marginRight: 12 }}
                                    >
                                        <div className="relative">
                                            <a
                                                className="group box-border overflow-hidden flex rounded-md cursor-pointer bg-white pe-0 md:pb-1 flex-col items-start"
                                                title="(정품,미개봉) 라부부 하이라이트 키링 새상품"
                                                href="/product/217397330"
                                            >
                                                <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 pb-0">
                                                    <img
                                                        alt="(정품,미개봉) 라부부 하이라이트 키링 새상품"
                                                        referrerPolicy="no-referrer"
                                                        loading="lazy"
                                                        decoding="async"
                                                        data-nimg="fill"
                                                        className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md duration-150 ease-linear transform"
                                                        src="https://img2.joongna.com/cafe-article-data/live/2025/08/13/1114261643/1755014781628_000_Lu9Jg_main.jpeg?impolicy=thumb&size=150"
                                                        style={{
                                                            position: "absolute",
                                                            height: "100%",
                                                            width: "100%",
                                                            inset: 0,
                                                            color: "transparent"
                                                        }}
                                                    />
                                                    <div className="absolute inset-0 z-20 flex items-center justify-center bg-black bg-opacity-[3%]" />
                                                </div>
                                                <div className="w-full overflow-hidden ps-0">
                                                    <h2 className="line-clamp-2 min-h-[2lh] text-sm h-10 text-heading">
                                                        (정품,미개봉) 라부부 하이라이트 키링 새상품
                                                    </h2>
                                                    <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                                                        219,000원
                                                    </div>
                                                    <div className="my-1">
                                                        <span className="text-sm text-gray-400" />
                                                        <span className="text-sm text-gray-400 mx-1 hidden">
                                                            |
                                                        </span>
                                                        <span className="text-sm text-gray-400">5분 전</span>
                                                    </div>
                                                    <div className="flex items-center" />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div
                                        className="swiper-slide"
                                        style={{ width: "203.333px", marginRight: 12 }}
                                    >
                                        <div className="relative">
                                            <a
                                                className="group box-border overflow-hidden flex rounded-md cursor-pointer bg-white pe-0 md:pb-1 flex-col items-start"
                                                title="사카모토데이즈 사카데이 나츠키 나구모 반프레스토 피규어"
                                                href="/product/213198005"
                                            >
                                                <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 pb-0">
                                                    <img
                                                        alt="사카모토데이즈 사카데이 나츠키 나구모 반프레스토 피규어"
                                                        referrerPolicy="no-referrer"
                                                        loading="lazy"
                                                        decoding="async"
                                                        data-nimg="fill"
                                                        className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md duration-150 ease-linear transform"
                                                        src="https://img2.joongna.com/media/original/2025/06/21/1750491153072Rnm_EJh6m.jpg?impolicy=thumb&size=150"
                                                        style={{
                                                            position: "absolute",
                                                            height: "100%",
                                                            width: "100%",
                                                            inset: 0,
                                                            color: "transparent"
                                                        }}
                                                    />
                                                    <div className="absolute inset-0 z-20 flex items-center justify-center bg-black bg-opacity-[3%]" />
                                                </div>
                                                <div className="w-full overflow-hidden ps-0">
                                                    <h2 className="line-clamp-2 min-h-[2lh] text-sm h-10 text-heading">
                                                        사카모토데이즈 사카데이 나츠키 나구모 반프레스토 피규어
                                                    </h2>
                                                    <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                                                        57,000원
                                                    </div>
                                                    <div className="my-1">
                                                        <span className="text-sm text-gray-400" />
                                                        <span className="text-sm text-gray-400 mx-1 hidden">
                                                            |
                                                        </span>
                                                        <span className="text-sm text-gray-400">6분 전</span>
                                                    </div>
                                                    <div className="flex items-center" />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div
                                        className="swiper-slide"
                                        style={{ width: "203.333px", marginRight: 12 }}
                                    >
                                        <div className="relative">
                                            <a
                                                className="group box-border overflow-hidden flex rounded-md cursor-pointer bg-white pe-0 md:pb-1 flex-col items-start"
                                                title="메가하우스 (MegaHouse) 판다 Z (Panda Z) & 판다 제트 판매합니다."
                                                href="/product/217397317"
                                            >
                                                <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 pb-0">
                                                    <img
                                                        alt="메가하우스 (MegaHouse) 판다 Z (Panda Z) & 판다 제트 판매합니다."
                                                        referrerPolicy="no-referrer"
                                                        loading="lazy"
                                                        decoding="async"
                                                        data-nimg="fill"
                                                        className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md duration-150 ease-linear transform"
                                                        src="https://img2.joongna.com/cafe-article-data/live/2025/08/13/1114261632/1755014735277_000_L6nID_main.jpg?impolicy=thumb&size=150"
                                                        style={{
                                                            position: "absolute",
                                                            height: "100%",
                                                            width: "100%",
                                                            inset: 0,
                                                            color: "transparent"
                                                        }}
                                                    />
                                                    <div className="absolute inset-0 z-20 flex items-center justify-center bg-black bg-opacity-[3%]" />
                                                </div>
                                                <div className="w-full overflow-hidden ps-0">
                                                    <h2 className="line-clamp-2 min-h-[2lh] text-sm h-10 text-heading">
                                                        메가하우스 (MegaHouse) 판다 Z (Panda Z) &amp; 판다 제트
                                                        판매합니다.
                                                    </h2>
                                                    <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                                                        7,000원
                                                    </div>
                                                    <div className="my-1">
                                                        <span className="text-sm text-gray-400" />
                                                        <span className="text-sm text-gray-400 mx-1 hidden">
                                                            |
                                                        </span>
                                                        <span className="text-sm text-gray-400">6분 전</span>
                                                    </div>
                                                    <div className="flex items-center" />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div
                                        className="swiper-slide"
                                        style={{ width: "203.333px", marginRight: 12 }}
                                    >
                                        <div className="relative">
                                            <a
                                                className="group box-border overflow-hidden flex rounded-md cursor-pointer bg-white pe-0 md:pb-1 flex-col items-start"
                                                title="원피스 pop 쵸파 혼포인트 피규어"
                                                href="/product/217397304"
                                            >
                                                <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 pb-0">
                                                    <img
                                                        alt="원피스 pop 쵸파 혼포인트 피규어"
                                                        referrerPolicy="no-referrer"
                                                        loading="lazy"
                                                        decoding="async"
                                                        data-nimg="fill"
                                                        className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md duration-150 ease-linear transform"
                                                        src="https://img2.joongna.com/media/original/2025/08/13/1755014681665Goj_5RKE3.jpg?impolicy=thumb&size=150"
                                                        style={{
                                                            position: "absolute",
                                                            height: "100%",
                                                            width: "100%",
                                                            inset: 0,
                                                            color: "transparent"
                                                        }}
                                                    />
                                                    <div className="absolute inset-0 z-20 flex items-center justify-center bg-black bg-opacity-[3%]" />
                                                </div>
                                                <div className="w-full overflow-hidden ps-0">
                                                    <h2 className="line-clamp-2 min-h-[2lh] text-sm h-10 text-heading">
                                                        원피스 pop 쵸파 혼포인트 피규어
                                                    </h2>
                                                    <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                                                        65,000원
                                                    </div>
                                                    <div className="my-1">
                                                        <span className="text-sm text-gray-400">유천동</span>
                                                        <span className="text-sm text-gray-400 mx-1">|</span>
                                                        <span className="text-sm text-gray-400">6분 전</span>
                                                    </div>
                                                    <div className="flex items-center" />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div
                                        className="swiper-slide"
                                        style={{ width: "203.333px", marginRight: 12 }}
                                    >
                                        <div className="relative">
                                            <a
                                                className="group box-border overflow-hidden flex rounded-md cursor-pointer bg-white pe-0 md:pb-1 flex-col items-start"
                                                title="치비 케로 케로로 실물 사이즈 팬클럽 한정 인형"
                                                href="/product/217397291"
                                            >
                                                <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 pb-0">
                                                    <img
                                                        alt="치비 케로 케로로 실물 사이즈 팬클럽 한정 인형"
                                                        referrerPolicy="no-referrer"
                                                        loading="lazy"
                                                        decoding="async"
                                                        data-nimg="fill"
                                                        className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md duration-150 ease-linear transform"
                                                        src="https://img2.joongna.com/cafe-article-data/live/2025/08/13/1114261598/1755014656987_000_sImNV_main.jpeg?impolicy=thumb&size=150"
                                                        style={{
                                                            position: "absolute",
                                                            height: "100%",
                                                            width: "100%",
                                                            inset: 0,
                                                            color: "transparent"
                                                        }}
                                                    />
                                                    <div className="absolute inset-0 z-20 flex items-center justify-center bg-black bg-opacity-[3%]" />
                                                </div>
                                                <div className="w-full overflow-hidden ps-0">
                                                    <h2 className="line-clamp-2 min-h-[2lh] text-sm h-10 text-heading">
                                                        치비 케로 케로로 실물 사이즈 팬클럽 한정 인형
                                                    </h2>
                                                    <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                                                        245,000원
                                                    </div>
                                                    <div className="my-1">
                                                        <span className="text-sm text-gray-400" />
                                                        <span className="text-sm text-gray-400 mx-1 hidden">
                                                            |
                                                        </span>
                                                        <span className="text-sm text-gray-400">7분 전</span>
                                                    </div>
                                                    <div className="flex items-center" />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div
                                        className="swiper-slide"
                                        style={{ width: "203.333px", marginRight: 12 }}
                                    >
                                        <div className="relative">
                                            <a
                                                className="group box-border overflow-hidden flex rounded-md cursor-pointer bg-white pe-0 md:pb-1 flex-col items-start"
                                                title="보드게임-듄임페리움, 칸반EV, 루트, 위대한로렌초, 캐스캐디아, 코드네임, 어센션10주년, 모던아트, 아임더보스, 다섯부족, 달무티, 보난자, 문명의시대, 블러드레이지, 퍼레이드"
                                                href="/product/217397288"
                                            >
                                                <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 pb-0">
                                                    <img
                                                        alt="보드게임-듄임페리움, 칸반EV, 루트, 위대한로렌초, 캐스캐디아, 코드네임, 어센션10주년, 모던아트, 아임더보스, 다섯부족, 달무티, 보난자, 문명의시대, 블러드레이지, 퍼레이드"
                                                        referrerPolicy="no-referrer"
                                                        loading="lazy"
                                                        decoding="async"
                                                        data-nimg="fill"
                                                        className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md duration-150 ease-linear transform"
                                                        src="https://img2.joongna.com/cafe-article-data/live/2025/08/13/1114261588/1755014643409_000_UWywA_main.jpg?impolicy=thumb&size=150"
                                                        style={{
                                                            position: "absolute",
                                                            height: "100%",
                                                            width: "100%",
                                                            inset: 0,
                                                            color: "transparent"
                                                        }}
                                                    />
                                                    <div className="absolute inset-0 z-20 flex items-center justify-center bg-black bg-opacity-[3%]" />
                                                </div>
                                                <div className="w-full overflow-hidden ps-0">
                                                    <h2 className="line-clamp-2 min-h-[2lh] text-sm h-10 text-heading">
                                                        보드게임-듄임페리움, 칸반EV, 루트, 위대한로렌초,
                                                        캐스캐디아, 코드네임, 어센션10주년, 모던아트, 아임더보스,
                                                        다섯부족, 달무티, 보난자, 문명의시대, 블러드레이지,
                                                        퍼레이드
                                                    </h2>
                                                    <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                                                        12,345원
                                                    </div>
                                                    <div className="my-1">
                                                        <span className="text-sm text-gray-400" />
                                                        <span className="text-sm text-gray-400 mx-1 hidden">
                                                            |
                                                        </span>
                                                        <span className="text-sm text-gray-400">8분 전</span>
                                                    </div>
                                                    <div className="flex items-center" />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div
                                        className="swiper-slide"
                                        style={{ width: "203.333px", marginRight: 12 }}
                                    >
                                        <div className="relative">
                                            <a
                                                className="group box-border overflow-hidden flex rounded-md cursor-pointer bg-white pe-0 md:pb-1 flex-col items-start"
                                                title="교쇼 페라리 미조립 5개 일괄"
                                                href="/product/217397284"
                                            >
                                                <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 pb-0">
                                                    <img
                                                        alt="교쇼 페라리 미조립 5개 일괄"
                                                        referrerPolicy="no-referrer"
                                                        loading="lazy"
                                                        decoding="async"
                                                        data-nimg="fill"
                                                        className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md duration-150 ease-linear transform"
                                                        src="https://img2.joongna.com/cafe-article-data/live/2025/08/13/1114261587/1755014646217_000_rac4n_main.JPG?impolicy=thumb&size=150"
                                                        style={{
                                                            position: "absolute",
                                                            height: "100%",
                                                            width: "100%",
                                                            inset: 0,
                                                            color: "transparent"
                                                        }}
                                                    />
                                                    <div className="absolute inset-0 z-20 flex items-center justify-center bg-black bg-opacity-[3%]" />
                                                </div>
                                                <div className="w-full overflow-hidden ps-0">
                                                    <h2 className="line-clamp-2 min-h-[2lh] text-sm h-10 text-heading">
                                                        교쇼 페라리 미조립 5개 일괄
                                                    </h2>
                                                    <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                                                        65,000원
                                                    </div>
                                                    <div className="my-1">
                                                        <span className="text-sm text-gray-400" />
                                                        <span className="text-sm text-gray-400 mx-1 hidden">
                                                            |
                                                        </span>
                                                        <span className="text-sm text-gray-400">8분 전</span>
                                                    </div>
                                                    <div className="flex items-center" />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div
                                        className="swiper-slide"
                                        style={{ width: "203.333px", marginRight: 12 }}
                                    >
                                        <div className="relative">
                                            <a
                                                className="group box-border overflow-hidden flex rounded-md cursor-pointer bg-white pe-0 md:pb-1 flex-col items-start"
                                                title="도라에몽 피규어 롯데시네마 굿즈"
                                                href="/product/216960829"
                                            >
                                                <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 pb-0">
                                                    <img
                                                        alt="도라에몽 피규어 롯데시네마 굿즈"
                                                        referrerPolicy="no-referrer"
                                                        loading="lazy"
                                                        decoding="async"
                                                        data-nimg="fill"
                                                        className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md duration-150 ease-linear transform"
                                                        src="https://img2.joongna.com/media/original/2025/08/06/17544103220739Ub_DSNIu.jpg?impolicy=thumb&size=150"
                                                        style={{
                                                            position: "absolute",
                                                            height: "100%",
                                                            width: "100%",
                                                            inset: 0,
                                                            color: "transparent"
                                                        }}
                                                    />
                                                    <div className="absolute inset-0 z-20 flex items-center justify-center bg-black bg-opacity-[3%]" />
                                                </div>
                                                <div className="w-full overflow-hidden ps-0">
                                                    <h2 className="line-clamp-2 min-h-[2lh] text-sm h-10 text-heading">
                                                        도라에몽 피규어 롯데시네마 굿즈
                                                    </h2>
                                                    <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                                                        28,000원
                                                    </div>
                                                    <div className="my-1">
                                                        <span className="text-sm text-gray-400" />
                                                        <span className="text-sm text-gray-400 mx-1 hidden">
                                                            |
                                                        </span>
                                                        <span className="text-sm text-gray-400">8분 전</span>
                                                    </div>
                                                    <div className="flex items-center" />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button
                                className="w-7 h-7 text-black flex items-center justify-center absolute z-10 transition duration-250 transform -translate-y-1/2 shadow-navigation top-1/2 hover:bg-gray-900 hover:text-white focus:outline-none rounded-full text-sm md:text-base lg:w-9 lg:h-9 lg:text-xl xl:w-10 xl:h-10 3xl:w-12 3xl:h-12 3xl:text-2xl -mt-8 start-0"
                                id="related-products-carousel-prev"
                                aria-label="prev-button"
                            >
                                <svg
                                    width={26}
                                    height={28}
                                    viewBox="0 0 26 28"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="rotate-[0deg]"
                                >
                                    <g filter="url(#filter0_d_19461_8348)">
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M15.8122 5.34218C16.4517 6.0669 16.3825 7.17278 15.6578 7.81224L8.645 14L15.6578 20.1878C16.3825 20.8273 16.4517 21.9331 15.8122 22.6579C15.1727 23.3826 14.0669 23.4517 13.3421 22.8122L5.26706 15.6872C4.25192 14.7914 4.25192 13.2086 5.26706 12.3129L13.3421 5.1878C14.0669 4.54835 15.1727 4.61747 15.8122 5.34218Z"
                                            fill="white"
                                        />
                                    </g>
                                    <defs>
                                        <filter
                                            id="filter0_d_19461_8348"
                                            x="0.505707"
                                            y="0.75"
                                            width="19.7443"
                                            height="26.5"
                                            filterUnits="userSpaceOnUse"
                                            colorInterpolationFilters="sRGB"
                                        >
                                            <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                            <feColorMatrix
                                                in="SourceAlpha"
                                                type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                result="hardAlpha"
                                            />
                                            <feOffset />
                                            <feGaussianBlur stdDeviation={2} />
                                            <feComposite in2="hardAlpha" operator="out" />
                                            <feColorMatrix
                                                type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"
                                            />
                                            <feBlend
                                                mode="normal"
                                                in2="BackgroundImageFix"
                                                result="effect1_dropShadow_19461_8348"
                                            />
                                            <feBlend
                                                mode="normal"
                                                in="SourceGraphic"
                                                in2="effect1_dropShadow_19461_8348"
                                                result="shape"
                                            />
                                        </filter>
                                    </defs>
                                </svg>
                            </button>
                            <button
                                className="w-7 h-7 text-black flex items-center justify-center absolute z-10 transition duration-250 transform -translate-y-1/2 shadow-navigation top-1/2 hover:bg-gray-900 hover:text-white focus:outline-none rounded-full text-sm md:text-base lg:w-9 lg:h-9 lg:text-xl xl:w-10 xl:h-10 3xl:w-12 3xl:h-12 3xl:text-2xl -mt-8 end-0"
                                id="related-products-carousel-next"
                                aria-label="next-button"
                            >
                                <svg
                                    width={26}
                                    height={28}
                                    viewBox="0 0 26 28"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="rotate-[180deg]"
                                >
                                    <g filter="url(#filter0_d_19461_8348)">
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M15.8122 5.34218C16.4517 6.0669 16.3825 7.17278 15.6578 7.81224L8.645 14L15.6578 20.1878C16.3825 20.8273 16.4517 21.9331 15.8122 22.6579C15.1727 23.3826 14.0669 23.4517 13.3421 22.8122L5.26706 15.6872C4.25192 14.7914 4.25192 13.2086 5.26706 12.3129L13.3421 5.1878C14.0669 4.54835 15.1727 4.61747 15.8122 5.34218Z"
                                            fill="white"
                                        />
                                    </g>
                                    <defs>
                                        <filter
                                            id="filter0_d_19461_8348"
                                            x="0.505707"
                                            y="0.75"
                                            width="19.7443"
                                            height="26.5"
                                            filterUnits="userSpaceOnUse"
                                            colorInterpolationFilters="sRGB"
                                        >
                                            <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                            <feColorMatrix
                                                in="SourceAlpha"
                                                type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                result="hardAlpha"
                                            />
                                            <feOffset />
                                            <feGaussianBlur stdDeviation={2} />
                                            <feComposite in2="hardAlpha" operator="out" />
                                            <feColorMatrix
                                                type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"
                                            />
                                            <feBlend
                                                mode="normal"
                                                in2="BackgroundImageFix"
                                                result="effect1_dropShadow_19461_8348"
                                            />
                                            <feBlend
                                                mode="normal"
                                                in="SourceGraphic"
                                                in2="effect1_dropShadow_19461_8348"
                                                result="shape"
                                            />
                                        </filter>
                                    </defs>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mx-auto px-5 md:px-8 2xl:px-16 box-content max-w-[1024px] min-[1600px]:max-w-[1280px]">
                    <div className="mb-9 sm:mb-[60px]">
                        <div className="flex flex-wrap items-center mb-4 md:mb-5">
                            <h3 className="md:text-[22px] font-bold text-jnBlack mr-2 text-lg empty:h-7">
                                파워쇼핑
                            </h3>
                            <img
                                alt="ad"
                                loading="lazy"
                                width={23}
                                height={16}
                                decoding="async"
                                data-nimg={1}
                                src=""
                                style={{ color: "transparent" }}
                            />
                        </div>
                        <ul className="grid grid-cols-3 sm:grid-cols-5 xl:grid-cols-6 gap-x-3 lg:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8 ">
                            <li className="pb-2">
                                <div className="group box-border overflow-hidden flex rounded-md bg-white pe-0 md:pb-1 flex-col">
                                    <a
                                        href="https://ader.naver.com/v1/EbbX6acowLyBuGVpXIPUOseUaVpjyAtpGmV-hO7joZKBuYeBLN7R1RYql_civK0XTJWJna945LIkcvinzRkwepyrxJTZKj_L3oM7ZImZbYvhAY3jHX_I-fX8W2atvr8mznCsqsuM8cWMD8ejo6LgBUUS5iZGfBTq39oV_soOkoIR_KhaI47dRergdyzoMTE28iRkkzRaR_UCCQty8zjQOOlK0udnwTh1VAaimu9r53v2ehOQK_r5tqyX25ImyXSPKNecaPpE1n4m8UiseIRerwzxGHLTltHzsgSLr36r9mvu2kmsAgGAHy8q_9VcWVo34I5_qJfraPUU38Xl66uWfg==?c=m_joongna.ch6&t=0"
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
                                                alt="팝마트 정품인증 라부부 3세대 더 몬스터즈 하이라이트 캐릭터 미개봉"
                                                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                                decoding="async"
                                                data-nimg="fill"
                                                className="bg-gray-300 object-cover rounded-s-md rounded-md transition duration-150 ease-linear transform hover:scale-105 cursor-pointer"
                                                style={{
                                                    position: "absolute",
                                                    inset: 0,
                                                    boxSizing: "border-box",
                                                    padding: 0,
                                                    border: "none",
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
                                                href="https://ader.naver.com/v1/EbbX6acowLyBuGVpXIPUOseUaVpjyAtpGmV-hO7joZKBuYeBLN7R1RYql_civK0XTJWJna945LIkcvinzRkwepyrxJTZKj_L3oM7ZImZbYvhAY3jHX_I-fX8W2atvr8mznCsqsuM8cWMD8ejo6LgBUUS5iZGfBTq39oV_soOkoIR_KhaI47dRergdyzoMTE28iRkkzRaR_UCCQty8zjQOOlK0udnwTh1VAaimu9r53v2ehOQK_r5tqyX25ImyXSPKNecaPpE1n4m8UiseIRerwzxGHLTltHzsgSLr36r9mvu2kmsAgGAHy8q_9VcWVo34I5_qJfraPUU38Xl66uWfg==?c=m_joongna.ch6&t=0"
                                                rel="sponsored noreferrer"
                                                target="_blank"
                                                className="line-clamp-2 text-ellipsis text-sm break-all max-w-[250px] hover:underline text-heading"
                                            >
                                                팝마트 정품인증 라부부 3세대 더 몬스터즈 하이라이트 캐릭터
                                                미개봉
                                            </a>
                                        </div>
                                        <div className="space-s-2 text-heading">
                                            <div className="inline-block flex gap-1">
                                                <strong>67,800원</strong>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="text-xs font-normal mr-1 text-gray-400 pt-1 pb-0.5">
                                                아디모
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="pb-2">
                                <div className="group box-border overflow-hidden flex rounded-md bg-white pe-0 md:pb-1 flex-col">
                                    <a
                                        href="https://ader.naver.com/v1/t0NbW93INoQUQtzgjc2-W2tlAKx7j_oa5AgY9vQRkTh3AZdffX6CZL-_iXGQF2_vmymqRIpzEUAWMxM99t0HjewbS94C8_sAZlFaRFuy7WQrH124Q9-iXrfpcTw_vGNAz-7snMdZ4_uoJgekdpJ2gKfQVYxwEJf2GLPtocZL-a5tTznyYG2HLo1GU-SCtdNrkPfSFb9BROyDZJA1w_zaACabp_JlrDQTtx8ot7YrOekUxYf1e6YNscNHJ5_mydT54_E_W8_nss6q6TZvixSWGD_3aOKoDHZo-VK1diZg_x08sncJny7yXf7ouxCKqCw-Q23ez43q6fqHtl6qVblaJSRbBEUrc5hu0YL3fcDDASPU_odCggeykkUlTpWLA-UQPzgGhaE3VZ80bW4fai0a-BADaSV4e_255UvRAJ2UlOj6pXReRIWsnXqmn8pHVU36qmVPwNu3A1Co49vlULIPe_4J0tjR_Fcx180IRs4skqc=?c=m_joongna.ch6&t=0"
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
                                                alt="GEM 테노히라 긴상 (사카타 긴토키) l 은혼"
                                                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                                decoding="async"
                                                data-nimg="fill"
                                                className="bg-gray-300 object-cover rounded-s-md rounded-md transition duration-150 ease-linear transform hover:scale-105 cursor-pointer"
                                                style={{
                                                    position: "absolute",
                                                    inset: 0,
                                                    boxSizing: "border-box",
                                                    padding: 0,
                                                    border: "none",
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
                                                href="https://ader.naver.com/v1/t0NbW93INoQUQtzgjc2-W2tlAKx7j_oa5AgY9vQRkTh3AZdffX6CZL-_iXGQF2_vmymqRIpzEUAWMxM99t0HjewbS94C8_sAZlFaRFuy7WQrH124Q9-iXrfpcTw_vGNAz-7snMdZ4_uoJgekdpJ2gKfQVYxwEJf2GLPtocZL-a5tTznyYG2HLo1GU-SCtdNrkPfSFb9BROyDZJA1w_zaACabp_JlrDQTtx8ot7YrOekUxYf1e6YNscNHJ5_mydT54_E_W8_nss6q6TZvixSWGD_3aOKoDHZo-VK1diZg_x08sncJny7yXf7ouxCKqCw-Q23ez43q6fqHtl6qVblaJSRbBEUrc5hu0YL3fcDDASPU_odCggeykkUlTpWLA-UQPzgGhaE3VZ80bW4fai0a-BADaSV4e_255UvRAJ2UlOj6pXReRIWsnXqmn8pHVU36qmVPwNu3A1Co49vlULIPe_4J0tjR_Fcx180IRs4skqc=?c=m_joongna.ch6&t=0"
                                                rel="sponsored noreferrer"
                                                target="_blank"
                                                className="line-clamp-2 text-ellipsis text-sm break-all max-w-[250px] hover:underline text-heading"
                                            >
                                                GEM 테노히라 긴상 (사카타 긴토키) l 은혼
                                            </a>
                                        </div>
                                        <div className="space-s-2 text-heading">
                                            <div className="inline-block flex gap-1">
                                                <strong>80,000원</strong>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="text-xs font-normal mr-1 text-gray-400 pt-1 pb-0.5">
                                                메가하우스 공식 스토어
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="pb-2">
                                <div className="group box-border overflow-hidden flex rounded-md bg-white pe-0 md:pb-1 flex-col">
                                    <a
                                        href="https://ader.naver.com/v1/EbbX6acowLyBuGVpXIPUOgQYyRTjh9nLgcQp2bNdyBC3uRIt_JC-QlTgH33jNsC_ssN7Zhx0XusoCgi3uRDiJFZfdxq2jJskv3D0BbVPnLFN7Y--AoR3JJW_ojiURwzdFZmPpA5k1TZ0isRHf-oe26uR4DtWdCENQZ7zPcMpO_dbdh94h7VjFAff6fdOUjI3bLT-eDAH78OOES13jdDPqekHap9DnVM4MnGm4UBAJ6-epVPvhzuPDQZPes_dMTa7oHEHnamu3TzPZHn2warRdok-JFF3BZZtWFVgvWsu3QIpjh3x3WohICiB47Kjbnzd?c=m_joongna.ch6&t=0"
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
                                                alt="팝마트 라부부 키링 인형 3세대 더 몬스터즈 하이라이트 캐릭터 사랑"
                                                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                                decoding="async"
                                                data-nimg="fill"
                                                className="bg-gray-300 object-cover rounded-s-md rounded-md transition duration-150 ease-linear transform hover:scale-105 cursor-pointer"
                                                style={{
                                                    position: "absolute",
                                                    inset: 0,
                                                    boxSizing: "border-box",
                                                    padding: 0,
                                                    border: "none",
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
                                                href="https://ader.naver.com/v1/EbbX6acowLyBuGVpXIPUOgQYyRTjh9nLgcQp2bNdyBC3uRIt_JC-QlTgH33jNsC_ssN7Zhx0XusoCgi3uRDiJFZfdxq2jJskv3D0BbVPnLFN7Y--AoR3JJW_ojiURwzdFZmPpA5k1TZ0isRHf-oe26uR4DtWdCENQZ7zPcMpO_dbdh94h7VjFAff6fdOUjI3bLT-eDAH78OOES13jdDPqekHap9DnVM4MnGm4UBAJ6-epVPvhzuPDQZPes_dMTa7oHEHnamu3TzPZHn2warRdok-JFF3BZZtWFVgvWsu3QIpjh3x3WohICiB47Kjbnzd?c=m_joongna.ch6&t=0"
                                                rel="sponsored noreferrer"
                                                target="_blank"
                                                className="line-clamp-2 text-ellipsis text-sm break-all max-w-[250px] hover:underline text-heading"
                                            >
                                                팝마트 라부부 키링 인형 3세대 더 몬스터즈 하이라이트 캐릭터
                                                사랑
                                            </a>
                                        </div>
                                        <div className="space-s-2 text-heading">
                                            <div className="inline-block flex gap-1">
                                                <strong>68,500원</strong>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="text-xs font-normal mr-1 text-gray-400 pt-1 pb-0.5">
                                                아디모
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
                                src=""
                                style={{ color: "transparent" }}
                            />
                        </div>
                        <ul>
                            <li className="flex border-b-[1px] border-jnGray-200 py-4 gap-3">
                                <div className="flex flex-col gap-2 text-xs">
                                    <a
                                        rel="sponsored noreferrer"
                                        target="_black"
                                        href="https://ader.naver.com/v1/Jzwr-NjcDVzxVJuZtOxVSqLIXK61jOJREJ1YRsDaBmh_MNExAQ-FYJlGJK9EOLtmu8VReFLKIk_o4TDDNn3KQ8fvY7qSfWpAj7m3d4QRTd7w6aVu52G8AxgKq-Zi5V437-mxWmyM74A24FDsxnL_yhc5tvZFmKoLhghWsDcTOac7Few7uApgDJVhlvjLvhKoOOk3mwahtxWp2oWwv6rmIO2ECDbM1WtmNyPDwj-Et4bzYyECvUmBU907DR3yUaVc?c=m_joongna.ch2&t=0"
                                        className="text-jnGray-500 leading-[17px]"
                                    >
                                        https://561.co.kr
                                    </a>
                                    <div className="text-base leading-[22px] text-jnSuccessBlue text-ellipsis break-all line-clamp-1">
                                        <a
                                            rel="sponsored noreferrer"
                                            target="_black"
                                            href="https://ader.naver.com/v1/Jzwr-NjcDVzxVJuZtOxVSqLIXK61jOJREJ1YRsDaBmh_MNExAQ-FYJlGJK9EOLtmu8VReFLKIk_o4TDDNn3KQ8fvY7qSfWpAj7m3d4QRTd7w6aVu52G8AxgKq-Zi5V437-mxWmyM74A24FDsxnL_yhc5tvZFmKoLhghWsDcTOac7Few7uApgDJVhlvjLvhKoOOk3mwahtxWp2oWwv6rmIO2ECDbM1WtmNyPDwj-Et4bzYyECvUmBU907DR3yUaVc?c=m_joongna.ch2&t=0"
                                            className="border-b border-jnSuccessBlue mr-1"
                                        >
                                            킨키로봇 561
                                        </a>
                                    </div>
                                    <a
                                        rel="sponsored noreferrer"
                                        target="_black"
                                        href="https://ader.naver.com/v1/Jzwr-NjcDVzxVJuZtOxVSqLIXK61jOJREJ1YRsDaBmh_MNExAQ-FYJlGJK9EOLtmu8VReFLKIk_o4TDDNn3KQ8fvY7qSfWpAj7m3d4QRTd7w6aVu52G8AxgKq-Zi5V437-mxWmyM74A24FDsxnL_yhc5tvZFmKoLhghWsDcTOac7Few7uApgDJVhlvjLvhKoOOk3mwahtxWp2oWwv6rmIO2ECDbM1WtmNyPDwj-Et4bzYyECvUmBU907DR3yUaVc?c=m_joongna.ch2&t=0"
                                        className="text-gray-900 text-ellipsis line-clamp-2 break-all leading-[17px]"
                                    >
                                        20% 웰컴쿠폰 혜택! 컬렉터들을 위한 라이프 스타일 브랜드 KINKI
                                        ROBOT
                                    </a>
                                </div>
                            </li>
                            <li className="flex border-b-[1px] border-jnGray-200 py-4 gap-3">
                                <a
                                    rel="sponsored noreferrer"
                                    target="_black"
                                    href="https://ader.naver.com/v1/nJqrD5U_TRdEl8ybTKA5ELyndjtxAzVvEWrWD340EcJrKn8Qj2EHPWLLW50jKxqVEfpzVddTcwZiL-D1wXYw5DJ72f351Aa_iRTatF29W7Biivyfc-f0UmrvVdR0fMNjHGtdB1F5IHHXFFu5rw7KbRBRitq0Nmq3fW3nps2jNBJI45yOIjVI7R-nzv5_DP-JaMpShAeZ56cjcIgAzrRUgYHR0Xoch1hzMVBju5uZ0v2-W_n_4N9J-cgIXSGAuDq4aYD2YpXF462lcAvWc6OS9GK9NCnQnCWAxGNPlQPexIXHUXXq-u9OY06AtSBb4hiTYHMB82DuVXHq0-AgLoQxrxKVF0gcpLcLaqsyTYyLOZMvQ8oof_g2pJm3CESajdOnk5EHTlWvd_rdLGR0JntvqpMQ_EI7AK223esYr92ayaLekDZEj3_dWe-kAj_8x0wh_OUePjhOJcfB7jz0cypT-zhyTfQLPReEa1C2b_gmDdhJ4km_lnMJqw5X18E8iZ86jdxK2o1O4YQpA8euD_VZ6meql7PosFoNNTbIAyZkYX0=?c=m_joongna.ch2&t=0"
                                    className="flex-none"
                                >
                                    <img
                                        alt="피규어 헤이프라이스"
                                        loading="lazy"
                                        width={100}
                                        height={100}
                                        decoding="async"
                                        data-nimg={1}
                                        className="rounded-lg w-[88px] h-[88px]"
                                        src="https://searchad-phinf.pstatic.net/MjAyMTA4MDlfMjk2/MDAxNjI4NDk4OTI2MTM4.6yO670kkm9DQT6579kVmUtThRJLYTXGBshtCdMNfGAog.EHxw1x0aTvkQMeNe95f77Kb2as9Nb6-txlNF10f5x0Ig.JPEG/680411-c9051566-9466-45f6-8600-666555bdd2a8.jpg"
                                        style={{ color: "transparent" }}
                                    />
                                </a>
                                <div className="flex flex-col gap-2 text-xs">
                                    <a
                                        rel="sponsored noreferrer"
                                        target="_black"
                                        href="https://ader.naver.com/v1/nJqrD5U_TRdEl8ybTKA5ELyndjtxAzVvEWrWD340EcJrKn8Qj2EHPWLLW50jKxqVEfpzVddTcwZiL-D1wXYw5DJ72f351Aa_iRTatF29W7Biivyfc-f0UmrvVdR0fMNjHGtdB1F5IHHXFFu5rw7KbRBRitq0Nmq3fW3nps2jNBJI45yOIjVI7R-nzv5_DP-JaMpShAeZ56cjcIgAzrRUgYHR0Xoch1hzMVBju5uZ0v2-W_n_4N9J-cgIXSGAuDq4aYD2YpXF462lcAvWc6OS9GK9NCnQnCWAxGNPlQPexIXHUXXq-u9OY06AtSBb4hiTYHMB82DuVXHq0-AgLoQxrxKVF0gcpLcLaqsyTYyLOZMvQ8oof_g2pJm3CESajdOnk5EHTlWvd_rdLGR0JntvqpMQ_EI7AK223esYr92ayaLekDZEj3_dWe-kAj_8x0wh_OUePjhOJcfB7jz0cypT-zhyTfQLPReEa1C2b_gmDdhJ4km_lnMJqw5X18E8iZ86jdxK2o1O4YQpA8euD_VZ6meql7PosFoNNTbIAyZkYX0=?c=m_joongna.ch2&t=0"
                                        className="text-jnGray-500 leading-[17px]"
                                    >
                                        http://heyprice.co.kr
                                    </a>
                                    <div className="text-base leading-[22px] text-jnSuccessBlue text-ellipsis break-all line-clamp-1">
                                        <a
                                            rel="sponsored noreferrer"
                                            target="_black"
                                            href="https://ader.naver.com/v1/nJqrD5U_TRdEl8ybTKA5ELyndjtxAzVvEWrWD340EcJrKn8Qj2EHPWLLW50jKxqVEfpzVddTcwZiL-D1wXYw5DJ72f351Aa_iRTatF29W7Biivyfc-f0UmrvVdR0fMNjHGtdB1F5IHHXFFu5rw7KbRBRitq0Nmq3fW3nps2jNBJI45yOIjVI7R-nzv5_DP-JaMpShAeZ56cjcIgAzrRUgYHR0Xoch1hzMVBju5uZ0v2-W_n_4N9J-cgIXSGAuDq4aYD2YpXF462lcAvWc6OS9GK9NCnQnCWAxGNPlQPexIXHUXXq-u9OY06AtSBb4hiTYHMB82DuVXHq0-AgLoQxrxKVF0gcpLcLaqsyTYyLOZMvQ8oof_g2pJm3CESajdOnk5EHTlWvd_rdLGR0JntvqpMQ_EI7AK223esYr92ayaLekDZEj3_dWe-kAj_8x0wh_OUePjhOJcfB7jz0cypT-zhyTfQLPReEa1C2b_gmDdhJ4km_lnMJqw5X18E8iZ86jdxK2o1O4YQpA8euD_VZ6meql7PosFoNNTbIAyZkYX0=?c=m_joongna.ch2&t=0"
                                            className="border-b border-jnSuccessBlue mr-1"
                                        >
                                            피규어 헤이프라이스
                                        </a>
                                    </div>
                                    <a
                                        rel="sponsored noreferrer"
                                        target="_black"
                                        href="https://ader.naver.com/v1/nJqrD5U_TRdEl8ybTKA5ELyndjtxAzVvEWrWD340EcJrKn8Qj2EHPWLLW50jKxqVEfpzVddTcwZiL-D1wXYw5DJ72f351Aa_iRTatF29W7Biivyfc-f0UmrvVdR0fMNjHGtdB1F5IHHXFFu5rw7KbRBRitq0Nmq3fW3nps2jNBJI45yOIjVI7R-nzv5_DP-JaMpShAeZ56cjcIgAzrRUgYHR0Xoch1hzMVBju5uZ0v2-W_n_4N9J-cgIXSGAuDq4aYD2YpXF462lcAvWc6OS9GK9NCnQnCWAxGNPlQPexIXHUXXq-u9OY06AtSBb4hiTYHMB82DuVXHq0-AgLoQxrxKVF0gcpLcLaqsyTYyLOZMvQ8oof_g2pJm3CESajdOnk5EHTlWvd_rdLGR0JntvqpMQ_EI7AK223esYr92ayaLekDZEj3_dWe-kAj_8x0wh_OUePjhOJcfB7jz0cypT-zhyTfQLPReEa1C2b_gmDdhJ4km_lnMJqw5X18E8iZ86jdxK2o1O4YQpA8euD_VZ6meql7PosFoNNTbIAyZkYX0=?c=m_joongna.ch2&t=0"
                                        className="text-gray-900 text-ellipsis line-clamp-2 break-all leading-[17px]"
                                    >
                                        일본구매대행,피규어 직구 전문 사이트,신규가입1만원지급,묶음배송
                                        대행수수료 무료
                                    </a>
                                    <ul className="flex gap-2 min-h-8">
                                        <li className="py-[9.5px] px-3 border border-jnGray-300 rounded font-medium leading-[17px]">
                                            <a
                                                rel="sponsored noreferrer"
                                                target="_black"
                                                href="https://ader.naver.com/v1/ZrzzEL0OLkl_mYleMnMVmbM-LF9coC8fiwF5uRFNaFOZ3ki9eFgktpW-ofZhES1c0PSb-09VzM0Zbr0YYD1q2hyqbWv8PeXEyJTG1ySKS7-QUE_g8EpSy3k_sGOzwlgq2BGfVm-IL6OWthcgivt3js_7ZLrntPraadrJoGwRkJftWNjz6JsLW_NgbfnEktsrWmA0D7C6MS0fDz1Fa6irPvNNio3Xkavsoq_llBOpTZPDs-oVkE9Vli7zYpnnY-pCoaGpYyGWyvSCIBkqE_FyY7ZrNFCBBXujGSd6mHWypuuPxY1V1Xfd5jbnQOLTxvDxfacbLEuWfw7n9o1IR4OmH-EvqRbeXJ6NonOpKOLXtRm7553luwJjD54xJjsvhQUMC8oX03yqMLqfwQUX3RkYLHYdanJg2ugu0H5j_ASRXwrmsMqiBrQ6leE2QxRvLWqlMi1tE0VaMzeIDXRVCrsk_afT22ZfbfHg3ZL-LO3qBqyUc1QqWjPGEJQvmkpwYb-L_vUA6lLjqhlygvGG_jEDaSJiDy4NpDT0BxsMw6Jg1rAV5K6rBaIL0gGCCjcqc3ZX?c=m_joongna.ch2&t=0"
                                            >
                                                피규어
                                            </a>
                                        </li>
                                        <li className="py-[9.5px] px-3 border border-jnGray-300 rounded font-medium leading-[17px]">
                                            <a
                                                rel="sponsored noreferrer"
                                                target="_black"
                                                href="https://ader.naver.com/v1/3wQtZ8S2VnaauDbqfGpgQGNnNeZBS-tLTRUaiOIbJMlKTbVcVpfAlaWRlC8gxzRt1vgQoYaJxs9QSO3wEz3uoL1Tix4wpFyA9ngRvliEhI8DzoZiGgsOw9j4Xs62Wf2gn6bGtwRweflYNc2-2xWKq6z9PCJbcxX2Z5bzWp_1Nv4CR5kZ9LEIvJBjuU5CDkkzcRwHdu5HxWiW1qoeWJHdFQ9kH_ZrRCGgRfKVQwkXD2cBEqqLtXoDQd036yT0N1B9wmOFB8Gasmkt84iN3XAQ04DQY4mXqgIZyG7CD5-c19CizlDKr623Sqzl87KAqbfyZRG2h_L9Wqxstst4glVkm3B8cOznO54Wuo4fiaKG9C9LCefRnXr54uUu2Ug7PYI9kKfte33yBeWvBiB0RxjvlBBoQhsjZbihaMnubVjNl3NBAuByW-wR47ByxJlN_DHjEVQ2VHKpBT-vKrT22TYo0WuvnTa3pOVo1jSBNd9Xts0UIsKT-ua92gkMBO2A6BmVVoWW84XIdoDet3zJkCy_kzj_qQnYDI7BMx3zekePaU1aRHGbFiU-apaJJ3O6bVXfw8_6jh9_b_sz5NVijUMIcg==?c=m_joongna.ch2&t=0"
                                            >
                                                프라모델
                                            </a>
                                        </li>
                                        <li className="py-[9.5px] px-3 border border-jnGray-300 rounded font-medium leading-[17px]">
                                            <a
                                                rel="sponsored noreferrer"
                                                target="_black"
                                                href="https://ader.naver.com/v1/X5FFE-gAM5L-tY1JUVS5pV4OreOswBh5RcZ421kNIHZU9HnUvG9l6DJ1M6pvVtR5EdcLp5njDQSIVYkvvMA9-6P5J0oSNBuHIq6Nj-9ARQqBjk2iOGGczL4mTvStGy6k36YI_sYTMg6br3e4j_jNTIT-0YPxZssSuQZF4HfF6yKFqfqKYzkxyw_s5rFOIGQcOEodG8CAmXYykEvy_48gTfR-u6sa5mhwZZXulq4Z4vNkMnM5vzLQvYlbKjezObaSHCCoEAZIA2znxR80WYPP7JFhfv__IVk4SLkX378cGNKffpdfeHaYQb7-F3xWFpmtEa-huLkItVXhX-g-aNgiNwKb1UXtRY3Y0MXqJSF5vAcgknMG38Ow2nKbdqKWSbGvUCVC6KC0odSMalB_4ilrF9Qegs1hBGd6V9rHUyDafbYITvF87Br5XQJJnygD9RKGKQKzZOKoQ4dHuHTWEna8kDOCyxgwxr3WNS_260I8_-OYHLYoO91CvdO4c6iDwJSTWyursDczV1T6fCGTOD51IjFASEf_0FkOokIA7VIPXqm_YloKK9IREXdY8lxJ5Ag3?c=m_joongna.ch2&t=0"
                                            >
                                                건담
                                            </a>
                                        </li>
                                        <li className="py-[9.5px] px-3 border border-jnGray-300 rounded font-medium leading-[17px]">
                                            <a
                                                rel="sponsored noreferrer"
                                                target="_black"
                                                href="https://ader.naver.com/v1/2MH8IFUS5VHqO1isv68DDehv_GYY26fHfkRHF8MfM63oENrEdNSshIJe6xCWJ3qWojpYTNG5ba5xksUFew9dmxELJcGrPPx_jWi-HxvuNl9bS8BvLecQ5PkFhrqo0FtRJC5p9C3h7wlHyI1U7Nb7cy1RtLeamFD03OCveHzDSvukMeDHBNSLCQkdp0FhipMB5_FE6aChwCHjSinxfTi_EOvndQhRSSL2KufpKzNXIRQMH3fFSK6GFFVgqrZV0FrXWhBJuhg7i12qZiT2C9SPiDuqWBmHgL40CTwWp9ak0CjB7n5whIunksSeDSjC26dlrD-He2gj2jzf2nUQaVm7v3YxjnkvjkKZDHrGp2qWxO0uQnSPufuhnfxepAYO4-FHjDqHHpFqMd0MnWUiAfR_TXJX2-jXszh2Eyd8dERfddbIkQXd2dwg8xof1x-sQaxsFRtnOm_bJpuihI1uNgxmfZ3z9ZXf43v5ljpeGuFKWjAYydIG_I1D_BIGvgWQXyYfLUVL4zuygdMu020js9P6nc8TzuWUVkxFrPlnSjrygjY=?c=m_joongna.ch2&t=0"
                                            >
                                                더보기
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="flex border-b-[1px] border-jnGray-200 py-4 gap-3">
                                <a
                                    rel="sponsored noreferrer"
                                    target="_black"
                                    href="https://ader.naver.com/v1/Jzwr-NjcDVzxVJuZtOxVSqLIXK61jOJREJ1YRsDaBmgy93Babn9DWzk-kkOj0bf3WxyutHbSnWLir2X_ANDXSw-u2F4p4l4ucjCe6qk_pOE8oMEvxyd0wVb52swGDUuMAdxy0U1xhk_d1YSvy_a0hIri5pdMFqFPOKkPI4V4pcESMFrPalN2xqk3vV9jePnDZ1hQkc4LDdlHhBaY5QHDmM2hCSgwxjUhyupTAgnumyr8ULVyRmrRv5LYZ21wKwGp?c=m_joongna.ch2&t=0"
                                    className="flex-none"
                                >
                                    <img
                                        alt="원피규어"
                                        loading="lazy"
                                        width={100}
                                        height={100}
                                        decoding="async"
                                        data-nimg={1}
                                        className="rounded-lg w-[88px] h-[88px]"
                                        src="https://searchad-phinf.pstatic.net/MjAyMjAzMzFfMjMz/MDAxNjQ4NjkwMDE5MDg2.-7NtDtyULsXTQpbGp9S9VQCUmoPDq6fSzMuUca07fPAg.X6Rz0ydil5fbgv9GWO4vwR1MYqc431lx1nAGtjLBhVIg.JPEG/149467-d5d3fbd3-41cc-48c1-9f1a-b3c02674f715.jpg"
                                        style={{ color: "transparent" }}
                                    />
                                </a>
                                <div className="flex flex-col gap-2 text-xs">
                                    <a
                                        rel="sponsored noreferrer"
                                        target="_black"
                                        href="https://ader.naver.com/v1/Jzwr-NjcDVzxVJuZtOxVSqLIXK61jOJREJ1YRsDaBmgy93Babn9DWzk-kkOj0bf3WxyutHbSnWLir2X_ANDXSw-u2F4p4l4ucjCe6qk_pOE8oMEvxyd0wVb52swGDUuMAdxy0U1xhk_d1YSvy_a0hIri5pdMFqFPOKkPI4V4pcESMFrPalN2xqk3vV9jePnDZ1hQkc4LDdlHhBaY5QHDmM2hCSgwxjUhyupTAgnumyr8ULVyRmrRv5LYZ21wKwGp?c=m_joongna.ch2&t=0"
                                        className="text-jnGray-500 leading-[17px]"
                                    >
                                        http://onefigure.co.kr
                                    </a>
                                    <div className="text-base leading-[22px] text-jnSuccessBlue text-ellipsis break-all line-clamp-1">
                                        <a
                                            rel="sponsored noreferrer"
                                            target="_black"
                                            href="https://ader.naver.com/v1/Jzwr-NjcDVzxVJuZtOxVSqLIXK61jOJREJ1YRsDaBmgy93Babn9DWzk-kkOj0bf3WxyutHbSnWLir2X_ANDXSw-u2F4p4l4ucjCe6qk_pOE8oMEvxyd0wVb52swGDUuMAdxy0U1xhk_d1YSvy_a0hIri5pdMFqFPOKkPI4V4pcESMFrPalN2xqk3vV9jePnDZ1hQkc4LDdlHhBaY5QHDmM2hCSgwxjUhyupTAgnumyr8ULVyRmrRv5LYZ21wKwGp?c=m_joongna.ch2&t=0"
                                            className="border-b border-jnSuccessBlue mr-1"
                                        >
                                            원피규어
                                        </a>
                                        <a
                                            rel="sponsored noreferrer"
                                            target="_black"
                                            href="https://ader.naver.com/v1/Jzwr-NjcDVzxVJuZtOxVSqLIXK61jOJREJ1YRsDaBmgy93Babn9DWzk-kkOj0bf3WxyutHbSnWLir2X_ANDXSw-u2F4p4l4ucjCe6qk_pOE8oMEvxyd0wVb52swGDUuMAdxy0U1xhk_d1YSvy_a0hIri5pdMFqFPOKkPI4V4pcESMFrPalN2xqk3vV9jePnDZ1hQkc4LDdlHhBaY5QHDmM2hCSgwxjUhyupTAgnumyr8ULVyRmrRv5LYZ21wKwGp?c=m_joongna.ch2&t=0"
                                        >
                                            • 감동선물제작터
                                        </a>
                                    </div>
                                    <a
                                        rel="sponsored noreferrer"
                                        target="_black"
                                        href="https://ader.naver.com/v1/Jzwr-NjcDVzxVJuZtOxVSqLIXK61jOJREJ1YRsDaBmgy93Babn9DWzk-kkOj0bf3WxyutHbSnWLir2X_ANDXSw-u2F4p4l4ucjCe6qk_pOE8oMEvxyd0wVb52swGDUuMAdxy0U1xhk_d1YSvy_a0hIri5pdMFqFPOKkPI4V4pcESMFrPalN2xqk3vV9jePnDZ1hQkc4LDdlHhBaY5QHDmM2hCSgwxjUhyupTAgnumyr8ULVyRmrRv5LYZ21wKwGp?c=m_joongna.ch2&t=0"
                                        className="text-gray-900 text-ellipsis line-clamp-2 break-all leading-[17px]"
                                    >
                                        사진으로 3D피규어제작,공장직영,대량생산
                                    </a>
                                    <ul className="flex gap-2 min-h-8">
                                        <li className="py-[9.5px] px-3 border border-jnGray-300 rounded font-medium leading-[17px]">
                                            <a
                                                rel="sponsored noreferrer"
                                                target="_black"
                                                href="https://ader.naver.com/v1/Jzwr-NjcDVzxVJuZtOxVSqLIXK61jOJREJ1YRsDaBmjgjrdvro4gZ7nsJu1yS7Omhumqty-nWXE_zM7IMKLeo63pAMKn_2NaOC7T92oooWWdw1uGCeZtY3TfCJNjAD_jmwFGzP7YD-ql7x_M1aBrNCZEDitO8hearJ-XUtVEukVdJdO7xNN6n9fZBLqVIP-Ov3nUeTT1LsZd1UMnFZVoxwpggkhSf0b1-aMeswxAcR9BhzraNHZHFeQ011IjpUKH5DiTWkMUXDXT6mM8pLbAeTdJ7OcvTFmYj1u22dLbDZnY6I_WIKKl5PLKUBD9Gz4H?c=m_joongna.ch2&t=0"
                                            >
                                                골프피규어
                                            </a>
                                        </li>
                                        <li className="py-[9.5px] px-3 border border-jnGray-300 rounded font-medium leading-[17px]">
                                            <a
                                                rel="sponsored noreferrer"
                                                target="_black"
                                                href="https://ader.naver.com/v1/IVp-guY3IXxffXvd-eemdlf1alkdmBA_mS3-iM3sea9L-WJgsfjj5ncspED71pi41o9ctGBj732mV5DJ9D6h_vFScfxmjOGy-6mwPfegki_WCXi6Ciuo1FxtTvQQjhChQXLAO82It5bpiVYAsANXFh-9DuxQTbm7neLey6DbZC_JEFfpBnzv0m1y-cX6bO7z8rjJO3X-jAxmGIrx4_KhKjsDmnYwCmugwRTY65-_K7LG12NQNFumjZNbZOiVl85dZmO86TQ2bNRGRyQ0OIalUiP5-H3jN3laezBOkXLOq2JkLdJ2pkqpropXox6_NgH3?c=m_joongna.ch2&t=0"
                                            >
                                                피규어기념패
                                            </a>
                                        </li>
                                        <li className="py-[9.5px] px-3 border border-jnGray-300 rounded font-medium leading-[17px]">
                                            <a
                                                rel="sponsored noreferrer"
                                                target="_black"
                                                href="https://ader.naver.com/v1/dReVRlXcE14AQVjvz-Ds3i2A6QJlNqGqiN4mfK2nX_VMj0MPTXTVrBLP7e2JvYnsVORYLEPXGdPtodgHtOLx-I7ly2fPUAcslcyjk3HPhqKqlsH7YVf2ipGkLUMyTpKYdnB0x4cb-XZdAJK97tNbbs5Y0KFBdA-fQ6ICN57Osq7Fwkzw0UEWv9842rlEIZrth3gHVzCt8nZ9Trq8laVtqamzXBhjvALLBmGeXIupAfnLYlIntZQtNz1uMa8WxRyop21F-NVsH-SRlimnbBuq0r2yS6bJ34Rtx3fLOlDmnpQR69CibwU7Vp666eQfsMSE?c=m_joongna.ch2&t=0"
                                            >
                                                자동견적
                                            </a>
                                        </li>
                                        <li className="py-[9.5px] px-3 border border-jnGray-300 rounded font-medium leading-[17px]">
                                            <a
                                                rel="sponsored noreferrer"
                                                target="_black"
                                                href="https://ader.naver.com/v1/Jzwr-NjcDVzxVJuZtOxVSqLIXK61jOJREJ1YRsDaBmjgjrdvro4gZ7nsJu1yS7Omhumqty-nWXE_zM7IMKLeo63pAMKn_2NaOC7T92oooWWdw1uGCeZtY3TfCJNjAD_jY9y-AK7BBeej_O3eAVlTkfy0ENmlWi5co6dqKjGvsHIy5HxQi97R0G7-diUZYA49Y3SENlryH7xbobMHiCDQ98iptLnFYZSgPOQM8uTrzg7jx-OXCMJUcLPGe7icp6lSiBkaqIBmbZx1TrI0QK7qe7ek2bkpSjZBLvVVia5_mkLcLCd5AcSnPkEBeNOkrfGw?c=m_joongna.ch2&t=0"
                                            >
                                                연예인피규어
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="flex border-b-[1px] border-jnGray-200 py-4 gap-3">
                                <a
                                    rel="sponsored noreferrer"
                                    target="_black"
                                    href="https://ader.naver.com/v1/OPsJ54WTbNYBZuY5dcUJF-RuWCjuSAUZ35j9-t0dFxEnhTdfrq5XGIbBmvKQ2L1bamH27wK4JCUb-qurV_rfXnVm6Ey1xLG29IEW5NPTYm0vUb2upXiP35IlR-o_O4hdlPQCjwy3Aa1e-zfPwymKcZq9V9X8mcwlPx3lPpkd1iVM9Hxh7CIa789ktiiV4gHj-MeIkBJptOTo_oaZur1l6hLj081-v6mQtpTAPZdD_uuBIqOaknXw68nLoeKQBr6KFsM-MVeG_OiWoUtuWF_hzU80s85L6_tLpGIVeHlE3pU4HgUTUoCQA201Aq7YR_POM9OcU3o6_EVEytxzfCO-PIxEg05iwwIcuWZ3RKbNb5Ae-tJQiq2A4WPdWDENN-2Cn6lqIq6No-Mz6jaEt72M40U3OWJWShyh2urylRAY5EGbPeW9UFdaP3sMAnJAAtAw4_AerJn40-VYkuJiBSTVkYn9q27P8c8tCoAWqX5fEz9s9Pa_gaap1foMckxb4WMmRFOVYvk_0EounJ56b6Op4sG0QhLcfPrtguT31F1bQP8=?c=m_joongna.ch2&t=0"
                                    className="flex-none"
                                >
                                    <img
                                        alt="피규어 구매는 재팬세일에서!"
                                        loading="lazy"
                                        width={100}
                                        height={100}
                                        decoding="async"
                                        data-nimg={1}
                                        className="rounded-lg w-[88px] h-[88px]"
                                        src="https://searchad-phinf.pstatic.net/MjAyMDExMTlfMjMg/MDAxNjA1Nzc2ODk4Njk3.2GYYm4O3IxFUWnoklkWo2UpUBniI14fOWV1kdbtpKmEg.KAldnENhG6Ndzj21oLDggScUjzMAgfPcQayvXIvLIhwg.JPEG/817105-f2f5a202-def1-455c-b20e-14b6e4a882a5.jpg"
                                        style={{ color: "transparent" }}
                                    />
                                </a>
                                <div className="flex flex-col gap-2 text-xs">
                                    <a
                                        rel="sponsored noreferrer"
                                        target="_black"
                                        href="https://ader.naver.com/v1/OPsJ54WTbNYBZuY5dcUJF-RuWCjuSAUZ35j9-t0dFxEnhTdfrq5XGIbBmvKQ2L1bamH27wK4JCUb-qurV_rfXnVm6Ey1xLG29IEW5NPTYm0vUb2upXiP35IlR-o_O4hdlPQCjwy3Aa1e-zfPwymKcZq9V9X8mcwlPx3lPpkd1iVM9Hxh7CIa789ktiiV4gHj-MeIkBJptOTo_oaZur1l6hLj081-v6mQtpTAPZdD_uuBIqOaknXw68nLoeKQBr6KFsM-MVeG_OiWoUtuWF_hzU80s85L6_tLpGIVeHlE3pU4HgUTUoCQA201Aq7YR_POM9OcU3o6_EVEytxzfCO-PIxEg05iwwIcuWZ3RKbNb5Ae-tJQiq2A4WPdWDENN-2Cn6lqIq6No-Mz6jaEt72M40U3OWJWShyh2urylRAY5EGbPeW9UFdaP3sMAnJAAtAw4_AerJn40-VYkuJiBSTVkYn9q27P8c8tCoAWqX5fEz9s9Pa_gaap1foMckxb4WMmRFOVYvk_0EounJ56b6Op4sG0QhLcfPrtguT31F1bQP8=?c=m_joongna.ch2&t=0"
                                        className="text-jnGray-500 leading-[17px]"
                                    >
                                        https://japansale.co.kr/
                                    </a>
                                    <div className="text-base leading-[22px] text-jnSuccessBlue text-ellipsis break-all line-clamp-1">
                                        <a
                                            rel="sponsored noreferrer"
                                            target="_black"
                                            href="https://ader.naver.com/v1/OPsJ54WTbNYBZuY5dcUJF-RuWCjuSAUZ35j9-t0dFxEnhTdfrq5XGIbBmvKQ2L1bamH27wK4JCUb-qurV_rfXnVm6Ey1xLG29IEW5NPTYm0vUb2upXiP35IlR-o_O4hdlPQCjwy3Aa1e-zfPwymKcZq9V9X8mcwlPx3lPpkd1iVM9Hxh7CIa789ktiiV4gHj-MeIkBJptOTo_oaZur1l6hLj081-v6mQtpTAPZdD_uuBIqOaknXw68nLoeKQBr6KFsM-MVeG_OiWoUtuWF_hzU80s85L6_tLpGIVeHlE3pU4HgUTUoCQA201Aq7YR_POM9OcU3o6_EVEytxzfCO-PIxEg05iwwIcuWZ3RKbNb5Ae-tJQiq2A4WPdWDENN-2Cn6lqIq6No-Mz6jaEt72M40U3OWJWShyh2urylRAY5EGbPeW9UFdaP3sMAnJAAtAw4_AerJn40-VYkuJiBSTVkYn9q27P8c8tCoAWqX5fEz9s9Pa_gaap1foMckxb4WMmRFOVYvk_0EounJ56b6Op4sG0QhLcfPrtguT31F1bQP8=?c=m_joongna.ch2&t=0"
                                            className="border-b border-jnSuccessBlue mr-1"
                                        >
                                            피규어 구매는 재팬세일에서!
                                        </a>
                                        <a
                                            rel="sponsored noreferrer"
                                            target="_black"
                                            href="https://ader.naver.com/v1/OPsJ54WTbNYBZuY5dcUJF-RuWCjuSAUZ35j9-t0dFxEnhTdfrq5XGIbBmvKQ2L1bamH27wK4JCUb-qurV_rfXnVm6Ey1xLG29IEW5NPTYm0vUb2upXiP35IlR-o_O4hdlPQCjwy3Aa1e-zfPwymKcZq9V9X8mcwlPx3lPpkd1iVM9Hxh7CIa789ktiiV4gHj-MeIkBJptOTo_oaZur1l6hLj081-v6mQtpTAPZdD_uuBIqOaknXw68nLoeKQBr6KFsM-MVeG_OiWoUtuWF_hzU80s85L6_tLpGIVeHlE3pU4HgUTUoCQA201Aq7YR_POM9OcU3o6_EVEytxzfCO-PIxEg05iwwIcuWZ3RKbNb5Ae-tJQiq2A4WPdWDENN-2Cn6lqIq6No-Mz6jaEt72M40U3OWJWShyh2urylRAY5EGbPeW9UFdaP3sMAnJAAtAw4_AerJn40-VYkuJiBSTVkYn9q27P8c8tCoAWqX5fEz9s9Pa_gaap1foMckxb4WMmRFOVYvk_0EounJ56b6Op4sG0QhLcfPrtguT31F1bQP8=?c=m_joongna.ch2&t=0"
                                        >
                                            • 피규어직구 24시간 연중무휴
                                        </a>
                                    </div>
                                    <a
                                        rel="sponsored noreferrer"
                                        target="_black"
                                        href="https://ader.naver.com/v1/OPsJ54WTbNYBZuY5dcUJF-RuWCjuSAUZ35j9-t0dFxEnhTdfrq5XGIbBmvKQ2L1bamH27wK4JCUb-qurV_rfXnVm6Ey1xLG29IEW5NPTYm0vUb2upXiP35IlR-o_O4hdlPQCjwy3Aa1e-zfPwymKcZq9V9X8mcwlPx3lPpkd1iVM9Hxh7CIa789ktiiV4gHj-MeIkBJptOTo_oaZur1l6hLj081-v6mQtpTAPZdD_uuBIqOaknXw68nLoeKQBr6KFsM-MVeG_OiWoUtuWF_hzU80s85L6_tLpGIVeHlE3pU4HgUTUoCQA201Aq7YR_POM9OcU3o6_EVEytxzfCO-PIxEg05iwwIcuWZ3RKbNb5Ae-tJQiq2A4WPdWDENN-2Cn6lqIq6No-Mz6jaEt72M40U3OWJWShyh2urylRAY5EGbPeW9UFdaP3sMAnJAAtAw4_AerJn40-VYkuJiBSTVkYn9q27P8c8tCoAWqX5fEz9s9Pa_gaap1foMckxb4WMmRFOVYvk_0EounJ56b6Op4sG0QhLcfPrtguT31F1bQP8=?c=m_joongna.ch2&t=0"
                                        className="text-gray-900 text-ellipsis line-clamp-2 break-all leading-[17px]"
                                    >
                                        항공특송, 할인쿠폰지급, 수수료 0원! 일본 디즈니직구는 재팬세일!
                                    </a>
                                    <div className="flex leading-[17px] gap-2">
                                        안심보험, 합배송 서비스
                                    </div>
                                </div>
                            </li>
                            <li className="flex border-b-[1px] border-jnGray-200 py-4 gap-3">
                                <a
                                    rel="sponsored noreferrer"
                                    target="_black"
                                    href="https://ader.naver.com/v1/m9qXRNrFrpRE0WsPfHPs1plYt1H9p_i71wLldTzTEUXA3-RhU6nbwCF-iIEv12tY_OYmUAqhOeld7MGvjsHrsSISy5EKAUeu-8oZac4E1wTZA6OaRu-DRs1PbAiNxZSRzR0BDOcPuA8-bUEEo9uoQzCcGQXKQRCe2qAdgB1Wol_uMPKquP9Wc952VwjQcjq2u0dSgd0JbPUtxpVGpXkcWUyfVgQWMS65YMad3GLA6NUtvenwpe56gdxBYLYLlXv-f0VTSc9gMD69-0f1_hn2o69GzKeNPtBoL37X8AvmMq_I-CuunMEaGyuDPjRT0kWvhvVh3jV5J9Z8yTKJrE-JX3SOq4FiGv4FceFBeVTFwYc=?c=m_joongna.ch2&t=0"
                                    className="flex-none"
                                >
                                    <img
                                        alt="지금 서울에 알바생 있어요"
                                        loading="lazy"
                                        width={100}
                                        height={100}
                                        decoding="async"
                                        data-nimg={1}
                                        className="rounded-lg w-[88px] h-[88px]"
                                        src="https://searchad-phinf.pstatic.net/MjAyNTAxMTVfMjAw/MDAxNzM2OTI3NDQwODI1.J8Oj5u7ggDT0B3RAKi6P5gk2VFrDw69aY5NfoWDZQGsg.YNERPYDxmGmPXV6ePG_7prcLIzX-FYab4tBZ-IntiqIg.PNG/2226877-d27ba1e2-29e4-4b66-9789-145463540766.png"
                                        style={{ color: "transparent" }}
                                    />
                                </a>
                                <div className="flex flex-col gap-2 text-xs">
                                    <a
                                        rel="sponsored noreferrer"
                                        target="_black"
                                        href="https://ader.naver.com/v1/m9qXRNrFrpRE0WsPfHPs1plYt1H9p_i71wLldTzTEUXA3-RhU6nbwCF-iIEv12tY_OYmUAqhOeld7MGvjsHrsSISy5EKAUeu-8oZac4E1wTZA6OaRu-DRs1PbAiNxZSRzR0BDOcPuA8-bUEEo9uoQzCcGQXKQRCe2qAdgB1Wol_uMPKquP9Wc952VwjQcjq2u0dSgd0JbPUtxpVGpXkcWUyfVgQWMS65YMad3GLA6NUtvenwpe56gdxBYLYLlXv-f0VTSc9gMD69-0f1_hn2o69GzKeNPtBoL37X8AvmMq_I-CuunMEaGyuDPjRT0kWvhvVh3jV5J9Z8yTKJrE-JX3SOq4FiGv4FceFBeVTFwYc=?c=m_joongna.ch2&t=0"
                                        className="text-jnGray-500 leading-[17px]"
                                    >
                                        https://www.albafree.com
                                    </a>
                                    <div className="text-base leading-[22px] text-jnSuccessBlue text-ellipsis break-all line-clamp-1">
                                        <a
                                            rel="sponsored noreferrer"
                                            target="_black"
                                            href="https://ader.naver.com/v1/m9qXRNrFrpRE0WsPfHPs1plYt1H9p_i71wLldTzTEUXA3-RhU6nbwCF-iIEv12tY_OYmUAqhOeld7MGvjsHrsSISy5EKAUeu-8oZac4E1wTZA6OaRu-DRs1PbAiNxZSRzR0BDOcPuA8-bUEEo9uoQzCcGQXKQRCe2qAdgB1Wol_uMPKquP9Wc952VwjQcjq2u0dSgd0JbPUtxpVGpXkcWUyfVgQWMS65YMad3GLA6NUtvenwpe56gdxBYLYLlXv-f0VTSc9gMD69-0f1_hn2o69GzKeNPtBoL37X8AvmMq_I-CuunMEaGyuDPjRT0kWvhvVh3jV5J9Z8yTKJrE-JX3SOq4FiGv4FceFBeVTFwYc=?c=m_joongna.ch2&t=0"
                                            className="border-b border-jnSuccessBlue mr-1"
                                        >
                                            지금 서울에 알바생 있어요
                                        </a>
                                    </div>
                                    <a
                                        rel="sponsored noreferrer"
                                        target="_black"
                                        href="https://ader.naver.com/v1/m9qXRNrFrpRE0WsPfHPs1plYt1H9p_i71wLldTzTEUXA3-RhU6nbwCF-iIEv12tY_OYmUAqhOeld7MGvjsHrsSISy5EKAUeu-8oZac4E1wTZA6OaRu-DRs1PbAiNxZSRzR0BDOcPuA8-bUEEo9uoQzCcGQXKQRCe2qAdgB1Wol_uMPKquP9Wc952VwjQcjq2u0dSgd0JbPUtxpVGpXkcWUyfVgQWMS65YMad3GLA6NUtvenwpe56gdxBYLYLlXv-f0VTSc9gMD69-0f1_hn2o69GzKeNPtBoL37X8AvmMq_I-CuunMEaGyuDPjRT0kWvhvVh3jV5J9Z8yTKJrE-JX3SOq4FiGv4FceFBeVTFwYc=?c=m_joongna.ch2&t=0"
                                        className="text-gray-900 text-ellipsis line-clamp-2 break-all leading-[17px]"
                                    >
                                        지금 근방 5km 내에 지원자가 기다리고 있어요. 알바프리에서
                                        만나보세요
                                    </a>
                                </div>
                            </li>
                        </ul>
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
                            border: "none",
                            height: 90,
                            width: 1200,
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
                            browsingtopics="true"
                            style={{
                                left: 0,
                                position: "absolute",
                                top: 0,
                                border: 0,
                                width: 1200,
                                height: 90,
                                minHeight: "auto",
                                maxHeight: "none",
                                minWidth: "auto",
                                maxWidth: "none"
                            }}
                            sandbox="allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
                            width={1200}
                            height={90}
                            frameBorder={0}
                            marginWidth={0}
                            marginHeight={0}
                            vspace={0}
                            hspace={0}
                            allowTransparency="true"
                            scrolling="no"
                            allow="attribution-reporting; run-ad-auction"
                            src="https://googleads.g.doubleclick.net/pagead/ads?client=ca-pub-5776516316749134&output=html&h=90&slotname=4378206008&adk=3238177336&adf=4057075022&pi=t.ma~as.4378206008&w=1200&abgtt=6&fwrn=4&fwrnh=100&lmt=1755014774&rafmt=2&format=1200x90&url=https%3A%2F%2Fweb.joongna.com%2Fproduct%2F217373651&fwr=0&fwrattr=true&rpe=1&resp_fmts=2&wgl=1&uach=WyJtYWNPUyIsIjE1LjUuMCIsImFybSIsIiIsIjEzOS4wLjcyNTguNjciLG51bGwsMCxudWxsLCI2NCIsW1siTm90O0E9QnJhbmQiLCI5OS4wLjAuMCJdLFsiR29vZ2xlIENocm9tZSIsIjEzOS4wLjcyNTguNjciXSxbIkNocm9taXVtIiwiMTM5LjAuNzI1OC42NyJdXSwwXQ..&dt=1755014774083&bpp=1&bdt=607&idt=373&shv=r20250807&mjsv=m202508060101&ptt=9&saldr=aa&abxe=1&cookie=ID%3D5675e679d419dfc8%3AT%3D1755001720%3ART%3D1755014449%3AS%3DALNI_MZ8N6uiObjP8wEw9GzuQKY_bRsUDQ&eo_id_str=ID%3Dc0a834dab0f4c897%3AT%3D1755001720%3ART%3D1755014449%3AS%3DAA-AfjZvldThlbiqmxUQANnv3NBC&prev_fmts=0x0%2C1200x280&nras=1&correlator=3153939693314&frm=20&pv=1&u_tz=540&u_his=5&u_h=1080&u_w=1920&u_ah=1055&u_aw=1920&u_cd=24&u_sd=1&dmc=8&adx=360&ady=3869&biw=1920&bih=968&scr_x=0&scr_y=1869&eid=31093927%2C31093934%2C31093974%2C95362655%2C95366911%2C95369083%2C31093960%2C95368521%2C95359266&oid=2&pvsid=5921726071043161&tmod=1046127570&uas=0&nvt=2&ref=https%3A%2F%2Fwww.google.com%2F&fc=1920&brdim=-2470%2C-1004%2C-2470%2C-1004%2C1920%2C-1004%2C1920%2C1055%2C1920%2C968&vis=1&rsz=%7Cd%7CEebr%7C&abl=NS&pfx=0&fu=128&bc=31&bz=1&td=1&tdf=2&psd=W251bGwsbnVsbCxudWxsLDNd&nt=1&pgls=CAk.&ifi=3&uci=a!3&btvi=1&fsb=1&dtd=376"
                            data-google-container-id="a!3"
                            tabIndex={0}
                            title="Advertisement"
                            aria-label="Advertisement"
                            data-google-query-id="CLXa7MHThY8DFXhVDwId9k8LIg"
                            data-load-complete="true"
                        />
                    </div>
                </ins>
            </main>
        </>
    )
}

export default ProductDetailPage;