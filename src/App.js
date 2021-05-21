import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/layout/header/Header";

import "./App.css";

import { Home } from "./pages/home/Home";
import LoginPage from "./pages/login/LoginPage";
import SignupPage from "./pages/signUp/SignupPage";
import NotFound from "./pages/notFound/NotFound";
import ForgotPasswordPage from "./pages/forgotPassword/ForgotPasswordPage";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/">
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
