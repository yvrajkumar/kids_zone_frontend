import React, { useState } from "react";
import ShopByCategoryCard from "./shopbycategorycard";

function ShopByCategory(){
  const [productList, setproductList] = useState(JSON.parse(localStorage.getItem('productDetails')));

    return(
    <div>
        <div className="container-fluid mx-1 ">
     
      <div className="row "> 
      {productList.map((product) => (
          <ShopByCategoryCard
          src={product.img_url} 
          
          width="85px"
          description="" 
          offer=""
          url="#"
        />
      )) }      
        
   
      </div>
    </div>
    </div>
    );
}

export default ShopByCategory;