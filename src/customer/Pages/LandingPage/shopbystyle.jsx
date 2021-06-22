import React from "react";
import ShopByStyleCard from "./shopybystylecard";

function ShopbyStyle(){
    return(
        <div className="container-fluid mx-1 ">
     <div className="text-center">
        <h1 className="px-md-5 px-3 pt-3" style={{fontFamily:"'Ultra', serif"}}>Shop By Style</h1>
      </div>
      <div className="row ">
        <ShopByStyleCard
          src="https://assets.ajio.com/medias/sys_master/images/images/h9c/hde/32855112941598/11062021-D-KHP-Brands-TalesStories-Min40.jpg"
          
          width="85px"
          offer=""
          url="#"
        />
        <ShopByStyleCard
          src="https://assets.ajio.com/medias/sys_master/images/images/he4/h1b/32855113596958/11062021-D-KHP-Brands-DNMX-min50.jpg"
          
          width="65px"
          offer=""
          url="#"
        />
        <ShopByStyleCard
          src="https://assets.ajio.com/medias/sys_master/images/images/h0d/h86/32855113629726/11062021-D-KHP-Brands-unlimited-under399.jpg"
          
          width="90px"
          offer=""
          url="#"
        />
        <ShopByStyleCard
          src="https://assets.ajio.com/medias/sys_master/images/images/h13/h4f/32855113728030/11062021-D-KHP-Brands-frenz-under299.jpg"
          
          width="140px"
          offer=""
          url="#"
        />
        <ShopByStyleCard
          src="https://assets.ajio.com/medias/sys_master/images/images/h08/h30/32855113138206/11062021-D-KHP-Brands-612leaugue-Min40.jpg"
          
          width="80px"
          offer=""
          url="#"
        />
        <ShopByStyleCard
          src="https://assets.ajio.com/medias/sys_master/images/images/h65/haa/32855112908830/11062021-D-KHP-Brands-lukeLilly-Upto60.jpg"
          
          width="90px"
          offer=""
          url="#"
        />
        <ShopByStyleCard
          src="https://assets.ajio.com/medias/sys_master/images/images/h5e/h23/32855112646686/11062021-D-KHP-Brands-cutecumber-Upto70.jpg"
          
          width="70px"
          offer=""
          url="#"
        />
        <ShopByStyleCard
          src="https://assets.ajio.com/medias/sys_master/images/images/hef/hce/32855113760798/11062021-D-KHP-Brands-Cherrycrumble-Min50.jpg"
          
          width="120px"
          offer=""
          url="#"
        />
        
      </div>
    </div>
    );

}

export default ShopbyStyle;