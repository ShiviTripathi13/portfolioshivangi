import React, {useState} from "react";
import logoST from "./assets/logo/logo_ST.png";
import PopupForm from "./PopupForm.jsx";




const Navbar = () => {

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);

    }


    return (
        <div className = "  relative bg-gradient-to-b from-cyan-500 to-cyan-100 " >
            <nav className=" flex md:flex-row items-center justify-between flex-wrap  p-6">
                <div className="flex items-center flex-shrink-0 place-content-sta   mr-6">
                    <img className="object-contain h-14 w-14 rounded-full mx-auto md:object-scale-down overflow-hidden bg-blend-darken mr-2"   src={logoST} alt="website logo" />
                    <span className="font-semibold font-serif text-slate-900 italic text-2xl px-4 tracking-tight">Shivangi Tripathi</span>
                </div>
                    <button id={"popupButton"}
                            onClick={handleClick}
                            className="text-md font-bold lg:flex-grow animate-pulse border-slate-900 mt-4 lg:inline-block lg:mt-0 text-zinc-600 hover:text-slate-600  font-sans  hover:border-none">

                        Want to Connect?🤔
                    </button>
                {clicked? <PopupForm/> : null}

            </nav>
        </div>
    );
};
export default Navbar;


