import axios from "axios";

// https://github.com/axios/axios#creating-an-instance
export const adapter = axios.create({
  baseURL: "http://localhost:4000",
});