import axios from "axios";

export const http_mongo = axios.create({
  baseURL: `http://159.223.53.162/`,
  headers: {
    "Content-Type": "application/json",
    "Accept-Language": `${localStorage.getItem("language")}`,
    "Content-Transfer-Encoding":
      "XHpoYvOVvdgAaumbachaxPPsb9SCaz7TVJsda7cCD5sshsoftcXoEpFx0vQcqJNi",
    Authorization: `Bearer ${localStorage.getItem("tokenId")}`,
  },
  withCredentials: false,
});
