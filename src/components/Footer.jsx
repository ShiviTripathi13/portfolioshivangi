import React from "react";
import discord from "./assets/icons/discord-ic.png";
import github from "./assets/icons/github-ic.png";
import linkedin from "./assets/icons/linkedin-ic.png";

const Footer = () => {
    return (
        <div className="grid grid-rows-2 h-96 mt-0 py-0 items-start justify-center  bg-gradient-to-b from-gray-700 to-gray-500 shadow">
            <div>
                <h2 className=" mt-20 px-8 font-extrabold italic text-3xl text-amber-300 font-serif">Contact Me</h2>
            </div>
            <div className="grid grid-cols-3 ">
                <a href="https://linkedin.com/in/shivangi-tripathi-bu" target="_blank" rel="noreferrer">
                    <img className="w-14 h-14 ml-4 mr-4" src={linkedin} alt="linkedin"/>
                </a>
                <a href="https://github.com/ShiviTripathi13" target="_blank" rel="noreferrer">
                    <img className="w-14 h-14 ml-4 mr-4" src={github} alt="github"/>
                </a>
                <a href="https://discord.com/users/402203821258776064" target="_blank" rel="noreferrer">
                    <img className="w-14 h-14 ml-4 mr-4" src={discord} alt="discord"/>
                </a>
            </div>
        </div>
    );
}

export default Footer;