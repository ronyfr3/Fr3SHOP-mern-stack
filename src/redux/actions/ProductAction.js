import {
  PRODUCTS_LIST_SUCCESS,
  PRODUCTS_LIST_FAIL,
  PRODUCTS_DETAILS_REQUEST,
  PRODUCTS_DETAILS_SUCCESS,
  PRODUCTS_DETAILS_FAIL,
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CREATE_PRODUCTS,
  DELETE_PRODUCTS,
  UPDATE_PRODUCTS,
  CREATE_FAIL,
  UPDATE_FAIL,
  DELETE_FAIL
} from "../constants/ProductConstant";

import * as api from "../api";
// export const fetchProducts = () => axios.get(url);
// export const fetchSingleProduct = (id) => axios.get(`${url}/${id}`);
// export const createProducts = (newProduct) => axios.post(url, newProduct);
// export const deleteProducts = (id) => axios.delete(`${url}/${id}`);
// export const updateProducts = (id) => axios.patch(`${url}/${id}`);

//CREATE_PRODUCTS
export const createProduct = (product) => async (dispatch) => {
  try {
    const { data } = await api.createProducts(product);

    dispatch({ type: CREATE_PRODUCTS, payload: data });
  } catch (error) {
    dispatch({
      type: CREATE_FAIL,
      payload: error.response.data.message,
    });
  }
};
//UPDATE_PRODUCTS
export const updateProduct = (id, product) => async (dispatch) => {
  try {
    const { data } = await api.updateProducts(id, product);

    dispatch({ type: UPDATE_PRODUCTS, payload: data });
  } catch (error) {
    dispatch({
      type: UPDATE_FAIL,
      payload: error.response.data.message,
    });
  }
};
//DELETE_PRODUCTS
export const deleteProduct = (id) => async (dispatch) => {
  try {
    await api.deleteProducts(id);

    dispatch({ type: DELETE_PRODUCTS, payload: id });
  } catch (error) {
    dispatch({
      type: DELETE_FAIL,
      payload: error.response.data.message,
    });
  }
};
//GET_ALL_PRODUCTS_FROM BACKEND
export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchProducts();
    // console.log(data)
    dispatch({
      type: PRODUCTS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCTS_LIST_FAIL,
      payload: error.message,
    });
  }
};

//GET_SINGLE_PRODUCT_FROM BACKEND

// export const PRODUCTS_DETAILS_REQUEST="PRODUCTS_DETAILS_REQUEST"
// export const PRODUCTS_DETAILS_SUCCESS="PRODUCTS_DETAILS_SUCCESS"
// export const PRODUCTS_DETAILS_FAIL="PRODUCTS_DETAILS_FAIL"
export const getSingleProduct = (id) => async (dispatch) => {
  dispatch({
    type: PRODUCTS_DETAILS_REQUEST,
    payload: id,
  });
  try {
    //single product object ==>data
    const { data } = await api.fetchSingleProduct(id);
    // console.log(data)
    dispatch({
      type: PRODUCTS_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCTS_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    // set error.response.data.message only it will works fine--->product not found
    //error.message is server error--> Request Failed With Status Code 404
    //error.response is browser error-->Error: Objects are not valid as a React child (found: object with keys
    //error.response.data.message is actual backend error which you have set-->product not found
  }
};

//ADD_TO_CART function
//getState return the current updated state of the cart
export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await api.fetchSingleProduct(id);
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      id: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock:data.price,
      qty,
    },
  });
  localStorage.setItem(
    "cartProduct",
    JSON.stringify(getState().cart.cartItems)
  );
};

//CART_REMOVE_ITEM
export const removeCartItem = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  });
  localStorage.setItem(
    "cartProduct",
    JSON.stringify(getState().cart.cartItems)
  );
};
