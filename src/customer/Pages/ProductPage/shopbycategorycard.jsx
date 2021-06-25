
import React from "react";

function ShopByCategoryCard(props){
    return(
        <div className="col-11 col-md-5 col-lg-3 col-xl-2 mx-5 my-4">
      <a href={props.url} style={{ textDecoration: "none" }}>
        <div
          className="card h-100 cardhov"
          style={{
            width: "15rem",
            border: "none",
            backgroundColor: "rgba(217, 215, 215,0.2)"
          }}
        >
          <img
            src={props.src}
            alt="..."
            width="100%"
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              borderRadius: "10px"
            }}
            className="shadow"
          />
          <div className="card-body">
            <h4
              className="card-text text-center mt-n3 pb-4"
              style={{ color: "rgba(0,0,0,0.7)" }}
            >
              {props.offer}
            </h4>
          </div>
          <div className="card-body">
            <h4
              className="card-text text-center mt-n3 pb-4"
              style={{ color: "rgba(0,0,0,0.7)" }}
            >
              {props.description}
            </h4>
          </div>
          
        </div>
      </a>
    </div>
    );
}

export default ShopByCategoryCard;