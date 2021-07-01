import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { Button, Card, Col, Image, Row, Table } from "react-bootstrap";

import { viewCart } from "../../pages/cart/CartAction";
import { incQtySuccess, decQtySuccess } from "../../pages/cart/CartSlice";

import "./cart.style.css";
import Subtotal from "./Subtotal";

const Cart = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { selectedProd } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(viewCart());
  }, [dispatch]);

  const [qty,setQty] = useState(selectedProd.Quantity);

  const handleOnChange = (e) => {
    const { value } = e.target;

  setQty({
      ...qty,
      value,
    });
  };

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
                    {selectedProd.map((row) => (
                      <tr>
                        <td className="prodcart">
                          <div className="cartimage">
                            <Image
                              src={row.Item.images}
                              width="80px"
                              height="auto"
                              alt="product image"
                            />{" "}
                          </div>
                          <div className="itemName">{row.Item.name}</div>
                        </td>
                        <td>
                          <div class="input-group">
                            <span class="input-group-btn">
                              <button
                                type="button"
                                class="btn btn-danger btn-number"
                                onClick={() => dispatch(decQtySuccess(row._id))}
                                value="-"
                              >
                                -
                              </button>
                            </span>
                            <input
                              type="text"
                              name="quant[2]"
                              class="form-control input-number"
                              value={row.Quantity}
                              onBlur={handleOnChange}
                            />
                            <span class="input-group-btn">
                              <button
                                type="button"
                                class="btn btn-success btn-number"
                                onClick={() => dispatch(incQtySuccess(row._id))}
                              >
                                +
                              </button>
                            </span>
                          </div>
                        </td>
                        <td>${row.Item.price}</td>
                        <td>${row.Quantity * row.Item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Subtotal />
      </Row>
    </div>
  );
};

export default Cart;
