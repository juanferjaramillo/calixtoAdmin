import {
  DELETE_PRODUCT,
  GET_ALL_PRODUCTS,
  GET_AUTH_USER,
  LOGOUT
} from "./action-types.js";
import axios from "axios";

//-------------------------Product actions----------------------------
export const getAllProducts = (owner) => {
  //brings all products from db to the state
  return async function (dispatch) {
    let allProds = await axios.get(`/prodsowner/${owner}`);
    allProds = allProds.data;
    //brings all products from db
    const provs = Array.from(new Set(allProds.map((p) => p.provider.name)));
    //Creates an array of providers with no repeated values
    return dispatch({
      type: GET_ALL_PRODUCTS,
      payload: { allProds, provs },
    });
  };
};

export const deleteProduct = (productId) => {
  return async function (dispatch) {
    let updatedProds = await axios.delete(`/product/${productId}`);
    const { data } = updatedProds;
    return dispatch({
      type: DELETE_PRODUCT,
      payload: data,
    });
  }
}

//-------------------------User actions----------------------------
export const getAuthUser = (usr) => {
  //brings one specific user to the state
  return async function (dispatch) {
    let oneUsr = {};
    usr ? (oneUsr = (await axios.get(`/owner/${usr}`)).data) : null;
    sessionStorage.setItem('user', JSON.stringify(oneUsr))
    return dispatch({
      type: GET_AUTH_USER,
      payload: oneUsr,
    });
  };
};

export const logout = () => {
  return {
    type: LOGOUT,

  }
}