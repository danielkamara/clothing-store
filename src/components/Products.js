import { useEffect } from "react";
import { connect } from "react-redux";
import { getProducts } from "../actions/actions";
import Product from "./Product";

const mapStateToProps = (state) => {
  return {
    fakeStore: state.products,
  };
};

const Products = (props) => {
  useEffect(() => {
    props.getProducts();
  }, []);
  return (
    <div className="container">
      {props.fakeStore.map((product) => (
        <Product product={product} />
      ))}
    </div>
  );
};

export default connect(mapStateToProps, { getProducts })(Products);
