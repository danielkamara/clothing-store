import "./App.css";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [fakeStore, setFakeStore] = useState([]);
  console.log(fakeStore);

  useEffect(async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setFakeStore(res.data);
  }, []);

  return (
    <div className="App">
      <NavBar />

      <ProductList fakeStore={fakeStore} />
      <Footer />
    </div>
  );
}

export default App;
