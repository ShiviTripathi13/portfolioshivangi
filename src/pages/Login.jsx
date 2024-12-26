import React, { useState} from "react";
import google from "../components/assets/icons/google-ic.svg";
import github from "../components/assets/icons/github-ic.png";
import {NavLink, useNavigate} from "react-router-dom";
import {ToastContainer, toast} from "react-toastify";
import Guestbook from "./GuestBook";

const Login = () => {
    const navigate = useNavigate();

    const [inputValue, setInputValue] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setInputValue({
            ...inputValue,
            [name]: value,
        });
    };

    const handleError = (err) =>
        toast.error(err, {
            position: "bottom-left",
        });
    const handleSuccess = (msg) =>

        toast.success(msg, {
            position: "bottom-left",

        });
        const {email, password} = inputValue;
        const handleSubmit = async (e) => {
            e.preventDefault();
            try {

                const {response} = await fetch("http://localhost:8081/api/login",
                    {method: "POST"}
                    // {
                    //     body: JSON.stringify({
                    //         userName: userName,
                    //         email: email,
                    //         password: password
                    //     })
                    // }
                )
                    .then((res) =>
                        res.json())
                    .then(json => console.log(json))
                    .catch(err => {
                        console.log(err);
                    });
                // console.log(response.json());
                 const {success, message} = response;
                if (success) {
                    handleSuccess(message);
                    setTimeout(() => {
                        navigate("/api/guestbook");
                    }, 1000);
                } else {
                    handleError(message);
                }

                setInputValue({
                    ...inputValue,
                    email: "",
                    password: "",
                });
            } catch (error) {
                console.log(error);
            }
        };


    return(

        <div id= "authentication" className={" flex flex-col lg:flex-row items-center justify-start p-8 bg-gradient-to-b from-slate-900 via-slate-700 to-slate-500 w-screen min-h-screen"}>


            <div className={"flex-wrap  sm:basis-1/3 "}>
                <h1 className={" font-serif text-center font-bold text-amber-200 text-xl sm:text-3xl animate-pulse italic "}>Login to Visit the GuestBook</h1>
            </div>


            <div className={"flex-wrap sm:basis-2/3 mt-12 mb-20 sm:mt-20 border border-gray-400 bg-slate-600 rounded-lg  w-full h-auto"}>
                <form id={"authForm"} onSubmit={handleSubmit} action={Guestbook} method="POST">
                <h1 className={"p-6 mt-8 text-center justify-start text-xl text-gray-200 font-serif font-normal  text-normal"}>Login</h1>
                <div className={"flex flex-col "}>
                <label htmlFor="userName" className="items-start justify-start text-gray-200 font-serif font-semibold text-normal ml-3 mt-2">UserName</label>
                    <input id={"userName"}
                           type={"userName"}
                           placeholder={"Enter UserName"}
                           onChange={handleChange}
                           autoComplete={"userName"}
                           className="items-start justify-start max-w-full mr-2 h-10 px-4 ml-2 mt-2 text-base bg-gray-200 placeholder-gray-400 italic font-serif border rounded-lg focus:shadow-outline"/>


                    <label htmlFor="email" className="items-start justify-start text-gray-200 font-serif font-semibold text-normal ml-3 mt-2">Email</label>
                    <input id={"email"}
                           type={"email"}
                           placeholder={"Email"}
                           onChange={handleChange}
                           autoComplete={"email"}
                           className="items-start justify-start max-w-full mr-2 h-10 px-4 ml-2 mt-2 text-base bg-gray-200 placeholder-gray-400 italic font-serif border rounded-lg focus:shadow-outline"/>

                    <label htmlFor="password" className="items-start justify-start text-gray-200 font-serif font-semibold text-normal ml-3 mt-6">Password</label>
                    <input id={"password"}
                           type={"password"}
                           placeholder={"Password"}
                           onChange={handleChange}
                           className="items-start justify-start max-w-full mr-2 h-10 px-4 ml-2 mt-2 text-base bg-gray-200 placeholder-gray-400 italic font-serif border rounded-lg focus:shadow-outline"></input>

                    {/*Correct the logic here*/}
                    <NavLink to={"/guestbook"} target={"_self"} rel="noreferrer">
                        <button type="submit"
                                className=" mx-w-20 ml-4 mr-4 lg:ml-60 lg:mr-60 mt-8 py-2 text-small font-medium text-center text-white bg-cyan-700 rounded-lg  focus:ring-blue-200  hover:bg-cyan-800">
                            Login
                        </button>
                    </NavLink>

                    <hr className={"bg-white mt-12 ml-6 mr-6"}></hr>
                    <p className={"text-center text-gray-300 mt-1"}>OR</p>
                    <span className={"text-center text-gray-300 mt-1"}>
                        Don't have an account?
                        <NavLink to={"/api/signup"} className={"text-cyan-500 underline ml-1 underline-offset-4 hover:text-cyan-300"}>   Sign Up Here</NavLink>
                    </span>
                    <button type="submit"
                            className=" mx-w-20 ml-4 mr-4 lg:ml-6 lg:mr-6 mt-6 mb-1 py-2 text-small font-medium text-center text-gray-300 bg-slate-700 rounded-lg  focus:ring-blue-200  hover:bg-gray-800">
                        <img src={google} alt={"google-icon"} className={" w-5 h-5 inline-block mr-2 "}/>
                        Login with Google
                    </button>
                    <button type="submit"
                            className=" mx-w-20 ml-4 mr-4 lg:ml-6 lg:mr-6 mt-6 mb-2 py-2 text-small font-medium text-center text-gray-300 bg-slate-700 rounded-lg  focus:ring-blue-200  hover:bg-gray-800">
                        <img src={github} alt={"google-icon"} className={" w-5 h-5 inline-block mr-2 "}/>
                        Login with Github
                    </button>
                    <NavLink to={"/"} target={"_self"} rel="noreferrer"
                             className=" mx-w-20 ml-40 mr-40 lg:ml-60 lg:mr-60 mt-4 mb-6 py-2 text-small underline underline-offset-2 font-medium text-center text-cyan-500 bg-transparent rounded-lg ">

                        <p>
                            Back to Home

                        </p>
                    </NavLink>
                </div>
                </form>
                <ToastContainer/>
            </div>
        </div>

    )
};

export default Login;