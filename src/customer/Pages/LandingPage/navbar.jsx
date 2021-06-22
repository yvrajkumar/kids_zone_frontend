import React from "react";
import "./landpage.css";
import kids_zone_logo from "../../Images/kids_zone_logo.png";
import pro_logo from "../../Images/pro_logo.png";
function Navbar(){
    return(
        <div className="sticky-top">
      <nav
        className="navbar navbar-expand-lg navbar-light myfont"
        style={{ backgroundColor: "#F1F1F1" }}
      >
        <a className="navbar-brand" href="#">
          <div className="top-logo">
            <a
              style={{ color: "white", textDecoration: "none" }}
              className="li-logo "
              href="#"
              title
            >
              <img
                className="mainlogo"
                data-src={kids_zone_logo}
                alt=""
                width="80"
                height="55"
                src={kids_zone_logo}
              />
            </a>
          </div>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav dropdown">
            <a
              style={{ color: "black", textDecoration: "none",fontFamily:"'Kanit', sans-serif",fontSize:"20px" }}
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="true"
            >
              BOYS
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdown"
              style={{ backgroundColor: "#F1F1F1",borderColor:"#9ca19d" }}
            >
              <a
                style={{ color: "#7f0fdb", textDecoration: "none",fontFamily:"'Kanit', sans-serif",fontSize:"13.0001px" }}
                className="dropdown-item"
                href="#"
              >
                T-Shirts
              </a>
              <a
                style={{ color: "#7f0fdb", textDecoration: "none",fontFamily:"'Kanit', sans-serif",fontSize:"13.0001px" }}
                className="dropdown-item"
                href="#"
              >
                Shorts
              </a>
              <a
                style={{ color: "#7f0fdb", textDecoration: "none",fontFamily:"'Kanit', sans-serif",fontSize:"13.0001px" }}
                className="dropdown-item"
                href="#"
              >
                Shirts
              </a>
              <a
                style={{ color: "#7f0fdb", textDecoration: "none" ,fontFamily:"'Kanit', sans-serif",fontSize:"13.0001px"}}
                className="dropdown-item"
                href="#"
              >
                Kurta
              </a>
              <a
                style={{ color: "#7f0fdb", textDecoration: "none" ,fontFamily:"'Kanit', sans-serif",fontSize:"13.0001px"}}
                className="dropdown-item"
                href="#"
              >
                Jeans
              </a>
              
                
            </div>
          </ul>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item dropdown">
              <a
                style={{ color: "black", textDecoration: "none" ,fontFamily:"'Kanit', sans-serif",fontSize:"20px"}}
                className="nav-link dropdown-toggle text-black"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="true"
              >
                GIRLS
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdown"
                style={{ backgroundColor: "#F1F1F1",borderColor:"#9ca19d" }}
              >
                <div className="d-flex ml-5 mr-5 pr-5 col-12 w-100 h-100">
                  <ul className="navbar-list">
                    <li>
                      <a
                        style={{ color: "#7f0fdb", textDecoration: "none" ,fontFamily:"'Kanit', sans-serif",fontSize:"13.0001px"}}
                        href="#"
                        
                      >
                        Frocks
                      </a>
                    </li>
                    <li>
                      <a
                        style={{ color: "#7f0fdb", textDecoration: "none",fontFamily:"'Kanit', sans-serif" ,fontSize:"13.0001px"}}
                        href="#"
                      >
                        Skirts
                      </a>
                    </li>
                    
                    <li>
                      <a
                        style={{ color: "#7f0fdb", textDecoration: "none",fontFamily:"'Kanit', sans-serif",fontSize:"13.0001px" }}
                        href="#"
                      >
                        Tops
                      </a>
                    </li>
                    <li>
                      <a
                        style={{ color: "#7f0fdb", textDecoration: "none",fontFamily:"'Kanit', sans-serif" ,fontSize:"13.0001px"}}
                        href="#"
                      >
                        Leggings
                      </a>
                    </li>
                    <li>
                      <a
                        style={{ color: "#7f0fdb", textDecoration: "none",fontFamily:"'Kanit', sans-serif",fontSize:"13.0001px" }}
                        href="#"
                      >
                        Jumpsuit
                      </a>
                    </li>
                  
                  </ul>
                  
                </div>
              </div>
            </li>

            <div className="nav-item dropdown">
              <a
                style={{ color: "black", textDecoration: "none",fontFamily:"'Kanit', sans-serif",fontSize:"20px" }}
                className="nav-link dropdown-toggle text-black"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="true"
              >
                BRAND
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdown"
                style={{ backgroundColor: "#F1F1F1",borderColor:"#9ca19d" }}
              >
                <div className="m-list-box">
                  <ul className="navbar-list">
                    <li>
                      <a
                        style={{ color: "#7f0fdb", textDecoration: "none",fontFamily:"'Kanit', sans-serif",fontSize:"13.0001px" }}
                        href="#"
                      >
                        Nino Bambino
                      </a>
                    </li>
                    <li>
                      <a
                        style={{ color: "#7f0fdb", textDecoration: "none",fontFamily:"'Kanit', sans-serif" ,fontSize:"13.0001px"}}
                        href="#"
                      >
                        Max
                      </a>
                    </li>
                    <li>
                      <a
                        style={{ color: "#7f0fdb", textDecoration: "none",fontFamily:"'Kanit', sans-serif",fontSize:"13.0001px" }}
                        href="#"
                      >
                        GAP
                      </a>
                    </li>
                    <li>
                      <a
                        style={{ color: "#7f0fdb", textDecoration: "none" ,fontFamily:"'Kanit', sans-serif",fontSize:"13.0001px"}}
                        href="#"
                      >
                        Mothercare
                      </a>
                    </li>
                    <li>
                      <a
                        style={{ color: "#7f0fdb", textDecoration: "none" ,fontFamily:"'Kanit', sans-serif",fontSize:"13.0001px"}}
                        href="#"
                      >
                        Little Kangaroos
                      </a>
                    </li>
                    
                  </ul>
                </div>
              </div>
            </div>
            
            
          </ul>
          <form className="form-inline mt-2" id="navBarSearchForm">
          <div className="input-group mb-3 ">
              <input
                type="text"
                className="nav-search form-control"
                placeholder="What are you looking for?"
                aria-label="What are you looking for?"
                aria-describedby="basic-addon2"
                style={{width:"300px"}}
              />
              <div className="input-group-append">
                <button className="input-group-text bg-white" id="basic-addon2" >
                  <span className="material-icons" style={{ fontSize: "12px" }}>
                    search
                  </span>
                </button>
              </div>
            </div>
          </form>
          
          <ul className="navbar-nav dropdown">
            <a
              href=""
              className="nav-link dropdown-toggle "
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="true"
            >
              <img
                src={pro_logo}
                alt=""
                height="25px"
              />
            </a>
            <div
              className="dropdown-menu dropdown-menu-right text-center px-3"
              aria-labelledby="navbarDropdown"
              style={{
                backgroundColor: "#F1F1F1",
                width: "200px",
                
              }}
            >
              <div className="dropdown-cont">
                <span className="text-black">
                  Don't have an account?{" "}
                  <a
                    className="text-black btn btn-md mt-2"
                    style={{ 
                    color: "black",
                    border: "2px solid black" }}
                    href="#"
                  >
                    Sign Up
                  </a>
                </span>

                <a
                  className="btn btn-md mt-2"
                  href="#"
                  style={{
                    color: "black",
                    border: "2px solid black"
                  }}
                >
                  Login
                </a>
              </div>
            </div>
          </ul>

          <ul className="navbar-nav dropdown">
            <a
              href=""
              className="nav-link dropdown-toggle "
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="true"
            >
              
              <span className="material-icons" style={{ color: "black",height:"30px" }}>
                  shopping_bag
                </span>
              
            </a>
            <div
              className="dropdown-menu dropdown-menu-right text-center px-3"
              aria-labelledby="navbarDropdown"
              style={{
                width: "350px"
              }}
            >
              <p>You have no items in your shopping cart</p>
            </div>
          </ul>
          
        </div>
      </nav>
      {/* Second navbar */}
      <nav
        className="navbar navbar-expand-md navbar-light navbar-small card-inside-text"
        style={{ backgroundColor: "black" }}
      >
        <div className="navbar-collapse collapse" id="navbar2">
          <ul className="navbar-nav ml-auto">
            
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: "12px"
                }}
              >
                Track my order
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: "12px"
                }}
              >
                Cancel/Return your order
              </a>
            </li>
            
          </ul>
        </div>
      </nav>
    </div>
    );
}

export default Navbar;