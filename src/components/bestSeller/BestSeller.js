import { Button, Jumbotron, Row, Col, Image } from "react-bootstrap";

const BestSeller = () => {
    return (
        <div>
            <Jumbotron className="bestseller">
            <h2 className="heading py-1 text-center font-weight-bold">
              Best Seller
            </h2>
            <Row>
              <Col>
                <Image
                  className="image ml-5"
                  alt="Iphone 12 Pro Max"
                  src={""}
                />
                <h3>Iphone 12 Pro Max</h3>
                <p>Brand new Iphone 12 Pro Max</p>
                <p>
                  <Button variant="primary">Add to Cart</Button>
                </p>
              </Col>
              <Col className="mr-5">
                <Image
                  className="image ml-5"
                  alt="Iphone 12 Pro Max"
                  src={""}
                />
                <h3>Iphone 12 Pro Max</h3>
                <p>Brand new Iphone 12 Pro Max</p>
                <p>
                  <Button variant="primary">Add to Cart</Button>
                </p>
              </Col>
              <Col className="mr-5">
                <Image
                  className="image ml-5"
                  alt="Iphone 12 Pro Max"
                  src={""}
                />
                <h3>Iphone 12 Pro Max</h3>
                <p>Brand new Iphone 12 Pro Max</p>
                <p>
                  <Button variant="primary">Add to Cart</Button>
                </p>
              </Col>
            </Row>
          </Jumbotron>
        </div>
    )
}

export default BestSeller
