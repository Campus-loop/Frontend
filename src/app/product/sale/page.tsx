"use client"
import React, { useRef, useState } from "react";

export default function SalePage() {
    return (
        <main
            className="relative flex-grow border-b-2"
            style={{ minHeight: "0px !important", height: "auto !important" }}
        >
            <div className="mx-auto max-w-[1280px] px-5 md:px-8 2xl:px-16 box-content">
                <section className="mx-auto w-full max-w-[768px] pt-[72px]">
                    {/* 파일 업로드 */}
                    <ProductImgContainer />
                    <form className="flex flex-col justify-center mt-6 lg:mt-8">
                        <div className="flex flex-col px-5 space-y-5">
                            {/* 상품 타이틀 */}
                            <ProductTitle />

                            {/* 카테고리  */}
                            <ProductCategoryContainer />
                        </div>
                        <div className="flex flex-col px-5 mt-5 mb-8 w-full">
                            {/* 상품 가격 */}
                            <ProductPrice />
                        </div>
                        <section className="flex flex-col px-5 space-y-5">
                            {/* 상품 설명  */}
                            <ProductDiscription />
                            {/*  상품 상태 */}
                            <ProductState />
                        </section>
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
    )
}

// 파일 타입 정의
interface FileWithPreview {
    file: File;
    preview: string;
}
const ProductImgContainer = () => {
    const [files, setFiles] = useState<FileWithPreview[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = e.target.files;
        if (selectedFiles) {
            const newFiles = Array.from(selectedFiles).map(file => ({
                file,
                preview: URL.createObjectURL(file)
            }));
            setFiles(prev => [...prev, ...newFiles].slice(0, 10)); // 최대 10개 제한
        }
    };

    const handleRemoveImage = (index: number) => {
        setFiles(prev => {
            const newFiles = prev.filter((_, i) => i !== index);
            // 메모리 누수 방지를 위해 URL 해제
            URL.revokeObjectURL(prev[index].preview);
            return newFiles;
        });
    };

    const handleUploadClick = () => {
        inputRef.current?.click();
    };

    return (
        <>
            <div className="flex px-5 pb-1.5">
                {/* 업로드 버튼 */}
                <div className="flex items-center justify-center w-20 h-20 mr-1.5 bg-jnGray-200 rounded cursor-pointer" onClick={handleUploadClick}>
                    <div className="flex flex-col items-center">
                        <svg
                            width="32px"
                            height="32px"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
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
                        <p className="mt-1 text-xs text-jnGray-500">{files.length}/10</p>
                    </div>
                </div>

                {/* 숨겨진 파일 input */}
                <input
                    ref={inputRef}
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleFileChange}
                    className="hidden"
                />

                {/* 이미지 미리보기 영역 - 스크롤 영역 제거하고 간단하게 */}
                <div className="flex-1 overflow-x-auto">
                    <ul className="flex items-center gap-2 min-w-max">
                        {files.map((fileWithPreview, index) => (
                            <li key={index} className="flex-shrink-0">
                                <div className="flex w-20 h-20 overflow-hidden relative border border-solid border-jnGreen rounded-lg">
                                    <img
                                        alt={`productImage-${index}`}
                                        width={80}
                                        height={80}
                                        decoding="async"
                                        data-nimg={1}
                                        className="object-cover h-full bg-gray-200 rounded-lg"
                                        src={fileWithPreview.preview}
                                        style={{ color: "transparent" }}
                                    />
                                    <button 
                                        className="absolute top-0 right-0"
                                        onClick={() => handleRemoveImage(index)}
                                        type="button"
                                    >
                                        <svg
                                            width="20px"
                                            height="20px"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5V18.5C14.6944 18.5 18.5 14.6944 18.5 10H17.5ZM10 17.5C5.85786 17.5 2.5 14.1421 2.5 10H1.5C1.5 14.6944 5.30558 18.5 10 18.5V17.5ZM2.5 10C2.5 5.85786 5.85786 2.5 10 2.5V1.5C5.30558 1.5 1.5 5.30558 1.5 10H2.5ZM10 2.5C14.1421 2.5 17.5 5.85786 17.5 10H18.5C18.5 5.30558 14.6944 1.5 10 1.5V2.5Z"
                                                fill="#DADEE5"
                                            />
                                            <path
                                                d="M7 7L13 13M13 7L7 13"
                                                stroke="#363C45"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

const ProductTitle = () => {
    return (
        <>
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
        </>
    )
}

const ProductCategoryContainer = () => {
    return (
        <>
            <section name="productCategory">
                <div className="flex flex-row w-full overflow-hidden text-sm font-medium h-60">
                    <div
                        id="category-depth-1"
                        className="w-1/3 h-full overflow-y-auto border border-solid rounded border-jnGray-300"
                    >
                        <ul className="flex flex-col border-solid border-jnGray-300">
                            <CategoryComponent />
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
        </>
    )
}

const CategoryComponent = () => {
    const categories = [
        { id: 1, name: "수입명품" },
        { id: 2, name: "패션의류" },
        { id: 3, name: "패션잡화" },
        { id: 4, name: "뷰티" },
        { id: 5, name: "출산/유아동" },
        { id: 6, name: "모바일/태블릿" },
        { id: 7, name: "가전제품" },
        { id: 8, name: "노트북/PC" },
        { id: 9, name: "카메라/캠코더" },
        { id: 10, name: "가구/인테리어" },
        { id: 11, name: "리빙/생활" },
        { id: 12, name: "게임" },
        { id: 13, name: "반려동물/취미" },
        { id: 14, name: "도서/음반/문구" },
        { id: 15, name: "티켓/쿠폰" },
        { id: 16, name: "스포츠" },
        { id: 17, name: "레저/여행" },
        { id: 19, name: "오토바이" },
        { id: 20, name: "공구/산업용품" },
        { id: 21, name: "무료나눔" },
        { id: 1348, name: "중고차" },
    ];
    return (
        <>
            {categories.map((c) => (
                <li key={c.id} className="false h-10 p-3" id={`category-${c.id}`}>
                    <button>
                        <p className="truncate break-keep">{c.name}</p>
                    </button>
                </li>
            ))}
            <li className="bg-jnGray-200 font-bold h-10 p-3" id="category-6">
                <button>
                    <p className="truncate break-keep">모바일/태블릿</p>
                </button>
            </li>
        </>
    );
}

const ProductPrice = () => {
    return (
        <>
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
            </div>
            <div className="mt-2.5 h-4 sm:h-5 detail-medium-12 sm:body-regular-14">
                <p className="text-green-700" />
            </div>
        </>
    )
}

const ProductDiscription = () => {
    return (
        <>
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
        </>
    )
}

const ProductState = () => {
    return (
        <>
            <p className="font-semibold">상품상태</p>
            <div className="flex gap-3">
                <button className="h-10 w-[80px] rounded-md border border-solid font-semibold text-base mb-2 text-white bg-jngreen border-jngreen">
                    중고
                </button>
                <button className="h-10 w-[80px] rounded-md border border-solid font-semibold text-base mb-2 border-jnblack text-jnblack bg-white">
                    새상품
                </button>
            </div>
        </>
    )
}