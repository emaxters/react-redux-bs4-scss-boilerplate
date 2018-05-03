import axios from "axios";
import { showLoading, hideLoading } from 'react-redux-loading-bar';
export const LOAD_INIT_DATA = "LOAD_INIT_DATA";
export const SHOW_NOTIFICATION = "SHOW_NOTIFICATION";
export const CLEAR_NOTIFICATION = "CLEAR_NOTIFICATION";

export const loadInitData = scope => (dispatch) => {
  const url = 'https://jsonplaceholder.typicode.com/posts/1';
  dispatch(showLoading(scope));
  axios.get(url).then(({ data }) => {
    //dispatch(hideLoading(scope));
    dispatch({
      type: SHOW_NOTIFICATION,
      payload: { type: "success", message: "Data loaded successfully" }
    });
    dispatch({
      type: LOAD_INIT_DATA,
      payload: data
    });
  });
}

export const clearNotification = function () {
  return ({
    type: CLEAR_NOTIFICATION,
    payload: null
  });
}

export const login = scope => (dispatch) => {
  dispatch({
    type: SHOW_NOTIFICATION,
    payload: { type: "success", message: "Login success" }
  });
}

export const fbLogin = scope => (dispatch) => {
  dispatch({
    type: SHOW_NOTIFICATION,
    payload: { type: "success", message: "FB Login success" }
  });
}

export const googleLogin = scope => (dispatch) => {
  dispatch({
    type: SHOW_NOTIFICATION,
    payload: { type: "success", message: "Google Login success" }
  });
}