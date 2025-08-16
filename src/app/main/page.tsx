'use client';

export default function UsedMarketPage() {
  return (
    <div id="__next" style={{ height: 'auto' }}>
      <div
        className="flex flex-col min-h-screen bg-white"
        style={{ height: 'auto', minHeight: 0 }}
      >
        <div className="ga4_main_top_banner flex h-[60px] w-full cursor-pointer max-[480px]:hidden z-20 fixed top-0 bg-[#141313]">
          <a
            target="_self"
            className="w-full max-w-[1960px] relative mx-auto"
            href="/search"
          >
            <img
              alt="중고나라 검색페이지 이동 이미지"
              fetchPriority="high"
              decoding="async"
              data-nimg="fill"
              className="object-cover h-full mx-auto"
              style={{
                position: 'absolute',
                height: '100%',
                width: '100%',
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                color: 'transparent',
              }}
              src="/main-web/_next/static/media/app-download-banner.16dfe881.webp"
            />
          </a>
        </div>

        <main className="relative flex-grow border-b-2" style={{ height: 'auto' }}>
          <div
            className="mx-auto px-5 md:px-8 2xl:px-16 box-content max-w-[1024px] min-[1600px]:max-w-[1280px]"
            style={{ height: 'auto' }}
          >
            <section className="max-w-[1024px] min-[1600px]:max-w-[1280px] m-auto" />
            <section className="max-w-[1024px] min-[1600px]:max-w-[1280px] m-auto">
              <div className="relative heightFull mb-10 xl:mb-20">
                <div className="mt-2 mb-6 md:mb-6 lg:mb-6 2xl:mb-6 3xl:mb-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold text-heading">
                      찜이 많은 상품
                    </h3>
                  </div>
                </div>

                <div className="carouselWrapper relative jn-carousel wish">
                  <div
                    className="swiper swiper-initialized swiper-horizontal swiper-pointer-events"
                    dir="ltr"
                  >
                    <div className="swiper-wrapper">
                      {/* SLIDE 1 */}
                      <div className="swiper-slide swiper-slide-active carouselItem">
                        <div className="grid gap-x-2 gap-y-2 bg-white grid-cols-3 md:grid-cols-6 sm:gap-x-4 sm:gap-y-4">
                          {/* item */}
                          <div>
                            <span style={{ display: 'contents', cursor: 'pointer' }}>
                              <a
                                className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
                                href="/product/217181874"
                              >
                                <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
                                  <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
                                  <img
                                    alt="아이폰12 미니 팔아요(재업로드)"
                                    referrerPolicy="no-referrer"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                                    style={{
                                      position: 'absolute',
                                      height: '100%',
                                      width: '100%',
                                      left: 0,
                                      top: 0,
                                      right: 0,
                                      bottom: 0,
                                      color: 'transparent',
                                    }}
                                    src="https://img2.joongna.com/media/original/2025/08/09/1754724365175wj1_Bq2mm.jpg?impolicy=thumb&size=150"
                                  />
                                </div>
                                <div className="w-full overflow-hidden p-2 px-0">
                                  <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                                    아이폰12 미니 팔아요(재업로드)
                                  </h2>
                                  <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                                    50,000원
                                  </div>
                                  <div className="my-1 min-h-6">
                                    <span className="text-sm text-gray-400">4일 전</span>
                                  </div>
                                  <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                                </div>
                              </a>
                            </span>
                          </div>

                          <div>
                            <span style={{ display: 'contents', cursor: 'pointer' }}>
                              <a
                                className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
                                href="/product/212209683"
                              >
                                <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
                                  <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
                                  <img
                                    alt="메가 라부부 스케치 1000%새상품 / 미개봉"
                                    referrerPolicy="no-referrer"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                                    style={{
                                      position: 'absolute',
                                      height: '100%',
                                      width: '100%',
                                      left: 0,
                                      top: 0,
                                      right: 0,
                                      bottom: 0,
                                      color: 'transparent',
                                    }}
                                    src="https://img2.joongna.com/media/original/2025/06/10/1749554682055QWI_8E2Aa.jpg?impolicy=thumb&size=150"
                                  />
                                </div>
                                <div className="w-full overflow-hidden p-2 px-0">
                                  <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                                    메가 라부부 스케치 1000%새상품 / 미개봉
                                  </h2>
                                  <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                                    2,500,000원
                                  </div>
                                  <div className="my-1 min-h-6">
                                    <span className="text-sm text-gray-400">2025-07-13</span>
                                  </div>
                                  <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                                </div>
                              </a>
                            </span>
                          </div>

                          <div>
                            <span style={{ display: 'contents', cursor: 'pointer' }}>
                              <a
                                className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
                                href="/product/217325881"
                              >
                                <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
                                  <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
                                  <img
                                    alt="워터맨 에드슨 다이아몬드 블랙 f닙 만년필"
                                    referrerPolicy="no-referrer"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                                    style={{
                                      position: 'absolute',
                                      height: '100%',
                                      width: '100%',
                                      left: 0,
                                      top: 0,
                                      right: 0,
                                      bottom: 0,
                                      color: 'transparent',
                                    }}
                                    src="https://img2.joongna.com/media/original/2025/08/11/1754920469298Zg0_GtnoZ.jpg?impolicy=thumb&size=150"
                                  />
                                </div>
                                <div className="w-full overflow-hidden p-2 px-0">
                                  <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                                    워터맨 에드슨 다이아몬드 블랙 f닙 만년필
                                  </h2>
                                  <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                                    1,300,000원
                                  </div>
                                  <div className="my-1 min-h-6">
                                    <span className="text-sm text-gray-400">도담동</span>
                                    <span className="mx-1 text-sm text-gray-400">|</span>
                                    <span className="text-sm text-gray-400">1일 전</span>
                                  </div>
                                  <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                                </div>
                              </a>
                            </span>
                          </div>

                          <div>
                            <span style={{ display: 'contents', cursor: 'pointer' }}>
                              <a
                                className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
                                href="/product/217147259"
                              >
                                <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
                                  <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
                                  <img
                                    alt="포칼 소프라2 스피커"
                                    referrerPolicy="no-referrer"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                                    style={{
                                      position: 'absolute',
                                      height: '100%',
                                      width: '100%',
                                      left: 0,
                                      top: 0,
                                      right: 0,
                                      bottom: 0,
                                      color: 'transparent',
                                    }}
                                    src="https://img2.joongna.com/cafe-article-data/live/2025/08/09/1113926450/1754666346283_000_g0GtI_main.jpg?impolicy=thumb&size=150"
                                  />
                                </div>
                                <div className="w-full overflow-hidden p-2 px-0">
                                  <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">포칼 소프라2 스피커</h2>
                                  <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                                    6,000,000원
                                  </div>
                                  <div className="my-1 min-h-6">
                                    <span className="text-sm text-gray-400">서초1동</span>
                                    <span className="mx-1 text-sm text-gray-400">|</span>
                                    <span className="text-sm text-gray-400">27분 전</span>
                                  </div>
                                  <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                                </div>
                              </a>
                            </span>
                          </div>

                          <div>
                            <span style={{ display: 'contents', cursor: 'pointer' }}>
                              <a
                                className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
                                href="/product/217369988"
                              >
                                <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
                                  <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
                                  <img
                                    alt="갤럭시폴드7 512 블루쉐도우 자급제"
                                    referrerPolicy="no-referrer"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                                    style={{
                                      position: 'absolute',
                                      height: '100%',
                                      width: '100%',
                                      left: 0,
                                      top: 0,
                                      right: 0,
                                      bottom: 0,
                                      color: 'transparent',
                                    }}
                                    src="https://img2.joongna.com/media/original/2025/08/12/1754984840630CfX_bfuQ7.jpg?impolicy=thumb&size=150"
                                  />
                                </div>
                                <div className="w-full overflow-hidden p-2 px-0">
                                  <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                                    갤럭시폴드7 512 블루쉐도우 자급제
                                  </h2>
                                  <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                                    1,800,000원
                                  </div>
                                  <div className="my-1 min-h-6">
                                    <span className="text-sm text-gray-400">명륜1동</span>
                                    <span className="mx-1 text-sm text-gray-400">|</span>
                                    <span className="text-sm text-gray-400">1일 전</span>
                                  </div>
                                  <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                                </div>
                              </a>
                            </span>
                          </div>

                          <div>
                            <span style={{ display: 'contents', cursor: 'pointer' }}>
                              <a
                                className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
                                href="/product/217326326"
                              >
                                <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
                                  <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
                                  <img
                                    alt="아이패드 프로4세대 12.9 128GB 셀룰러 판매합니"
                                    referrerPolicy="no-referrer"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                                    style={{
                                      position: 'absolute',
                                      height: '100%',
                                      width: '100%',
                                      left: 0,
                                      top: 0,
                                      right: 0,
                                      bottom: 0,
                                      color: 'transparent',
                                    }}
                                    src="https://img2.joongna.com/media/original/2025/08/11/1754921255750MVc_Ob4IN.jpg?impolicy=thumb&size=150"
                                  />
                                </div>
                                <div className="w-full overflow-hidden p-2 px-0">
                                  <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                                    아이패드 프로4세대 12.9 128GB 셀룰러 판매합니
                                  </h2>
                                  <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                                    630,000원
                                  </div>
                                  <div className="my-1 min-h-6">
                                    <span className="text-sm text-gray-400">성복동</span>
                                    <span className="mx-1 text-sm text-gray-400">|</span>
                                    <span className="text-sm text-gray-400">1일 전</span>
                                  </div>
                                  <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                                </div>
                              </a>
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* SLIDE 2 */}
                      <div className="swiper-slide swiper-slide-next carouselItem">
                        <div className="grid gap-x-2 gap-y-2 bg-white grid-cols-3 md:grid-cols-6 sm:gap-x-4 sm:gap-y-4">
                          <div>
                            <span style={{ display: 'contents', cursor: 'pointer' }}>
                              <a
                                className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
                                href="/product/217345571"
                              >
                                <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
                                  <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
                                  <img
                                    alt="맥북프로 16인치 2019 (i9 2.4G / 32GB / 1TB SSD)"
                                    referrerPolicy="no-referrer"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                                    style={{
                                      position: 'absolute',
                                      height: '100%',
                                      width: '100%',
                                      left: 0,
                                      top: 0,
                                      right: 0,
                                      bottom: 0,
                                      color: 'transparent',
                                    }}
                                    src="https://img2.joongna.com/cafe-article-data/live/2025/08/12/1114192537/1754963130834_000_qdoAf_main.jpeg?impolicy=thumb&size=150"
                                  />
                                </div>
                                <div className="w-full overflow-hidden p-2 px-0">
                                  <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                                    맥북프로 16인치 2019 (i9 2.4G / 32GB / 1TB SSD)
                                  </h2>
                                  <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                                    500,000원
                                  </div>
                                  <div className="my-1 min-h-6">
                                    <span className="text-sm text-gray-400">수유1동</span>
                                    <span className="mx-1 text-sm text-gray-400">|</span>
                                    <span className="text-sm text-gray-400">1일 전</span>
                                  </div>
                                  <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                                </div>
                              </a>
                            </span>
                          </div>

                          <div>
                            <span style={{ display: 'contents', cursor: 'pointer' }}>
                              <a
                                className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
                                href="/product/217368676"
                              >
                                <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
                                  <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
                                  <img
                                    alt="5600x + ab350m pro4 팝니다"
                                    referrerPolicy="no-referrer"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                                    style={{
                                      position: 'absolute',
                                      height: '100%',
                                      width: '100%',
                                      left: 0,
                                      top: 0,
                                      right: 0,
                                      bottom: 0,
                                      color: 'transparent',
                                    }}
                                    src="https://img2.joongna.com/media/original/2025/08/12/1754983574957QZ2_Xi7xz.jpg?impolicy=thumb&size=150"
                                  />
                                </div>
                                <div className="w-full overflow-hidden p-2 px-0">
                                  <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                                    5600x + ab350m pro4 팝니다
                                  </h2>
                                  <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                                    100,000원
                                  </div>
                                  <div className="my-1 min-h-6">
                                    <span className="text-sm text-gray-400">송도4동</span>
                                    <span className="mx-1 text-sm text-gray-400">|</span>
                                    <span className="text-sm text-gray-400">4시간 전</span>
                                  </div>
                                  <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                                </div>
                              </a>
                            </span>
                          </div>

                          <div>
                            <span style={{ display: 'contents', cursor: 'pointer' }}>
                              <a
                                className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
                                href="/product/217379921"
                              >
                                <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
                                  <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
                                  <img
                                    alt="샤오신패드 프로 12.7 2025 8+128gb"
                                    referrerPolicy="no-referrer"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                                    style={{
                                      position: 'absolute',
                                      height: '100%',
                                      width: '100%',
                                      left: 0,
                                      top: 0,
                                      right: 0,
                                      bottom: 0,
                                      color: 'transparent',
                                    }}
                                    src="https://img2.joongna.com/media/original/2025/08/12/17549945232361wJ_WKEq8.jpg?impolicy=thumb&size=150"
                                  />
                                </div>
                                <div className="w-full overflow-hidden p-2 px-0">
                                  <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                                    샤오신패드 프로 12.7 2025 8+128gb
                                  </h2>
                                  <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                                    230,000원
                                  </div>
                                  <div className="my-1 min-h-6">
                                    <span className="text-sm text-gray-400">소하1동</span>
                                    <span className="mx-1 text-sm text-gray-400">|</span>
                                    <span className="text-sm text-gray-400">1일 전</span>
                                  </div>
                                  <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                                </div>
                              </a>
                            </span>
                          </div>

                          <div>
                            <span style={{ display: 'contents', cursor: 'pointer' }}>
                              <a
                                className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
                                href="/product/216000916"
                              >
                                <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
                                  <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
                                  <img
                                    alt="에어팟 프로2 판매"
                                    referrerPolicy="no-referrer"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                                    style={{
                                      position: 'absolute',
                                      height: '100%',
                                      width: '100%',
                                      left: 0,
                                      top: 0,
                                      right: 0,
                                      bottom: 0,
                                      color: 'transparent',
                                    }}
                                    src="https://img2.joongna.com/media/original/2025/07/23/17532508598494Iw_FBtD0.jpeg?impolicy=thumb&size=150"
                                  />
                                </div>
                                <div className="w-full overflow-hidden p-2 px-0">
                                  <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">에어팟 프로2 판매</h2>
                                  <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                                    124,000원
                                  </div>
                                  <div className="my-1 min-h-6">
                                    <span className="text-sm text-gray-400">10시간 전</span>
                                  </div>
                                  <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                                </div>
                              </a>
                            </span>
                          </div>

                          <div>
                            <span style={{ display: 'contents', cursor: 'pointer' }}>
                              <a
                                className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
                                href="/product/217260491"
                              >
                                <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
                                  <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
                                  <img
                                    alt="캐논 익서스430 400레트로 디카 빈티지 카메라"
                                    referrerPolicy="no-referrer"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                                    style={{
                                      position: 'absolute',
                                      height: '100%',
                                      width: '100%',
                                      left: 0,
                                      top: 0,
                                      right: 0,
                                      bottom: 0,
                                      color: 'transparent',
                                    }}
                                    src="https://img2.joongna.com/media/original/2025/08/10/1754832737660Hav_LL81O.jpg?impolicy=thumb&size=150"
                                  />
                                </div>
                                <div className="w-full overflow-hidden p-2 px-0">
                                  <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                                    캐논 익서스430 400레트로 디카 빈티지 카메라
                                  </h2>
                                  <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                                    180,000원
                                  </div>
                                  <div className="my-1 min-h-6">
                                    <span className="text-sm text-gray-400">발산제1동</span>
                                    <span className="mx-1 text-sm text-gray-400">|</span>
                                    <span className="text-sm text-gray-400">-4342초 전</span>
                                  </div>
                                  <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                                </div>
                              </a>
                            </span>
                          </div>

                          <div>
                            <span style={{ display: 'contents', cursor: 'pointer' }}>
                              <a
                                className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
                                href="/product/217268890"
                              >
                                <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
                                  <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
                                  <img
                                    alt="갤럭시s25플러스 256gb ss급"
                                    referrerPolicy="no-referrer"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                                    style={{
                                      position: 'absolute',
                                      height: '100%',
                                      width: '100%',
                                      left: 0,
                                      top: 0,
                                      right: 0,
                                      bottom: 0,
                                      color: 'transparent',
                                    }}
                                    src="https://img2.joongna.com/media/original/2025/08/11/1754858675194DJY_pp8qr.jpg?impolicy=thumb&size=150"
                                  />
                                </div>
                                <div className="w-full overflow-hidden p-2 px-0">
                                  <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                                    갤럭시s25플러스 256gb ss급
                                  </h2>
                                  <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                                    770,000원
                                  </div>
                                  <div className="my-1 min-h-6">
                                    <span className="text-sm text-gray-400">신흥동</span>
                                    <span className="mx-1 text-sm text-gray-400">|</span>
                                    <span className="text-sm text-gray-400">-4016초 전</span>
                                  </div>
                                  <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                                </div>
                              </a>
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* SLIDE 3 */}
                      <div className="swiper-slide carouselItem">
                        <div className="grid gap-x-2 gap-y-2 bg-white grid-cols-3 md:grid-cols-6 sm:gap-x-4 sm:gap-y-4">
                          <div>
                            <span style={{ display: 'contents', cursor: 'pointer' }}>
                              <a
                                className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
                                href="/product/217322214"
                              >
                                <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
                                  <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
                                  <img
                                    alt="아이폰 Xs 256GB 깔끔 저렴 정상해지"
                                    referrerPolicy="no-referrer"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                                    style={{
                                      position: 'absolute',
                                      height: '100%',
                                      width: '100%',
                                      left: 0,
                                      top: 0,
                                      right: 0,
                                      bottom: 0,
                                      color: 'transparent',
                                    }}
                                    src="https://img2.joongna.com/media/original/2025/08/11/1754916509323fkX_0AQEX.jpg?impolicy=thumb&size=150"
                                  />
                                </div>
                                <div className="w-full overflow-hidden p-2 px-0">
                                  <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                                    아이폰 Xs 256GB 깔끔 저렴 정상해지
                                  </h2>
                                  <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                                    200,000원
                                  </div>
                                  <div className="my-1 min-h-6">
                                    <span className="text-sm text-gray-400">서초2동</span>
                                    <span className="mx-1 text-sm text-gray-400">|</span>
                                    <span className="text-sm text-gray-400">3시간 전</span>
                                  </div>
                                  <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                                </div>
                              </a>
                            </span>
                          </div>

                          <div>
                            <span style={{ display: 'contents', cursor: 'pointer' }}>
                              <a
                                className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
                                href="/product/217362379"
                              >
                                <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
                                  <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
                                  <img
                                    alt="던스 오키드부케 핑크클로버 플레이수트 74 새상품"
                                    referrerPolicy="no-referrer"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                                    style={{
                                      position: 'absolute',
                                      height: '100%',
                                      width: '100%',
                                      left: 0,
                                      top: 0,
                                      right: 0,
                                      bottom: 0,
                                      color: 'transparent',
                                    }}
                                    src="https://img2.joongna.com/cafe-article-data/live/2025/08/12/1114215363/1754977887798_000_NH0QW_main.JPG?impolicy=thumb&size=150"
                                  />
                                </div>
                                <div className="w-full overflow-hidden p-2 px-0">
                                  <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                                    던스 오키드부케 핑크클로버 플레이수트 74 새상품
                                  </h2>
                                  <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                                    64,000원
                                  </div>
                                  <div className="my-1 min-h-6">
                                    <span className="text-sm text-gray-400">1일 전</span>
                                  </div>
                                  <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                                </div>
                              </a>
                            </span>
                          </div>

                          <div>
                            <span style={{ display: 'contents', cursor: 'pointer' }}>
                              <a
                                className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
                                href="/product/217384987"
                              >
                                <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
                                  <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
                                  <img
                                    alt="영화 A3 포스터 판매합니다(탑건 매버릭. 발레리나, 콘스탄틴, 나우시카, 쥬라기월드, 너의 이름은, 무뢰한, 케이온, 스윙걸즈, 바빌론, 존윅, 백설공주, 위플래쉬, 여름날 우리"
                                    referrerPolicy="no-referrer"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                                    style={{
                                      position: 'absolute',
                                      height: '100%',
                                      width: '100%',
                                      left: 0,
                                      top: 0,
                                      right: 0,
                                      bottom: 0,
                                      color: 'transparent',
                                    }}
                                    src="https://img2.joongna.com/cafe-article-data/live/2025/08/12/1114245971/1754999957468_000_h79tG_main.jpg?impolicy=thumb&size=150"
                                  />
                                </div>
                                <div className="w-full overflow-hidden p-2 px-0">
                                  <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                                    영화 A3 포스터 판매합니다(탑건 매버릭. 발레리나, 콘스탄틴, 나우시카, 쥬라기월드, 너의 이름은,
                                    무뢰한, 케이온, 스윙걸즈, 바빌론, 존윅, 백설공주, 위플래쉬, 여름날 우리
                                  </h2>
                                  <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                                    5,000원
                                  </div>
                                  <div className="my-1 min-h-6">
                                    <span className="text-sm text-gray-400">23시간 전</span>
                                  </div>
                                  <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                                </div>
                              </a>
                            </span>
                          </div>

                          <div>
                            <span style={{ display: 'contents', cursor: 'pointer' }}>
                              <a
                                className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
                                href="/product/217402832"
                              >
                                <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
                                  <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
                                  <img
                                    alt="만년필 나카야 NAKAYA 헤키타메누리 투톤촉 중자"
                                    referrerPolicy="no-referrer"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                                    style={{
                                      position: 'absolute',
                                      height: '100%',
                                      width: '100%',
                                      left: 0,
                                      top: 0,
                                      right: 0,
                                      bottom: 0,
                                      color: 'transparent',
                                    }}
                                    src="https://img2.joongna.com/cafe-article-data/live/2025/08/13/1114270128/1755041155351_000_63tIK_main.jpg?impolicy=thumb&size=150"
                                  />
                                </div>
                                <div className="w-full overflow-hidden p-2 px-0">
                                  <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                                    만년필 나카야 NAKAYA 헤키타메누리 투톤촉 중자
                                  </h2>
                                  <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                                    1,100,000원
                                  </div>
                                  <div className="my-1 min-h-6">
                                    <span className="text-sm text-gray-400">봉선1동</span>
                                    <span className="mx-1 text-sm text-gray-400">|</span>
                                    <span className="text-sm text-gray-400">11시간 전</span>
                                  </div>
                                  <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                                </div>
                              </a>
                            </span>
                          </div>

                          <div>
                            <span style={{ display: 'contents', cursor: 'pointer' }}>
                              <a
                                className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
                                href="/product/215700436"
                              >
                                <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
                                  <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
                                  <img
                                    alt="가민 포러너 255 미개봉 27만원"
                                    referrerPolicy="no-referrer"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                                    style={{
                                      position: 'absolute',
                                      height: '100%',
                                      width: '100%',
                                      left: 0,
                                      top: 0,
                                      right: 0,
                                      bottom: 0,
                                      color: 'transparent',
                                    }}
                                    src="https://img2.joongna.com/cafe-article-data/live/2025/07/20/1112151887/1752940306630_000_b4FyJ_main.jpg?impolicy=thumb&size=150"
                                  />
                                </div>
                                <div className="w-full overflow-hidden p-2 px-0">
                                  <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                                    가민 포러너 255 미개봉 27만원
                                  </h2>
                                  <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                                    270,000원
                                  </div>
                                  <div className="my-1 min-h-6">
                                    <span className="text-sm text-gray-400">24일 전</span>
                                  </div>
                                  <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                                </div>
                              </a>
                            </span>
                          </div>

                          <div>
                            <span style={{ display: 'contents', cursor: 'pointer' }}>
                              <a
                                className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
                                href="/product/215829115"
                              >
                                <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
                                  <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
                                  <img
                                    alt="플스5 프로"
                                    referrerPolicy="no-referrer"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                                    style={{
                                      position: 'absolute',
                                      height: '100%',
                                      width: '100%',
                                      left: 0,
                                      top: 0,
                                      right: 0,
                                      bottom: 0,
                                      color: 'transparent',
                                    }}
                                    src="https://img2.joongna.com/media/original/2025/07/21/1753079485188d2q_mSOek.jpg?impolicy=thumb&size=150"
                                  />
                                </div>
                                <div className="w-full overflow-hidden p-2 px-0">
                                  <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">플스5 프로</h2>
                                  <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                                    800,000원
                                  </div>
                                  <div className="my-1 min-h-6">
                                    <span className="text-sm text-gray-400">왕정동</span>
                                    <span className="mx-1 text-sm text-gray-400">|</span>
                                    <span className="text-sm text-gray-400">3일 전</span>
                                  </div>
                                  <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                                </div>
                              </a>
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* SLIDE 4 */}
                      <div className="swiper-slide carouselItem">
                        <div className="grid gap-x-2 gap-y-2 bg-white grid-cols-3 md:grid-cols-6 sm:gap-x-4 sm:gap-y-4">
                          <div>
                            <span style={{ display: 'contents', cursor: 'pointer' }}>
                              <a
                                className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
                                href="/product/216168277"
                              >
                                <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
                                  <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
                                  <img
                                    alt="sony a7m2"
                                    referrerPolicy="no-referrer"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                                    style={{
                                      position: 'absolute',
                                      height: '100%',
                                      width: '100%',
                                      left: 0,
                                      top: 0,
                                      right: 0,
                                      bottom: 0,
                                      color: 'transparent',
                                    }}
                                    src="https://img2.joongna.com/media/original/2025/07/25/175342334598633z_fpliK.jpg?impolicy=thumb&size=150"
                                  />
                                </div>
                                <div className="w-full overflow-hidden p-2 px-0">
                                  <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">sony a7m2</h2>
                                  <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                                    565,000원
                                  </div>
                                  <div className="my-1 min-h-6">
                                    <span className="text-sm text-gray-400">신관동</span>
                                    <span className="mx-1 text-sm text-gray-400">|</span>
                                    <span className="text-sm text-gray-400">-37561초 전</span>
                                  </div>
                                  <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                                </div>
                              </a>
                            </span>
                          </div>

                          <div>
                            <span style={{ display: 'contents', cursor: 'pointer' }}>
                              <a
                                className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
                                href="/product/216326560"
                              >
                                <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
                                  <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
                                  <img
                                    alt="파나소닉 루믹스 GF8K"
                                    referrerPolicy="no-referrer"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                                    style={{
                                      position: 'absolute',
                                      height: '100%',
                                      width: '100%',
                                      left: 0,
                                      top: 0,
                                      right: 0,
                                      bottom: 0,
                                      color: 'transparent',
                                    }}
                                    src="https://img2.joongna.com/cafe-article-data/live/2025/07/27/1112864284/1753600320459_000_cwcHV_main.jpg?impolicy=thumb&size=150"
                                  />
                                </div>
                                <div className="w-full overflow-hidden p-2 px-0">
                                  <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">파나소닉 루믹스 GF8K</h2>
                                  <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                                    365,000원
                                  </div>
                                  <div className="my-1 min-h-6">
                                    <span className="text-sm text-gray-400">보라동</span>
                                    <span className="mx-1 text-sm text-gray-400">|</span>
                                    <span className="text-sm text-gray-400">2일 전</span>
                                  </div>
                                  <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                                </div>
                              </a>
                            </span>
                          </div>

                          <div>
                            <span style={{ display: 'contents', cursor: 'pointer' }}>
                              <a
                                className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
                                href="/product/216702049"
                              >
                                <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
                                  <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
                                  <img
                                    alt="뉴원산엔시스4"
                                    referrerPolicy="no-referrer"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                                    style={{
                                      position: 'absolute',
                                      height: '100%',
                                      width: '100%',
                                      left: 0,
                                      top: 0,
                                      right: 0,
                                      bottom: 0,
                                      color: 'transparent',
                                    }}
                                    src="https://img2.joongna.com/media/original/2025/08/01/1754037379410AWe_TZXev.jpg?impolicy=thumb&size=150"
                                  />
                                </div>
                                <div className="w-full overflow-hidden p-2 px-0">
                                  <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">뉴원산엔시스4</h2>
                                  <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                                    18,000원
                                  </div>
                                  <div className="my-1 min-h-6">
                                    <span className="text-sm text-gray-400">마두1동</span>
                                    <span className="mx-1 text-sm text-gray-400">|</span>
                                    <span className="text-sm text-gray-400">39분 전</span>
                                  </div>
                                  <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                                </div>
                              </a>
                            </span>
                          </div>

                          <div>
                            <span style={{ display: 'contents', cursor: 'pointer' }}>
                              <a
                                className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
                                href="/product/216741056"
                              >
                                <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
                                  <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
                                  <img
                                    alt="아이패드 프로 m4 13인치 7세대 256기가 셀룰러"
                                    referrerPolicy="no-referrer"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                                    style={{
                                      position: 'absolute',
                                      height: '100%',
                                      width: '100%',
                                      left: 0,
                                      top: 0,
                                      right: 0,
                                      bottom: 0,
                                      color: 'transparent',
                                    }}
                                    src="https://img2.joongna.com/media/original/2025/08/02/17541058061655mR_CJ78b.jpg?impolicy=thumb&size=150"
                                  />
                                </div>
                                <div className="w-full overflow-hidden p-2 px-0">
                                  <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                                    아이패드 프로 m4 13인치 7세대 256기가 셀룰러
                                  </h2>
                                  <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                                    1,390,000원
                                  </div>
                                  <div className="my-1 min-h-6">
                                    <span className="text-sm text-gray-400">창제1동</span>
                                    <span className="mx-1 text-sm text-gray-400">|</span>
                                    <span className="text-sm text-gray-400">6시간 전</span>
                                  </div>
                                  <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                                </div>
                              </a>
                            </span>
                          </div>

                          <div>
                            <span style={{ display: 'contents', cursor: 'pointer' }}>
                              <a
                                className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
                                href="/product/216855188"
                              >
                                <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
                                  <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
                                  <img
                                    alt="가격 내림 / 리코 gr3 hdf팝니다"
                                    referrerPolicy="no-referrer"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                                    style={{
                                      position: 'absolute',
                                      height: '100%',
                                      width: '100%',
                                      left: 0,
                                      top: 0,
                                      right: 0,
                                      bottom: 0,
                                      color: 'transparent',
                                    }}
                                    src="https://img2.joongna.com/media/original/2025/08/04/1754278508173G9n_ZJc9N.jpg?impolicy=thumb&size=150"
                                  />
                                </div>
                                <div className="w-full overflow-hidden p-2 px-0">
                                  <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                                    가격 내림 / 리코 gr3 hdf팝니다
                                  </h2>
                                  <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                                    1,500,000원
                                  </div>
                                  <div className="my-1 min-h-6">
                                    <span className="text-sm text-gray-400">쌍용1동</span>
                                    <span className="mx-1 text-sm text-gray-400">|</span>
                                    <span className="text-sm text-gray-400">2일 전</span>
                                  </div>
                                  <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                                </div>
                              </a>
                            </span>
                          </div>

                          <div>
                            <span style={{ display: 'contents', cursor: 'pointer' }}>
                              <a
                                className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
                                href="/product/216886458"
                              >
                                <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
                                  <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
                                  <img
                                    alt="소니 a6500 삼양리마스터 슬림 32mm 판매"
                                    referrerPolicy="no-referrer"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    className="bg-gray-300 object-cover h-full group-hover:scale-105 w/full transition duration-200 ease-in rounded-md"
                                    style={{
                                      position: 'absolute',
                                      height: '100%',
                                      width: '100%',
                                      left: 0,
                                      top: 0,
                                      right: 0,
                                      bottom: 0,
                                      color: 'transparent',
                                    }}
                                    src="https://img2.joongna.com/media/original/2025/08/04/1754309081379VYb_kv4d4.jpg?impolicy=thumb&size=150"
                                  />
                                </div>
                                <div className="w-full overflow-hidden p-2 px-0">
                                  <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                                    소니 a6500 삼양리마스터 슬림 32mm 판매
                                  </h2>
                                  <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                                    700,000원
                                  </div>
                                  <div className="my-1 min-h-6">
                                    <span className="text-sm text-gray-400">고운동</span>
                                    <span className="mx-1 text-sm text-gray-400">|</span>
                                    <span className="text-sm text-gray-400">19시간 전</span>
                                  </div>
                                  <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                                </div>
                              </a>
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* SLIDE 5 */}
                      <div className="swiper-slide carouselItem">
                        <div className="grid gap-x-2 gap-y-2 bg-white grid-cols-3 md:grid-cols-6 sm:gap-x-4 sm:gap-y-4">
                          <div>
                            <span style={{ display: 'contents', cursor: 'pointer' }}>
                              <a
                                className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
                                href="/product/217071898"
                              >
                                <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
                                  <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
                                  <img
                                    alt="소니 A7C 풀프 카메라팜"
                                    referrerPolicy="no-referrer"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                                    style={{
                                      position: 'absolute',
                                      height: '100%',
                                      width: '100%',
                                      left: 0,
                                      top: 0,
                                      right: 0,
                                      bottom: 0,
                                      color: 'transparent',
                                    }}
                                    src="https://img2.joongna.com/media/original/2025/08/07/1754563503171jc6_ooYiw.jpg?impolicy=thumb&size=150"
                                  />
                                </div>
                                <div className="w-full overflow-hidden p-2 px-0">
                                  <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">소니 A7C 풀프 카메라팜</h2>
                                  <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                                    1,350,000원
                                  </div>
                                  <div className="my-1 min-h-6">
                                    <span className="text-sm text-gray-400">산본1동</span>
                                    <span className="mx-1 text-sm text-gray-400">|</span>
                                    <span className="text-sm text-gray-400">2일 전</span>
                                  </div>
                                  <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                                </div>
                              </a>
                            </span>
                          </div>

                          <div>
                            <span style={{ display: 'contents', cursor: 'pointer' }}>
                              <a
                                className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
                                href="/product/217143016"
                              >
                                <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
                                  <div className="absolute inset-0 z-10 bg-opacity-[3%]" />
                                  <img
                                    alt="최신 고사양 화이트 컴퓨터 9800x3d rtx5080"
                                    referrerPolicy="no-referrer"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                                    style={{
                                      position: 'absolute',
                                      height: '100%',
                                      width: '100%',
                                      left: 0,
                                      top: 0,
                                      right: 0,
                                      bottom: 0,
                                      color: 'transparent',
                                    }}
                                    src="https://img2.joongna.com/media/original/2025/08/08/1754660642914mvy_1q8fm.jpg?impolicy=thumb&size=150"
                                  />
                                </div>
                                <div className="w-full overflow-hidden p-2 px-0">
                                  <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                                    최신 고사양 화이트 컴퓨터 9800x3d rtx5080
                                  </h2>
                                  <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                                    3,400,000원
                                  </div>
                                  <div className="my-1 min-h-6">
                                    <span className="text-sm text-gray-400">광명5동</span>
                                    <span className="mx-1 text-sm text-gray-400">|</span>
                                    <span className="text-sm text-gray-400">-40252초 전</span>
                                  </div>
                                  <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
                                </div>
                              </a>
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* END slides */}
                      
                    </div>
                  </div>
                </div>
                <button className="w-7 h-7 text-black absolute transition duration-250 transform hover:bg-gray-900 hover:text-white focus:outline-none text-sm md:text-base lg:w-9 lg:h-9 lg:text-xl xl:w-10 xl:h-10 3xl:w-12 3xl:h-12 3xl:text-2xl left-0 bg-white/25 shadow-transparent !w-12 !h-12 rounded-none hidden lg:flex justify-center items-center z-10 top-[66px] min-[1600px]:top-[84px] translate-y-0 m-0" id="wish-prev" aria-label="prev-button"><svg width="26" height="28" viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-0"><g filter="url(#filter0_d_19461_8348)"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.8122 5.34218C16.4517 6.0669 16.3825 7.17278 15.6578 7.81224L8.645 14L15.6578 20.1878C16.3825 20.8273 16.4517 21.9331 15.8122 22.6579C15.1727 23.3826 14.0669 23.4517 13.3421 22.8122L5.26706 15.6872C4.25192 14.7914 4.25192 13.2086 5.26706 12.3129L13.3421 5.1878C14.0669 4.54835 15.1727 4.61747 15.8122 5.34218Z" fill="white"></path></g><defs><filter id="filter0_d_19461_8348" x="0.505707" y="0.75" width="19.7443" height="26.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation="2"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_19461_8348"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_19461_8348" result="shape"></feBlend></filter></defs></svg></button>

                <button className="w-7 h-7 text-black absolute transition duration-250 transform hover:bg-gray-900 hover:text-white focus:outline-none text-sm md:text-base lg:w-9 lg:h-9 lg:text-xl xl:w-10 xl:h-10 3xl:w-12 3xl:h-12 3xl:text-2xl right-0 bg-white/25 shadow-transparent !w-12 !h-12 rounded-none hidden lg:flex justify-center items-center z-10 top-[66px] min-[1600px]:top-[84px] translate-y-0 m-0" id="wish-next" aria-label="next-button"><svg width="26" height="28" viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-180"><g filter="url(#filter0_d_19461_8348)"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.8122 5.34218C16.4517 6.0669 16.3825 7.17278 15.6578 7.81224L8.645 14L15.6578 20.1878C16.3825 20.8273 16.4517 21.9331 15.8122 22.6579C15.1727 23.3826 14.0669 23.4517 13.3421 22.8122L5.26706 15.6872C4.25192 14.7914 4.25192 13.2086 5.26706 12.3129L13.3421 5.1878C14.0669 4.54835 15.1727 4.61747 15.8122 5.34218Z" fill="white"></path></g><defs><filter id="filter0_d_19461_8348" x="0.505707" y="0.75" width="19.7443" height="26.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation="2"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_19461_8348"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_19461_8348" result="shape"></feBlend></filter></defs></svg></button>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}