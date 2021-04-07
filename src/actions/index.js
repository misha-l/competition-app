// import axios from "axios";
import api from "../api/api";
import { AUTH_USER, AUTH_ERROR } from "./types";

export const signup = (formProps, callback) => async (dispatch) => {
  try {
    const response = await api.post("/signup", formProps);

    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem("token", response.data.token);
    callback();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: "Email in use" });
  }
};

export const signin = (formProps, callback) => async (dispatch) => {
  try {
    const response = await api.post("/signin", formProps);
    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem("token", response.data.token);
    callback();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: "Invalid login credentials" });
  }
};

export const signout = () => {
  localStorage.removeItem("token");

  return {
    type: AUTH_USER,
    payload: "",
  };
};
