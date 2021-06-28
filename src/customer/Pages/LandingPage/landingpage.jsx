import React from "react";
import Navbar from "./navbar";
import Banner from "./banner";
import ShopbyGender from "./shopbygend"
import ShopbyStyle from "./shopbystyle";
import ShopbyBrand from "./shopbybrand";
import GoTop from "./GoTop";
import Footer from "./footer";
function Landingpage(){
    return(
        <div>
            <Navbar/>
            <Banner/>
            <ShopbyGender/> 
            <ShopbyStyle/>
            <ShopbyBrand/>
            <GoTop/>
            <Footer/>
        </div>
    );
}

export default Landingpage;