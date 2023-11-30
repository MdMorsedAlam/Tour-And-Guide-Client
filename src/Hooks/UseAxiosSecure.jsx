import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "https://tourist-guide-server-ivory.vercel.app",
  withCredentials: true,
});

export default axiosSecure;
