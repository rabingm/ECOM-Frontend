import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import "./footer.style.css";

const Footer = () => {
  return (
    <div>
      <div class="navbar navbar-inverse navbar-fixed-bottom">
          
        <Row>
          <Col>
            <h6>GET TO KNOW US</h6>
            <a>Who we are</a>
          </Col>
          <Col>
            <h6>CUSTOMER CARE</h6>
          </Col>
        </Row>
        <Row>
          <Col>
          <h6>FIND US</h6>
          </Col>
        </Row>
            
      </div>
      <div class="container ">
        &copy; {new Date().getFullYear()} Rabin Ghimire All Right Reserved
                <a>Privacy Policy</a>
                <a>Terms & Conditions</a>
      </div>
    </div>
  );
};

export default Footer;
