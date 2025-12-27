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
                                        placeholder="Product Name"
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
                                                
                                                <li className="false h-10 p-3" id="category-1348">
                                                    <button>
                                                        <p className="truncate break-keep">Book</p>
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
                                            <span className="text-jnGray-500">$</span>
                                            <input
                                                name="productPrice"
                                                type="text"
                                                inputMode="numeric"
                                                className="ml-1 w-2/3 h-11 font-medium bg-white focus:outline-none md:h-12 disabled:opacity-100 placeholder:text-jnGray-500"
                                                placeholder="Price"
                                                defaultValue=""
                                            />
                                        </label>
                                    </div>
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
                                            placeholder="
                                            Please describe your product
                                            "
                                            maxLength={1000}
                                            defaultValue={""}
                                        />
                                    </div>
                                    <span className="absolute right-0 text-sm leading-5 text-gray-400">
                                        0 / 1000
                                    </span>
                                </div>
                                <p className="font-semibold">Condition</p>
                                <div className="flex gap-3">
                                    <button className="h-10 w-[80px] rounded-md border border-solid font-semibold text-base mb-2 text-white bg-jngreen border-jngreen">
                                        Used
                                    </button>
                                    <button className="h-10 w-[80px] rounded-md border border-solid font-semibold text-base mb-2 border-jnblack text-jnblack bg-white">
                                        New
                                    </button>
                                </div>
                            </section>
                            <div className="flex flex-col px-5 space-y-5 pt-[1.875rem] pb-[3.25rem]">
                                <div>
                                    <p className="font-semibold">Way</p>
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
                                                <p className="ml-1.5">Delivery</p>
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
                                                <p className="ml-1.5">Meet in person</p>
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
                                    I agree that if the sales information differs from the actual product, the seller is responsible.
                                </p>
                                <button
                                    data-variant="flat"
                                    className="text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none rounded-md bg-heading text-white px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-gray-600 hover:shadow-cart w-60 break-keep"
                                    type="submit"
                                >
                                    Sell
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