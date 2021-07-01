import React, { useEffect, useState } from "react";
import {
  Jumbotron,
  Row,
  Col,
  Image,
  Card,
  Button,
  Dropdown,
  ButtonGroup,
  Container
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router";
import Footer from "../layout/footer/Footer";
import Header from "../layout/header/Header";
import { sendSlug, sendSlugGetSelectedProd } from "../../pages/products/ProductsAction";

import { addToCart } from "../../pages/cart/CartAction";
import { selectACategory } from "../../pages/category/CategorySlice";
import "../viewProducts/products.style.css";

const ViewCategory = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { slug } = useParams();

  const { status, message, selectedProd } = useSelector(
    (state) => state.product
  );
  const { selectedCategory } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(sendSlug(slug));
  }, [dispatch]);

  const handleOnClick = () => {
    dispatch(sendSlug(slug))
    console.log("for dlug", slug)
    // history.push(`/products/${selectedProd.slug}`)
  };

  console.log("from view category1", selectedCategory[0]);

  return (
    <div>
      <Header />
      <Container >
        <Row>
          {selectedCategory.map((row) => (
            <>
              <Col className="image" md="6" lg="4" sm="12">
                <Card onClick={() => history.push(`/products/${row.slug}`)}>
                  <Image
                    className='image-cat'
                    alt='Image'
                    src={row.images} />
                  <h1>{row.slug}</h1>
                  <div className="card-read-more">Price: ${row.price}</div>
                </Card>
              </Col>
            </>
          ))}
        </Row>
      </Container >
      <Footer />
    </div>
  );
};

export default ViewCategory;
