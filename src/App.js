import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from "./customer/Pages/Home/Home";
import SignIn from "./customer/Pages/SignIn/SignIn";
import SignUp from "./customer/Pages/SignUp/SignUp";
// import Profile from "./Pages/Profile/Profile";
import ForgotPassword from "./customer/Pages/ForgotPassword/ForgotPassword";
import ResetPassword from "./customer/Pages/ResetPassword/ResetPassword";

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/SignIn" component={SignIn} />
            <Route path="/SignUp" component={ SignUp } />
            <Route path="/ForgotPassword" component={ForgotPassword} />
            <Route path="/ResetPassword" component={ResetPassword} />
            {/* <Route path="/Profile" component={ Profile } /> */}
            <Redirect to="/"></Redirect>
          </Switch>
    </Router>
    </div>
  );
}

export default App;
