import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://tourist-guide-server-ivory.vercel.app",
});

const UseAxiosPublic = () => {
  return axiosPublic;
};

export default UseAxiosPublic;
