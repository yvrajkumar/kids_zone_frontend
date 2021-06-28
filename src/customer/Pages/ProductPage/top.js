import React from "react";
import "./productpage.css";
import axios from 'axios';
import { useHistory } from "react-router-dom";

function TopBar(){
  let history = useHistory();
  const asc = (e) =>{
    axios.post(`https://kids-zone-app-be.herokuapp.com/api/v1/sortasc/`,{sortby:{category: e.target.name, type: localStorage.getItem('categoryType')}})
    .then(res => {
      console.log(res);
      console.log(res.data);
      console.log(res.status);
      if(res.data.status==="SUCCESS")
      {
        localStorage.setItem('productDetails', JSON.stringify(res.data.data));   
        history.push("/sort/"+localStorage.getItem('categoryType')+"/"+e.target.name+"_lth");
      }
      
      
    })

  }
  const desc = (e) =>{
    axios.post(`https://kids-zone-app-be.herokuapp.com/api/v1/sortdesc/`,{sortby:{category: e.target.name, type: localStorage.getItem('categoryType')}})
    .then(res => {
      console.log(res);
      console.log(res.data);
      console.log(res.status);
      if(res.data.status==="SUCCESS")
      {
        localStorage.setItem('productDetails', JSON.stringify(res.data.data));   
        history.push("/sort/"+localStorage.getItem('categoryType')+"/"+e.target.name+"_htl");
      }
       
    })

  }
    return(
        <div className="container pt-1 category-button">
          <div className="text-center">
        <div class="btn-group ">
          <button
            type="button"
            class="btn btn-white dropdown-toggle category-button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"         
          >
            <b>Sort By:</b>
          </button>
        </div>
            <div class="btn-group ">
        <button
          type="button"
          class="btn btn-white dropdown-toggle category-button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          
        >
          Price
        </button>
        <div class="dropdown-menu" >
          <ul style={{display:"flex",fontSize:"13px"}}>
          <a class="dropdown-item" onClick={asc} name="price">
            Low to High
          </a>
          <a class="dropdown-item" onClick={desc} name="price">
            High to Low
          </a>
          </ul>
        </div>
      </div>

      <div class="btn-group">
        <button
          type="button"
          class="btn btn-white dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          
        >
          Size
        </button>
        <div class="dropdown-menu">
        <ul style={{display:"flex",fontSize:"13px"}}>
          <a class="dropdown-item" onClick={asc} name="product_size">
            Low to High
          </a>
          <a class="dropdown-item" onClick={desc} name="product_size">
            High to Low
          </a>
          </ul>
          </div>
        
      </div>
      </div>
    </div>
    );
}

export default TopBar;