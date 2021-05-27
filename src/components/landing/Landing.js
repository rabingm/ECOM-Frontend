import React from "react";
import { Button, Jumbotron, Row, Col, Image } from "react-bootstrap";

import "./landing.style.css";

import ip12 from "../../img/ip12.jpeg";

import {FeaturedProduct} from "../featuredProducts/FeaturedProduct";
import BestSeller from "../bestSeller/BestSeller";

const Landing = () => {
  return (
    <>
      <div className="home">
        <div className="featured px-4 pt-2"></div>
        <div className="px-4 ">
          <FeaturedProduct />
          <BestSeller/>
        </div>
      </div>
    </>
  );
};

export default Landing;
