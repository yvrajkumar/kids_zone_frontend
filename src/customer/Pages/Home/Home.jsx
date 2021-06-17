import React from "react";
// import classes from './Home.module.css';
import { Link} from "react-router-dom";
// import Home_Img from "../../Images/Home.svg";
import axios from 'axios';

function Home() {
  const onload = async (e) => {
    axios.get(`http://localhost:5000/`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
    return;        
  }
    return (
    <div >
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/">Kid Zone</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active mr-3" >
      
              <Link to="/SignIn"  onClick={onload} style={{color:"black"}}>
                SIGN IN
              </Link>
          </li>
          <li class="nav-item active">
              <Link to="/SignUp"  onClick={onload} style={{color:"black"}}>
                SIGN UP
              </Link>
            
      </li>
      
    </ul>
  </div>
</nav>
      
</div>
  );
}

export default Home;
