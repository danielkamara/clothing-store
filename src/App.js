import "./App.css";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Products from "./components/Products";
import Product from "./pages/Product";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Women from "./pages/Women";
import Men from "./pages/Men";
import Jewelry from "./pages/Jewelry";
import Electronics from "./pages/Electronics";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Products} />
        <Route exact path="/home" component={Products} />
        <Route exact path="/products" component={Products} />
        <Route path="/products/product" component={Product} />

        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/women" component={Women} />
        <Route path="/men" component={Men} />
        <Route path="/jewelry" component={Jewelry} />
        <Route path="/electronics" component={Electronics} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
