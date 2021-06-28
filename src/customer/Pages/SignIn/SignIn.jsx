import React, { useState } from "react";
import classes from './SignIn.module.css';
import { Link, useHistory} from "react-router-dom";
import SignIn_Img from "../../Images/SignIn.svg";
import axios from 'axios';

function SignIn() {
    const [signinDetails, setsigninDetails] = useState({
        email: "",
        password: "",
      });

      let history = useHistory();

      const onChangeHandler = (e) => {
        let user = signinDetails;
        user[e.target.name] = e.target.value;
        setsigninDetails(user);
      };
    
      const onSubmitHandler = async (e) => {
        e.preventDefault();
        axios.post(`https://kids-zone-app-be.herokuapp.com/api/v1/signin/`, { signinDetails })
      .then(res => {
        console.log(res);
        console.log(res.data);
        console.log(res.status);
        if(res.data.status==="SUCCESS")
        {
          console.log(res.data.validation);
          localStorage.setItem('userDetails', JSON.stringify(res.data));
          history.push('/')
          
        }
        else{
          alert(res.data.message);
        }
      })
        return;        
      }
    
  return (
    <div className={classes.SignIn}>
      <div className={classes.SignIn_Image}>
          <img src={SignIn_Img} alt="SignIn" />
      </div>
      <div className={classes.SignIn_Box}>
            <form onSubmit={onSubmitHandler}>
              <h1 className={classes.title_SU} style={{color:"black",fontFamily:"'Oswald', sans-serif"}}>LOGIN</h1>
              <br></br>
              <input
                type="text"
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

              <input type="submit" value="SUBMIT" />
              <br></br><br></br>
              <div className={classes.bottomLinkWrapper}>
              <Link to="/ForgotPassword" className={classes.BottomLinks} style={{color:"black",fontFamily:"'Oswald', sans-serif"}}>
                Forgot Password ?
              </Link>
              <br></br>
              <Link to="/SignUp" className={classes.BottomLinks} style={{color:"black",fontFamily:"'Oswald', sans-serif"}}>
                New User ?
              </Link>
            </div>
            </form>
        </div>
    </div>
  );
}

export default SignIn;
