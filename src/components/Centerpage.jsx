import React from 'react';
import asclepius from "./assets/logo/asclepius.jpeg";
import evquick from "./assets/logo/evquick.png";
import askit from "./assets/logo/askit.jpeg";
import avatar from "./assets/images/avatar4.jpg";
import forward from "./assets/icons/forward_ic.png";
import Skills from "./Skills";
import bgVid from "./assets/images/AdobeStock.mov";
// import bgGif from "./assets/images/bg-dark-gif.gif";
import SideNav from "./SideNav";
import Projects from "./Projects";

const CenterPage = () => {


    return (
        <div  className=" flex flex-row  overflow-hidden bg-gradient-to-br from-slate-800  via-grey-300 to-slate-400 md:flex-wrap mt-0 mb-0 border-b-blue-200 items-center justify-center  py-0">
            <div  className=" h-full absolute top-0 w-full ">
                <video className="object-fill  items-ceter justify-center w-full h-full "
                          autoPlay loop muted>
                        <source src={bgVid} type="video/mp4"/>
                </video>
            </div>
            <div className="basis-1/4 py-10 overflow-hidden items-center justify-center">
                <SideNav/>
            </div>
            <div className="basis-2/4 min-h-screen   overflow-hidden object-fill rounded-md items-center justify-center ">


                <p className={"relative font-bold  md:font-extrabold  py-20 mt-60 font-serif italic md:text-4xl text-xl text-center text-yellow-300 md:text-amber-300 bg-gradient-to-b from-cyan-500/75 to-cyan-200/50 md:bg-gradient-to-b md:from-cyan-500/50 md:to-cyan-200/25 rounded-lg tracking-widest "}>
                    Hello, World! My name is Shivangi Tripathi.
                    Welcome to my website!
                    <br/>
                     <br/>
                    I'm an aspiring full-stack developer fueled by curiosity and ambition. 
                     Eager to contribute my skills to create seamless, dynamic web applications, 
                     I'm excited about the journey of transforming ideas into functional, user-centric solutions.
                     <br/>
                     <br/>
                    Thank you for visiting my website.
                    <br/>
                    Let the code be with you!!!
                </p>

                <div><Projects/></div>
                <div><Skills/></div>
            </div>
            <div className="basis-1/4"></div>

        </div>
    );
}

export default CenterPage;