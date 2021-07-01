import React from "react";
import { Button, Jumbotron, Row, Col, Image } from "react-bootstrap";

import "./landing.style.css";

import ip12 from "../../img/ip12.jpeg";

import {FeaturedProduct} from "../featuredProducts/FeaturedProduct";
import ViewMore from "../viewMore/ViewMore";
import Gallery from "../gallery/Gallery";
import Testimonials from "../testimonials/Testimonials";
import Faq from "../faq/Faq";

const Landing = () => {
  return (
    <>
      <div className="home">
        <div className="featured px-4 pt-2"></div>
        <div className="px-4 ">
          <FeaturedProduct />
          <Gallery/>
          <Testimonials/>
          <Faq/>
        </div>
      </div>
    </>
  );
};

export default Landing;
