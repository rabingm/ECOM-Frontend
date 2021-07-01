import React from "react";
import { Button } from "react-bootstrap";
import LoginForm  from "../../components/loginFrom/LoginForm";
import logo from "../../img/logo.png";


import "./login.style.css";

const LoginPage = () => {
  return (
    <div>
      <div className="header">
        <div className="header_text">
          <div className="header_contact">
            <span>
              <i className="bi bi-telephone"></i>(02) 9585 2831
            </span>
            <span>kathmandubutchery@gmail.com</span>
          </div>
          {/* <div className="header_form">
            <Button variant="primary" href="/login">Login</Button>
            <Button variant="primary" href="/signup">Signup</Button>
          </div> */}
        </div>
      </div>
      <div className="logo">
        <img src={logo} />
      </div>
      <LoginForm />
      <footer class="container-fluid alert alert-info">
        <div class="container text-center">
          <span>
            Copyrights &copy; All Rights Reserved.
    </span>
        </div>
      </footer>
    </div>
  );
};

export default LoginPage;
