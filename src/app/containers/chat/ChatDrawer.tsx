"use client"

// import { useState } from 'react'
import Drawer from 'rc-drawer'
import 'rc-drawer/assets/index.css'
import ChatLayoutContainer from './ChatLayoutContainer'
import { useChatStore } from '@/app/stores/chatStores'
import ChatListContainer from "./ChatListContainer";
import ChatRoomContainer from "./ChatRoomContainer";

const ChatDrawer = () => {
    const { isDrawerOpen, closeDrawer } = useChatStore()
    const { currentChatId } = useChatStore()
    // 디버깅을 위한 로그 추가
    const handleClose = () => {
        console.log('Drawer close triggered')
        closeDrawer()
    }

    return (
        <Drawer
            placement="right"
            open={isDrawerOpen}
            onClose={handleClose}
            width={600}
            maskClosable={true}
            mask={true}
            keyboard={true}
            destroyOnClose={false}
            closeIcon={null}
        >
            {currentChatId ? (
                <ChatRoomContainer chatId={currentChatId} />
            ) : (
                <ChatListContainer />
            )}
        </Drawer>
    )
}

export default ChatDrawer