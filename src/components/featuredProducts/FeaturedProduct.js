import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { Jumbotron, Row, Col, Image, Button } from "react-bootstrap";
import { displayFeaturedProduct } from "../../pages/products/ProductsAction";

import "./products.style.css";

export const FeaturedProduct = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { status, message, featuredprod } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    dispatch(displayFeaturedProduct());
  }, []);

const feturedTo = {
  ...featuredprod, 
  _id:"627"
}
  return (
    <div>
      <Jumbotron>
        {
          <Row>
            <Col className="image">
              <Image
                className="featuredimage ml-5"
                alt={featuredprod.name}
                src={featuredprod.images}
                width="300px"
              />
            </Col>
            <Col className="mr-5">
              <h1>{featuredprod?.name}</h1>
              <p>{featuredprod.description}</p>
              <p>
                <Button variant="primary" onClick={()=> history.push(`/products/${featuredprod.slug}`)}>Shop Now</Button>
              </p>
            </Col>
          </Row>
        }
      </Jumbotron>
    
  
    
    </div>
  );
};
