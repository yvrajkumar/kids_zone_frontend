import React from "react";
import "./landpage.css";
function ShopByStyleCard(props) {
  return (
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
          
        </div>
      </a>
    </div>
  );
}
export default ShopByStyleCard;
