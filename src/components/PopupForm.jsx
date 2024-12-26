import React from "react";
import cancel from "./assets/gifs/cancel.svg";
import submitbtn from "./assets/icons/submit2.png";
import { useForm, ValidationError } from '@formspree/react';

const PopupForm = () => {
    const divHide = () => {
        document.getElementById("popupForm").style.display = "none";
    }
    const [state, handleSubmit] = useForm("myyqrlzz");
    if (state.succeeded) {
        return <p>Thanks for contacting!</p>;
    }
    return (

    <div id= "popup" className="z-10   flex flex-wrap border-slate-400 ">

        <dialog id= "popupForm" className=" rounded-md top-60 flex flex-col w-full  bg-gradient-to-br from-slate-700 to-gray-300 shadow-lg shadow-slate-900 sm:w-1/2 p-2 ">

            <form
                onSubmit={handleSubmit}
                method={"POST"}
                id={"contactForm"}
                name={"contactForm"}
                className={" overflow:visible "}>
                <div className="grid grid-flow-col auto-cols-max items-center space-x-4 py-2 mb-2">
                    <div><img id={"close"} src={cancel} alt={"cancel-button"} onClick={divHide} className=""/></div>
                    <div><h2 className={"inline-block  text-gray-200 font-bold font-serif text-xl"}>Write your message here</h2></div>
                </div>
                <div>
                    <label htmlFor="name" className=" text-gray-200 font-serif font-semibold  text-normal">Name</label>
                    <input type="text" id="name" placeholder="Your Name" className="w-full h-10 px-3 mt-2 mb-2 text-base bg-gray-200 placeholder-gray-400 italic font-serif border rounded-lg focus:shadow-outline"/>
                    <label htmlFor="email" className="text-gray-200 font-serif font-semibold text-normal mt-2">Email</label>
                    <input id={"email"} type={"text"} placeholder={"Email"} className="w-full h-10 px-3 mt-2 text-base bg-gray-200 placeholder-gray-400 italic font-serif border rounded-lg focus:shadow-outline"/>
                    <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                    />
                    <textarea id={"message"} name={"message"} placeholder={"Your Message"} className="w-full h-32 px-3 mt-8 text-base bg-gray-200 placeholder-gray-400 italic font-serif border rounded-lg focus:shadow-outline"/>
                    <button type="submit" disabled= {state.submitting}
                            className="inline-flex items-center justify-center mt-4 mb-2  py-2 px-4 text-small font-medium text-center text-white bg-gradient-to-b from-cyan-700 to-cyan-400 rounded-lg  focus:ring-blue-200  hover:bg-cyan-800">
                        Submit
                    </button>
                </div>
            </form>

        </dialog>
    </div>

    );

}
export default PopupForm;