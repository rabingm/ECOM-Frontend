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
          <Route exact path="/cart">
            <CartPage />
          </Route>
          <Route exact path="/checkout">
            <CheckoutPage />
          </Route>
          <Route exact path="/temp-checkoput">
            <TempCart />
          </Route>

          <Route exact path="/login">
            <LoginPage />
          </Route>

          <Route exact path="/signup">
            <SignupPage />
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
