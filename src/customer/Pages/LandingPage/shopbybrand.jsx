import React from "react";
import ShopByBrandCard from "./shopbybrandcard";
function ShopbyBrand(){
    return(
        <div className="container-fluid mx-1">
     <div className="text-center">
        <h1 className="px-md-5 px-3 pt-3" style={{fontFamily:"'Ultra', serif"}} >BRANDS TO BRAG</h1>
      </div>
      <div className="row">
        <ShopByBrandCard
          src="https://sslimages.shoppersstop.com/sys-master/root/h72/h74/16925693673502/Tiny-Girls--WEB.jpg"
          
          width="85px"
          offer=""
          url="#"
        />
        <ShopByBrandCard
          src="https://sslimages.shoppersstop.com/sys-master/root/h70/h77/16925693739038/Puma----WEB.jpg"
          
          width="65px"
          offer=""
          url="#"
        />
        <ShopByBrandCard
          src="https://sslimages.shoppersstop.com/sys-master/root/h81/h7a/16925693804574/pepe--WEB.jpg"
          
          width="90px"
          offer=""
          url="#"
        />
        <ShopByBrandCard
          src="https://sslimages.shoppersstop.com/sys-master/root/h42/h7b/16925693870110/Peppermint---WEB.jpg"
          
          width="140px"
          offer=""
          url="#"
        />
        <ShopByBrandCard
          src="https://sslimages.shoppersstop.com/sys-master/root/h40/h7e/16925693935646/UCB---WEB-copy.jpg"
          
          width="80px"
          offer=""
          url="#"
        />
        <ShopByBrandCard
          src="https://sslimages.shoppersstop.com/sys-master/root/hfd/hc8/16925694001182/Ruff----WEB.jpg"
          
          width="90px"
          offer=""
          url="#"
        />
        <ShopByBrandCard
          src="https://sslimages.shoppersstop.com/sys-master/root/h79/hd3/16925694328862/Mothercare---WEB.jpg"
          
          width="70px"
          offer=""
          url="#"
        />
        <ShopByBrandCard
          src="https://sslimages.shoppersstop.com/sys-master/root/h3a/hd4/16925694394398/Miniklub--WEB.jpg"
          
          width="120px"
          offer=""
          url="#"
        />
        
      </div>
    </div>
    );
}

export default ShopbyBrand;