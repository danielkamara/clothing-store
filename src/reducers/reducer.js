import {
  GET_PRODUCTS_START,
  GET_PRODUCTS_COMPLETE,
  GET_PRODUCTS_FAIL,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
} from "../actions/actions";

const initialState = {
  products: [],
  cart: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      console.log(action.payload);
      // spread state and grab the piece that you need to change
      return {
        ...state,
        product: [action.payload, ...state.product],
      };
    case REMOVE_PRODUCT:
      let newState = state.filter((product) => product !== action.payload);
      return {
        ...state.product,
        product: [newState],
      };
    case GET_PRODUCTS_START:
      return {
        ...state,
        products: [],
        isLoading: true,
      };
    case GET_PRODUCTS_COMPLETE:
      return {
        ...state,
        isLoading: false,
        products: action.payload,
        error: "",
      };
    case GET_PRODUCTS_FAIL:
      return {
        ...state.isLoading,
        isLoading: false,
        ...state.error,
        error: action.payload,
      };
    default:
      return state;
  }
};
