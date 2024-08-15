import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    console.log(user);

    const handleLogOut = () => {
        logOut()
            .then(
                Swal.fire({
                    icon: 'success',
                    title: "User Created successfully",
                })
            )
    }
    const navLinks = <>
        <li>
            <NavLink to='/' > Home </NavLink>
        </li>
        <li>
            <NavLink to='/addproduct'>Add Product</NavLink>
        </li>
        <li>
            <NavLink to='/mycart'>My Cart</NavLink>
        </li>
    </>

    return (
        <div className="navbar bg-base-100 shadow-2xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="text-xl menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <img className="w-[120px] hover:bg-none" src="/KingBazarlogo.svg" alt="Brand Logo" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal text-[#f16022] px-1 text-xl ">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        {user.displayName}
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <button onClick={handleLogOut} className="btn my-1 bg-[#f16022] text-white">Log Out</button>
                            </ul>
                        </div> :
                        <Link to='/login'><button className="btn  bg-[#f16022] text-white">Log In</button></Link>
                }
            </div>
        </div>
    );
};

export default Navbar;

