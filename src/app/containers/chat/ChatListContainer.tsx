"use client"

import { mockChatData, useChatStore } from "@/app/stores/chatStores";



const ChatListContainer = () => {
    const { openChatRoom } = useChatStore();

    const handleChatRoomClick = (chatId: number) => {
        openChatRoom(chatId);
    };

    return (
        <>
            <div
                className="rc-drawer-content relative [&>#mobile-default-layout>div]:bg-white"
                aria-modal="true"
                role="dialog"
            >
                <div className="flex flex-col w-full h-full justify-between">
                    <div className="min-h-[70px] basis-[70px] flex justify-center items-center px-[20px]">
                        <button className="w-10 h-10 basis-10 invisible">
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
                        <h2 className="flex flex-col md:flex-row justify-center items-center md:space-x-2 flex-1 text-lg font-semibold text-center text-jnGray-900">
                            <p className="mb-0">
                                <span className="flex items-center justify-center space-x-2">
                                    <span>채팅</span>
                                    <span className="text-[10px] px-[5px] py-[3px] bg-jnGray-900 text-jnGray-100 font-bold rounded-sm hidden">
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
                                    <span className="text-[11px] text-[#0CB650] border border-jngreen px-2 rounded-2xl h-5 leading-5 hidden">
                                        0점
                                    </span>
                                </span>
                            </p>
                        </h2>
                        <ChatCloseButton />
                    </div>
                    <div className="h-full overflow-auto">
                        <div className="flex flex-col h-full">
                            <div className="flex justify-between items-center w-full h-[100px] bg-jnblack text-white px-[36px] py-[16px]">
                                <h2 className="headline-semibold-18">
                                    앱 다운로드 받고 <br />더 빠르고 편리하게 채팅 이용하기
                                </h2>
                                <div className="bg-white p-[6px] rounded-[4px]">
                                    <img
                                        alt="앱 다운로드 QR"
                                        loading="lazy"
                                        width={56}
                                        height={56}
                                        decoding="async"
                                        data-nimg={1}
                                        src="/main-web/_next/static/media/chat-app-download-qr.cfebfb98.png"
                                        style={{ color: "transparent" }}
                                    />
                                </div>
                            </div>
                            <ul className="flex flex-col h-full overflow-auto bg-white overscroll-contain">
                                {mockChatData.map((chat) => (
                                    <li 
                                        key={chat.id}
                                        className="flex justify-between px-5 gap-5 w-full cursor-pointer hover:bg-gray-50 transition-colors"
                                        onClick={() => handleChatRoomClick(chat.id)}
                                    >
                                        <div className="flex py-3 border-t-[1px] border-gray-200 w-[80%]">
                                            <div className="border border-gray-100 relative flex flex-shrink-0 items-center justify-center bg-gray-300 rounded-full overflow-hidden">
                                                <img
                                                    alt="프로필"
                                                    loading="lazy"
                                                    width={60}
                                                    height={60}
                                                    decoding="async"
                                                    data-nimg={1}
                                                    className="rounded-full max-w-none h-[60px] object-cover"
                                                    src={chat.profileImage}
                                                    style={{ color: "transparent" }}
                                                />
                                            </div>
                                            <div className="flex w-[calc(100%-56px)] flex-col justify-around ml-4">
                                                <div className="flex flex-wrap items-center gap-x-2">
                                                    <div className="flex gap-2">
                                                        <h4 className="font-semibold">{chat.userName}</h4>
                                                        {chat.isOfficial && (
                                                            <span className="text-[10px] leading-[10px] px-[5px] py-[3px] bg-jnGray-900 text-jnGray-100 font-bold rounded-sm">
                                                                공식
                                                            </span>
                                                        )}
                                                    </div>
                                                    <p className="text-[12px]">{chat.date}</p>
                                                </div>
                                                <span className="text-sm text-ellipsis overflow-hidden whitespace-nowrap min-[1024px]:max-w-[300px]">
                                                    {chat.lastMessage}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="my-auto">
                                            {chat.unreadCount > 0 ? (
                                                <p className="w-5 h-5 leading-5 font-semibold bg-jngreen rounded-[50%] text-center text-[12px] text-white">
                                                    {chat.unreadCount}
                                                </p>
                                            ) : chat.hasProductImage ? (
                                                <div className="relative w-10 h-10">
                                                    <img
                                                        alt="채팅방 상품 썸네일 이미지"
                                                        loading="lazy"
                                                        decoding="async"
                                                        data-nimg="fill"
                                                        className="rounded-md"
                                                        src={chat.productImage}
                                                        style={{
                                                            position: "absolute",
                                                            height: "100%",
                                                            width: "100%",
                                                            inset: 0,
                                                            color: "transparent"
                                                        }}
                                                    />
                                                </div>
                                            ) : null}
                                        </div>
                                    </li>
                                ))}
                                <div className="min-h-[5px]" />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const ChatCloseButton = () => {
    const { closeDrawer } = useChatStore()
    
    const handleCloseDrawer = () => {
        console.log("closeDrawer")
        closeDrawer()
    }

    return (
        <>
            <button 
                onClick={handleCloseDrawer}
                className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
                aria-label="채팅 닫기"
            >
                <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 512 512"
                    className="w-6 h-6 text-gray-600"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z" />
                </svg>
            </button>
        </>
    )
}

export default ChatListContainer;