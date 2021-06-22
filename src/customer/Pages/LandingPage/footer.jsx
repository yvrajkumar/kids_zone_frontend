import React from "react";
import insta_icon from "../../Images/insta_icon.png";
import fb_icon from "../../Images/fb_icon.png";
import twitter_icon from "../../Images/twitter_icon.png";
import youtube_icon from "../../Images/youtube_icon.png";
function Footer() {
  return (
    <div
      className="container-fluid px-2 px-md-5 px-lg-5 px-xl-5"
      style={{ backgroundColor: "#FAFBFC", fontSize: "0.8vw", color: "Black" }}
    >

  
        
      <div className="row pt-5 justify-content-center">
        
        <div className="col-sm-2 col-md-2 col-lg-1 col-xl-2">
          
          
          <a href="#" className=" mx-2">
          <img src={fb_icon}
          style={{width: "22px", height: "22px"}}/>
          </a>
          <a href="#" className=" mx-2">
            <img
              src={twitter_icon}
              style={{ width: "22px", height: "22px" }}
            />
          </a>
          <a href="#" className=" mx-2">
            <img
              src={youtube_icon}
              style={{ width: "22px", height: "22px" }}
            />
          </a>
          <a
            href="#"
            className="desktop-instagram mx-2"
            data-reactid="101"
          >
            <img
              src={insta_icon}
              style={{ width: "22px", height: "22px" }}
            />
          </a>
        </div>
    
      </div>

      {/* second row */}

      <hr />

      <div className="row mx-2 mx-md-5 mx-lg-5 mx-xl-5  justify-content-center">
        <p>
          <strong style={{fontFamily:"'Playfair Display', serif",fontSize:"14px",lineHeight:"16.1px"}}>TOP BRANDS</strong>
        </p>
        </div>
        <div className="row mx-2 mx-md-5 mx-lg-5 mx-xl-5 justify-content-center">
        
        <a className="px-1" href="#" style={{ fontSize: "15px", color: "Black",textDecoration:"none",fontFamily:"'Lora', serif" }}>
          Nino Bambino 
        </a>
        <h6>|</h6>
        <a className="px-1" href="#" style={{ fontSize: "15px", color: "Black",textDecoration:"none",fontFamily:"'Lora', serif" }}>
          Max 
        </a>
        <h6>|</h6>
        <a className="px-1" href="#" style={{ fontSize: "15px", color: "Black",textDecoration:"none",fontFamily:"'Lora', serif" }}>
          GAP 
        </a>
        <h6>|</h6>
        <a className="px-1" href="#" style={{ fontSize: "15px", color: "Black",textDecoration:"none",fontFamily:"'Lora', serif" }}>
          Mothercare 
        </a>
        <h6>|</h6>
        <a className="px-1" href="#" style={{ fontSize: "15px", color: "Black",textDecoration:"none",fontFamily:"'Lora', serif" }}>
          Little Kangaroos
        </a>
        <br />
        <br />
        
      </div>
    {/* third row */}


      
      <hr />

      <div className="row mx-2 mx-md-5 mx-lg-5 mx-xl-5  justify-content-center">
        <p>
          <strong style={{fontFamily:"'Playfair Display', serif",fontSize:"14px",lineHeight:"16.1px"}}>TOP CATEGORIES</strong>
        </p>
        </div>
        <div className="row mx-2 mx-md-5 mx-lg-5 mx-xl-5 justify-content-center">
        
        <a className="px-1" href="#" style={{ fontSize: "15px", color: "Black",textDecoration:"none",fontFamily:"'Lora', serif" }}>
         T-Shirts 
        </a>
        <h6>|</h6>
       
        <a className="px-1" href="#" style={{ fontSize: "15px", color: "Black",textDecoration:"none",fontFamily:"'Lora', serif" }}>
          Tops 
        </a>
        <h6>|</h6>
        <a className="px-1" href="#" style={{ fontSize: "15px", color: "Black",textDecoration:"none",fontFamily:"'Lora', serif" }}>
         Frocks 
        </a>
        <h6>|</h6>
        <a className="px-1" href="#" style={{ fontSize: "15px", color: "Black",textDecoration:"none",fontFamily:"'Lora', serif" }}>
         Casuals 
        </a>
        <h6>|</h6>
        <a className="px-1" href="#" style={{ fontSize: "15px", color: "Black",textDecoration:"none",fontFamily:"'Lora', serif" }}>
         Party-Wear
        </a>
        <br />
        <br />
        
      </div>

     


      </div>

      
    
  );
}
export default Footer;
