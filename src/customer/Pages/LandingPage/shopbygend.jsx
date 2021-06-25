import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

function ShopbyGender() {
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
    <div className="mx-md-5 mx-lg-5 mx-5 mt-3">
      <div className="text-center">
        <h1 className="px-md-5 px-3 pt-3" style={{fontFamily:"'Ultra', serif"}}>Shop By Gender</h1>
      </div>
      
      <div className="row my-3">
      <Link to="/Boys"
          className=" px-0 col-6 col-md-6 col-lg-6"
        >
          <img
            src="https://logan.nnnow.com/content/dam/nnnow-project/fm-bp/Gender-Boys.png"
            alt=".."
            className="col"
            name="male" onClick={onClickHandler}
          />
        </Link>
        <Link to="/Girls"
          className="px-0 col-6 col-md-6 col-lg-6"
          
        >
          <img
            src="https://logan.nnnow.com/content/dam/nnnow-project/02-nov-2020/ShopbyGender-GIRLS.jpg"
            alt="..."
            className="col"
            name="female" onClick={onClickHandler}
          />
        </Link>
      </div>
    </div>
  );
}
export default ShopbyGender;