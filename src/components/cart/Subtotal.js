import React from "react";
import { Row, Col, Button, Card, Image } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

import mastercard from "../../img/mastercard-logo.png";
import visa from "../../img/visa-logo.png";
import paypal from "../../img/paypal-logo.jpg";

const Subtotal = () => {
  const history = useHistory();

  const { selectedProd } = useSelector((state) => state.cart);
  const subTotal = selectedProd?.reduce((subtotal, row) => {
    return subtotal + row.Quantity * row.Item.price;
  }, 0);

  return (
    <div>
      <Row>
        <Col className="odrsum">
          <Card border="light" style={{ width: "22rem" }}>
            <Card.Header>
              <h4>Order Summary</h4>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col className="col-9">
                  <Card.Title>Subtotal</Card.Title>
                </Col>
                <Col>
                  <Card.Text>${subTotal}</Card.Text>
                </Col>
              </Row>
              <Row className="mt-3">
                <Button
                  className="container fluid"
                  varient="info"
                  onClick={() => history.push(`/checkout`)}
                >
                  Proceed to CheckOut
                </Button>
              </Row>
              <Row className="mt-5">
                <h4>We Accept</h4>
                
              </Row>
              <Row>
              <Image className="p-2" src={mastercard} width="80px" height="60px"/>
              <Image className="p-2" src={visa} width="75px" height="60px"/>
              <Image className="p-2" src={paypal} width="80px" height="auto"/>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Subtotal;
