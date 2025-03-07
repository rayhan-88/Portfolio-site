import React from 'react';
import logo from '../../assets/image/logo.png'
import {Link, useNavigate} from "react-router-dom";
import userStore from "../../store/userApiCall.js";
import ValidationHelper from "../../utility/ValidationHelper.js";
import toast from "react-hot-toast";
const Login = () => {
    const navigate = useNavigate();
    const {FormData,FormDataOnChange,LoginFormRequest} = userStore()

    const onSubmit =async (e)=>{
        e.preventDefault();
        let res = await LoginFormRequest(FormData)
        console.log(res)
        if(res.status === true){
            navigate('/dashboard')
        }
    }


    return (
        <div className="bg-gray-50 font-[sans-serif] ">
            <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4 text-[#ffffff]">
                <div className="max-w-md w-full">
                    <Link to="/">
                        <img
                            src={logo}
                            alt="logo"
                            className="w-40 mb-8 mx-auto block"
                        />
                    </Link>
                    <div className="p-8 rounded-2xl bg-white shadow">
                        <h2 className=" text-center text-blue-600 text-2xl font-bold">
                            Login
                        </h2>
                          <form  className="mt-8 space-y-4">
                                        <div>
                                            <label className="text-gray-800 text-sm mb-2 block">
                                                Email
                                            </label>
                                            <div className="relative flex items-center">
                                                <input
                                                    name="username"
                                                    type="text"
                                                    required=""
                                                    onChange={(e) =>FormDataOnChange("email",e.target.value)}
                                                    className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                                                    placeholder="Enter Email"
                                                />
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="#bbb"
                                                    stroke="#bbb"
                                                    className="w-4 h-4 absolute right-4"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <circle cx={10} cy={7} r={6} data-original="#000000"/>
                                                    <path
                                                        d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                                                        data-original="#000000"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        <div>
                                            <label className="text-gray-800 text-sm mb-2 block">Password</label>
                                            <div className="relative flex items-center">
                                                <input
                                                    name="password"
                                                    type="password"
                                                    required=""
                                                    onChange={(e) =>FormDataOnChange("password",e.target.value)}
                                                    className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                                                    placeholder="Enter password"
                                                />
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="#bbb"
                                                    stroke="#bbb"
                                                    className="w-4 h-4 absolute right-4 cursor-pointer"
                                                    viewBox="0 0 128 128"
                                                >
                                                    <path
                                                        d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                                                        data-original="#000000"
                                                    />
                                                </svg>
                                            </div>
                                        </div>

                                        <div className="!mt-8">
                                            <button
                                                type="button"
                                                onClick={onSubmit}
                                                className="w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600  focus:outline-none"
                                            >
                                                Login
                                            </button>
                                        </div>
                                        <p className="text-gray-800 text-sm !mt-8 text-center">
                                            Don't have an account?{" "}
                                            <Link
                                                to="/registration"
                                                className="text-blue-600 hover:underline ml-1  whitespace-nowrap font-semibold"
                                            >
                                                Register here
                                            </Link>
                                        </p>
                                    </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;