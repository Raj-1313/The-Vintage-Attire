import axios from "axios";
import * as types from "./Cart.actionTypes";

const getCartData = (userMail) => (dispatch) => {
  dispatch({ type: types.CART_REQUEST });
  return axios
    .get(`https://vintage-attire-deploy.onrender.com/cart`, {
      headers: { userMail: userMail },
    })
    .then((res) => {
      dispatch({ type: types.CART_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: types.CART_FAILURE });
    });
};

const addToCartData = (prodId, userMail) => (dispatch) => {
  return axios
    .post(`https://vintage-attire-deploy.onrender.com/cart`, {
      prodId: prodId,
      userMail: userMail,
    })
    .then((res) => {
      dispatch(getCartData(userMail));
    });
};

const findTotalSum = (cartData = []) => {
  const subTotalAmt = cartData?.reduce((total, item) => {
    total += item.count * item.data[0].price;
    return total;
  }, 0);
  return subTotalAmt;
};

const incrementCartCount = (prodId, userMail) => (dispatch) => {
  console.log(prodId, userMail);
  dispatch({ type: types.BTN_INC_REQUEST });
  return axios
    .post(`https://vintage-attire-deploy.onrender.com/cart`, {
      prodId: prodId,
      userMail: userMail,
    })
    .then((res) => {
      dispatch({ type: types.BTN_INC_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: types.BTN_INC_FAILURE });
    });
};

const decrementCartCount = (prodId, userMail) => (dispatch) => {
  console.log(prodId, userMail);
  dispatch({ type: types.BTN_INC_REQUEST });
  return axios
    .post(`https://vintage-attire-deploy.onrender.com/cart/dec`, {
      prodId: prodId,
      userMail: userMail,
    })
    .then((res) => {
      dispatch({ type: types.BTN_INC_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: types.BTN_INC_FAILURE });
    });
};

const deleteCartItem = (id) => (dispatch) => {
  
  return axios
    .delete(`https://vintage-attire-deploy.onrender.com/cart/${id}`)
    .then((res) => {
    })
    .catch((err) => {
    });
};

export {
  getCartData,
  findTotalSum,
  incrementCartCount,
  decrementCartCount,
  deleteCartItem,
  addToCartData,
};
