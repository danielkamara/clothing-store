import { connect } from "react-redux";

import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cart = ({ fakeStore }) => {
  return (
    <div>
      {fakeStore.map((product) => {
        return (
          <div>
            <Card style={{ width: "18rem" }}>
              <Link to={`/product/${product}`}>
                <Card.Img variant="top" src={product.image} />
              </Link>
              <Card.Body>
                <Link to={`/product/${product.title}`}>
                  <Card.Title>{product.title.substring(0, 12)}...</Card.Title>
                </Link>
                <Card.Text>
                  <>
                    <strong>$ {product.price}</strong>
                  </>
                </Card.Text>
                <Button variant="outline-secondary">Add To Cart</Button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  fakeStore: state.product,
});
export default connect(mapStateToProps, {})(Cart);
