import React, { useState } from "react";
import { Alert, Button, Card, Form, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { createUser } from "../../pages/signUp/signUpAction";
import { sendLogin } from "../../pages/login/loginAction";


const initialState = {
  fname: "",
  lname: "",
  email: "",
  phone: "",
  password: "",
};

const SignupForm = () => {
  const dispatch = useDispatch();
  const history = useHistory()

  const [signUp, setSignUp] = useState(initialState);

  const {isLoading,signupResponse} = useSelector(state => state.signup)

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setSignUp({
      ...signUp,
      [name]: value,
    });
  };

  // const getEmail = signUp.email
  // const getPP = signUp.password

  // const pushemailpp = {
  //   email:getEmail,
  //   password:getPP
  // }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(signUp));

    if(signupResponse.status === "success"){
      // dispatch(sendLogin(pushemailpp))
      history.push("/login")

    }
  };

  // console.log("from signuop",pushemailpp)

  return (
    <div className="main p-4 signup ">
      <Card className="p-3">
        {isLoading && <Spinner variant="primary" animation="border" />}

        {signupResponse?.message && (
          <Alert
            variant={signupResponse?.status === "success" ? "success" : "danger"}
          >
            {signupResponse?.message}
          </Alert>
        )}
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

            <span className="fp last">
              <a href="/">Login Now</a>
            </span>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default SignupForm;
