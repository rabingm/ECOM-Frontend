import React from "react";
import { Button, Jumbotron, Row, Col, Image } from "react-bootstrap";
import "./gallery.css";
const Gallery = () => {
  return (
    <>
    <div className="container">
    <Row className="">
      <div className="Gallery">
                <h1>Our Gallery</h1>
                <div className="container">
                    <div className="gallery">
                        <div className="gallery-item">
                            <img className="gallery-image" src="img1.jpg" />
                        </div>
                        <div className="gallery-item">
                            <img className="gallery-image" src="img2.jpg" />
                        </div>
                        <div className="gallery-item">
                            <img className="gallery-image" src="img3.jpg" />
                        </div>
                        <div className="gallery-item">
                            <img className="gallery-image" src="img4.jpg" />
                        </div>
                        <div className="gallery-item">
                            <img className="gallery-image" src="img5.jpg" />
                        </div>
                        <div className="gallery-item">
                            <img className="gallery-image" src="img6.jpg" />
                        </div>
                    </div>
                </div>
            </div>
            </Row>
            </div>
    </>
  );
};
export default Gallery;