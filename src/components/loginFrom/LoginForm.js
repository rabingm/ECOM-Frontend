import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Form, Button, Card } from "react-bootstrap";

import "./loginForm.style.css";

const initialState = {
  email: "somethin@gmail.com",
  password: "426376826",
};


const LoginForm = () => {
  // const dispatch = useDispatch
  const history = useHistory();

  const dispatch = useDispatch()

  const [login, setLogin] = useState(initialState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setLogin({
      ...login,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    history.push("/home")
    
  };

  return (
    <div className="main p-4  ">
      <Card className="p-3">
        <Form className="m-3" onSubmit={handleOnSubmit}>
          <h2>Sign-in</h2>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter Email"
              value={login.email}
              onChange={handleOnChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              value={login.password}
              onChange={handleOnChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>

          <div className="submit">
              <Button  variant="outline-light" type="submit">
                Submit
              </Button>

            <span className="fp">
              <a href="/forgotpw">Forgot Password?</a>
            </span>

            <span className="fp">
              <a href="/signup">Create New Account</a>
            </span>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default LoginForm;
