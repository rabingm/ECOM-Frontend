import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/layout/header/Header";

import "./App.css";

import { Home } from "./pages/home/Home";
import LoginPage from "./pages/login/LoginPage";
import SignupPage from "./pages/signUp/SignupPage";
import NotFound from "./pages/notFound/NotFound";
import ForgotPasswordPage from "./pages/forgotPassword/ForgotPasswordPage";
import ViewProduct from "./components/viewProducts/ViewProduct";
import CartPage from "./pages/cart/CartPage";
import TempCart from "./pages/cart/TempCart";
import { FormCheck } from "react-bootstrap";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import ViewCategory from "./components/viewCategory/ViewCategory";
import PrivateRoute from "./components/privateroute/PrivateRoute";
import Delivery from "./pages/delivery/Delivery";
import Aboutus from "./pages/aboutus/Aboutus";
import ContactUs from "./pages/contactUs/ContactUs";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/products/:slug">
            <ViewProduct />
          </Route>

          <Route exact path="/category/:slug">
            <ViewCategory />
          </Route>

          <Route exact path="/cart">
            <CartPage />
          </Route>

          <PrivateRoute exact path="/checkout">
            <CheckoutPage />
          </PrivateRoute>

          <Route exact path="/login">
            <LoginPage />
          </Route>

          <Route exact path="/signup">
            <SignupPage />
          </Route>

          <Route exact path="/aboutus">
            <Aboutus />
          </Route>
          
          <Route exact path="/contactus">
            <ContactUs />
          </Route>

          <Route exact path="/delivery">
            <Delivery />
          </Route>

          <Route exact path="/forgotpw">
            <ForgotPasswordPage />
          </Route>

          <Route exact path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
