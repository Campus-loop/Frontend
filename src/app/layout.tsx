import '../public/css/campus-loop_1.css'
import '../public/css/campus-loop_swiper.css'
import '../public/css/campus-loop_tailwind.css'
import '../public/css/campus-loop_toastify.css'
import FooterContainer from './containers/common/FooterContainer'
import HeaderContainer from './containers/common/HeaderContainer'
import ChatDrawer from './containers/chat/ChatDrawer'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <html lang='ko'>
                <body>
                    <div id="__next" style={{ height: "auto !important" }}>
                        <HeaderContainer />
                        {children}
                        <FooterContainer />
                    </div>
                    <ChatDrawer />
                </body>
            </html>



        </>
    )
}


export default layout;