import { Card, Button } from "react-bootstrap";

const ProductList = ({ fakeStore }) => {
  return (
    <>
      <h1>The Fit</h1>
      <div className="box">
        {fakeStore.map((product) => {
          return (
            <>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title>{product.title.substring(0, 12)}...</Card.Title>
                  <Card.Text>${product.price}</Card.Text>
                  <Button variant="outline-secondary">Add To Cart</Button>
                </Card.Body>
              </Card>
            </>
          );
        })}
      </div>
    </>
  );
};

export default ProductList;
