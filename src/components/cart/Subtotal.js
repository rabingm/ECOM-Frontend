import React from "react";
import { Row, Col, Button, Card, Image, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import { sendOrder, sendPayment } from "../../apis/orderAPI";
import { order } from "../../pages/order/OrderAction"
import StripeCheckout from "react-stripe-checkout"

import axios from "axios";

import mastercard from "../../img/mastercard-logo.png"
import visa from "../../img/visa-logo.png"
import paypal from "../../img/paypal-logo.jpg"

const Subtotal = (token) => {

  console.log("from subtotal", token)

  const history = useHistory();
  const dispatch = useDispatch();

  const { selectedProd } = useSelector((state) => state.cart);
  const subTotal = selectedProd?.reduce((subtotal, row) => {
    return subtotal + row.Quantity * row.Item.price;
  }, 0);

  const getUser = JSON.parse(localStorage.getItem("user"));

  const getFinalOrder = {
    CustomerName: getUser,
    order: selectedProd[0],
  };

  const handleOnClick = () => {
    alert("Are you sure want to place those orders??");
    dispatch(order(getFinalOrder));
    history.push(`/checkout`);
  };

  const handleOnPay = async token => {

    const data = {
      token,
      selectedProd,
      subTotal
    };

    const result = await axios.post("http://localhost:8001/api/v1/payment", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("from subtotal", result.data.result.status);

    result.data.result.status == "succeeded" && history.push("/checkout")
  };

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
                {/* <StripeCheckout/> */}
                <StripeCheckout
                  token={handleOnPay}
                  stripeKey="pk_test_51IwH65JgvGU90BXJ8N9TuZIBCS7S3sfdxtJks5jGFT8xQTY2X5iDESyclTkcgiRshQV6AbHFJYZeGf1imzJrQXrG00TdfRyR1o"
                  name="Pay by Card"
                  amount={subTotal*100}
                >
                  <Button variant="info" fluid>Pay Now</Button>
                </StripeCheckout>
              </Row>
              <Row className="mt-5">
                <h4>We Accept</h4>
              </Row>
              <Row>
                <Image
                  className="p-2"
                  src={mastercard}
                  width="80px"
                  height="60px"
                />
                <Image className="p-2" src={visa} width="75px" height="60px" />
                <Image
                  className="p-2"
                  src={paypal}
                  width="80px"
                  height="auto"
                />
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Subtotal;
