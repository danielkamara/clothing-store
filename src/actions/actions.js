import axios from "axios";

export const GET_PRODUCTS_START = "GET_PRODUCTS_START";
export const GET_PRODUCTS_COMPLETE = "GET_PRODUCTS_COMPLETE";
export const GET_PRODUCTS_FAIL = "GET_PRODUCTS_FAIL";

// Action Types
export const ADD_PRODUCT = "ADD PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

// Actions
export const addProduct = (product) => (dispatch) => {
  dispatch({ type: ADD_PRODUCT, payload: product });
};
export const removeProduct = (product) => (dispatch) => {
  dispatch({ type: REMOVE_PRODUCT, payload: product });
};

export const getProducts = () => async (dispatch) => {
  dispatch({ type: GET_PRODUCTS_START });

  try {
    const data = await axios.get("https://fakestoreapi.com/products");
    dispatch({ type: GET_PRODUCTS_COMPLETE, payload: data.message });
  } catch (err) {
    dispatch({ type: GET_PRODUCTS_FAIL, payload: err.message });
  }
};
