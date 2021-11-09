import axios from "axios";
import {
  LOGIN_USER,
  REGISTER_USER,
  AUTH_USER,
  LOGOUT_USER,
  ADD_TO_CART_USER,
} from "./types";
import { MYSQL_USER_SERVER, MONGO_USER_SERVER } from "../Config";

// dataToSubmit.db : true => mysql
// dataToSubmit.db : false => mongo

export function registerUser(dataToSubmit) {
  let request = {};
  console.log(dataToSubmit);
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
  console.log(request);
  return {
    type: LOGIN_USER,
    payload: request,
  };
}

export function auth(database) {
  let request = {};
  if (database) {
    console.log(database);
    request = axios
    .get(`${MYSQL_USER_SERVER}/auth`)
    .then((response) => response.data);
  } else {
    console.log(database);
    request = axios
    .get(`${MONGO_USER_SERVER}/auth`)
    .then((response) => response.data);
  }

  return {
    type: AUTH_USER,
    payload: request,
  };
}

export function logoutUser() {
  const request = axios
      .get(`${MONGO_USER_SERVER}/logout`)
      .then((response) => response.data);

  return {
    type: LOGOUT_USER,
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
