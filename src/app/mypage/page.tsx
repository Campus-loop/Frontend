"use client"
import { useState } from "react"
import ItemCard from "../components/mypage/ItemCard"
// 타입 정의
interface ProductItem {
    title: string;
    img: string;
    price: string;
    state: string;
    date: string;
    school: string;
}

interface ProductData {
    products: ProductItem[];
}

// Mock 데이터 직접 정의 (JSON import 대신)
const mockProductData: ProductItem[] = [
    {
        title: "product1",
        img: "/product.jpg",
        price: "10,000",
        state: "0",
        date: "2025-01-01",
        school: "asibaluniv"
    },
    {
        title: "product2",
        img: "/product.jpg",
        price: "20,000",
        state: "1",
        date: "2025-05-01",
        school: "asibaluniv"
    },
    {
        title: "product3",
        img: "/product.jpg",
        price: "30,000",
        state: "0",
        date: "2025-04-01",
        school: "asibaluniv"
    },
    {
        title: "product4",
        img: "/product.jpg",
        price: "40,000",
        state: "0",
        date: "2025-03-01",
        school: "asibaluniv"
    },
    {
        title: "product5",
        img: "/product.jpg",
        price: "50,000",
        state: "1",
        date: "2025-02-01",
        school: "asibaluniv"
    }
];

export default function MyPage() {
    const [tab, setTab] = useState<string>("sale");
    // 0: 전체, 1: 판매중, 2: 판매완료
    const [selectedTab, setSelectedTab] = useState<number>(0);

    return (
        <>
            <main
                className="relative flex-grow border-b-2"
                style={{ minHeight: "0px !important", height: "auto !important" }}
            >
                <div>
                    <h1 className="a11yHidden">중고나라 가게 중고나라#9057724 페이지</h1>
                    <div className="mx-auto md:px-8 2xl:px-16 box-content justify-between px-0 max-w-[1024px] min-[1600px]:max-w-[1280px] lg:gap-10 flex">
                        <div className="hidden lg:block [&_h3]:text-xl [&_ul]:mb-6 [&_li]:w-fit [&_li]:cursor-pointer [&_li]:mb-[10px] [&_li]:text-jnGray-800 [&_li]:text-sm flex-auto flex-shrink flex-grow-0 basis-[180px] mt-[72px]">
                            <h2 className="mb-6 text-2xl font-semibold text-jnBlack">마이페이지</h2>
                            <h3 className="pt-0 mb-3 text-lg font-semibold border-none text-jnBlack">
                                거래 정보
                            </h3>
                            <ul>
                                <li onClick={() => setTab('sale')}>판매내역</li>
                                <li onClick={() => setTab('purchase')}>구매내역</li>
                            </ul>
                        </div>
                        <div className="mx-auto box-content max-w-[1024px] min-[1600px]:max-w-[1280px] basis-[calc(100%-180px)] flex-grow px-0 md:px-0 2xl:px-0">
                            <div className="block mt-8 lg:mt-[72px] mb-8 lg:mb-0">
                                <div className="relative col-span-2 w-full h-full text-black grid grid-cols-1 gap-x-0 gap-y-4 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5 lg:min-w-[800px]">
                                    <div className="flex flex-col justify-start order-1 mx-5 sm:mx-0 row-span-2">
                                        <div className="flex order-1 gap-3 items-center">
                                            <div className="flex items-center translate-x-3">
                                                <img
                                                    alt="profile-image"
                                                    width={60}
                                                    height={60}
                                                    decoding="async"
                                                    data-nimg={1}
                                                    className="rounded-full w-[48px] h-[48px] lg:w-[60px] lg:h-[60px] hidden"
                                                    src=""
                                                    style={{ color: "transparent" }}
                                                />
                                                <img
                                                    alt="profile-image"
                                                    loading="lazy"
                                                    width={60}
                                                    height={60}
                                                    decoding="async"
                                                    data-nimg={1}
                                                    className="rounded-full w-[48px] h-[48px] lg:w-[60px] lg:h-[60px] box-content border-4 border-white -translate-x-3"
                                                    src="https://img2.joongna.com/common/Profile/Default/profile_m.png"
                                                    style={{ color: "transparent" }}
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex justify-between items-center mb-0 w-full sm:mb-2">
                                                    <h2 className="flex gap-1 items-center mr-3 font-semibold cursor-pointer text-[18px] lg:text-[24px] leading-[39px] lg:gap-2">
                                                        asibaljonagwichanta@asibaluniv.com
                                                    </h2>
                                                </div>
                                                <div className="min-[480px]:relative flex space-x-[6px] text-[#787E89] text-[12px] mb-[1px] flex-auto" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="px-0 mt-8 lg:mt-[60px] mx-5 sm:mx-0">
                                <div className="flex flex-col w-full mb-4 lg:mb-5">
                                    <HistoryTabs tab={tab} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
                                    <FilterTabs />
                                </div>
                                <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 min-[1600px]:grid-cols-5 gap-x-3 lg:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8 ">
                                    {/* selectTab이 0이면 전체, 1이면 판매중, 2이면 판매완료
                                      그래서 mockProductData에서 전체면 그냥 <ItemCard key={idx} item={item} /> 렌더링
                                      selectTab이 1이면 item.state가 0인것들, 2이면 item.state가 1인것들을 렌더링
                                    */}
                                    {tab === "sale" ? (
                                        selectedTab === 0
                                            ? mockProductData.map((item: ProductItem, idx: number) => (
                                                <ItemCard key={idx} item={item} />
                                            ))
                                            : mockProductData
                                                .filter((item: ProductItem) =>
                                                    selectedTab === 1 ? item.state === "0" : item.state === "1"
                                                )
                                                .map((item: ProductItem, idx: number) => (
                                                    <ItemCard key={idx} item={item} />
                                                ))
                                    ) : (
                                        // 구매내역일 때는 일단 전체만 보여주도록(추후 구매내역 데이터로 교체)
                                        mockProductData.map((item: ProductItem, idx: number) => (
                                            <ItemCard key={idx} item={item} />
                                        ))
                                    )}
                                </div>
                                <div className="py-8 text-center xl:pt-14" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Toastify" />
            </main>
        </>
    )
}

// HistoryTabs 컴포넌트의 props 구조를 올바르게 수정
interface HistoryTabsProps {
    tab: string;
    selectedTab: number;
    setSelectedTab: (value: number) => void;
}

const HistoryTabs = ({ tab, selectedTab, setSelectedTab }: HistoryTabsProps) => {
    const tabList = [
        { label: "전체", value: 0 },
        { label: "판매중", value: 1 },
        { label: "판매완료", value: 2 },
    ];

    return (
        <>
                <h3 className="text-lg font-bold md:text-[22px] text-jnBlack">
                    {tab === 'sale' ? '판매 내역' : '구매 내역'}
                </h3>
                <div className="mt-3 mr-0 mb-9 lg:mt-2">
                    <ul className="colors flex flex-nowrap justify-between lg:justify-start -me-3 border-b border-[#DADEE5]">
                        {tab === 'sale' ? (
                            <>
                                {tabList.map((item) => (
                                    <li
                                        key={item.value}
                                        className={
                                            `shrink grow lg:grow-0 cursor-pointer py-4 basis-[84px] lg:basis-[160px] flex justify-center items-center font-medium transition duration-200 ease-in-out ` +
                                            (selectedTab === item.value
                                                ? "text-black border-b-[2px] border-black"
                                                : "text-[#9CA3AF]")
                                        }
                                        onClick={() => setSelectedTab(item.value)}
                                    >
                                        {item.label}
                                    </li>
                                ))}
                            </>
                        ) : null}
                    </ul>
                </div>
        </>
    )
}

const FilterTabs = () => {
    const [selectedTab, setSelectedTab] = useState<string>('new');
    
    return (
        <>
            <div className="flex flex-wrap items-center justify-between">
                <div className="flex-shrink-0 mb-1 text-sm text-body md:text-base pe-4 md:me-6 lg:block">
                    총 2 개
                </div>
                <ul className="flex space-x-3">
                    <li>
                        <button key='new' className={`text-sm font-medium ${selectedTab === 'new' ? 'text-[#141313]' : 'text-[#787E89]'}`} onClick={() => setSelectedTab('new')}>
                            최신순
                        </button>
                    </li>
                    <li>
                        <span className="inline-block mb-0 w-[1px] h-[10px] border border-[#DADEE5]" />
                    </li>
                    <li>
                        <button key='low' className={`text-sm font-medium ${selectedTab === 'low' ? 'text-[#141313]' : 'text-[#787E89]'}`} onClick={() => setSelectedTab('low')}>
                            낮은가격순
                        </button>
                    </li>
                    <li>
                        <span className="inline-block mb-0 w-[1px] h-[10px] border border-[#DADEE5]" />
                    </li>
                    <li>
                        <button key='high' className={`text-sm font-medium ${selectedTab === 'high' ? 'text-[#141313]' : 'text-[#787E89]'}`} onClick={() => setSelectedTab('high')}>
                            높은가격순
                        </button>
                    </li>
                </ul>
            </div>
        </>
    )
}