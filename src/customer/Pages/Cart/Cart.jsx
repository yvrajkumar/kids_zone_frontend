import { React, useEffect, useState, useRef } from "react";
import { Popover, OverlayTrigger, Button } from "react-bootstrap";
import Navbar from "../LandingPage/navbar";
import { useHistory} from "react-router-dom";
// import Image1 from "../../Images/image1.jpeg";
// import Image3 from "../../Images/image3.jpeg";
import { AiOutlineInfoCircle } from "react-icons/ai";
import "./Cart.css";
import axios from 'axios'; 

function Cart() {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const [productDetails, setproductDetails] = useState(JSON.parse(localStorage.getItem('productDetails')));
  const [cartDetails, setcartDetails] = useState([]);
  let history = useHistory();
  
  useEffect(()=> {
      axios.post(`https://kids-zone-app-be.herokuapp.com/api/v1/cartitems/`, {userDetails:{email:JSON.parse(localStorage.getItem('userDetails')).data.email}})
      .then(res => {
        if(res.data.status==="SUCCESS")
        {
          localStorage.setItem('cartDetails', JSON.stringify(res.data.data));   
          setcartDetails(JSON.parse(localStorage.getItem('cartDetails')));
        }  
        else{
          localStorage.removeItem('cartDetails');
          alert("No items in cart");
          history.push("/");
        }
      })
      axios.post(`https://kids-zone-app-be.herokuapp.com/api/v1/products/`, {categoryType:{type:"brands"}})
          .then(res => {
            console.log(res);
            console.log(res.data);
            console.log(res.status);
            if(res.data.status==="SUCCESS")
            {
              localStorage.setItem('productDetails', JSON.stringify(res.data.data));   
              setproductDetails(JSON.parse(localStorage.getItem('productDetails')));
            }
            
            
    })
    

  }, []);
  const placeorder = async (e) => {

    e.preventDefault();
    axios.post(`https://kids-zone-app-be.herokuapp.com/api/v1/placeorder/`, { placeorder:{order_id: e.target.name }})
      .then(res => {
        console.log(res);
        console.log(res.data);
        console.log(res.status);
        if(res.data.status==="SUCCESS")
        {
          history.push('/Cart');
          alert(res.data.message);
          localStorage.removeItem('cartDetails');
          window.location.reload();
        }
        else
        {
          alert(res.data.message);
        }
      })
    return;        
  }

  const removefromcart = async (e) => {

    e.preventDefault();
    axios.post(`https://kids-zone-app-be.herokuapp.com/api/v1/removefromcart/`, { removefromcart:{order_id: e.target.name }})
      .then(res => {
        console.log(res);
        console.log(res.data);
        console.log(res.status);
        if(res.data.status==="SUCCESS")
        {    
          localStorage.removeItem('cartDetails');
          history.push('/Cart');
          window.location.reload();
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
    <div>
      <div className="navebar">
        <Navbar />
      </div>
      <div className="carts_row">
        <br></br>
        <p className="cart_page_nm">Cart Items</p>
        
      </div>
      <hr/>
      
      {cartDetails.map((item) => (
      <div className="  cardflex row" style={{}}>
        <img src={productDetails.find(obj => obj.id === item.product_id).img_url} className=" card_image col-md-4" alt="prdt_img" />
        <div className="col-md-8">
          <OverlayTrigger
            overlay={
              <Popover>
                <Popover.Title as="h3">{productDetails.find(obj => obj.id === item.product_id).brand}</Popover.Title>
              </Popover>
            }
          >
            <Button
              variant="default"
              ref={target}
              onClick={() => setShow(!show)}
            >
              <AiOutlineInfoCircle />
            </Button>
          </OverlayTrigger>
          <p className="Product_name">
          {productDetails.find(obj => obj.id === item.product_id).product_name}
          </p>
          <label className="quan">
            <b>Quantity:&nbsp;{item.quantity}</b>
          </label>
          &nbsp;
          <br />
          <p className="crt_price">
            <b>Price:</b>&nbsp;<span className="crt_amount">Rs {productDetails.find(obj => obj.id === item.product_id).price}</span>
          </p>
          <p className="crt_price">
            <b>Total Amount:</b>&nbsp;<span className="crt_amount">Rs {item.cost}</span>
          </p>
          <br />
          <Button
            style={{ backgroundColor: "#e64a73", border: "1px solid #e64a73" }}
            className="btn_crt"
            name={item.order_id}
            onClick={placeorder}
          >
            Place Order
          </Button>{" "}
          &nbsp;
          <Button variant="danger" className="btn_crt"
            name={item.order_id}
            onClick={removefromcart}
          >
            Remove From Cart
          </Button>
        </div>
      </div>
      ))}
    </div>
  );
}

export default Cart;
