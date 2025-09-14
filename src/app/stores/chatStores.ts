"use client"
import { create } from 'zustand'

interface ChatState {
  isDrawerOpen: boolean
  currentChatId: number | null
  openDrawer: () => void
  closeDrawer: () => void
  openChatRoom: (chatId: number) => void
  closeChatRoom: () => void
}

export const useChatStore = create<ChatState>((set) => ({
  isDrawerOpen: false,
  currentChatId: null,
  openDrawer: () => set({ isDrawerOpen: true }),
  closeDrawer: () => set({ isDrawerOpen: false, currentChatId: null }),
  openChatRoom: (chatId: number) => set({ currentChatId: chatId }),
  closeChatRoom: () => set({ currentChatId: null }),
  backToList: () => set({ currentChatId: null }),  
}))

// Mock 데이터
export const mockChatData = [
    {
        id: 1,
        userName: "스포츠매니아S",
        lastMessage: "혹시 구매 후 문제가 발생했다면 중고나라 안심보상제도를 통해 해결할 수 있어요.",
        date: "8월 13일",
        unreadCount: 1,
        profileImage: "https://img2.joongna.com/media/original/2025/07/07/1751861951283IcK_WBHd1.jpg",
        isOfficial: false,
        hasProductImage: false
    },
    {
        id: 2,
        userName: "zjdbwkakao",
        lastMessage: "ㅠㅠ",
        date: "8월 6일",
        unreadCount: 0,
        profileImage: "https://img2.joongna.com/common/Profile/Default/profile_m.png",
        isOfficial: false,
        hasProductImage: false
    },
    {
        id: 3,
        userName: "중고나라",
        lastMessage: "중고거래는 타이밍이 중요해요!",
        date: "2월 25일",
        unreadCount: 0,
        profileImage: "https://img2.joongna.com/media/original/2024/10/29/17301781635716jU_y5eac.jpg?v=2",
        isOfficial: true,
        hasProductImage: false
    },
    {
        id: 4,
        userName: "모리짜응",
        lastMessage: "안녕하세요. [넥슨캐시 105500 -> ...] 보고 문의드립니다.",
        date: "12월 29일",
        unreadCount: 0,
        profileImage: "https://img2.joongna.com/common/Profile/Default/profile_m.png",
        isOfficial: false,
        hasProductImage: false
    },
    {
        id: 5,
        userName: "중고나라#9911620",
        lastMessage: "사진",
        date: "9월 27일",
        unreadCount: 0,
        profileImage: "https://img2.joongna.com/common/Profile/Default/profile_m.png",
        isOfficial: false,
        hasProductImage: false
    },
    {
        id: 6,
        userName: "문킥",
        lastMessage: "안녕하세요. [닌텐도 wii 북미판 게임 2장] 보고 문의드립니다.",
        date: "9월 23일",
        unreadCount: 0,
        profileImage: "https://img2.joongna.com/media/original/2024/01/24/1706051485437Hth_JJbme.jpg",
        isOfficial: false,
        hasProductImage: false
    },
    {
        id: 7,
        userName: "아이원트딩굴뎅굴",
        lastMessage: "주말에만 본가에서 발송가능하여 내일 오전이후 문의시 다음주 주말에나 발송가능한점 참고해주세요~!",
        date: "4월 27일",
        unreadCount: 0,
        profileImage: "https://img2.joongna.com/common/Profile/Default/profile_f.png",
        isOfficial: false,
        hasProductImage: true,
        productImage: "https://img2.joongna.com/media/original/2024/04/03/1712140171603XmH_q1ABX.jpg?impolicy=thumb"
    }
];



