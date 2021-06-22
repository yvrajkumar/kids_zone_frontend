import React from "react";

function ShopbyGender() {
  return (
    <div className="mx-md-5 mx-lg-5 mx-5 mt-3">
      <div className="text-center">
        <h1 className="px-md-5 px-3 pt-3" style={{fontFamily:"'Ultra', serif"}}>Shop By Gender</h1>
      </div>
      
      <div className="row my-3">
        <a
          href="#"
          className=" px-0 col-6 col-md-6 col-lg-6"
        >
          <img
            src="https://logan.nnnow.com/content/dam/nnnow-project/fm-bp/Gender-Boys.png"
            alt=".."
            className="col"
          />
        </a>
        <a
          href=""
          className="px-0 col-6 col-md-6 col-lg-6"
        >
          <img
            src="https://logan.nnnow.com/content/dam/nnnow-project/02-nov-2020/ShopbyGender-GIRLS.jpg"
            alt="..."
            className="col"
          />
        </a>
      </div>
    </div>
  );
}
export default ShopbyGender;