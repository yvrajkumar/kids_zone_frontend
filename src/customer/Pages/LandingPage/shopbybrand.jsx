import React from "react";
import ShopByBrandCard from "./shopbybrandcard";
import Max from "../../Images/Max.webp";
import ManyFrocks from "../../Images/Many Frocks.jpg";
import Levis from "../../Images/Levis.webp";
import PantaloonsJunior from "../../Images/Pantaloons Junior.webp";

function ShopbyBrand(){

    return(
        <div className="container-fluid mx-1">
     <div className="text-center">
        <h1 className="px-md-5 px-3 pt-3" style={{color: "#189AB4",fontFamily:"'Ultra', serif"}} >BRANDS TO BRAG</h1>
      </div>
      <div className="row">
        <ShopByBrandCard
          src={Max}
          
          width="85px"
          type="Max"
          name="Max"
          url="/Brand/Max"

        />
        <ShopByBrandCard
          src={Levis}
          
          width="65px"
          type="Levis"
          name="Levis"
          url="/Brand/Levis"
        />
        <ShopByBrandCard
          src={ManyFrocks}
          
          width="90px"
          type="Many Frocks"
          name="Many Frocks "
          url="/Brand/Many Frocks"
        />
        <ShopByBrandCard
          src={PantaloonsJunior}
          
          width="140px"
          type="Pantaloons Junior"
          name="Pantaloons Junior"
          url="/Brand/Pantaloons Junior"
        />
        
        
      </div>
    </div>
    );
}

export default ShopbyBrand;