import React,{useState, useEffect} from "react";
import Navbar from "../LandingPage/navbar";
import { useHistory} from "react-router-dom";
// import Image1 from "../../Images/image1.jpeg";
import "./OrderPage.css";
import axios from 'axios';

function OrderPage() {
  const [orderDetails, setorderDetails] = useState([]);
  const [productDetails, setproductDetails] = useState(JSON.parse(localStorage.getItem('productDetails')));
  let email =  JSON.parse(localStorage.getItem('userDetails')).data.email;
  let history = useHistory();

  useEffect(()=> {

      axios.post(`https://kids-zone-app-be.herokuapp.com/api/v1/orderitems/`, {userDetails:{email:JSON.parse(localStorage.getItem('userDetails')).data.email}})
      .then(res => {
        console.log(res);
        console.log(res.data);
        console.log(res.status);
        if(res.data.status==="SUCCESS")
        {
          localStorage.setItem('orderDetails', JSON.stringify(res.data.data));   
          setorderDetails(JSON.parse(localStorage.getItem('orderDetails')));
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
        }     
        else{
          localStorage.removeItem('orderDetails');
          alert("No items in your order list.");
          history.push("/");
        }
      })
    
  }, []);

  const returnorder = async (e) => {

    e.preventDefault();
    axios.post(`https://kids-zone-app-be.herokuapp.com/api/v1/returnorder/`, { returnorder:{order_id: e.target.name }})
      .then(res => {
        console.log(res);
        console.log(res.data);
        console.log(res.status);
        if(res.data.status==="SUCCESS")
        {
          history.push('/Order');
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

  const cancelorder = async (e) => {

    e.preventDefault();
    axios.post(`https://kids-zone-app-be.herokuapp.com/api/v1/removefromcart/`, { removefromcart:{order_id: e.target.name }})
      .then(res => {
        console.log(res);
        console.log(res.data);
        console.log(res.status);
        if(res.data.status==="SUCCESS")
        {
          localStorage.removeItem('cartDetails');
          history.push('/Order');
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
        <p className="cart_page_nm">Your Orders</p>
      </div>
      <hr/>
      {orderDetails.map((item) => (
      <div className="container orderpage" style={{width:"50%"}}>
        <div className="row">
            <div className="col-md-6">
              <img className="d-block w-100 orderimg" src={productDetails.find(obj => obj.id === item.product_id).img_url}  alt="First slide" />
            </div>
            <div className="col-md-6">
            <h6 className="order_product_name">
            {productDetails.find(obj => obj.id === item.product_id).product_name} 
            </h6>
            <p className="order_id">
              Order Id :<span> {item.order_id}</span>
            </p>
            <div className="order_info">
                <p><b><i>Total amount:</i></b>&nbsp;{item.cost}</p>
                <p><b><i>Quantity:</i></b>&nbsp;{item.quantity}</p>
                <p><b><i>Status:</i></b>&nbsp;{item.status}</p>
                <p><b><i>Shipment Address:</i></b>&nbsp;{JSON.parse(localStorage.getItem('userDetails')).data.address} </p>
                <p><b><i>Payment:</i></b>&nbsp;COD</p>
               
                {item.status === "Order Delivered"
                ?  (<button className="btn  cancel" 
                      name={item.order_id}
                      onClick={returnorder}
                    >
                      Return Order
                    </button>)
                : (item.status === "Returned" ?
                    <button className="btn  cancel" 
                      name={item.order_id}
                      onClick={cancelorder}
                      disabled
                    >
                      Cancel Order
                    </button>
                    :
                    <button className="btn  cancel" 
                      name={item.order_id}
                      onClick={cancelorder}
                    >
                      Cancel Order
                    </button>
                    )
                }
            </div>
            </div>
        </div>
      </div>
    ))}
    </div>
  );
}

export default OrderPage;
