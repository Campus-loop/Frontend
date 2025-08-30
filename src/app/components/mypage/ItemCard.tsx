"use client"

/**
 *  title, img, price, state, date, school
 */

interface ItemCardProps {
    item: {
        title: string;
        img: string;
        price: string;
        state: string | number;
        date: string;
        school: string;
    };
}

const ItemCard = ({ item }: ItemCardProps) => {
    return (
        <>
            <div className="relative">
                <div className="relative">
                    <a
                        className="group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
                        title={item.title}
                        href=""
                    >
                        <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
                            <img
                                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                                src={item.img}
                                style={{
                                    position: "absolute",
                                    height: "100%",
                                    width: "100%",
                                    inset: 0,
                                    color: "transparent"
                                }}
                            />
                            {
                                (item.state === 1 || item.state === "1") && (
                                    <div className="absolute inset-0 z-20 flex items-center justify-center bg-black bg-opacity-60">
                                        <span className="font-semibold text-base lg:text-lg text-center text-white">
                                            판매완료
                                        </span>
                                    </div>
                                )
                            }
                        </div>
                        <div className="w-full overflow-hidden p-0 md:p-0 lg:p-0 xl:p-0 2xl:p-0">
                            <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base text-heading">
                                {item.title}
                            </h2>
                            <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                                {item.price}원
                            </div>
                            <div className="my-1">
                                <span className="text-sm text-gray-400">{item.school}</span>
                                <span className="text-sm text-gray-400 mx-1">|</span>
                                <span className="text-sm text-gray-400">{item.date}</span>
                            </div>
                            <div className="flex items-center" />
                        </div>
                    </a>
                </div>
                <div className="flex flex-col space-y-2 items-end absolute cursor-pointer right-0 top-3 w-full h-auto">
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={32}
                            height={32}
                            fill="none"
                            className="text-white mr-2 w-8 h-8"
                        >
                            <path
                                fill="#fff"
                                d="M16.003 17.803a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6M16.003 9.4a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6M16.003 26.202a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemCard;
