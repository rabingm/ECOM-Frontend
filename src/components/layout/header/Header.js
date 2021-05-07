import React from "react";
import { Navbar, Button, Nav, Form, FormControl, Jumbotron } from "react-bootstrap";

import "./header.style.css";

function Header() {
  return (
      <>
      <Navbar.Brand sticky="top" />
      <Navbar className="navbar">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
        <a className="ml-4" href="/login">
          Login/
        </a>
        <a href="/signup">SignUp</a>
        <a className="p-1 ml-2" href="/basket">
          Bag
        </a>
      </Navbar>
   
    </>
  );
}

export default Header;
