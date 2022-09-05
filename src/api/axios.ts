import axios, { AxiosInstance } from "axios";

const instance: AxiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const TokenizedInstance :(token:string) => AxiosInstance =  (token) => axios.create({
  baseURL: "http://127.0.0.1:8000/",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
    "Authorization" : `Bearer ${token}`
  },
})

export default instance;
