import React, { useEffect, useState } from "react";
import ShopByCategoryCard from "./shopbycategorycard";
import axios from 'axios';

function ShopByCategory(){
  const [productList, setproductList] = useState([]);
  let urlChange = window.location.pathname.split('/').pop();
  let url = window.location.pathname.split('/');
  url = url[ url.length - 2 ];
  useEffect(()=> {
    if(urlChange==="items" || urlChange==="price_lth" || urlChange==="price_htl" ||  urlChange==="product_size_lth"|| urlChange==="product_size_htl")
    {
      setproductList(JSON.parse(localStorage.getItem('productDetails'))); 
    }
    else{
    console.log(localStorage.getItem('categoryType'));
    console.log(typeof(productList));
    axios.post(`https://kids-zone-app-be.herokuapp.com/api/v1/products/`, {categoryType:{type:localStorage.getItem('categoryType')}})
    .then(res => {
      console.log(res);
      console.log(res.data);
      console.log(res.status);
      if(res.data.status==="SUCCESS")
      {
        localStorage.setItem('productDetails', JSON.stringify(res.data.data));   
        setproductList(JSON.parse(localStorage.getItem('productDetails')));  
      }
      
      
    })
  }
  }, [urlChange,url]);
  
    return(
    <div>
        <div className="container-fluid mx-1 ">
     
      <div className="row "> 
      {productList.map((product) => (
          <ShopByCategoryCard
          src={product.img_url} 
          
          width="85px"
          name={product.product_name} 
          size={product.product_size}
          price={product.price}
          url={product.id}
        />
      )) }      
        
   
      </div>
    </div>
    </div>
    );
}

export default ShopByCategory;