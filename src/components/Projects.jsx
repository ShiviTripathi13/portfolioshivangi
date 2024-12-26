import React from "react";
import askit from "./assets/logo/askit.jpg";
import kaayaclique from "./assets/logo/kaayaclique.png";
import linksnap from "./assets/logo/Link snap.png";
import asclepius from "./assets/logo/asclepius.jpg";
import evquick from "./assets/logo/evquick.png";

const Projects = () => {
    return (
        <div className={"bg-gradient-to-r from-gray-700 to-gray-500 h-100 "}>
        <div className="flex flex-row justify-center py-10  hover:scale-110 transition-all duration-700 items-center">
            <h1 className="relative mt-10 font-serif italic font-bold text-5xl ease-in-out duration-700 text-center text-amber-300  animate-pulse ">
                Projects
            </h1>
        </div>
        <div className="relative grid grid-flow-col-dense  place-content-center justify-start overflow-scroll border-slate-400 shadow-md shadow- p-4 gap-4 flex-wrap ">
            {/* LinkSnap */}
            <a href={"https://github.com/ShiviTripathi13/linksnap"} target="_blank" rel="noreferrer">
                <span>
                    <div className=" inline-grid card w-72 h-84 flex-wrap hover:border-slate-400 hover:scale-105 transition-all duration-700 shadow-lg rounded-lg ">
                        <div className="card-body object-contain rounded-md bg-cyan-200">
                            <img className="object-cover  w-72 h-60 p-2"
                                 src={linksnap}
                                 alt="kaayaclique_img"/>
                            <h5 className="card-title text-center  text-2xl font-serif font-semibold italic p-2 ">LinkSnap</h5>
                            <p className="card-text font-serif font-normal  italic p-2">Check out this project at
                            <a href="https://github.com/ShiviTripathi13/linksnap" target="_blank" rel="noreferrer" className="btn btn-primary underline text-blue-600 p-2 font-serif  text-sm mb-2">Github</a>
                            </p>
                        </div>
                    </div>
                </span>
            </a>
            {/* KaayaClique */}
            <a href={"https://github.com/ShiviTripathi13/kaayaclique"} target="_blank" rel="noreferrer">
                <span>
                    <div className=" inline-grid card w-72 h-84 flex-wrap hover:border-slate-400 hover:scale-105 transition-all duration-700 shadow-lg rounded-lg ">
                        <div className="card-body object-contain rounded-md bg-cyan-200">
                            <img className="object-cover  w-72 h-60 p-2"
                                 src={kaayaclique}
                                 alt="kaayaclique_img"/>
                            <h5 className="card-title text-center  text-2xl font-serif font-semibold italic p-2 ">KaayaClique</h5>
                            <p className="card-text font-serif font-normal  italic p-2">Check out this project at
                            <a href="https://github.com/ShiviTripathi13/kaayaclique" target="_blank" rel="noreferrer" className="btn btn-primary underline text-blue-600 p-2 font-serif  text-sm mb-2">Github</a>
                            </p>
                        </div>
                    </div>
                </span>
            </a>
            {/* Askit */}
            <a href={"https://github.com/ShiviTripathi13/askit"} target="_blank" rel="noreferrer">
                <span>
                    <div className=" inline-grid card w-72 h-84 flex-wrap hover:border-slate-400 hover:scale-105 transition-all duration-700 shadow-lg rounded-lg ">
                        <div className="card-body object-contain rounded-md bg-cyan-200">
                            <img className="object-cover  w-72 h-60 p-2"
                                 src={askit}
                                 alt="asclepius_img"/>
                            <h5 className="card-title text-center  text-2xl font-serif font-semibold italic p-2 ">Askit</h5>
                            <p className="card-text font-serif font-normal  italic p-2">Check out this project at
                            <a href="https://github.com/ShiviTripathi13/askit" target="_blank" rel="noreferrer" className="btn btn-primary underline text-blue-600 p-2 font-serif  text-sm mb-2">Github</a>
                            </p>
                        </div>
                    </div>
                </span>
            </a>
            <a href={"https://github.com/ShiviTripathi13/asclepius"} target="_blank" rel="noreferrer">
                <span>
                    <div className=" inline-grid card w-72 h-84 flex-wrap hover:border-slate-400 hover:scale-105 transition-all duration-700 shadow-lg rounded-lg ">
                        <div className="card-body object-cover rounded-md bg-cyan-200">
                            <img className="object-cover w-72 h-60 p-2"
                                 src={asclepius}
                                 alt="asclepius_img"/>
                            <h5 className="card-title text-center  text-2xl font-serif font-semibold italic p-2 ">Asclepius</h5>
                            <p className="card-text font-serif font-normal  italic p-2">Check out this project at
                            <a href="https://github.com/ShiviTripathi13/asclepius" target="_blank" rel="noreferrer" className="btn btn-primary underline text-blue-600 p-2 font-serif  text-sm mb-2">Github</a>
                            </p>
                        </div>
                    </div>
                </span>
            </a>
            <a href={"https://github.com/ShiviTripathi13/eVQUICK"} target="_blank" rel="noreferrer">
                <span>
                    <div className=" inline-grid card w-72 h-84 flex-wrap hover:border-slate-400 hover:scale-105 transition-all duration-700 shadow-lg rounded-lg ">
                        <div className="card-body  object-contain rounded-md bg-cyan-200">
                            <img className="object-cover  w-72 h-60 p-2"
                                 src={evquick}
                                 alt="asclepius_img"/>
                            <h5 className="card-title text-center text-2xl font-serif font-semibold italic p-2 ">eVQUICK</h5>
                            <p className="card-text font-serif font-normal  italic p-2">Check out this project at
                            <a href="https://github.com/ShiviTripathi13/eVQUICK" target="_blank" rel="noreferrer" className="btn btn-primary underline text-blue-600 p-2 font-serif  text-sm mb-2">Github</a>
                            </p>
                        </div>
                    </div>
                </span>
            </a>
        </div>
        </div>

    );
}

export default Projects;