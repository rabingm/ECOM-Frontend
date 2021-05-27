import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button, Card, Col, Row, Table } from "react-bootstrap";

import "./cart.style.css";

const Cart = () => {

  const {selectedProd} = useSelector(state => state.cart)
  
  console.log("FROM CART",selectedProd.Item)

// const test = selectedProd.Item.map(1, )




  
  return (
    <div className="Container  mt-2 mb-2">
      <Row>
        <Col className="itmsum col-8">
          <Card border="light" style={{ width: "60rem" }}>
            <Card.Header>
              <h4>Item Summary</h4>
            </Card.Header>
            <Card.Body>
              <div>
                <Table responsive="sm">
                  <thead>
                    <tr>
                      <th>Item</th>
                      <th>Qty</th>
                      <th>Price</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      {/* {
                        selectedProd?.map((row, i)=>{<td>{selectedProd.Item.name}</td>})
                      }
                      {
                        selectedProd?.map((row, i)=><td>{selectedProd.qty}</td>)
                      }
                       */}
                      
                      {/* <td>{selectedProd.price}</td>
                      <td>{(selectedProd.qty)*(selectedProd.price)}</td> */}
                    
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
        </Col>

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
                  <Card.Text>$</Card.Text>
                </Col>
              </Row>
              <Row className="mt-3">
                  <Button className="container fluid" varient="info">Proceed to CheckOut</Button>
              </Row>
              <Row className="mt-5">
                  <h4>We Accept</h4>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Cart;
