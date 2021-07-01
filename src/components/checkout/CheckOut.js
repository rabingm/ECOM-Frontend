import React, { useEffect, useState } from "react";

import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
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
import { viewCart } from "../../pages/cart/CartAction";
import {
  fetchCategories,
  fetchCategoriesById,
} from "../../pages/category/CategoryAction";
import { logOut } from "../../pages/login/loginAction";

import logo from "./logo.png";
import "./checkout.style.css";

export const CheckOut = () => {
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

  const subTotal = selectedProd?.reduce((subtotal, row) => {
    return subtotal + row.Quantity * row.Item.price ;
  }, 0);

  // const totalorice = selectedProd.Quantity * selectedProd.Item.price

  // console.log("from check", selectedProd.Item.Name, totalorice)

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

  const handleOnPay = async (token) => {
    console.log(token);

    const data = {
      token,
      selectedProd,
    };

    const result = await axios.post("http://localhost:8001/payment", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <div className="checkout p-4">
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

      <h3>Thank you your order has been placed</h3>
      <div className="footer">
        <footer className="footer">
          <div className="footer-left col-md-4 col-sm-12">
            <p className="about">
              <span> About the company</span> Kathmandu butchery has been
              running a business in couple of sectors like wholesale meat
              supplier and supplier of different other Nepalese product like
              pickle, spices and many more. They are into the business since
              2018.
            </p>
            <div className="icons">
              <a href="#">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fa fa-google-plus"></i>
              </a>
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="footer-center col-md-4 col-sm-12">
            <div>
              <i className="fa fa-map-marker"></i>
              <p>
                <span> 36 Penshurst St, Penshurst </span> NSW 2222
              </p>
            </div>
            <div>
              <i className="fa fa-phone"></i>
              <p> +61 0423072634</p>
            </div>
            <div>
              <i className="fa fa-envelope"></i>
              <p>
                <a href="#"> info.kathmandubutchery@gmail.com</a>
              </p>
            </div>
          </div>
          <div className="footer-right col-md-4 col-sm-12">
            <h2>
              {" "}
              Kathmandu<span> Butchery</span>
            </h2>
            <p className="menu">
              <a href="#"> Home </a> |<a href="#"> &nbsp;Products </a> |
              <a href="#"> &nbsp;Delivery </a> |<a href="#"> &nbsp;About Us </a>{" "}
              |<a href="#"> &nbsp;Contact Us </a>
            </p>
            <p className="name"> Kathmandu Butchery &copy; 2021</p>
          </div>
        </footer>
      </div>
    </div>
  );
};
