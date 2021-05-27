import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button, Card, Col, Image, Row, Table } from "react-bootstrap";

import { viewCart } from "../../pages/cart/CartAction";

import "./cart.style.css";

const Cart = () => {

  const dispatch = useDispatch()

  const {selectedProd, name} = useSelector(state => state.cart)

  useEffect(() => {
    dispatch(viewCart())
  }, [dispatch])
  
  // console.log("FROM CART",selectedProd[0].Item)

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
                    {
                      selectedProd.map((row, i)=>(
                        <tr>
                          <td className="prodcart">
                            <div className="cartimage">
                            <Image src={selectedProd[i].Item.images} width="80px"
										height="auto"
										alt="product image"/> </div>
                            <div className="itemName">{selectedProd[i].Item.name }</div>
                            
                          </td>
                          <td>{selectedProd[i].Item.qty}</td>
                          <td>{selectedProd[i].Item.price}</td>
                          <td>{(selectedProd[i].Item.qty)*(selectedProd[i].Item.price)}</td>
                          
                        </tr>
                      ))
                    }
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
