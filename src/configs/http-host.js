import axios from "axios";

export const http_request = axios.create({
  baseURL: `https://us-central1-heartlink-dating-project.cloudfunctions.net/app/`,
  headers: {
    Authorization: `Basic ${localStorage.getItem("accessToken")}`,
  },
});
