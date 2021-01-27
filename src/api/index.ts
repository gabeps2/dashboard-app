import axios from "axios";

const api = axios.create({
  baseURL: "https://api.unsplash.com/photos/search/photos?query=",
  headers: {Authorization: "0gj8GjpGyVMzRNJ68zvw1H_zbIPFrwCVKSL4C1WBv88"}
});

export default api;
