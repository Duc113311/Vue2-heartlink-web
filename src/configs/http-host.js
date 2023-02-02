import axios from "axios";

export const http_request = axios.create({
  baseURL: `http://localhost:5000/heartlink-dating-project/us-central1/app/`,
  headers: {
    Authorization: `Basic ${localStorage.getItem("accessToken")}`,
  },
});
