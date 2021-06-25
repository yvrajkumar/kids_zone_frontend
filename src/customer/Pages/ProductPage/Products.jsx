import React from "react";
import Navbar from "../LandingPage/navbar";
import TopBar from "./top";
import ShopByCategory from "./shopbycategory";

import GoTop from "../LandingPage/GoTop";
import Footer from "../LandingPage/footer";
function ProductPage(){
    return(
        <div>
            <Navbar />
            <TopBar/>
            <hr/>
            <ShopByCategory />
            
            <GoTop/>
            <Footer/>
        </div>
    );
}

export default ProductPage;