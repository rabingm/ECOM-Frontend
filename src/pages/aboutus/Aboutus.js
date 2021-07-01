import React from "react";
import "./aboutus.css";
import DefaultLayout from "../../components/layout/DefaultLayout";
import { Container, Tab, Row, Col, Tabs, Jumbotron } from "react-bootstrap";

import aboutImg from "../../img/about-img.jpeg";
const Aboutus = () => {
  return (
    <div>
      <DefaultLayout>
        <div className="about">
          <Container>
            <h2>About Us</h2>
            <Tabs
              defaultActiveKey="home"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="home" title="Who We Are ">
                <Jumbotron fluid>
                  <Container>
                    <Row>
                      <Col xs md="6" lg="6" sm="12">
                        <img src={aboutImg} style={{ width: "100%" }} />
                      </Col>
                      <Col xs md="6" lg="6" sm="12">
                        <h2>Kathmandu Butchery</h2>
                        <p>
                          "Kathmandu butchery has been running a business in
                          couple of sectors like wholesale meat supplier and
                          supplier of different other Nepalese product like
                          pickle, spices and many more. They are into the
                          business since 2018. The company has been looking for
                          a team of software developer who can develop online
                          web application to sell their product online. With the
                          help of this web application registered customer can
                          view and buy different product sold by Kathmandu
                          butchery."
                        </p>
                      </Col>
                    </Row>
                    <img />
                  </Container>
                </Jumbotron>
              </Tab>
              <Tab eventKey="profile" title="Our Journey">
                <div className="main-container">
                  <section id="timeline" className="timeline-outer">
                    <div className="container" id="content">
                      <div className="row">
                        <div className="col s12 m12 l12">
                          <ul className="timeline">
                            <li className="event" data-date="2019/Present">
                              <h3>Focused on increasing business</h3>
                              <p>
                                Now the as the business has been extended the
                                main focus remains on online sales, online
                                delivery of the the product. Along with that
                                convinient is also made for customer on various
                                purposes.
                              </p>
                            </li>
                            <li className="event" data-date="2019/Present">
                              <h3>Added delivery of large services</h3>
                              <p>
                                As its hard for picking up bulk order of th
                                items so we do delivery for the items. We ask
                                the customer for address get the delivery as
                                soon as we can.
                              </p>
                            </li>
                            <li className="event" data-date="2012/2019">
                              <h3>Addded clients all over the sydney</h3>
                              <p>
                                Now with gradual popularity of our items such as
                                meat, spices, pickles etc, we have added clients
                                all over different suburbs inside Sydney and
                                different cities of Australia such as Brisbane,
                                Melbourne, etc.
                              </p>
                            </li>
                            <li className="event" data-date="2012/2015">
                              <h3>Added wide range of product</h3>
                              <p>
                                We are not only limited to the meat now, we have
                                increased the range of our meat products such as
                                duck, lamb. Also we have added other items such
                                as spices and pickles.
                              </p>
                            </li>
                            <li className="event" data-date="2010/2011">
                              <h3>Started our shop</h3>
                              <p>
                                On the summer of 2010 we have started our
                                business in Penshurst. It was a small shop at
                                first but as the time went by we have started
                                expanding our business.
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>
                  <br />
                </div>
              </Tab>
            </Tabs>
          </Container>
        </div>
      </DefaultLayout>
    </div>
  );
};
export default Aboutus;
