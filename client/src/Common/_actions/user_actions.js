import axios from "axios";
import {
  LOGIN_USER,
  REGISTER_USER,
  AUTH_USER,
  ADD_TO_CART_USER,
  GET_CART_ITEMS_USER,
  REMOVE_CART_ITEM_USER,
  ON_SUCCESS_BUY_USER,
  CHANGE_MY_CONDITION,
} from "./types";
import { MYSQL_USER_SERVER, MONGO_USER_SERVER } from "../Config";

// dataToSubmit.db : true => SNS
// dataToSubmit.db : false => SHOP

export function registerUser(dataToSubmit) {
  let request = {};
  if (dataToSubmit.db) {
    request = axios
      .post(`${MYSQL_USER_SERVER}/register`, dataToSubmit)
      .then((response) => response.data);
  } else {
    request = axios
      .post(`${MONGO_USER_SERVER}/register`, dataToSubmit)
      .then((response) => response.data);
  }

  return {
    type: REGISTER_USER,
    payload: request,
  };
}

export function loginUser(dataToSubmit) {
  let request = {};
  if (dataToSubmit.db) {
    request = axios
      .post(`${MYSQL_USER_SERVER}/login`, dataToSubmit)
      .then((response) => response.data);
  } else {
    request = axios
      .post(`${MONGO_USER_SERVER}/login`, dataToSubmit)
      .then((response) => response.data);
  }

  return {
    type: LOGIN_USER,
    payload: request,
  };
}

export function auth(database) {
  let request = {};
  if (database) {
    request = axios
      .get(`${MYSQL_USER_SERVER}/auth`, database)
      .then((response) => response.data);
  } else {
    request = axios
      .get(`${MONGO_USER_SERVER}/auth`, database)
      .then((response) => response.data);
  }

  return {
    type: AUTH_USER,
    payload: request,
  };
}

export function addToCart(_id) {
  const request = axios
    .get(`${MONGO_USER_SERVER}/addToCart?productId=${_id}`)
    .then((response) => response.data);

  return {
    type: ADD_TO_CART_USER,
    payload: request,
  };
}

export function getCartItems(cartItems, userCart) {
  const request = axios
    .get(`/api/mongo/product/products_by_id?id=${cartItems}&type=array`)
    .then((response) => {
      userCart.forEach((cartItem) => {
        response.data.forEach((productDetail, i) => {
          if (cartItem.id === productDetail._id) {
            response.data[i].quantity = cartItem.quantity;
          }
        });
      });

      return response.data;
    });

  return {
    type: GET_CART_ITEMS_USER,
    payload: request,
  };
}

export function removeCartItem(id) {
  const request = axios
    .get(`/api/mongo/users/removeFromCart?_id=${id}`)
    .then((response) => {
      response.data.cart.forEach((item) => {
        response.data.cartDetail.forEach((k, i) => {
          if (item.id === k._id) {
            response.data.cartDetail[i].quantity = item.quantity;
          }
        });
      });
      return response.data;
    });

  return {
    type: REMOVE_CART_ITEM_USER,
    payload: request,
  };
}

export function onSuccessBuy(data) {
  const request = axios
    .post(`${MONGO_USER_SERVER}/payment/successBuy`, data)
    .then((response) => response.data);

  return {
    type: ON_SUCCESS_BUY_USER,
    payload: request,
  };
}

export function registerMysql(data) {
  const request = axios
    .post(`${MONGO_USER_SERVER}/register`, data)
    .then((response) => response.data);

  return {
    type: ON_SUCCESS_BUY_USER,
    payload: request,
  };
}

export function getCart(data) {
  let request = axios
      .get(`${MONGO_USER_SERVER}/sns/getMongo`, data)
      .then((response) => response.data);

  return {
    type: AUTH_USER,
    payload: request,
  };
}

export function getHistory(data) {
  let request = axios
      .get(`${MONGO_USER_SERVER}/payment/getHistory`, data)
      .then((response) => response.data);

  return {
    type: AUTH_USER,
    payload: request,
  };
}

export function onChangeMyCondition(data) {
  const request = axios
    .post(`${MYSQL_USER_SERVER}/condions/write`, data)
    .then((response) => response.data);

  return {
    type: CHANGE_MY_CONDITION,
    payload: request,
  };
}
