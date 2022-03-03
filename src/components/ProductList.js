import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductList = ({ fakeStore }) => {
  return (
    <>
      <h1>Products</h1>
      <div className="container">
        {fakeStore.map((product) => {
          return (
            <div key={product.id}>
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
    </>
  );
};

export default ProductList;
