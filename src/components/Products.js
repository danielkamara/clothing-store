import axios from "axios";
import { useState, useEffect } from "react";
import ProductList from "./ProductList";

const Products = () => {
  const [fakeStore, setFakeStore] = useState([]);
  console.log(fakeStore);

  useEffect(async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setFakeStore(res.data);
  }, []);
  return <ProductList fakeStore={fakeStore} />;
};

export default Products;
