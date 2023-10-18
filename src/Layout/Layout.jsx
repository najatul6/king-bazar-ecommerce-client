import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar/Navbar";
import ModeSwitch from "../common/ModeSwitch/ModeSwitch";
import Footer from "../common/Footer/Footer";

const Layout = () => {
    return (
        <div className="relative max-w-[1440px] mx-auto">
            <div className="fixed pl-2 rounded-s-lg top-20 right-0">
                <ModeSwitch></ModeSwitch>
            </div>
            <div className="sticky top-0 bg-white">
                <Navbar></Navbar>
            </div>
            <div>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Layout;