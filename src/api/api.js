import axios from "axios";
import store from "../store";
import { config } from "../config";

const state = store.getState();

const authToken = state.auth.authenticated;

// const state = store.getState();
export default axios.create({
  baseURL: config.url.API_URL,
  headers: authToken
    ? {
        authorization: authToken,
      }
    : {},
});
