import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";


import SignIn from "./customer/Pages/SignIn/SignIn";
import SignUp from "./customer/Pages/SignUp/SignUp";
// import Profile from "./Pages/Profile/Profile";
import ForgotPassword from "./customer/Pages/ForgotPassword/ForgotPassword";
import ResetPassword from "./customer/Pages/ResetPassword/ResetPassword";

import LandingPage from "./customer/Pages/LandingPage/landingpage";
import ProductPage from "./customer/Pages/ProductPage/Products";
import ProductDisplay from "./customer/Pages/ProductDisplay/productdisplay";
import Profile from "./customer/Pages/Profile/Profile";
import Order from "./customer/Pages/Order/OrderPage";
import Cart from "./customer/Pages/Cart/Cart";

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
          <Route path="/" exact component={LandingPage}/>
            <Route path="/SignIn" component={SignIn} />
            <Route path="/SignUp" component={ SignUp } />
            <Route path="/ForgotPassword" component={ForgotPassword} />
            <Route path="/ResetPassword" component={ResetPassword} />
            <Route path="/ProductPage" component={ProductPage}/>
            <Route path="/Profile" component={Profile}/>
            <Route path="/Order" component={Order}/>
            <Route path="/Cart" component={Cart}/>
            <Route path="/Boys" component={ProductPage}/>
            <Route path="/Boys/T-Shirts" component={ProductPage}/>
            <Route path="/Boys/Shorts" component={ProductPage}/>
            <Route path="/Boys/Shirts" component={ProductPage}/>
            <Route path="/Boys/Kurta" component={ProductPage}/>
            <Route path="/Boys/Jeans" component={ProductPage}/>
            <Route path="/Girls" component={ProductPage}/>
            <Route path="/Girls/Frocks" component={ProductPage}/>
            <Route path="/Girls/Skirts" component={ProductPage}/>
            <Route path="/Girls/Tops" component={ProductPage}/>
            <Route path="/Girls/Leggings" component={ProductPage}/>
            <Route path="/Girls/Jumpsuit" component={ProductPage}/>
            <Route path="/Brand" component={ProductPage}/>
            <Route path="/Brand/Max" component={ProductPage}/>
            <Route path="/Brand/U S Polo" component={ProductPage}/>
            <Route path="/Brand/Pantaloons Junior" component={ProductPage}/>
            <Route path="/Brand/Many Frocks" component={ProductPage}/>
            <Route path="/Brand/Levis" component={ProductPage}/>
            <Route path="/ProductDisplay/:id" component={ProductDisplay}/>
            <Route path="/sort" component={ProductPage}/>
            <Route path="/SearchResults" component={ProductPage}/>
            {/* <Route path="/Profile" component={ Profile } /> */}
            <Redirect to="/"></Redirect>
          </Switch>
    </Router>
    </div>
  );
}

export default App;