import React from "react";
import Resume from "./assets/Resume-Shivangi-Tripathi.pdf";
import iconHome from "./assets/icons/icon-home2.svg";
import iconResume from "./assets/icons/icon-resume2.svg";
import iconGuest from "./assets/icons/icon-guest2.svg";
import iconProject from "./assets/icons/icon-project3.svg";
import {NavLink} from "react-router-dom";
import GuestBook from "../pages/GuestBook";

const SideNav = () => {
    return (
        <div className="relative min-h-screen  items-center justify-center px-8  rounded-lg">
            <nav className=" flex flex-col  bg-transparent  ">
                <ul className="flex flex-col  px-2 py-4 text-4xl   text-amber-200 font-serif   space-y-10">
                    <li>
                        <a href="#"
                           className="flex items-center px-2 py-2  font-semibold  transition-colors duration-150  rounded-md">
                            {/*<span className="text-yellow-300 italic ">Home</span>*/}
                            <img src={iconHome} alt={"resume-icon"} className={"w-96 lg:w-60"}/>
                        </a>
                    </li>
                    <li>
                        <NavLink to={"/projects"} target={"_blank"} rel="noreferrer"
                           className="flex items-center px-2 py-2  font-semibold overflow-x-scroll transition-colors duration-150  rounded-md">
                            {/*<span className="text-yellow-300 italic ">Projects</span>*/}
                            <img src={iconProject} alt={"resume-icon"} className={"w-96 lg:w-60"}/>
                        </NavLink>
                    </li>
                    {/* <li>
                        <NavLink to={"/api/login"} target={"_blank"} rel="noreferrer"
                        //  { <NavLink to={"/api/guestbook"} target={"_blank"} rel="noreferrer" }
                           className="flex items-center px-2 py-2  font-semibold  transition-colors duration-150  rounded-md">
                            {/*<span className="text-yellow-300 italic ">Skills</span>*/}
                            {/* <img src={iconGuest} alt={"resume-icon"} className={"w-96 lg:w-60"}/> */}
                        {/* </NavLink> */}
                    {/* </li>  */}
                    
                    <li>
                        <a href={Resume} target="_blank" rel="noreferrer"
                           className="flex items-center px-2 py-2  font-semibold transition-colors duration-150  rounded-md">
                            {/*<span className="text-yellow-300 italic ">Resume</span>*/}
                            <img src={iconResume} alt={"resume-icon"} className={"w-96 lg:w-60"}/>

                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );

}

export default SideNav;