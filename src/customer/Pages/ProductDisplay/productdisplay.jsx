import React from "react";
import Navbar from "../LandingPage/navbar";
import "./productdisplay.css";
import { Carousel } from "react-bootstrap";
;
function ProductDisplay() {
  return (
    <div className="prdct_view">
    <div className="navebar">
        <Navbar />
      </div >
      <div className="container productconatin" style={{width:"70%",height:"auto",alignContent:"center"}}>
        <div className="row">
          <div className="col-md-6 image_carousel" >
            <Carousel >
              <Carousel.Item>
                <img className="d-block w-100" src="" alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src=""
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src="" alt="Third slide" />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-md-6 descri">
            <p className="newarrival text-center">New</p>
            <h2 className="product_name">
              Women Mustard Yellow , Off-White Striped Straight Kurta with
              Embroidered Detail
            </h2>
            <p className="prdt_id">
              Product Id :<span> 2135</span>
            </p>
            <p className="price"> Rs 1500</p>
            <div className="product_info">
            <p>
              <b>Avalibility:</b> In Stock
            </p>
            <p>
              <b>Brand:</b> Company Name
            </p>
            <p>
              <b>Material:</b> Cotton
            </p>
            <p>
                <b>Size:</b>
                 &nbsp;XL
            </p>
            </div>
            <label className="quans">Quantity: &nbsp;</label>
            <input type="number"  className="quant"></input>
            <button type="button" className="btn btn-secondary cart">Add to cart</button>
            <div className="product_add">
            <p>100% Original Products</p>
            <p>Pay on delivery might be available</p>
            <p>Easy 30 days returns and exchanges</p>
            <p>Try &amp; Buy might be available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductDisplay;