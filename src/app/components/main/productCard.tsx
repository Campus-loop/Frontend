import { useId, useState } from "react";
import Link from "next/link";

type ProductCardProps = {
  href: string;
  title: string;
  price: string;
  imageUrl: string;
  location: string;
  timeAgo: string; // e.g., "5분 전"
  likes: number;
  chats: number;
  initialLiked?: boolean;
  onLikeChange?: (liked: boolean) => void;
};

// should use export for using as compoent function
export function ProductCard({
  href,
  title,
  price,
  imageUrl,
  location,
  timeAgo,
  likes,
  chats,
  initialLiked = false,
  onLikeChange,
}: ProductCardProps) {
  const [liked, setLiked] = useState(initialLiked);
  const currentLikes = likes + (liked && !initialLiked ? 1 : 0) - (!liked && initialLiked ? 1 : 0);
  const id = useId();

  const toggleLike = (e: React.MouseEvent) => {
    // 카드 링크 클릭 전파 방지
    e.preventDefault();
    e.stopPropagation();
    const next = !liked;
    setLiked(next);
    onLikeChange?.(next);
  };

  return (
    <li>
      <Link
        href={href}
        className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out bg-white"
      >
        {/* 이미지 영역: 1:1 비율 */}
        <div className="relative w-full rounded-md overflow-hidden pt-[100%] mb-3 md:mb-3.5">
          <img
            alt={title}
            referrerPolicy="no-referrer"
            loading="lazy"
            decoding="async"
            className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
            style={{ position: "absolute", height: "100%", width: "100%", inset: 0, color: "transparent" }}
            src={imageUrl}
          />

          {/* 하트 버튼 */}
          <button
            type="button"
            aria-label={liked ? "찜 해제" : "찜하기"}
            aria-pressed={liked}
            onClick={toggleLike}
            className={[
              "absolute bottom-2 right-2 z-20 w-8 h-8 rounded-full",
              "bg-black/30 backdrop-blur-sm flex items-center justify-center",
              "transition transform active:scale-95 hover:bg-black/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70",
            ].join(" ")}
          >
            <svg
              width={32}
              height={32}
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 drop-shadow"
            >
              <path
                d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                strokeWidth="1.5"
                stroke="white"
                fill={liked ? "#EF4444" : "#9ca3afb4"} // 빨강/회색 토글
              />
            </svg>
          </button>
        </div>

        {/* 텍스트 영역 */}
        <div className="w-full overflow-hidden p-2 px-0">
          <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">{title}</h2>

          <div className="font-semibold mt-0.5 text-heading lg:text-lg lg:mt-1.5">
            {price}
          </div>

          <div className="my-1 min-h-6 text-sm text-gray-400">
            <span>{location}</span>
            <span className="mx-1">|</span>
            <span>{timeAgo}</span>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center flex-wrap [&>*:not(:first-child)]:ml-1.5 [&>*]:mb-0.5" />
            <div className="text-xs text-gray-400">
              Likes {currentLikes} ∙ Chat {chats}
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}