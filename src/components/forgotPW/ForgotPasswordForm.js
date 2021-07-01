import React, {useState} from "react";
import { Card, Form, Button } from "react-bootstrap";

import "./forgotPasswordFrom.style.css";


const ForgotPasswordFrom = () => {

    const [email, setEmail] = useState("");

    const handleOnChange = (e) => {
      const { value } = e.target;
  
      setEmail(value);
    };
  
    const handleOnSubmit = (e) => {
      e.preventDefault();
  
      console.log(email);
    };

  return (
    <div className="main">
      <Card className="p-3" onSubmit={handleOnSubmit}>
        <Form className="m-3">
          <h2>Reset Password</h2>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              name="email"
              type="email"
              value={email}
              onChange={handleOnChange}
              placeholder="Enter Email"
              required
            />
          </Form.Group>
          <Form.Label></Form.Label>
          <div className="submit">
            <span className="button">
              <Button variant="outline-light" type="submit">
                Submit
              </Button>
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

export default ForgotPasswordFrom;
