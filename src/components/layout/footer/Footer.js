import React from "react";
import { Row, Container } from "react-bootstrap";

const Footer = () => {
  return (
    <div>
      <div class="navbar navbar-inverse navbar-fixed-bottom">
              
        <div class="container">
          {" "}
          &copy; {new Date().getFullYear()} Rabin Ghimire All Right Reserved
                  <a>Privacy Policy</a>
                  <a>Terms & Conditions</a>
                
        </div>
            
      </div>
    </div>
  );
};

export default Footer;
