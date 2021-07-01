import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Form, Button, Card, Spinner, Alert } from "react-bootstrap";

import { sendLogin, userAutoLogin } from "../../pages/login/loginAction";
import { updateLogin } from "../../pages/login/loginSlice";

import "./loginForm.style.css";

const initialState = {
  email: "fullel@gmail.com",
  password: "123123",
};

const LoginForm = () => {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();

  const { isLoading, loginResponse, isAuth, message } = useSelector(
    (state) => state.login
  );

  const [login, setLogin] = useState(initialState);

  let { from } = location.state || { from: { pathname: "/" } };

  // const token = sessionStorage.getItem("accessJWT");

  useEffect(() => {
    isAuth && history.replace(from);
    !isAuth && dispatch(userAutoLogin());
  }, [isAuth]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setLogin({
      ...login,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!login.email || !login.password) {
      alert("Please fill all the input fields");
    }

    dispatch(sendLogin(login));
    // history.push("/");
  };

  console.log("from login form", login)

  return (
    // <div className="main p-4  ">
    //    {message === false && (
    //       <Alert variant="danger"><p>Invalid details</p></Alert>
    //     )}
    //   <div class="log-form">
    //     <h2>Sign-in</h2>
    //     <form onSubmit={handleOnSubmit}>
    //       <input name="email" placeholder="Enter your email" required="" type="email" class="form-control" value={login.email}
    //         onChange={handleOnChange} />
    //       <input name="password" placeholder="Password" required="" type="password" class="form-control" value={login.password}
    //         onChange={handleOnChange} />
    //       <button type="submit" class="btn">Login</button>
    //       <a class="forgot" href="/forgotpw">Forgot Password</a>
    //     </form>
    //   </div>
    // </div>

    <div className="main p-4  login">
      <Card className="p-3">
        {message === false && (
          <Alert variant="danger"><p>Invalid details</p></Alert>
        )}
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
            <Button variant="outline-light" type="submit">
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
