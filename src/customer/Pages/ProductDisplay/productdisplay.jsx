import React,{useState, useEffect} from "react";
import Navbar from "../LandingPage/navbar";
import "./productdisplay.css";
import { Carousel } from "react-bootstrap";
import GoTop from "../LandingPage/GoTop";
import Footer from "../LandingPage/footer";
import { useHistory} from "react-router-dom";
import axios from 'axios';

function ProductDisplay() {  
  const [productDetails, setproductDetails] = useState([]);
  const [cart, setcart] = useState({
    email:"",
    product_id:"",
    status:"Cart",
    quantity:"",
    cost:""
  })
  let history = useHistory();
  let id = window.location.pathname.split('/')[2];
  let urlChange = window.location.pathname.split('/').pop();
  
  useEffect(()=> { 
    if(localStorage.getItem('productDetails').length>0)
    {
      JSON.parse(localStorage.getItem('productDetails')).filter(obj => {
        if(obj.id == id)
        {
          setproductDetails(obj);
        }
      })      
    }

  }, [urlChange]);

  const onChangeHandler = (e) => {
    let item = cart;
    item["email"] = JSON.parse(localStorage.getItem('userDetails')).data.email;
    item["product_id"] = id;
    item["quantity"] = e.target.value;
    item["cost"] = (e.target.value)*(productDetails.price);
    setcart(item);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    axios.post(`https://kids-zone-app-be.herokuapp.com/api/v1/additem/`, { cart })
      .then(res => {
        console.log(res);
        console.log(res.data);
        console.log(res.status);
        if(res.data.status==="SUCCESS")
        {
          history.push('/Cart');
          alert(res.data.message);
        }
        else
        {
          alert(res.data.message);
        }
      })
    return;        
  }

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
                <img className="d-block w-100" src={productDetails.img_url} alt="First slide" />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-md-6 descri">
            <p className="newarrival text-center">New</p>
            <h2 className="product_name">
            {productDetails.product_name}
            </h2>
            <p className="prdt_id">
              Product Id :<span> {productDetails.id} </span>
            </p>
            <p className="price"> Rs {productDetails.price}</p>
            <div className="product_info">
            <p>
              <b>Brand:</b> {productDetails.brand}
            </p>
            <p>
              <b>Material:</b> {productDetails.cloth_type}
            </p>
            <p>
                <b>Size:</b>
                 &nbsp;{productDetails.product_size}
            </p>
            </div>
            <label className="quans">Quantity: &nbsp;</label>
            <input type="number"  className="quant" onChange={onChangeHandler}></input>
            <button type="button" className="btn btn-secondary cart" onClick={onSubmitHandler}>Add to cart</button>
            <div className="product_add">
            <p>100% Original Products</p>
            <p>Pay on delivery might be available</p>
            <p>Easy 30 days returns and exchanges</p>
            <p>Try &amp; Buy might be available</p>
            </div>
          </div>
        </div>
      </div>
      <GoTop/>
      <Footer/>
    </div>
    
  );
}
export default ProductDisplay;