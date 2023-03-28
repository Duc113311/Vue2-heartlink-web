import axios from "axios";

export const http_mongo = axios.create({
  baseURL: `http://159.223.53.162/`,
  headers: {
    "Content-Type": "application/json",
    "Accept-Language": "en",
    "Content-Transfer-Encoding": "bachaxPPsb9SCaz7TVJsda7cCD5sshsoft",
    Authorization: `Bearer ${localStorage.getItem("tokenId")}`,
  },
  withCredentials: false,
});
