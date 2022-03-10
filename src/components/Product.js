import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addProduct } from "../actions/actions";

const Product = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    props.addProduct(props.product);
  };
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Link to={`/product/${props.product}`}>
          <Card.Img variant="top" src={props.product.image} />
        </Link>
        <Card.Body>
          <Link to={`/product/${props.product.title}`}>
            <Card.Title>{props.product.title.substring(0, 12)}...</Card.Title>
          </Link>
          <Card.Text>
            <>
              <strong>$ {props.product.price}</strong>
            </>
          </Card.Text>
          <Button
            id={props.product.id}
            onClick={handleClick}
            variant="outline-secondary"
          >
            Add To Cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default connect(null, { addProduct })(Product);
