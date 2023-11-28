import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "http://localhost:2737",
});

const UseAxiosPublic = () => {
  return axiosPublic;
};

export default UseAxiosPublic;
