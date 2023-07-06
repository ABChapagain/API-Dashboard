import '../styles/globals.css'
import Navbar from '../components/navbar/Navbar'
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
    return (
        <SessionProvider session={session}>
            <div className="dashboard" data-theme="light">
                <div className="sideNav">
                    <Navbar />
                </div>
                <div className="mainBody">
                    <Component {...pageProps} />
                </div>
            </div>
        </SessionProvider>
    )
}

export default MyApp