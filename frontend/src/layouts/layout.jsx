
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";
import BackToTopButton from "./BackTop";

const Layout = () => {
    return (
        <>
            <Header/>
            <Navbar />
            <main >
                <Outlet/>
            <BackToTopButton />
            </main>
            <Footer />
        </>
    );
};

export default Layout;