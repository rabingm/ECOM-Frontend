import React, { useEffect, useState } from "react";
import {
  Jumbotron,
  Row,
  Col,
  Image,
  Button,
  Dropdown,
  ButtonGroup,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router";
import Footer from "../layout/footer/Footer";
import Header from "../layout/header/Header";
import { sendSlug } from "../../pages/products/ProductsAction";

import { addToCart } from "../../pages/cart/CartAction";
import "./products.style.css";


const ViewProduct = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { slug } = useParams();

  const [quantity, setQuantity] = useState(0);

  const { status, message, selectedProd } = useSelector(
    (state) => state.product
  );
  useEffect(() => {
    dispatch(sendSlug(slug));
  }, [dispatch]);

  const tempArg = selectedProd.qty
    ? new Array(selectedProd.qty).fill("item")
    : [];
 

  const handleOnAddtoCart = () => {
    const itemsInCart = {
      Quantity: quantity,
      Item: selectedProd,
    };

    dispatch(addToCart(itemsInCart));
    // history.push(`/products/${selectedProd.slug}`);
    console.log("selected qty", itemsInCart);
  };

  return (
    <div>
      <Header />
      <Jumbotron>
        {
          <Row>
            <Col>
              <Image
                className="featuredimage ml-5"
                alt="Iphone 12 Pro Max"
                src={selectedProd.images}
                width="300px"

              />
            </Col>
            <Col className="mr-5">
              <h2>{selectedProd?.name}</h2>
              <hr />
              <h3 className="price">Price: ${selectedProd.salePrice} </h3>
              <p>{selectedProd.description}</p>

              <div className="mb-3">
                <Dropdown as={ButtonGroup}>
                  <Button variant="info">Quantity</Button>

                  <Dropdown.Toggle
                    split
                    variant="info"
                    id="dropdown-split-basic"
                  />

                  <Dropdown.Menu>
                    {tempArg.map((row, i) => (
                      <Dropdown.Item
                        key={i}
                        onClick={() => setQuantity(i + 1)}
                      >
                        {i + 1}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <p>
                <Button variant="primary" onClick={handleOnAddtoCart}>
                  Add to Cart
                </Button>
              </p>
            </Col>
          </Row>
        }
      </Jumbotron>
      <Footer />
    </div>
  );
};

export default ViewProduct;
