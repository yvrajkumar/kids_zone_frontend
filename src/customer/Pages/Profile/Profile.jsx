import React, { useState} from "react";
import classes from './profile.module.css';
import { useHistory} from "react-router-dom";
import ProfileImage from "../../Images/profile.svg";

import axios from 'axios';

function Profile() {  
  const [edit, setedit] = useState(false);
  let history = useHistory();
  const [userDetails, setuserDetails] = useState(JSON.parse(localStorage.getItem('userDetails')));
  const [profileDetails, setprofileDetails] = useState({
    name: userDetails.data.name,
    email: userDetails.data.email,
    password: userDetails.data.password,
    phone: userDetails.data.phone,
    address: userDetails.data.address,

  });

  const onChangeHandler = (e) => {
    let user = profileDetails;
    user[e.target.name] = e.target.value;
    setprofileDetails(user);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setedit(false);
    axios.post(`https://kids-zone-app-be.herokuapp.com/api/v1/updateprofile`, { profileDetails })
      .then(res => {
        console.log(res);
        console.log(res.data);
        console.log(res.status);
        if(res.data.status==="SUCCESS")
        {
          console.log(res.data.updated);
          localStorage.setItem('userDetails', JSON.stringify(res.data));
          history.push('/profile');
          setprofileDetails(JSON.parse(localStorage.getItem('userDetails')));
        }
        if(res.data.updated==="null")
        {
          console.log(setuserDetails);
        }
      })


    return;        
  }

  const editHandler =async (e) => {
    e.preventDefault();
    setedit(true);
  }

  const signoutHandler = async (e) => {
    e.preventDefault();
    localStorage.removeItem('userDetails');
    history.push('/');
    return;
  }

  const deleteHandler = async (e) => {
    e.preventDefault();
    axios.post(`https://kids-zone-app-be.herokuapp.com/api/v1/deleteprofile`, {profileDetails})
      .then(res => {
        console.log(res);
        console.log(res.data);
        console.log(res.status);
        if(res.data.status==="SUCCESS")
        {
          console.log(res.data.deleted);
          localStorage.removeItem('userDetails');
          history.push('/');
          
        }
      })
    return;
  } 

  if(edit)
  {
      return(
        <div className={classes.Profile}>
            <div className={classes.Profile_Image}>
                <img src={ProfileImage} alt="Profile" />
            </div>
            <div className={classes.Profile_Box}>
                <form onSubmit={onSubmitHandler}>
                <h1 className={classes.title_SU}>Profile</h1>
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
                    disabled
                /><br></br>

                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={onChangeHandler}
                /><br></br>

                <input
                type="text"
                placeholder="Mobile Number"
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
                </form>
            </div>
        </div>
    );
  }
    return (
      <div className={classes.Profile}>
        <div className={classes.Profile_Image}>
          <img src={ProfileImage} alt="Profile" />
        </div>
        <div className={classes.Profile_Box}>
        <form onSubmit={onSubmitHandler}>
                <h1 className={classes.title_SU}>Profile</h1>
                <button onClick={editHandler}>Edit</button> &nbsp;<button onClick={signoutHandler}>Sign Out</button>
              
              
              <br></br>
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={profileDetails.name}
                disabled
              /><br></br>

              <input
                type="email"
                placeholder="Email"
                name="email"
                value={profileDetails.email}
                disabled
              /><br></br>

              <input
                type="password"
                placeholder="Password"
                name="password"
                value={profileDetails.password}
                disabled
              /><br></br>

              <input
                type="text"
                placeholder="Mobile Number"
                name="phone"
                value={profileDetails.phone}
                disabled
              /><br></br>

              <input
                type="text"
                placeholder="Address"
                name="address"
                value={profileDetails.address}
                disabled
              /><br></br>

              <br></br><br></br>
              <button onClick={deleteHandler}>Delete Profile</button>
        </form>
        </div>
    </div>
    );
  }
  
  export default Profile;