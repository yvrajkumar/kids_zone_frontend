import React, { useState } from "react";
import { Link } from "react-router-dom";
import insta_icon from "../../Images/insta_icon.png";
import fb_icon from "../../Images/fb_icon.png";
import twitter_icon from "../../Images/twitter_icon.png";
import youtube_icon from "../../Images/youtube_icon.png";
import axios from 'axios';
function Footer() {
  const [categoryType, setcategoryType] = useState({
    type: "",
  });

  const onClickHandler = (e) => { 
    let choice = categoryType;
    choice["type"] = e.target.name;
    setcategoryType(choice);
    productsCall();
  };

  const productsCall = async (e) => {
    
    axios.post(`http://localhost:5000/api/v1/products/`, { categoryType })
  .then(res => {
    console.log(res);
    console.log(res.data);
    console.log(res.status);
    if(res.data.status==="SUCCESS")
    {
      console.log(res.data.validation);
      localStorage.setItem('productDetails', JSON.stringify(res.data.data));
          
    }
  })
    return;        
  }

  return ( 
    <div
      className="container-fluid px-2 px-md-5 px-lg-5 px-xl-5"
      style={{ backgroundColor: "#FAFBFC", fontSize: "0.8vw", color: "Black" }}
    >

  
        
      <div className="row pt-5 justify-content-center">
        
        <div className="col-sm-2 col-md-2 col-lg-1 col-xl-2">
          
          
          <a href="/" className=" mx-2">
          <img src={fb_icon}
          style={{width: "22px", height: "22px"}} alt="..." 
          /> 
          </a>
          <a href="/" className=" mx-2">
            <img
              src={twitter_icon}
              style={{ width: "22px", height: "22px" }} alt="..."
            />
          </a>
          <a href="/" className=" mx-2">
            <img
              src={youtube_icon}
              style={{ width: "22px", height: "22px" }} alt="..."
            />
          </a>
          <a
            href="/"
            className="desktop-instagram mx-2"
            data-reactid="101"
          >
            <img
              src={insta_icon}
              style={{ width: "22px", height: "22px" }} alt="..." 
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
        
        <Link to="/Brand/Max" name="Max" onClick={onClickHandler} className="px-1"  style={{ fontSize: "15px", color: "Black",textDecoration:"none",fontFamily:"'Lora', serif" }}>
          Max
        </Link>
        <h6>|</h6>
        <Link to="/Brand/U S Polo" name="U S Polo " onClick={onClickHandler} className="px-1" style={{ fontSize: "15px", color: "Black",textDecoration:"none",fontFamily:"'Lora', serif" }}>
          U S Polo
        </Link>
        <h6>|</h6>
        <Link to="/Brand/Pantaloons Junior" name="Pantaloons Junior" onClick={onClickHandler}  className="px-1" style={{ fontSize: "15px", color: "Black",textDecoration:"none",fontFamily:"'Lora', serif" }}>
          Pantaloons Junior
        </Link>
        <h6>|</h6>
        <Link to="/Brand/Many Frocks" name="Many Frocks " onClick={onClickHandler} className="px-1" style={{ fontSize: "15px", color: "Black",textDecoration:"none",fontFamily:"'Lora', serif" }}>
          Many Frocks
        </Link>
        <h6>|</h6>
        <Link to="/Brand/Levis" name="Levis" onClick={onClickHandler} className="px-1" style={{ fontSize: "15px", color: "Black",textDecoration:"none",fontFamily:"'Lora', serif" }}>
          Levis
        </Link>
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
        
        <Link to="/Boys/T-Shirts" name="T-Shirt" onClick={onClickHandler} className="px-1" style={{ fontSize: "15px", color: "Black",textDecoration:"none",fontFamily:"'Lora', serif" }}>
         T-Shirts 
        </Link>
        <h6>|</h6>
        <Link to="/Boys/Jeans" name="Jeans" onClick={onClickHandler} className="px-1" style={{ fontSize: "15px", color: "Black",textDecoration:"none",fontFamily:"'Lora', serif" }}>
         Jeans 
        </Link>
        <h6>|</h6>
        <Link to="/Boys/Shorts"  name="Shorts" onClick={onClickHandler} className="px-1" style={{ fontSize: "15px", color: "Black",textDecoration:"none",fontFamily:"'Lora', serif" }}>
         Shorts 
        </Link>
        <h6>|</h6>
        <Link to="/Girls/Tops" name="Tops" onClick={onClickHandler} className="px-1" style={{ fontSize: "15px", color: "Black",textDecoration:"none",fontFamily:"'Lora', serif" }}>
          Tops 
        </Link>
        <h6>|</h6>
        <Link to="/Girls/Frocks" name="Frock" onClick={onClickHandler} className="px-1" style={{ fontSize: "15px", color: "Black",textDecoration:"none",fontFamily:"'Lora', serif" }}>
         Frocks 
        </Link>
        <h6>|</h6>
        <Link to="/Girls/Skirts" name="Skirt" onClick={onClickHandler}  className="px-1" style={{ fontSize: "15px", color: "Black",textDecoration:"none",fontFamily:"'Lora', serif" }}>
          Skirts
        </Link>
        <br />
        <br />
        
      </div>

     


      </div>

      
    
  );
}
export default Footer;
