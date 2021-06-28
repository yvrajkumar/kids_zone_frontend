import React from "react";
import kids_banner1 from "../../Images/kids_banner1.jpg";
import kids_banner2 from "../../Images/kids_banner2.jpg";
import kids_banner3 from "../../Images/kids_banner3.jpg";

function Banner() {
  const onClickHandler = (e) => { 

    localStorage.setItem('categoryType', e.target.name);
    localStorage.removeItem('productDetails');

  };
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-ride="carousel"
      data-interval="5000"
      data-pause="false"
    >
      <div className="carousel-inner">
        <div className="carousel-item active" data-interval="5000" >
          <a href="/Boys/T-Shirts">
            <img
              src={kids_banner1}
              alt="..."
              className="d-block w-100"
              name="T-Shirt" onClick={onClickHandler}
            />
          </a>
        </div>
        <div className="carousel-item" data-interval="5000">
          <a href="/Brand" name="" onClick={onClickHandler}>
            <img
              src={kids_banner2}
                alt="..."
              className="d-block w-100"
              name="brands" onClick={onClickHandler}
            />
          </a>
        </div>
        <div className="carousel-item" data-interval="5000">
          <a href="/Girls" name="" onClick={onClickHandler}>
            <img
              src={kids_banner3}
              alt="..."
              className="d-block w-100"
              name="female" onClick={onClickHandler}
            />
          </a>
        </div>
        
      </div>
      <a
        className="carousel-control-prev my-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span className="material-icons my-left">keyboard_arrow_left</span>
      </a>
      <a
        className="carousel-control-next my-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span className="material-icons my-right">keyboard_arrow_right</span>
      </a>
    </div>
  );
}
export default Banner;
