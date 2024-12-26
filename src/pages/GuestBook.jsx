import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const GuestBook = () => {
    ////////////////newly added portion //////////////////////////
    // const [show, setShow] = useState(false);
    // const [comment, displayComment] = useState("");
    // const showComments = async (res, req, next) => {
    //     const {comments}= await fetch("http://localhost:8081/api/comments")
    //                                 .then(res => res.json())
    //                                 .then(data => console.log(data));
    //     if(comments.length()> 0){
    //         setShow = true;
    //         // displayComment = comments[0];
    //     }
    // }
     ////////////////newly added portion //////////////////////////
    return(
        <div className={" flex flex-col p-8 bg-gradient-to-b from-slate-900 via-slate-700 to-slate-500 w-screen min-h-screen"}>
            <h1 className={"text-3xl text-yellow-200 font-serif font-bold items-start justify-start"}> Have a look at my Guestbook 🙂</h1>
            <br></br>
            {/*<h2 className={" text-2xl animate-pulse duration-[10ms] text-gray-200 font-serif italic font-bold"}>Your opinion matters to me!!</h2>*/}
            <br></br>
            <br></br>
            <div className={"flex flex-col  "}>
                {/*********** newly added ***********/}
                    {/* if(setShow) {
                        <div>
                            showComments();  
                        </div>
                    } */}
                {/*********** newly added ***********/}

                <div className={" "}>
                    {/*<hr ></hr>*/}
                    <form className={"flex flex-col mt-2"} id={"guestComments"}>
                        <label className={"text-2xl italic  text-gray-200 font-serif font-bold mb-4"}>How'd you like it?</label>
                        <textarea  className={"flex overflow-scroll  text-gray-100 bg-slate-600 font-serif border border-slate-400 rounded-lg font-normal placeholder:text-gray-100  w-full h-40 p-2 "}  placeholder={"How was your experience on my website?"}/>
                    </form>
                    {/*<button id={"submit"}*/}
                    {/*        className={"mr-1 py-2"}>*/}
                    {/*    <img src={submitbtn} alt={"submit-button"} className={" w-24 h-12 "}/>*/}
                    {/*</button>*/}
                    <button type="submit"
                            className="inline-flex items-center mt-4 py-4 px-4 text-small font-medium text-center text-white bg-cyan-700 rounded-lg  focus:ring-blue-200  hover:bg-cyan-800">
                        Post Comment
                    </button>
                    {/*<NavLink id={"submit"}*/}
                    {/*        className={"mr-1 py-2"}*/}
                    {/*        to={"/"}>*/}
                    {/*    <img src={backbtn} alt={"back-button"} className={" w-auto h-auto "}/>*/}
                    {/*</NavLink>*/}
                </div>
            </div>
        </div>
    );
}

export default GuestBook;