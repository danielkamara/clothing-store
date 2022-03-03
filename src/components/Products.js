import axios from "axios";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Products = () => {
  const [fakeStore, setFakeStore] = useState([]);
  console.log(fakeStore);

  useEffect(async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setFakeStore(res.data);
  }, []);
  return (
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
  );
};

export default Products;
