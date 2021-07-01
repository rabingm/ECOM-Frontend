import React, { useEffect, useState } from "react";
import {
  Navbar,
  Button,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Jumbotron,
  NavItem,
} from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";

import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { viewCart } from "../../../pages/cart/CartAction";
import {
  fetchCategories,
  fetchCategoriesById,
} from "../../../pages/category/CategoryAction";
import { logOut } from "../../../pages/login/loginAction";

import logo from "../../../img/logo.png";

import "./header.style.css";

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { categoryList } = useSelector((state) => state.category);
  const { isAuth } = useSelector((state) => state.login);

  let { slug } = useParams();

  const selectedCatId = categoryList.filter((row) => row.slug === slug)[0]?._id;

  useEffect(() => {
    dispatch(fetchCategoriesById(selectedCatId));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const { selectedProd } = useSelector((state) => state.cart);

  const handleOnCartClick = () => {
    dispatch(viewCart());
    history.push("/cart");
  };

  const handleOnCategoryClick = () => {
    dispatch(fetchCategoriesById(selectedCatId));
  };

  const handleOnLogOut = () => {
    dispatch(logOut());

    history.push("/login");
  };

  const totalQty = selectedProd?.reduce((subtotal, row) => {
    return subtotal + row.Quantity;
  }, 0);

  return (
    <>
      <div className="header">
        <div className="header_text">
          <div className="header_contact">
            <span>
              <i className="bi bi-telephone"></i>(02) 9585 2831
            </span>
            <span>kathmandubutchery@gmail.com</span>
          </div>
          <div className="header_form">
            {isAuth && <Button onClick={handleOnLogOut}>Logout</Button>}
            {!isAuth && (
              <Button variant="primary" href="/login">
                Login
              </Button>
            )}
            {!isAuth && (
              <Button variant="primary" href="/signup">
                signup
              </Button>
            )}
            <a
              className="p-1 ml-2"
              onClick={handleOnCartClick}
              style={{ cursor: "pointer" }}
            >
              <i class="fas fa-cart-arrow-down"></i>
              {totalQty}
            </a>
          </div>
        </div>
        <div className="logo">
          <img src={logo} />
        </div>
        <div className="Container fluid d-flex justify-content-center">
          <Navbar bg="orange" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <NavDropdown title="Our Products" id="basic-nav-dropdown">
                  {categoryList.map((row, i) => (
                    <NavDropdown.Item>
                      <LinkContainer to={`/category/${row.slug}`}>
                        <NavItem onClick={handleOnCategoryClick}>
                          {row.name}
                        </NavItem>
                      </LinkContainer>
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
                <Nav.Link href="/delivery">Delivery</Nav.Link>
                <Nav.Link href="/aboutus">About Us</Nav.Link>
                <Nav.Link href="/contactus">Contact Us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </>
  );
};

export default Header;
