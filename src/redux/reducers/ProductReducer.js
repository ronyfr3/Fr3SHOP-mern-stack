import {
  PRODUCTS_LIST_REQUEST,
  PRODUCTS_LIST_SUCCESS,
  PRODUCTS_LIST_FAIL,
  PRODUCTS_DETAILS_REQUEST,
  PRODUCTS_DETAILS_SUCCESS,
  PRODUCTS_DETAILS_FAIL,
  CREATE_PRODUCTS,
  UPDATE_PRODUCTS,
  DELETE_PRODUCTS
} from "../constants/ProductConstant";

//all product reducer
export const ProductReducer = (
  state = { loading: true , products: []},
  action
) => {
  switch (action.type) {
    case PRODUCTS_LIST_REQUEST:
      return { loading: true };
    case PRODUCTS_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCTS_LIST_FAIL:
      return { loading: false, error: action.payload };
      case CREATE_PRODUCTS:
      return { products: [...state.products, action.payload] };
    case UPDATE_PRODUCTS:
      return {products: state.products.map((product) => (product._id === action.payload._id ? action.payload : state.products))};
    case DELETE_PRODUCTS:
      return {products: state.products.filter((product) => product._id !== action.payload)}
    default:
      return state;
  }
};

//single product reducer
export const ProductDetailsReducer = (
  //products:[] for array of products products:{} one single product object
  state = { loading: true , product: {}},
  action
) => {
  switch (action.type) {
    case PRODUCTS_DETAILS_REQUEST:
      return { loading: true };
    case PRODUCTS_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };
    case PRODUCTS_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
