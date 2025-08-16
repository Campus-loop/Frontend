"use client"

const ChatRoomContainer = ({ chatId }: { chatId: number }) => {
    return (
        <>
            <div
                className="rc-drawer-content relative [&>#mobile-default-layout>div]:bg-white"
                aria-modal="true"
                role="dialog"
            >
                <div className="flex flex-col w-full h-full justify-between">
                    <div className="min-h-[70px] basis-[70px] flex justify-center items-center px-[20px]">
                        <button className="w-10 h-10 basis-10">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                fill="none"
                            >
                                <path
                                    stroke="#141313"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    d="m12.5 19.5-8.075-7.125a.5.5 0 0 1 0-.75L12.5 4.5"
                                />
                            </svg>
                        </button>
                        <h2 className="flex flex-col md:flex-row justify-center items-center md:space-x-2 flex-1 text-lg font-semibold text-center text-jnGray-900 cursor-pointer">
                            <p className="mb-0">
                                <span className="flex items-center justify-center space-x-2">
                                    <span>중고나라#9911620</span>
                                    <span className="text-[10px] leading-[10px] px-[5px] py-[3px] bg-jnGray-900 text-jnGray-100 font-bold rounded-sm hidden">
                                        공식
                                    </span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 20 20"
                                        className="text-[#00AEAC] w-5 h-5 lg:w-4 lg:h-4 hidden"
                                    >
                                        <path
                                            fill="currentColor"
                                            fillRule="evenodd"
                                            d="m12.816.068-2.474 1.01-.003.003a.9.9 0 0 1-.68 0L7.185.068a.905.905 0 0 0-1.146.421L4.785 2.876a.92.92 0 0 1-.523.446l-2.537.836a.927.927 0 0 0-.61 1.071l.553 2.646a.93.93 0 0 1-.117.68L.139 10.85a.93.93 0 0 0 .212 1.218l2.101 1.666c.188.146.309.36.342.598l.372 2.68c.067.47.47.813.935.796l2.665-.092a.9.9 0 0 1 .64.238l1.984 1.809a.903.903 0 0 0 1.22 0l1.985-1.81a.9.9 0 0 1 .64-.237l2.665.092a.915.915 0 0 0 .935-.796l.372-2.68a.94.94 0 0 1 .342-.598l2.101-1.666a.933.933 0 0 0 .212-1.218L18.45 8.555a.93.93 0 0 1-.117-.68l.553-2.646a.927.927 0 0 0-.61-1.07l-2.537-.837a.92.92 0 0 1-.523-.446L13.962.49a.91.91 0 0 0-1.146-.421m1.816 8.27a1.3 1.3 0 1 0-1.801-1.874L8.545 10.58 6.919 8.953a1.3 1.3 0 1 0-1.84 1.837l2.527 2.53a1.3 1.3 0 0 0 1.82.019z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="text-[11px] text-[#0CB650] border border-jngreen px-2 rounded-2xl h-5 leading-5">
                                        317점
                                    </span>
                                </span>
                            </p>
                            <p className="text-[12px] text-gray-400 h-4">보통 1시간 이내 응답</p>
                            <p />
                        </h2>
                        <div>
                            <div className="flex gap-[8px]">
                                <button>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        fill="none"
                                    >
                                        <path
                                            stroke="#141313"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.6"
                                            d="M9.095 12.116A8.05 8.05 0 0 0 2.2 20.082h12.506M10.254 12.029q-.594 0-1.16.087"
                                        />
                                        <path
                                            fill="#fff"
                                            stroke="#141313"
                                            strokeMiterlimit={10}
                                            strokeWidth="1.6"
                                            d="M13.583 7.264a3.464 3.464 0 1 0-6.929 0v1.303a3.464 3.464 0 1 0 6.929 0z"
                                        />
                                        <path
                                            fill="#fff"
                                            d="M15.942 12.386a4.41 4.41 0 0 1 4.404 4.403 4.4 4.4 0 0 1-4.404 4.404 4.4 4.4 0 0 1-4.403-4.404 4.4 4.4 0 0 1 4.403-4.403m0 7.262a2.864 2.864 0 0 0 2.858-2.859 2.864 2.864 0 0 0-2.858-2.858 2.864 2.864 0 0 0-2.858 2.858 2.864 2.864 0 0 0 2.858 2.859m0-8.517a5.667 5.667 0 0 0-5.659 5.658c0 3.12 2.54 5.66 5.66 5.66 3.118 0 5.658-2.54 5.658-5.66s-2.54-5.659-5.659-5.659m0 7.261a1.605 1.605 0 0 1-1.603-1.603 1.6 1.6 0 0 1 1.603-1.603 1.6 1.6 0 0 1 1.603 1.603 1.6 1.6 0 0 1-1.603 1.603"
                                        />
                                        <path
                                            fill="#fff"
                                            stroke="#141313"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.6"
                                            d="M15.944 20.41a3.627 3.627 0 0 0 3.63-3.63 3.627 3.627 0 0 0-3.63-3.631 3.627 3.627 0 0 0-3.632 3.63 3.627 3.627 0 0 0 3.632 3.632"
                                        />
                                        <path
                                            stroke="#141313"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.6"
                                            d="m21.062 21.743-2.569-2.337"
                                        />
                                    </svg>
                                </button>
                                <button>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        fill="none"
                                    >
                                        <path
                                            fill="#141313"
                                            stroke="#141313"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.25"
                                            d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2M12 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2M12 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="h-full overflow-auto">
                        <div className="flex flex-col justify-between w-full h-full bg-[#e9edef]">
                            <div className="relative">
                                <div className="flex items-center w-full gap-2 px-3 py-4 bg-white">
                                    <a className="flex flex-grow h-10 gap-4" href="/product/176622864">
                                        <div className="relative w-10 h-10 aspect-square">
                                            <img
                                                alt="상품 썸네일"
                                                loading="lazy"
                                                decoding="async"
                                                data-nimg="fill"
                                                className="rounded-md"
                                                src="https://img2.joongna.com/media/original/2024/05/16/1715817172895yef_FTCFJ.jpg?impolicy=thumb"
                                                style={{
                                                    position: "absolute",
                                                    height: "100%",
                                                    width: "100%",
                                                    inset: 0,
                                                    color: "transparent"
                                                }}
                                            />
                                        </div>
                                        <div>
                                            <div className="flex items-center">
                                                <span className="font-semibold text-[15px] text-jnGray-900">
                                                    100,000원
                                                </span>
                                            </div>
                                            <span className="block text-[12px]">
                                                넥슨캐시 105500 -&gt; 94000
                                            </span>
                                        </div>
                                    </a>
                                </div>
                                <button className="left-1/2 -translate-x-1/2 z-[21] w-fit absolute -bottom-3 translate-y-full [&>div]:!px-5">
                                    <div className="flex justify-center gap-1 items-center text-left w-fit font-bold rounded-full py-1 h-fit bg-white min-w-max !px-4 !py-2 text-sm border border-jnGray-200 shadow-[0px_4px_8px_0px_rgba(0,0,0,0.12)]">
                                        <div className="flex relative justify-center items-center p-[1px] w-4 h-4 text-[#00AEAC]">
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
                                        <span>
                                            <div className="flex gap-1 items-center body-regular-14">
                                                <div>
                                                    <strong>안심결제</strong>쓰고 사기 걱정 없는 중고거래
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
                            </div>
                            <div className="overflow-auto p-5 h-full">
                                <div />
                                <div className="flex flex-col justify-between h-full w-inherit">
                                    <div>
                                        <div>
                                            <div>
                                                <p className="text-center text-[14px] py-4">
                                                    2024년 09월 26일
                                                </p>
                                            </div>
                                            <div>
                                                <div type="productMessage">
                                                    <div className="flex items-end w-auto mb-2 flex-start space-x-1">
                                                        <div className="p-3 rounded-xl h-auto overflow-hidden rounded-tl bg-white w-[226px]">
                                                            <a
                                                                className="flex justify-between space-x-3"
                                                                href="/product/176622864"
                                                            >
                                                                <div className="flex flex-col justify-between">
                                                                    <span className="m-0 overflow-hidden text-sm font-semibold text-ellipsis line-clamp-2">
                                                                        넥슨캐시 105500 -&gt; 94000
                                                                    </span>
                                                                    <span className="inline-block mt-1 mr-1 font-bold ">
                                                                        100,000원
                                                                    </span>
                                                                </div>
                                                                <div className="w-[60px] h-[60px] relative overflow-hidden">
                                                                    <img
                                                                        alt="넥슨캐시 105500 -> 94000"
                                                                        loading="lazy"
                                                                        decoding="async"
                                                                        data-nimg="fill"
                                                                        className="self-center object-cover rounded-lg"
                                                                        src="https://img2.joongna.com/media/original/2024/05/16/1715817172895yef_FTCFJ.jpg?impolicy=resizeWatermark3&ftext=%EC%A4%91%EA%B3%A0%EB%82%98%EB%9D%BC%239057724"
                                                                        style={{
                                                                            position: "absolute",
                                                                            height: "100%",
                                                                            width: "100%",
                                                                            inset: 0,
                                                                            color: "transparent"
                                                                        }}
                                                                    />
                                                                </div>
                                                            </a>
                                                            <button
                                                                data-variant="flat"
                                                                className="text-[13px] md:text-sm leading-4 items-center cursor-pointer transition ease-in-out duration-300 font-body justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none w-full mt-[10px] text-center text-white font-bold rounded-lg bg-jngreen h-[36px] px-3 md:px-3 lg:px-3 py-2 md:py-2 lg:py-2 hidden"
                                                            >
                                                                구매하기
                                                            </button>
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <span className="block text-[13px] uppercase text-start">
                                                                오전 10:53
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div />
                                            <div>
                                                <div type="textMessage">
                                                    <div className="flex items-end w-auto mb-2 flex-start space-x-1">
                                                        <div className="p-3 rounded-xl h-auto overflow-hidden rounded-tl bg-white w-auto">
                                                            <p className="break-all whitespace-pre-wrap [&>a]:text-jngreen [&>a]:underline">
                                                                안녕하세요. [넥슨캐시 105500 -&gt; ...] 보고
                                                                문의드립니다.
                                                            </p>
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <span className="block text-[13px] uppercase text-start">
                                                                오전 10:53
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div />
                                            <div>
                                                <div type="textMessage">
                                                    <div className="flex items-end w-auto mb-2 flex-start space-x-1 flex-row-reverse space-x-reverse">
                                                        <div className="p-3 rounded-xl h-auto overflow-hidden rounded-tr bg-[#363C45] text-white w-auto">
                                                            <p className="break-all whitespace-pre-wrap [&>a]:text-jngreen [&>a]:underline">
                                                                ㅎㅇ
                                                            </p>
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <p className="mb-0 text-right text-[13px]">읽음</p>
                                                            <span className="block text-[13px] uppercase text-end">
                                                                오전 10:53
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div />
                                            <div>
                                                <div type="imageMessage">
                                                    <div className="flex items-end w-auto mb-2 flex-start space-x-1">
                                                        <div className="rounded-xl h-auto rounded-tl w-auto p-0 overflow-hidden bg-white">
                                                            <img
                                                                alt="이미지"
                                                                loading="lazy"
                                                                width={1170}
                                                                height={2532}
                                                                decoding="async"
                                                                data-nimg={1}
                                                                src="https://chat-media.joongna.com/2024/09/26/1727315601485rji_6svrv.jpg"
                                                                style={{ color: "transparent" }}
                                                            />
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <span className="block text-[13px] uppercase text-start">
                                                                오전 10:53
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div />
                                            <div>
                                                <div type="textMessage">
                                                    <div className="flex items-end w-auto mb-2 flex-start space-x-1 flex-row-reverse space-x-reverse">
                                                        <div className="p-3 rounded-xl h-auto overflow-hidden rounded-tr bg-[#363C45] text-white w-auto">
                                                            <p className="break-all whitespace-pre-wrap [&>a]:text-jngreen [&>a]:underline">
                                                                땡큐
                                                            </p>
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <p className="mb-0 text-right text-[13px]">읽음</p>
                                                            <span className="block text-[13px] uppercase text-end">
                                                                오전 10:53
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div />
                                            <div>
                                                <div type="textMessage">
                                                    <div className="flex items-end w-auto mb-2 flex-start space-x-1">
                                                        <div className="p-3 rounded-xl h-auto overflow-hidden rounded-tl bg-white w-auto">
                                                            <p className="break-all whitespace-pre-wrap [&>a]:text-jngreen [&>a]:underline">
                                                                2개
                                                            </p>
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <span className="block text-[13px] uppercase text-start">
                                                                오전 10:53
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div />
                                            <div>
                                                <div type="imageListMessage">
                                                    <div className="flex items-end w-auto mb-2 flex-start space-x-1">
                                                        <div className="rounded-xl h-auto rounded-tl w-auto p-0 overflow-hidden bg-white">
                                                            <div className="flex h-[140px]">
                                                                <div className="relative overflow-hidden">
                                                                    <img
                                                                        alt="이미지"
                                                                        loading="lazy"
                                                                        width={140}
                                                                        height={140}
                                                                        decoding="async"
                                                                        data-nimg={1}
                                                                        className="object-contain"
                                                                        src="https://chat-media.joongna.com/2024/09/26/1727315615831rhp_lvj8b.jpeg"
                                                                        style={{ color: "transparent" }}
                                                                    />
                                                                </div>
                                                                <div className="relative overflow-hidden">
                                                                    <img
                                                                        alt="이미지"
                                                                        loading="lazy"
                                                                        width={140}
                                                                        height={140}
                                                                        decoding="async"
                                                                        data-nimg={1}
                                                                        className="object-contain"
                                                                        src="https://chat-media.joongna.com/2024/09/26/1727315618476jb6_c8o04.jpeg"
                                                                        style={{ color: "transparent" }}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <span className="block text-[13px] uppercase text-start">
                                                                오전 10:53
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div />
                                            <div>
                                                <div type="textMessage">
                                                    <div className="flex items-end w-auto mb-2 flex-start space-x-1 flex-row-reverse space-x-reverse">
                                                        <div className="p-3 rounded-xl h-auto overflow-hidden rounded-tr bg-[#363C45] text-white w-auto">
                                                            <p className="break-all whitespace-pre-wrap [&>a]:text-jngreen [&>a]:underline">
                                                                땡큐
                                                            </p>
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <p className="mb-0 text-right text-[13px]">읽음</p>
                                                            <span className="block text-[13px] uppercase text-end">
                                                                오전 10:55
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div />
                                            <div>
                                                <div type="imageMessage">
                                                    <div className="flex items-end w-auto mb-2 flex-start space-x-1 flex-row-reverse space-x-reverse">
                                                        <div className="rounded-xl h-auto rounded-tr text-white w-auto p-0 overflow-hidden bg-white">
                                                            <img
                                                                alt="이미지"
                                                                loading="lazy"
                                                                width={1179}
                                                                height={2556}
                                                                decoding="async"
                                                                data-nimg={1}
                                                                src="https://chat-media.joongna.com/2024/09/26/1727315832812n5p_cy5y8.jpg"
                                                                style={{ color: "transparent" }}
                                                            />
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <p className="mb-0 text-right text-[13px]">읽음</p>
                                                            <span className="block text-[13px] uppercase text-end">
                                                                오전 10:57
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div />
                                            <div>
                                                <div type="imageListMessage">
                                                    <div className="flex items-end w-auto mb-2 flex-start space-x-1 flex-row-reverse space-x-reverse">
                                                        <div className="rounded-xl h-auto rounded-tr text-white w-auto p-0 overflow-hidden bg-white">
                                                            <div className="flex h-[140px]">
                                                                <div className="relative overflow-hidden">
                                                                    <img
                                                                        alt="이미지"
                                                                        loading="lazy"
                                                                        width={140}
                                                                        height={140}
                                                                        decoding="async"
                                                                        data-nimg={1}
                                                                        className="object-contain"
                                                                        src="https://chat-media.joongna.com/2024/09/26/1727315840330zqk_pazd1.jpeg"
                                                                        style={{ color: "transparent" }}
                                                                    />
                                                                </div>
                                                                <div className="relative overflow-hidden">
                                                                    <img
                                                                        alt="이미지"
                                                                        loading="lazy"
                                                                        width={140}
                                                                        height={140}
                                                                        decoding="async"
                                                                        data-nimg={1}
                                                                        className="object-contain"
                                                                        src="https://chat-media.joongna.com/2024/09/26/1727315842226s02_ysfqm.jpeg"
                                                                        style={{ color: "transparent" }}
                                                                    />
                                                                </div>
                                                                <div className="relative overflow-hidden">
                                                                    <img
                                                                        alt="이미지"
                                                                        loading="lazy"
                                                                        width={140}
                                                                        height={140}
                                                                        decoding="async"
                                                                        data-nimg={1}
                                                                        className="object-contain"
                                                                        src="https://chat-media.joongna.com/2024/09/26/1727315842887od9_bo5i5.jpeg"
                                                                        style={{ color: "transparent" }}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <p className="mb-0 text-right text-[13px]">읽음</p>
                                                            <span className="block text-[13px] uppercase text-end">
                                                                오전 10:57
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div />
                                            <div>
                                                <div type="textMessage">
                                                    <div className="flex items-end w-auto mb-2 flex-start space-x-1 flex-row-reverse space-x-reverse">
                                                        <div className="p-3 rounded-xl h-auto overflow-hidden rounded-tr bg-[#363C45] text-white w-auto">
                                                            <p className="break-all whitespace-pre-wrap [&>a]:text-jngreen [&>a]:underline">
                                                                이렇게 나오는구나
                                                            </p>
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <p className="mb-0 text-right text-[13px]">읽음</p>
                                                            <span className="block text-[13px] uppercase text-end">
                                                                오전 10:57
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div>
                                                <p className="text-center text-[14px] py-4">
                                                    2024년 09월 27일
                                                </p>
                                            </div>
                                            <div>
                                                <div type="imageListMessage">
                                                    <div className="flex items-end w-auto mb-2 flex-start space-x-1 flex-row-reverse space-x-reverse">
                                                        <div className="rounded-xl h-auto rounded-tr text-white w-auto p-0 overflow-hidden bg-white">
                                                            <div className="grid grid-cols-2 grid-rows-2 w-[280px] h-[280px]">
                                                                <div className="relative overflow-hidden">
                                                                    <img
                                                                        alt="이미지"
                                                                        loading="lazy"
                                                                        width={140}
                                                                        height={140}
                                                                        decoding="async"
                                                                        data-nimg={1}
                                                                        className="object-contain"
                                                                        src="https://chat-media.joongna.com/2024/09/27/1727363774116kqx_ki4wl.png"
                                                                        style={{ color: "transparent" }}
                                                                    />
                                                                </div>
                                                                <div className="relative overflow-hidden">
                                                                    <img
                                                                        alt="이미지"
                                                                        loading="lazy"
                                                                        width={140}
                                                                        height={140}
                                                                        decoding="async"
                                                                        data-nimg={1}
                                                                        className="object-contain"
                                                                        src="https://chat-media.joongna.com/2024/09/27/1727363774116we8_o6k6p.png"
                                                                        style={{ color: "transparent" }}
                                                                    />
                                                                </div>
                                                                <div className="relative overflow-hidden">
                                                                    <img
                                                                        alt="이미지"
                                                                        loading="lazy"
                                                                        width={140}
                                                                        height={140}
                                                                        decoding="async"
                                                                        data-nimg={1}
                                                                        className="object-contain"
                                                                        src="https://chat-media.joongna.com/2024/09/27/1727363774115ccj_9qmos.png"
                                                                        style={{ color: "transparent" }}
                                                                    />
                                                                </div>
                                                                <div className="relative overflow-hidden">
                                                                    <img
                                                                        alt="이미지"
                                                                        loading="lazy"
                                                                        width={140}
                                                                        height={140}
                                                                        decoding="async"
                                                                        data-nimg={1}
                                                                        className="object-contain"
                                                                        src="https://chat-media.joongna.com/2024/09/27/17273637741161go_pf6xz.png"
                                                                        style={{ color: "transparent" }}
                                                                    />
                                                                    <div className="absolute top-0 bottom-0 left-0 right-0 text-center bg-black opacity-50">
                                                                        <p className="flex items-center justify-center h-full font-semibold text-white">
                                                                            +6
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <p className="mb-0 text-right text-[13px]">읽음</p>
                                                            <span className="block text-[13px] uppercase text-end">
                                                                오전 0:16
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div />
                                            <div>
                                                <div type="imageListMessage">
                                                    <div className="flex items-end w-auto mb-2 flex-start space-x-1 flex-row-reverse space-x-reverse">
                                                        <div className="rounded-xl h-auto rounded-tr text-white w-auto p-0 overflow-hidden bg-white">
                                                            <div className="grid grid-cols-2 grid-rows-2 w-[280px] h-[280px]">
                                                                <div className="relative overflow-hidden">
                                                                    <img
                                                                        alt="이미지"
                                                                        loading="lazy"
                                                                        width={140}
                                                                        height={140}
                                                                        decoding="async"
                                                                        data-nimg={1}
                                                                        className="object-contain"
                                                                        src="https://chat-media.joongna.com/2024/09/27/1727363911380emz_b6xzx.png"
                                                                        style={{ color: "transparent" }}
                                                                    />
                                                                </div>
                                                                <div className="relative overflow-hidden">
                                                                    <img
                                                                        alt="이미지"
                                                                        loading="lazy"
                                                                        width={140}
                                                                        height={140}
                                                                        decoding="async"
                                                                        data-nimg={1}
                                                                        className="object-contain"
                                                                        src="https://chat-media.joongna.com/2024/09/27/1727363911380644_08d1y.png"
                                                                        style={{ color: "transparent" }}
                                                                    />
                                                                </div>
                                                                <div className="relative overflow-hidden">
                                                                    <img
                                                                        alt="이미지"
                                                                        loading="lazy"
                                                                        width={140}
                                                                        height={140}
                                                                        decoding="async"
                                                                        data-nimg={1}
                                                                        className="object-contain"
                                                                        src="https://chat-media.joongna.com/2024/09/27/1727363911380evn_x1n3m.png"
                                                                        style={{ color: "transparent" }}
                                                                    />
                                                                </div>
                                                                <div className="relative overflow-hidden">
                                                                    <img
                                                                        alt="이미지"
                                                                        loading="lazy"
                                                                        width={140}
                                                                        height={140}
                                                                        decoding="async"
                                                                        data-nimg={1}
                                                                        className="object-contain"
                                                                        src="https://chat-media.joongna.com/2024/09/27/1727363911380w1w_izckx.png"
                                                                        style={{ color: "transparent" }}
                                                                    />
                                                                    <div className="absolute top-0 bottom-0 left-0 right-0 text-center bg-black opacity-50">
                                                                        <p className="flex items-center justify-center h-full font-semibold text-white">
                                                                            +3
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <p className="mb-0 text-right text-[13px]">읽음</p>
                                                            <span className="block text-[13px] uppercase text-end">
                                                                오전 0:18
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div />
                                            <div>
                                                <div type="imageListMessage">
                                                    <div className="flex items-end w-auto mb-2 flex-start space-x-1 flex-row-reverse space-x-reverse">
                                                        <div className="rounded-xl h-auto rounded-tr text-white w-auto p-0 overflow-hidden bg-white">
                                                            <div className="grid grid-cols-2 grid-rows-2 w-[280px] h-[280px]">
                                                                <div className="relative overflow-hidden">
                                                                    <img
                                                                        alt="이미지"
                                                                        loading="lazy"
                                                                        width={140}
                                                                        height={140}
                                                                        decoding="async"
                                                                        data-nimg={1}
                                                                        className="object-contain"
                                                                        src="https://chat-media.joongna.com/2024/09/27/1727364013463sgb_eg7jl.png"
                                                                        style={{ color: "transparent" }}
                                                                    />
                                                                </div>
                                                                <div className="relative overflow-hidden">
                                                                    <img
                                                                        alt="이미지"
                                                                        loading="lazy"
                                                                        width={140}
                                                                        height={140}
                                                                        decoding="async"
                                                                        data-nimg={1}
                                                                        className="object-contain"
                                                                        src="https://chat-media.joongna.com/2024/09/27/1727364013463mol_h4v63.png"
                                                                        style={{ color: "transparent" }}
                                                                    />
                                                                </div>
                                                                <div className="relative overflow-hidden">
                                                                    <img
                                                                        alt="이미지"
                                                                        loading="lazy"
                                                                        width={140}
                                                                        height={140}
                                                                        decoding="async"
                                                                        data-nimg={1}
                                                                        className="object-contain"
                                                                        src="https://chat-media.joongna.com/2024/09/27/1727364013463sej_t4uxt.png"
                                                                        style={{ color: "transparent" }}
                                                                    />
                                                                </div>
                                                                <div className="relative overflow-hidden">
                                                                    <img
                                                                        alt="이미지"
                                                                        loading="lazy"
                                                                        width={140}
                                                                        height={140}
                                                                        decoding="async"
                                                                        data-nimg={1}
                                                                        className="object-contain"
                                                                        src="https://chat-media.joongna.com/2024/09/27/1727364013463cnr_skfbn.png"
                                                                        style={{ color: "transparent" }}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <p className="mb-0 text-right text-[13px]">읽음</p>
                                                            <span className="block text-[13px] uppercase text-end">
                                                                오전 0:20
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div />
                                            <div>
                                                <div type="imageListMessage">
                                                    <div className="flex items-end w-auto mb-2 flex-start space-x-1 flex-row-reverse space-x-reverse">
                                                        <div className="rounded-xl h-auto rounded-tr text-white w-auto p-0 overflow-hidden bg-white">
                                                            <div className="flex h-[140px]">
                                                                <div className="relative overflow-hidden">
                                                                    <img
                                                                        alt="이미지"
                                                                        loading="lazy"
                                                                        width={140}
                                                                        height={140}
                                                                        decoding="async"
                                                                        data-nimg={1}
                                                                        className="object-contain"
                                                                        src="https://chat-media.joongna.com/2024/09/27/1727364022624xhe_kf2qy.png"
                                                                        style={{ color: "transparent" }}
                                                                    />
                                                                </div>
                                                                <div className="relative overflow-hidden">
                                                                    <img
                                                                        alt="이미지"
                                                                        loading="lazy"
                                                                        width={140}
                                                                        height={140}
                                                                        decoding="async"
                                                                        data-nimg={1}
                                                                        className="object-contain"
                                                                        src="https://chat-media.joongna.com/2024/09/27/1727364022624apz_51ts3.png"
                                                                        style={{ color: "transparent" }}
                                                                    />
                                                                </div>
                                                                <div className="relative overflow-hidden">
                                                                    <img
                                                                        alt="이미지"
                                                                        loading="lazy"
                                                                        width={140}
                                                                        height={140}
                                                                        decoding="async"
                                                                        data-nimg={1}
                                                                        className="object-contain"
                                                                        src="https://chat-media.joongna.com/2024/09/27/1727364022623x21_ww8el.png"
                                                                        style={{ color: "transparent" }}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <p className="mb-0 text-right text-[13px]">읽음</p>
                                                            <span className="block text-[13px] uppercase text-end">
                                                                오전 0:20
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-jngreen flex justify-between items-center gap-[4px] px-[20px] py-[11px] cursor-pointer -mx-[20px] -mb-5">
                                        <div className="w-full flex justify-between items-center text-white whitespace-pre-wrap detail-medium-12">
                                            <p className="mb-0">
                                                앱에서는 채팅 응답이 더 빠르고 편리합니다. 지금 설치하면 거래
                                                확률을 높일 수 있어요!
                                            </p>
                                            <button className="underline">앱 다운로드</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carouselWrapper relative pt-1.5 pb-2.5 pl-1 pr-2.5 h-[44px] quick-menu-slider-wrapper">
                        <div
                            className="swiper swiper-initialized swiper-horizontal swiper-pointer-events"
                            dir="ltr"
                        >
                            <div className="swiper-wrapper">
                                <div className="swiper-slide swiper-slider-chat-event swiper-slide-active flex items-center ml-2 w-fit">
                                    <li className="cursor-pointer w-fit">
                                        <div className="flex items-center h-[31px] rounded-[40px] border border-jnGray-300 px-3 py-[6.5px] gap-[6px] w-fit">
                                            <span className="inline-block text-xs font-medium">
                                                중고나라 안심보상
                                            </span>
                                        </div>
                                    </li>
                                </div>
                            </div>
                            <div className="swiper-button-prev swiper-button-disabled swiper-button-lock" />
                            <div className="swiper-button-next swiper-button-disabled swiper-button-lock" />
                        </div>
                    </div>
                    <div>
                        <form className="bg-[#F7F9FA] py-3 px-3 flex flex-col rounded-xl focus-within:shadow-banner h-auto">
                            <textarea
                                id="chat-input"
                                title="채팅"
                                autoComplete="off"
                                maxLength={1000}
                                className="shrink-0 bg-transparent placeholder:text-[#9CA3AF] outline-none resize-none text-md h-16 w-full pre-wrap"
                                placeholder="메시지를 입력해주세요"
                                name="chat"
                                // defaultValue={""}
                            />
                            <div className="flex justify-between mt-3">
                                <div className="flex gap-2" id="chat-input-action-button-container">
                                    <div>
                                        <div className="block">
                                            <label
                                                htmlFor="chat-image-upload"
                                                className="text-gray-600 font-semibold text-sm leading-none cursor-pointer block border-[#e1e1e1] text-center border-0 m-0 p-0 w-6 h-6"
                                            >
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth={0}
                                                    viewBox="0 0 16 16"
                                                    className="w-full h-full"
                                                    height="1em"
                                                    width="1em"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M.002 3a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2h-12a2 2 0 01-2-2V3zm1 9l2.646-2.354a.5.5 0 01.63-.062l2.66 1.773 3.71-3.71a.5.5 0 01.577-.094L15.002 9.5V13a1 1 0 01-1 1h-12a1 1 0 01-1-1v-1zm5-6.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </label>
                                            <input
                                                id="chat-image-upload"
                                                name="chat-image-upload"
                                                type="file"
                                                className="px-4 md:px-5 appearance-none border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-gray-100 border-gray-300 focus:shadow focus:bg-white focus:border-primary a11yHidden w-auto py-0 rounded-md"
                                                autoComplete="off"
                                                spellCheck="false"
                                                aria-invalid="false"
                                                accept="image/png, image/jpeg, image/jpg"
                                            />
                                        </div>
                                    </div>
                                    <button className="w-6 h-6">
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth={0}
                                            viewBox="0 0 24 24"
                                            className="w-full h-full"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8s3.589-8,8-8 s8,3.589,8,8S16.411,20,12,20z" />
                                            <path d="M14.829,14.828c-0.185,0.184-0.384,0.349-0.592,0.489c-0.217,0.146-0.445,0.27-0.68,0.369 c-0.244,0.103-0.496,0.181-0.749,0.233c-0.531,0.108-1.087,0.108-1.616,0c-0.254-0.052-0.506-0.13-0.75-0.233 c-0.234-0.099-0.463-0.223-0.679-0.369c-0.209-0.141-0.408-0.305-0.593-0.489c-0.181-0.181-0.346-0.38-0.488-0.592l-1.658,1.119 c0.215,0.318,0.462,0.617,0.734,0.889c0.273,0.273,0.572,0.52,0.887,0.731c0.323,0.218,0.666,0.404,1.02,0.553 c0.365,0.154,0.744,0.272,1.128,0.35C11.189,17.959,11.596,18,12,18s0.811-0.041,1.208-0.122c0.383-0.078,0.762-0.196,1.127-0.35 c0.354-0.149,0.696-0.335,1.021-0.553c0.313-0.212,0.612-0.458,0.886-0.731c0.272-0.271,0.52-0.571,0.734-0.889l-1.658-1.119 C15.175,14.448,15.01,14.647,14.829,14.828z" />
                                            <circle cx="8.5" cy="10.5" r="1.5" />
                                            <circle cx="15.493" cy="10.493" r="1.493" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="flex items-end space-x-2">
                                    <span className="text-sm leading-5 text-gray-400">0 / 1000</span>
                                    <button type="submit"  className="w-6 h-6">
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth={0}
                                            viewBox="0 0 512 512"
                                            className="w-full h-full fill-[#9CA3AF]"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M8 256C8 119 119 8 256 8s248 111 248 248-111 248-248 248S8 393 8 256zm143.6 28.9l72.4-75.5V392c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V209.4l72.4 75.5c9.3 9.7 24.8 9.9 34.3.4l10.9-11c9.4-9.4 9.4-24.6 0-33.9L273 107.7c-9.4-9.4-24.6-9.4-33.9 0L106.3 240.4c-9.4 9.4-9.4 24.6 0 33.9l10.9 11c9.6 9.5 25.1 9.3 34.4-.4z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ChatRoomContainer;