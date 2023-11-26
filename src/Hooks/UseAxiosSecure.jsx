import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "http://localhost:2737",
  withCredentials: true,
});

export default axiosSecure;
