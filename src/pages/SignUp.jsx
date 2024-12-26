import React, {useState} from "react";
import axios from "axios";
import {NavLink, useNavigate} from "react-router-dom";
import {ToastContainer, toast} from "react-toastify";

const SignUp = () => {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState({
        userName: "",
        email: "",
        password: "",

    });
    const { userName, email, password  } = inputValue;
    const handleChange = (e) => {
        const { name, value } = e.target;
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
            position: "bottom-right",
        });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // const { data } = await axios.post(
            //     "http://localhost:8081/api/signup",
            //     {
            //         ...inputValue,
            //         userName: userName,
            //         email: email,
            //         password: password
            //     },
            //     { withCredentials: true }
            // );


            const { data } = await fetch(
                "http://localhost:8081/api/signup", {method: "POST"})
                .then(res => res.json()).then(data => {
                    // setInputValue({
                    //     ...inputValue,
                    //     userName: data.userName,
                    //     email: data.email,
                    //     password: data.password
                    // }),
                        setTimeout(() => {
                            navigate("/api/login");
                        }, 1000);
                });


            // const { success, message } = data;
            // if (success) {
            //     handleSuccess(message);
            //     setTimeout(() => {
            //         navigate("/api/login");
            //     }, 1000);
            // } else {
            //     handleError(message);
            // }
        } 
        catch (error) {
            console.log(error);
        }
        setInputValue({
            ...inputValue,
            userName: "",
            email: "",
            password: "",

        });
    };
    return (
        <div id= "authentication" className={" flex flex-col lg:flex-row items-center justify-start p-8 bg-gradient-to-b from-slate-900 via-slate-700 to-slate-500 w-screen min-h-screen"}>

            <div className={"flex-wrap  sm:basis-1/3 "}>
                <h1 className={" font-serif text-center font-bold text-amber-200 text-xl sm:text-3xl animate-pulse italic "}>Sign Up Here</h1>
            </div>

            <form id={"authForm"} onSubmit={handleSubmit} >
            <div className={"flex-wrap sm:basis-2/3 mt-12 mb-20 sm:mt-20 border border-gray-400 bg-slate-600 rounded-lg  w-full h-auto"}>

                    <h1 className={"p-6 mt-8 text-center justify-start text-xl text-gray-200 font-serif font-normal  text-normal"}>Signup</h1>
                    <div className={"flex flex-col "}>
                        <label htmlFor="userName" className="items-start justify-start mt-8 text-gray-200 font-serif font-semibold text-normal ml-4 ">Username</label>
                        <input id={"userName"}
                               type={"userName"}
                               placeholder={"Username"}
                               onChange={handleChange}
                               className="items-start justify-start max-w-full mr-3 h-10 px-4 ml-3 mt-2 text-base bg-gray-200 placeholder-gray-400 italic font-serif border rounded-lg focus:shadow-outline"/>

                        <label htmlFor="email" className="items-start justify-start text-gray-200 font-serif font-semibold text-normal ml-4 mt-6">Email</label>
                        <input id={"email"}
                               type={"email"}
                               placeholder={"Email"}
                               onChange={handleChange}
                               className="items-start justify-start max-w-full mr-3 h-10 px-4 ml-3 mt-2 text-base bg-gray-200 placeholder-gray-400 italic font-serif border rounded-lg focus:shadow-outline"/>

                        <label htmlFor="password" className="items-start justify-start text-gray-200 font-serif font-semibold text-normal ml-4 mt-6">Password</label>
                        <input id={"password"}
                               type={"password"}
                               placeholder={"Password"}
                                 onChange={handleChange}
                               className="items-start justify-start max-w-full mr-3 h-10 px-4 ml-3 mt-2 text-base bg-gray-200 placeholder-gray-400 italic font-serif border rounded-lg focus:shadow-outline"/>

                        <button type="submit"
                                className=" mx-w-20 ml-40 mr-40 lg:ml-60 lg:mr-60 mt-8 mb-0.5 py-2 text-small font-medium text-center text-white bg-cyan-700 rounded-lg  focus:ring-blue-200  hover:bg-cyan-800">
                            Sign Up
                        </button>
                        <NavLink to={"/api/login"} target={"_self"} rel="noreferrer"
                                 className=" mx-w-20 ml-40 mr-40 lg:ml-60 lg:mr-60 mt-4 mb-6 py-2 text-small font-medium text-center text-white bg-cyan-700 rounded-lg  focus:ring-blue-200  hover:bg-cyan-800">

                        <button className="ml-4 mr-4">
                            Back to Login

                        </button>
                        </NavLink>

                    </div>

            </div>
            </form>
            <ToastContainer/>
        </div>
    );
}

export default SignUp;