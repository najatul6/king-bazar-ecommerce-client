import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="mt-10">
            <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between">
                <p className="block  text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                    <img className="w-[200px]" src="/KingBazarlogo.svg" alt="Brand Logo" />
                </p>
                <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                    <li>
                        <Link
                            to="/"
                            className="block  text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-[#f16022] focus:text-[#f16022]"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/addproduct"
                            className="block  text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-[#f16022] focus:text-[#f16022]"
                        >
                            Add Product
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/mycart"
                            className="block  text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-[#f16022] focus:text-[#f16022]"
                        >
                            My Cart
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/signup"
                            className="block  text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-[#f16022] focus:text-[#f16022]"
                        >
                            Register
                        </Link>
                    </li>
                </ul>
            </footer>
            
        </div>
    );
};

export default Footer;