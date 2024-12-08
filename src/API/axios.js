import axios from "axios";
const axiosInstance = axios.create({
  // baseURL: "http://localhost:4050",
  // deployed api link
  baseURL:"https://amazon-api-deploy-hydg.onrender.com/"
});

export { axiosInstance };
