import { useEffect } from "react";
import { Button, Jumbotron, Row, Col, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import "./viewMore.style.css";

import { displayProduct } from "../../pages/products/ProductsAction";

const BestSeller = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { productList } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(displayProduct());
  }, [dispatch]);

  return (
    <div>
      <Jumbotron>
        <h3 className="heading py-1 text-center font-weight-bold">Shop More</h3>
        <Row className="viewMore">
          {productList.map((row, i) => (
            <Col>
              <Image
                className="image ml-5"
                alt="Iphone 12 Pro Max"
                src={productList[i].images}
                width="150px"
                height="auto"
              />
              <h3>{productList[i].name}</h3>
              <p>{productList[i].description}</p>
              <p>
                <Button
                  variant="primary"
                  onClick={() =>
                    history.push(`/products/${productList[i].slug}`)
                  }
                >
                  Shop Now
                </Button>
              </p>
            </Col>
          ))}
        </Row>
      </Jumbotron>
    </div>
  );
};

export default BestSeller;
