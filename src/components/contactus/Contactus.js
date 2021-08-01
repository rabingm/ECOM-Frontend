import React, { useState } from 'react'
import { messageSend } from "../../pages/contactUs/contactUsAction";
// import "./contactus.css";
import DefaultLayout from '../layout/DefaultLayout'
import { Col, Row, Container, Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';


const initialState = {
    name: "",
    phone: "",
    email: "",
    text: "",
}


const Contactus = () => {
    const dispatch = useDispatch();

    const [message, setMessage] = useState(initialState);


    const handleOnChange = (e) => {
        const { name, value } = e.target;

        setMessage({
            ...message,
            [name]: value,
        });
        // console.log("from contact us",message);

    };

    const handleOnSubmit = (e) => {
        e.preventDefault();

        dispatch(messageSend(message))
        console.log("from contact us", message);
    }


    return (
        <DefaultLayout>

            <div className="Contact">
                <Container>
                    <h1>Contact Us</h1>
                    <Row>
                        <Col xs={12} md={6}>
                            <h3>Address</h3>
                            <p>36 Penshurst St, Penshurst, NSW 2222</p>
                            <p>+61 0423072634</p>
                            <p>info.kathmandubutchery@gmail.com</p>
                        </Col>
                        <Col xs={12} md={6}>
                            <h3>Opening Hours</h3>
                            <p>Mon-Sun: 8:00 AM - 8:00 PM</p>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col xs={12} md={6}>
                            <h3>Send Us a message</h3>
                            <Form onSubmit={handleOnSubmit}>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridName">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control name="name" value={message.name} onChange={handleOnChange} placeholder="Full Name" />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control name="email" value={message.email} onChange={handleOnChange} placeholder="info.kathmandubutchery@gmail.com" />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label>Phone(optional)</Form.Label>
                                        <Form.Control name="phone" value={message.phone} onChange={handleOnChange} placeholder="+61 426522800" />
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Enter you message</Form.Label>
                                        <Form.Control as="textarea" rows={4} name="text" value={message.text} onChange={handleOnChange}/>
                                    </Form.Group>
                                </Row>
                                <Button variant="primary" type="submit" >
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                        <Col className="col-4" xs={12} md={6}><h3>Our Location on Map</h3>
                            <p><div className="embed-responsive embed-responsive-4by3">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.077056203629!2d151.08613601516907!3d-33.964858880629876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12b92a6ac9e6a5%3A0x53fcd0bfc34894c6!2sKathmandu%20Butchery!5e0!3m2!1sen!2sau!4v1622281049784!5m2!1sen!2sau" width="300" height="400" loading="lazy"></iframe></div></p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </DefaultLayout>
    )
}
export default Contactus