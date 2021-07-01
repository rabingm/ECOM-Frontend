import React from "react";
import { Button, Jumbotron, Row, Col, Image } from "react-bootstrap";
import "./faq.css";
const Faq = () => {
    return (
        <>
            <div className="container">
                <Row className="">
                    <div className="Faq">
                        <h1>Frequently Asked Questions</h1>
                        <div className="faq-content">
                            <div className="faq-question">
                                <input id="q1" type="checkbox" className="panel" />
                                <div className="plus">+</div>
                                <label for="q1" class="panel-title">What days are we open?</label>
                                <div className="panel-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
                            </div>
                            <div className="faq-question">
                                <input id="q2" type="checkbox" className="panel" />
                                <div className="plus">+</div>
                                <label for="q2" class="panel-title">Is the meat fresh or frozen?</label>
                                <div className="panel-content">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores </div>
                            </div>
                            <div className="faq-question">
                                <input id="q3" type="checkbox" className="panel" />
                                <div className="plus">+</div>
                                <label for="q3" class="panel-title">What are the alll the list of items that are available?</label>
                                <div className="panel-content">Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse</div>
                            </div>
                        </div>
                    </div>
                </Row>
            </div>
        </>
    );
};
export default Faq;