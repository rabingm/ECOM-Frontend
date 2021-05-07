import React from "react";
import { Button, Jumbotron, Row, Col, Image } from "react-bootstrap";

import "./landing.style.css";

import ip12 from "../../img/ip12.jpeg";

const Landing = () => {
  return (
    <>
      <div className="home">
        <div className="featured px-4 pt-2">
          <Jumbotron>
              
            <Row>
              <Col>
                <Image
                  className="featuredimage ml-5"
                  alt="Iphone 12 Pro Max"
                  src={ip12}
                />
              </Col>
              <Col className="mr-5">
                <h1>Iphone 12 Pro Max</h1>
                <p>
                  Brand new Iphone 12 Pro Max with standard Apple warrenty.
                  Shipping anywhere in Australia within 48 working hours
                </p>
                <p>
                  <Button variant="primary">Shop Now</Button>
                </p>
              </Col>
            </Row>
          </Jumbotron>
        </div>
        <div className="px-4 ">
          <Jumbotron className="bestseller">
          <h2 className="heading py-1 text-center font-weight-bold">Best Seller</h2>
          <div class="divider bg-dark"></div>
            <Row>
              <Col>
                <Image
                  className="image ml-5"
                  alt="Iphone 12 Pro Max"
                  src={ip12}
                />
                <h3>Iphone 12 Pro Max</h3>
                <p>Brand new Iphone 12 Pro Max</p>
                <p>
                  <Button variant="primary">Add to Cart</Button>
                </p>
              </Col>
              <Col className="mr-5">
                <Image
                  className="image ml-5"
                  alt="Iphone 12 Pro Max"
                  src={ip12}
                />
                <h3>Iphone 12 Pro Max</h3>
                <p>Brand new Iphone 12 Pro Max</p>
                <p>
                  <Button variant="primary">Add to Cart</Button>
                </p>
              </Col>
              <Col className="mr-5">
                <Image
                  className="image ml-5"
                  alt="Iphone 12 Pro Max"
                  src={ip12}
                />
                <h3>Iphone 12 Pro Max</h3>
                <p>Brand new Iphone 12 Pro Max</p>
                <p>
                  <Button variant="primary">Add to Cart</Button>
                </p>
              </Col>
              
            </Row>
          </Jumbotron>
        </div>
      </div>
    </>
  );
};

export default Landing;
