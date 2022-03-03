import axios from "axios";
import { useState, useEffect } from "react";
import Product from "../pages/Product";
import ProductList from "./ProductList";

const Products = () => {
  const [fakeStore, setFakeStore] = useState([]);
  console.log(fakeStore);

  useEffect(async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setFakeStore(res.data);
  }, []);
  return (
    <div>
      <ProductList fakeStore={fakeStore} />
    </div>
  );
};

export default Products;
