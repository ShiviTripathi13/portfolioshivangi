import React from "react";
import cpp2 from "./assets/images/cpp2.jpeg";
import java from "./assets/images/java.jpeg";
import react from "./assets/images/react.jpeg";
import nodejs from "./assets/images/nodejs.webp";
import ts from "./assets/images/ts.webp";
import mongo from "./assets/images/mongodb.png";
import mern from "./assets/images/Mern.png";
import html from "./assets/images/html.webp";
import mysql from "./assets/images/mysql.webp";

const Skills = () => {
    return (
        <div>
            <div className="flex flex-row justify-center py-10  hover:scale-110 transition-all duration-700 items-center">
                <h1 className="relative mt-10 font-serif italic font-bold text-5xl ease-in-out duration-700 text-center text-amber-300  animate-pulse ">
                    Skills
                </h1>
            </div>
            <div className="relative grid grid-flow-col-dense mb-20  place-content-center justify-start overflow-scroll border-slate-400 shadow-md shadow- p-4 gap-4 flex-wrap ">

                <span>
                <div className=" inline-grid card w-72 h-84 flex-wrap hover:border-slate-400 hover:scale-105 transition-all duration-700 shadow-lg rounded-lg ">
                    <div className="card-body object-contain rounded-md bg-gradient-to-r from-gray-700 to-gray-500 ">
                        <div className="bg-white m-2">
                            <img className="object-cover  w-72 h-60"
                                 src={cpp2}
                                 alt="cpp_img"/>
                        </div>
                        <h5 className="card-title text-2xl text-cyan-300 text-center font-serif font-semibold italic p-2 ">C++</h5>
                    </div>
                </div>
                </span>

                <span>
                <div className=" inline-grid card w-72 h-84 flex-wrap hover:border-slate-400 hover:scale-105 transition-all duration-700 shadow-lg rounded-lg ">
                    <div className="card-body object-cover rounded-md bg-gradient-to-r from-gray-600 to-gray-500">
                        <div className="bg-white m-2">
                            <img className="object-cover  w-72 h-60"
                                 src={java}
                                 alt="java_img"/>
                        </div>
                        <h5 className="card-title  text-cyan-300 text-center text-2xl font-serif font-semibold italic p-2 ">Java</h5>

                    </div>
                </div>
                </span>


                <span>
                <div className=" inline-grid card w-72 h-84 flex-wrap hover:border-slate-400 hover:scale-105 transition-all duration-700 shadow-lg rounded-lg ">
                    <div className="card-body object-cover rounded-md bg-gradient-to-r from-gray-600 to-gray-500">
                        <div className="bg-white m-2">
                            <img className="object-cover  w-72 h-60"
                                 src={react}
                                 alt="java_img"/>
                        </div>
                        <h5 className="card-title  text-cyan-300 text-center text-2xl font-serif font-semibold italic p-2 ">React</h5>

                    </div>
                </div>
                </span>

                <span>
                <div className=" inline-grid card w-72 h-84 flex-wrap hover:border-slate-400 hover:scale-105 transition-all duration-700 shadow-lg rounded-lg ">
                    <div className="card-body object-cover rounded-md bg-gradient-to-r from-gray-600 to-gray-500">
                        <div className="bg-gray-700 m-2">
                            <img className="object-contain  w-72 h-60"
                                 src={nodejs}
                                 alt="nodejs"/>
                        </div>
                        <h5 className="card-title  text-cyan-300 text-center text-2xl font-serif font-semibold italic p-2 ">Node.js</h5>

                    </div>
                </div>
                </span>

                <span>
                <div className=" inline-grid card w-72 h-84 flex-wrap hover:border-slate-400 hover:scale-105 transition-all duration-700 shadow-lg rounded-lg ">
                    <div className="card-body object-cover rounded-md bg-gradient-to-r from-gray-600 to-gray-500">
                        <div className="bg-gray-700 m-2">
                            <img className="object-fit  w-72 h-60"
                                 src={ts}
                                 alt="TypeScript"/>
                        </div>
                        <h5 className="card-title  text-cyan-300 text-center text-2xl font-serif font-semibold italic p-2 ">TypeScript</h5>

                    </div>
                </div>
                </span>

                <span>
                <div className=" inline-grid card w-72 h-84 flex-wrap hover:border-slate-400 hover:scale-105 transition-all duration-700 shadow-lg rounded-lg ">
                    <div className="card-body object-cover rounded-md bg-gradient-to-r from-gray-600 to-gray-500">
                        <div className="bg-gray-700 m-2">
                            <img className="object-cover  w-72 h-60"
                                 src={mysql}
                                 alt="mysql"/>
                        </div>
                        <h5 className="card-title  text-cyan-300 text-center text-2xl font-serif font-semibold italic p-2 ">MySQL</h5>

                    </div>
                </div>
                </span>

                <span>
                <div className=" inline-grid card w-72 h-84 flex-wrap hover:border-slate-400 hover:scale-105 transition-all duration-700 shadow-lg rounded-lg ">
                    <div className="card-body object-cover rounded-md bg-gradient-to-r from-gray-600 to-gray-500">
                        <div className="bg-gray-700 m-2">
                            <img className="object-cover  w-72 h-60"
                                 src={mongo}
                                 alt="mongo"/>
                        </div>
                        <h5 className="card-title  text-cyan-300 text-center text-2xl font-serif font-semibold italic p-2 ">MongoDB</h5>

                    </div>
                </div>
                </span>

                <span>
                <div className=" inline-grid card w-72 h-84 flex-wrap hover:border-slate-400 hover:scale-105 transition-all duration-700 shadow-lg rounded-lg ">
                    <div className="card-body object-cover rounded-md bg-gradient-to-r from-gray-600 to-gray-500">
                        <div className="bg-gray-700 m-2">
                            <img className="object-cover  w-72 h-60"
                                 src={mern}
                                 alt="mern"/>
                        </div>
                        <h5 className="card-title  text-cyan-300 text-center text-2xl font-serif font-semibold italic p-2 ">M.E.R.N.</h5>

                    </div>
                </div>
                </span>
                <span>
                <div className=" inline-grid card w-72 h-84 flex-wrap hover:border-slate-400 hover:scale-105 transition-all duration-700 shadow-lg rounded-lg ">
                    <div className="card-body object-cover rounded-md bg-gradient-to-r from-gray-600 to-gray-500">
                        <div className="bg-gray-700 m-2">
                            <img className="object-cover  w-72 h-60"
                                 src={html}
                                 alt="html"/>
                        </div>
                        <h5 className="card-title  text-cyan-300 text-center text-2xl font-serif font-semibold italic p-2 ">HTML-CSS</h5>

                    </div>
                </div>
                </span>
            </div>
        </div>

    );
}
export default Skills;