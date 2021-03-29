import axios from "axios";
import store from "../store";

const state = store.getState();

const authToken = state.auth.authenticated;

// const state = store.getState();
export default axios.create({
  baseURL: "http://localhost:3090",
  headers: {
    authorization: authToken,
  },
});
