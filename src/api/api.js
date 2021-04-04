import axios from "axios";
import store from "../store";
import { config } from "../config";

const state = store.getState();

const authToken = state.auth.authenticated;

const apiUri = process.env.API_URI ? process.env.API_URI : config.url.API_URL;

// console.log("apiUri: ", apiUri);

// const state = store.getState();
export default axios.create({
  baseURL: apiUri,
  headers: authToken
    ? {
        authorization: authToken,
      }
    : {},
});
