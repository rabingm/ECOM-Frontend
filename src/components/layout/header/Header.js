import React from "react";
import {
  Navbar,
  Button,
  Nav,
  Form,
  FormControl,
  Jumbotron,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { viewCart } from "../../../pages/cart/CartAction";

import "./header.style.css";

function Header() {
  const dispatch=useDispatch()
  const history = useHistory();

  const {selectedProd} = useSelector(state => state.cart)

  const handleOnCartClick=()=>{
    dispatch(viewCart())
    history.push("/cart")
  }
const totalQty = selectedProd?.reduce((subtotal, row)=>{
return subtotal+row.Quantity
}, 0)

  return (
    <>
      <Navbar.Brand sticky="top" />
      <Navbar className="navbar">
        <Navbar.Brand href="#home">
          <i class="fas fa-bars"></i>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">New In</Nav.Link>
          <Nav.Link href="#features">Todays's Deal</Nav.Link>
          <Nav.Link href="#pricing">Best Selling</Nav.Link>
        </Nav>
        <Form inline className="search">
          <FormControl
            type="text"
            placeholder="Search"
            className="textfield mr-sm-1"
          />
          <Button className="mr-sm-5" variant="outline-info">
            Search
          </Button>
        </Form>

        <a className="ml-4" onClick={() => history.push("/login")}>
          Login/
        </a>
        <a href="/signup">SignUp</a>
        <a className="p-1 ml-2" onClick={handleOnCartClick}>
          <i class="fas fa-cart-arrow-down"></i>{totalQty}
        </a>
      </Navbar>
    </>
  );
}

export default Header;
