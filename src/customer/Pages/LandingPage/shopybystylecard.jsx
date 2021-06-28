import React from "react";
import "./landpage.css";
function ShopByStyleCard(props) {
  const onClickHandler = (e) => { 

    localStorage.setItem('categoryType', e.target.name);
    localStorage.removeItem('productDetails');

  };
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
            name={props.name}
            onClick={onClickHandler}
          />
          <h6
              className="card-text text-center mt-n3 pb-4"
              style={{ color: "#D43790" }}
            >
              <br></br><br></br>
              {props.type}
            </h6>
        </div>
      </a>
    </div>
  );
}
export default ShopByStyleCard;
