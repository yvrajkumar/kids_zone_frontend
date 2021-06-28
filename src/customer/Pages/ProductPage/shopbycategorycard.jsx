
import React from "react";

function ShopByCategoryCard(props){
  let propURL= props.url;
  let url="/ProductDisplay/"+propURL;
    return(
        <div className="col-11 col-md-5 col-lg-3 col-xl-2 mx-5 my-4">
      <a href={url} style={{ textDecoration: "none" }}>
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
            <h6
              className="card-text text-center mt-n3 pb-4"
              style={{ color: "#05445E" }}
            >
              <br></br>
              {props.name}
            </h6>
            <h6 className="card-text text-center mt-n3 pb-4" style={{ color: "#05445E" }}>
            <br></br>
              Size: {props.size}
            </h6>
            <h6 className="card-text text-center mt-n3 pb-4" style={{ color: "#FB4570" }}>
            <br></br>
              &#8377; {props.price}
            </h6>
          </div>
          
        </div>
      </a>
    </div>
    );
}

export default ShopByCategoryCard;