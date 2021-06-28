import React from "react";
import ShopByStyleCard from "./shopybystylecard";
import TShirts from "../../Images/T-Shirts.jpg";
import Shirts from "../../Images/Shirts.webp";
import Kurta from "../../Images/Kurta.webp";
import Jeans from "../../Images/Jeans.webp";
import Jumpsuit from "../../Images/Jumpsuit.webp";
import Frocks from "../../Images/Frocks.webp";
import Tops from "../../Images/Tops.webp";
import Skirts from "../../Images/Skirts.jpg";

function ShopbyStyle(){
    return(
        <div className="container-fluid mx-1 ">
     <div className="text-center">
        <h1 className="px-md-5 px-3 pt-3" style={{color: "#189AB4",fontFamily:"'Ultra', serif"}}>Shop By Style</h1>
      </div>
      <div className="row ">
        <ShopByStyleCard
          src={TShirts}
          
          width="85px"
          type="T-Shirts"
          name="T-Shirt"
          url="/Boys/T-Shirts"
        />
        <ShopByStyleCard
          src={Shirts}
          
          width="65px"
          type="Shirts"
          name="Shirt"
          url="/Boys/Shirts"
        />
        <ShopByStyleCard
          src={Kurta}
          
          width="90px"
          type="Kurta"
          name="Kurta"
          url="/Boys/Kurta"
        />
        <ShopByStyleCard
          src={Jeans}
          
          width="140px"
          type="Jeans"
          name="Jeans"
          url="/Boys/Jeans"
        />
        <ShopByStyleCard
          src={Jumpsuit}
          
          width="80px"
          type="Jumpsuit"
          name="Jumpsuit"
          url="/Girls/Jumpsuit"
        />
        <ShopByStyleCard
          src={Tops}
          
          width="90px"
          type="Tops"
          name="Tops"
          url="/Girls/Tops"
        />
        <ShopByStyleCard
          src={Frocks}
          
          width="70px"
          type="Frocks"
          name="Frock"
          url="/Girls/Frocks"
        />
        <ShopByStyleCard
          src={Skirts}
          
          width="120px"
          type="Skirts"
          name="Skirt"
          url="/Girls/Skirts"
        />
        
      </div>
    </div>
    );

}

export default ShopbyStyle;