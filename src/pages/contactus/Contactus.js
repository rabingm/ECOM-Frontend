import React from 'react'
import "./contactus.css";
import DefaultLayout from '../../components/layout/DefaultLayout'
import { Col, Row, Container, Button, Form } from 'react-bootstrap';
const Contactus = () => {
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
                    <Row>
                        <Col xs={12} md={6}>
                            <h3>Send Us a message</h3>
                            <Form>
                                <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridName">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="name" placeholder="Enter Full Name" />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Example textarea</Form.Label>
                                        <Form.Control as="textarea" rows={5} />
                                    </Form.Group>
                                </Row>
                                <Button variant="primary" type="submit">
                                    Submit
  </Button>
                            </Form>
                        </Col>
                        <Col xs={12} md={6}><h3>Our Location on Map</h3>
                        <p><div className="embed-responsive embed-responsive-4by3">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.077056203629!2d151.08613601516907!3d-33.964858880629876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12b92a6ac9e6a5%3A0x53fcd0bfc34894c6!2sKathmandu%20Butchery!5e0!3m2!1sen!2sau!4v1622281049784!5m2!1sen!2sau" width="600" height="450" loading="lazy"></iframe></div></p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </DefaultLayout>
    )
}
export default Contactus