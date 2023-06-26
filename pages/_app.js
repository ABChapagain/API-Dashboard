import '../styles/globals.css'
import Navbar from '../components/navbar/Navbar'

function MyApp({ Component, pageProps }) {
    return (
        <div className="dashboard" data-theme="light">
            <div className="sideNav">
                <Navbar />
            </div>
            <div className="mainBody">
                <Component {...pageProps} />
            </div>
        </div>
    )
}

export default MyApp