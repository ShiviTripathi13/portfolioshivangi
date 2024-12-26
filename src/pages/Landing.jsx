import React  from "react";
import Navbar from "../components/Navbar";
import CenterPage from "../components/Centerpage";
import Footer from "../components/Footer";


const Landing = () => {

    return (
        <div>

            <div>
                <Navbar />
            </div>

            <div className={ "relative"}>
                <CenterPage/>
            </div>

            <div>
                <Footer/>
            </div>

        </div>
    );
}

export default Landing;