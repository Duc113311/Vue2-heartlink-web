import axios from "axios";

export const http_request = axios.create({
  baseURL: `https://us-central1-heartlink-dating-project.cloudfunctions.net/app/`,
  headers: {
    Accept: "application/json",
    Authorization: `Basic eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJBc0NrMmZUU2t4Wk9uR09vNEZOcHRxQmRBbzkyIiwiaWF0IjoxNjc3OTA4Njg3LCJleHAiOjE2ODA1MDA2ODd9.eF5CpZ7I50TqXHaMZbMQL6uKAK3hLRvr6ZSZSaekc7c`,
  },
});
