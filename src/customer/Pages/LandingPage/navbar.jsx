import React, { useEffect, useState} from "react";
import "./landpage.css";
import { Link } from "react-router-dom";
import kids_zone_logo from "../../Images/kids_zone_logo.png";
import pro_logo from "../../Images/pro_logo.png";
import { useHistory} from "react-router-dom";
import axios from 'axios';

function Navbar(){
  const [status, setstatus] = useState("");
  const [cartURL, setcartURL] = useState("/SignIn");
  const [orderURL, setorderURL] = useState("/SignIn");
  let history = useHistory();
  let search;

  const onClickHandler = (e) => { 

    localStorage.setItem('categoryType', e.target.name);
    localStorage.removeItem('productDetails');

  }; 
  const onSearchChange = (e) => { 
    search=e.target.value;
  }; 
  const onSearchHandler = (e) => { 

    if(search!=null)
    {
      axios.post(`https://kids-zone-app-be.herokuapp.com/api/v1/searchresults/`, {categoryType:{type:search}})
    .then(res => {
      console.log(res);
      console.log(res.data);
      console.log(res.status);
      if(res.data.status==="SUCCESS")
      {
        localStorage.setItem('productDetails', JSON.stringify(res.data.data));   
        history.push("/SearchResults/"+search+"/items");
      }
      else{
        alert("No results found with your query. Try a new query.");
      }
      
    })
    }
    else{
      alert("Query should not be null.");
    }
  }; 
  useEffect(() => {
    try{
      if(JSON.parse(localStorage.getItem('userDetails')).status==="SUCCESS")
      {
        setstatus(JSON.parse(localStorage.getItem('userDetails')).status);
        setcartURL("/Cart");
        setorderURL("/Order");
      }
    }
    catch(e){
      setstatus("");
    }
  }, []);

  const signoutHandler = async (e) => {
    e.preventDefault();
    localStorage.removeItem('userDetails');
    history.push('/');
    window.location.reload();
    return;
  }

    return(
        <div className="sticky-top">
      <nav
        className="navbar navbar-expand-lg navbar-light myfont"
        style={{ backgroundColor: "#F1F1F1" }}
      >
        <a className="navbar-brand" href="/">
          <div className="top-logo">
            <a
              style={{ color: "white", textDecoration: "none" }}
              className="li-logo "
              href="/"
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
            <Link to="/Boys"
              style={{ color: "black", textDecoration: "none",fontFamily:"'Kanit', sans-serif",fontSize:"20px" }}
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="true"
              name="male"
              onClick={onClickHandler}
            >
              BOYS
            </Link> 
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdown"
              style={{ backgroundColor: "#F1F1F1",borderColor:"#9ca19d" }}
            >
              <Link to="/Boys/T-Shirts"
                style={{ color: "#7f0fdb", textDecoration: "none",fontFamily:"'Kanit', sans-serif",fontSize:"13.0001px" }}
                className="dropdown-item"
                name="T-Shirt" onClick={onClickHandler}
              >
                T-Shirts
              </Link>
              <Link to="/Boys/Shorts"
                style={{ color: "#7f0fdb", textDecoration: "none",fontFamily:"'Kanit', sans-serif",fontSize:"13.0001px" }}
                className="dropdown-item"
                name="Shorts" onClick={onClickHandler}
              >
                Shorts
              </Link>
              <Link to="/Boys/Shirts"
                style={{ color: "#7f0fdb", textDecoration: "none",fontFamily:"'Kanit', sans-serif",fontSize:"13.0001px" }}
                className="dropdown-item"
                name="Shirt" onClick={onClickHandler}
              >
                Shirts
              </Link>
              <Link to="/Boys/Kurta"
                style={{ color: "#7f0fdb", textDecoration: "none" ,fontFamily:"'Kanit', sans-serif",fontSize:"13.0001px"}}
                className="dropdown-item"
                name="Kurta" onClick={onClickHandler}
              >
                Kurta
              </Link>
              <Link to="/Boys/Jeans"
                style={{ color: "#7f0fdb", textDecoration: "none" ,fontFamily:"'Kanit', sans-serif",fontSize:"13.0001px"}}
                className="dropdown-item"
                name="Jeans" onClick={onClickHandler}
              >
                Jeans
              </Link>
              
                
            </div>
          </ul>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item dropdown">
            <Link to="/Girls"
                style={{ color: "black", textDecoration: "none" ,fontFamily:"'Kanit', sans-serif",fontSize:"20px"}}
                className="nav-link dropdown-toggle text-black"
                href="/"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="true"
                name="female"
                onClick={onClickHandler}
              >
                GIRLS
              </Link>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdown"
                style={{ backgroundColor: "#F1F1F1",borderColor:"#9ca19d" }}
              >
                <div className="d-flex  pr-5 col-12 w-100 h-100">
                  <ul className="navbar-list">
                    <li>
                    <Link to="/Girls/Frocks"
                        style={{ color: "#7f0fdb", textDecoration: "none" ,fontFamily:"'Kanit', sans-serif",fontSize:"13.0001px"}}
                        name="Frock" onClick={onClickHandler}                        
                      >
                        Frocks
                      </Link>
                    </li>
                    <li>
                      <Link to="/Girls/Skirts"
                        style={{ color: "#7f0fdb", textDecoration: "none",fontFamily:"'Kanit', sans-serif" ,fontSize:"13.0001px"}}
                        name="Skirt" onClick={onClickHandler} 
                      >
                        Skirts
                      </Link>
                    </li>
                    
                    <li>
                      <Link to="/Girls/Tops"
                        style={{ color: "#7f0fdb", textDecoration: "none",fontFamily:"'Kanit', sans-serif",fontSize:"13.0001px" }}
                        name="Tops" onClick={onClickHandler} 
                      >
                        Tops
                      </Link>
                    </li>
                    <li>
                      <Link to="/Girls/Leggings"
                        style={{ color: "#7f0fdb", textDecoration: "none",fontFamily:"'Kanit', sans-serif" ,fontSize:"13.0001px"}}
                        name="Leggings" onClick={onClickHandler} 
                      >
                        Leggings
                      </Link>
                    </li>
                    <li>
                      <Link to="/Girls/Jumpsuit"
                        style={{ color: "#7f0fdb", textDecoration: "none",fontFamily:"'Kanit', sans-serif",fontSize:"13.0001px" }}
                        name="Jumpsuit" onClick={onClickHandler} 
                      >
                        Jumpsuit
                      </Link>
                    </li>
                  
                  </ul>
                  
                </div>
              </div>
            </li>

            <div className="nav-item dropdown">
            <Link to="/Brand"
                style={{ color: "black", textDecoration: "none",fontFamily:"'Kanit', sans-serif",fontSize:"20px" }}
                className="nav-link dropdown-toggle text-black"
                href="/"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="true"
                name="brands"
                onClick={onClickHandler}
              >
                BRAND
              </Link>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdown"
                style={{ backgroundColor: "#F1F1F1",borderColor:"#9ca19d" }}
              >
                <div className="m-list-box">
                  <ul className="navbar-list">
                    <li>
                    <Link to="/Brand/Max"
                        style={{ color: "#7f0fdb", textDecoration: "none",fontFamily:"'Kanit', sans-serif",fontSize:"13.0001px" }}
                        name="Max" onClick={onClickHandler} 
                      >
                        Max
                      </Link>
                    </li>
                    <li>
                      <Link to="/Brand/U S Polo"
                        style={{ color: "#7f0fdb", textDecoration: "none",fontFamily:"'Kanit', sans-serif" ,fontSize:"13.0001px"}}
                        name="U S Polo " onClick={onClickHandler} 
                      >
                        U S Polo
                      </Link>
                    </li>
                    <li>
                      <Link to="/Brand/Pantaloons Junior"
                        style={{ color: "#7f0fdb", textDecoration: "none",fontFamily:"'Kanit', sans-serif",fontSize:"13.0001px" }}
                        name="Pantaloons Junior" onClick={onClickHandler} 
                      >
                        Pantaloons Junior
                      </Link>
                    </li>
                    <li>
                      <Link to="/Brand/Many Frocks"
                        style={{ color: "#7f0fdb", textDecoration: "none" ,fontFamily:"'Kanit', sans-serif",fontSize:"13.0001px"}}
                        name="Many Frocks " onClick={onClickHandler} 
                      >
                        Many Frocks
                      </Link>
                    </li>
                    <li>
                      <Link to="/Brand/Levis"
                        style={{ color: "#7f0fdb", textDecoration: "none" ,fontFamily:"'Kanit', sans-serif",fontSize:"13.0001px"}}
                        name="Levis" onClick={onClickHandler} 
                      >
                        Levis
                      </Link>
                    </li>
                    
                  </ul>
                </div>
              </div>
            </div>
            
            
          </ul>
          <div className="form-inline mt-2" id="navBarSearchForm">
          <div className="input-group mb-3 ">
              <input
                type="text"
                className="nav-search form-control"
                placeholder="What are you looking for?"
                aria-label="What are you looking for?"
                aria-describedby="basic-addon2"
                style={{width:"300px"}}
                onChange={onSearchChange}
              />
              <div className="input-group-append">
                <button className="input-group-text bg-white" id="basic-addon2"  onClick={onSearchHandler}>
                  <span className="material-icons" style={{ fontSize: "12px" }}>
                    search
                  </span>
                </button>
              </div>
            </div>
            </div>
          
          <ul className="navbar-nav dropdown">
            <a
              href="/"
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
            {status==="SUCCESS" ?
              
              <div className="dropdown-cont">
              <span className="text-black">
                
                <Link to="/Profile"  className="btn btn-md mt-2" style={{color:"black",border: "2px solid black"}}>
                  Profile
                </Link><br></br>
                <Link  onClick={signoutHandler} className="btn btn-md mt-2" style={{color:"black",border: "2px solid black"}}>
                  Sign out
                </Link>
              </span> 
              </div>
            :
              <div className="dropdown-cont">
              <span className="text-black">
                
                <Link to="/SignUp"  className="btn btn-md mt-2" style={{color:"black",border: "2px solid black"}}>
                  SIGN Up
                </Link>
                <Link to="/SignIn"  className="btn btn-md mt-2" style={{color:"black",border: "2px solid black"}}>
                  SIGN IN
                </Link>
              </span> 
              </div>
            }

            </div>
          </ul>

          <ul className="navbar-nav dropdown">
            <Link
              to={cartURL}
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
              
            </Link>
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
              <Link
                className="nav-link"
                to={orderURL}
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: "12px"
                }}
              >
                Track my order
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to={orderURL}
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: "12px"
                }}
              >
                Cancel/Return your order
              </Link>
            </li>
            
          </ul>
        </div>
      </nav>
    </div>
    );
}

export default Navbar;