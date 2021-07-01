import React from "react";
import { Button, Jumbotron, Row, Col, Image } from "react-bootstrap";
import "./testimonials.css";
const Testimonials = () => {
  return (
    <>
      <div className="container">
        <Row className="">
          <div className="Testimonials">
            <h1>Testimonials from our customers</h1>
            <blockquote>
              I think they rip you off, they just make up prices on the spot for
              items without a price tag. Can't complain about the freshness or
              quality, but the non priced items are jacked up. Go in there one
              day and have a look for your self, some of the chicken maryland,
              marinated chicken drumsticks...marinated chicken drumsticks at
              $9/kg? Get the fk outta here
              <span>Juggernaut</span>
            </blockquote>
            <blockquote>
              Have tried goatmeat from all suppliers but kathmandu butchery had
              a best quality meat ever. Thanks for your service KATHMANDU
              BUTCHERY.
              <span>Amit A</span>
            </blockquote>
            <blockquote>
              Best meat shop in the town, and excellent customer service too.
              Highly recommended.
              <span>Deepesh K</span>
            </blockquote>
          </div>
        </Row>
      </div>
    </>
  );
};
export default Testimonials;
