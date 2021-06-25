import React from "react";
import "./productpage.css";
function TopBar(){
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
          Brands
        </button>
        <div class="dropdown-menu" >
          <ul style={{display:"flex",fontSize:"13px"}}>
          <a class="dropdown-item " href="/" >
            Nino Bambino
          </a>
          <a class="dropdown-item" href="/" >
            Max
          </a>
          <a class="dropdown-item" href="/" >
            Mothercare
          </a>
          <a class="dropdown-item" href="/" >
            GAP
          </a>
          <a class="dropdown-item" href="/">
            Little Kangaroos
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
          Boys
        </button>
        <div class="dropdown-menu">
        <ul style={{display:"flex",fontSize:"13px"}}>
          <a class="dropdown-item" href="/">
            Shirts
          </a>
          <a class="dropdown-item" href="/">
            Kurtas
          </a>
          <a class="dropdown-item" href="/">
            Jeans
          </a>
          <a class="dropdown-item" href="/">
            Shorts
          </a>
          <a class="dropdown-item" href="/">
            T-Shirts
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
          Girls
        </button>
        <div class="dropdown-menu">
        <ul style={{display:"flex",fontSize:"13px"}}>
          <a class="dropdown-item" href="/">
            Skirts
          </a>
          <a class="dropdown-item" href="/">
            Frocks
          </a>
          <a class="dropdown-item" href="/">
            Jumpsuit
          </a>
          <a class="dropdown-item" href="/">
            Leggings
          </a>
          <a class="dropdown-item" href="/">
            Tops
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
          Price
        </button>
        <div class="dropdown-menu " style={{fontSize:"13px"}}>
        
          <a class="dropdown-item" href="/">
            Rs.500 to Rs.1000
          </a>
          <a class="dropdown-item" href="/">
            Rs.2000 to Rs.4000
          </a>
          <a class="dropdown-item" href="/">
            Rs.6000 to Rs.10000
          </a>
          
          
        </div>
      </div>
      </div>
        </div>
    );
}

export default TopBar;