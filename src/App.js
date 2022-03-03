import "./App.css";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Products from "./components/Products";
import Product from "./pages/Product";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Route exact path="/" component={Home} />
      <Route path="/products/:product" component={Product} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Products />

      <Footer />
    </div>
  );
}

export default App;
