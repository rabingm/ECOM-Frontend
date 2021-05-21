import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createUser } from "../../pages/signUp/signUpAction";

const initialState = {
  fname: "hvidsk ",
  lname: "gjh",
  email: "someyhing@gmail.com",
  phone: "344343",
  password: "fefer",
};

const SignupForm = () => {
  const dispatch = useDispatch();

  const [signUp, setSignUp] = useState(initialState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setSignUp({
      ...signUp,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    console.log("FORM SUBMITTED", signUp);
    dispatch(createUser(signUp));
  };

  return (
    <div className="main p-4  ">
      <Card className="p-3">
        <Form className="m-3" onSubmit={handleOnSubmit}>
          <h2>Create Account</h2>

          <Form.Group controlId="formBasicEmail">
            <Form.Control
              name="fname"
              placeholder="Firstname"
              value={signUp.fname}
              onChange={handleOnChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Control
              name="lname"
              placeholder="Lastname"
              value={signUp.lname}
              onChange={handleOnChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Control
              name="email"
              type="email"
              placeholder="Email"
              value={signUp.email}
              onChange={handleOnChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control
              name="phone"
              type="number"
              placeholder="Phone"
              value={signUp.phone}
              onChange={handleOnChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleOnChange}
              value={signUp.password}
              required
            />
          </Form.Group>

          <div className="submit">
            <Button variant="outline-light" type="submit">
              Submit
            </Button>

            <span className="fp">
              <a href="/forgotpw">Forgot Password?</a>
            </span>

            <span className="fp">
              <a href="/">Login Now</a>
            </span>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default SignupForm;
