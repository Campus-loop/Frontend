'use client';
import { useState } from "react";
import { ProductCard } from "@/app/components/main/productCard"



export default function UsedMarketPage() {


  return (
    <>
      <div className="mx-auto px-5 md:px-8 2xl:px-16 box-content pt-8 pb-16 bg-white lg:pt-[72px] lg:pb-20 max-w-[1024px] min-[1600px]:max-w-[1280px]">
        <div className="w-full 2xl:-ms-9">
          <div className="relative">
            <h2 className="text-[28px] font-normal mb-[10px]">Search Results</h2>
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



              </tbody>
            </table>
          </div>





          <ul className="inline-flex sticky z-10 w-full justify-end bg-white lg:top-[204px] xl:top-[220px] pt-7 pb-5 text-end">
            <FilterTabs />
          </ul>
          <ul className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 min-[1600px]:grid-cols-5 gap-x-3 lg:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8 search-results [&_div]:ps-0">

          {/* One Component Area */}
            <ProductCard
              href="/product/217076443"
              title="라도 캡틴쿡 42mm"
              price="1,400,000원"
              imageUrl="https://img2.joongna.com/media/original/2025/08/07/1754568560857kJ8_HQw3S.jpg?impolicy=thumb&size=150"
              location="엄궁동"
              timeAgo="5분 전"
              likes={8}
              chats={1}
              initialLiked={false}
              onLikeChange={(v) => console.log("liked?", v)}
            />






          </ul>
        </div>
      </div>
      <div className="Toastify" />
    </>

  );
}


const FilterTabs = () => {
  const [selectedTab, setSelectedTab] = useState<string>('new');

  return (
    <>
      <div className="flex flex-wrap items-center justify-between">
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




