import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiFillGoogleCircle } from "react-icons/ai";
import { useContext } from "react";
import { AuthContext } from "../../common/provider/AuthProvider";
import Swal from "sweetalert2";

const LogIn = () => {
    const { logIn, googleLogIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        logIn(email, password)
            .then(result => {
                console.log(result);
                Swal.fire({
                    icon: 'success',
                    title: "Log in Succesfully",
                })
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.log(error);
                Swal.fire({
                    icon: 'warning',
                    title: error.message,
                })
            })
    }

    const handleGoogle = () => {
        googleLogIn()
        .then(result => {
            console.log(result);
                Swal.fire({
                    icon: 'success',
                    title: "Log in Succesfully",
                })
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.log(error);
                Swal.fire({
                    icon: 'warning',
                    title: error.message,
                })
            })
    }
    return (
        <div className=" items-center flex flex-col rounded-xl bg-base-600 my-4 bg-clip-border text-[#f16022] shadow-none">
            <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Log In
            </h4>
            <p className="mt-1 block font-sans text-base font-normal leading-relaxed text-[#f16022] antialiased">
                Enter your details to register.
            </p>


            <form
                onSubmit={handleLogIn}
                className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-4 flex flex-col gap-6">
                    <div className="relative h-11 w-full min-w-[200px]">
                        <input
                            name="email"
                            className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-[#f16022] outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#f16022] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            placeholder=" "
                        />
                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#f16022] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#f16022] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#f16022] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            Email
                        </label>
                    </div>
                    <div className="relative h-11 w-full min-w-[200px]">
                        <input
                            name="password"
                            type="password"
                            className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-[#f16022] outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#f16022] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            placeholder=" "
                        />
                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#f16022] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#f16022] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#f16022] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            Password
                        </label>
                    </div>
                </div>
                <Link to='/'>
                    Forget Password?
                </Link>

                <button
                    className="mt-6 block w-full select-none rounded-lg bg-[#f16022] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-[#f16022]/20 transition-all hover:shadow-lg hover:shadow-[#f16022]/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="submit"
                    data-ripple-light="true"
                >
                    Log In
                </button>
            </form>
            <div className="flex items-center justify-center mt-5 gap-2">
                    <p className="h-1 w-7 border-none bg-[#f16022]"></p>
                    <p className="text-lg">Continue With</p>
                    <p className="h-1 w-7 border-none bg-[#f16022]"></p>
                </div>
                <div className="flex justify-center">
                    <button onClick={handleGoogle}> <AiFillGoogleCircle className="text-2xl text-center"></AiFillGoogleCircle></button>
                </div>

                <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-[#f16022] antialiased">
                    Create an account?
                    <Link
                        className="font-medium ml-1 text-[#f16022] transition-colors hover:text-blue-700"
                        to="/signup"
                    >
                        Register
                    </Link>
                </p>
        </div>
    );
};

export default LogIn;