import axios from "axios";

export const http_request = axios.create({
  baseURL: `https://us-central1-heartlink-dating-project.cloudfunctions.net/app/`,
  headers: {
    Accept: "application/json",
    Authorization: `Basic eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJUQjJrMmZUU2t4Wk9uR09vNEZOcHRxQmRBbzkyIiwiaWF0IjoxNjc1NDA5MDE5LCJleHAiOjE2NzgwMDEwMTl9.Rzsjq83HsFrkSd-FNZgjjoRTKA9KwiiyXytW_MGekTg`,
  },
});
