import React, { useState } from "react";
import classes from './SignUp.module.css';
import { Link, useHistory} from "react-router-dom";
import SignUp_Img from "../../Images/SignUp.svg";
import axios from 'axios';

function SignUp() {
  const [signupDetails, setsignupDetails] = useState({
    name: "",
    email: "",
    password: "",
    phone:"",
    address: "",
    

  });
  
  let history = useHistory();

  const onChangeHandler = (e) => {
    let user = signupDetails;
    user[e.target.name] = e.target.value;
    setsignupDetails(user);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    axios.post(`https://kids-zone-app-be.herokuapp.com/api/v1/signup/`, { signupDetails })
      .then(res => {
        console.log(res);
        console.log(res.data);
        console.log(res.status);
        if(res.data.status==="SUCCESS")
        {
          history.push('/SignIn');
          alert(res.data.message);
        }
        else
        {
          alert(res.data.message);
        }
      })
    return;        
  }
    return (
      <div className={classes.SignUp}>
      <div className={classes.SignUp_Image}>
          <img src={SignUp_Img} alt="SignUp" />
      </div>
      <div className={classes.SignUp_Box}>
            <form onSubmit={onSubmitHandler}>
              <h1 className={classes.title_SU} style={{color:"black",fontFamily:"'Oswald', sans-serif"}}>SIGN UP</h1>
              <br></br>
              <input
                type="text"
                placeholder="Name"
                name="name"
                onChange={onChangeHandler}
              /><br></br>

              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={onChangeHandler}
              /><br></br>

              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={onChangeHandler}
              /><br></br>

              <input
                type="text"
                placeholder="Phone Number"
                name="phone"
                onChange={onChangeHandler}
              /><br></br>

              <input
                type="text"
                placeholder="Address"
                name="address"
                onChange={onChangeHandler}
              /><br></br>

              

              <input type="submit" value="SUBMIT" />
              <br></br><br></br>
              <div className={classes.bottomLinkWrapper}>
              <Link to="/SignIn" className={classes.BottomLinks} style={{color:"black",fontFamily:"'Oswald', sans-serif"}}>
                Have an account ?
              </Link>
            </div>
            </form>
        </div>
    </div>
    );
  }
  
  export default SignUp;