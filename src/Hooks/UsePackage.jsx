import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "./UseAxiosPublic";

const UsePackage = () => {
 const axiosPublic=UseAxiosPublic();
 const {data:packages=[],isLoading:loading}=useQuery({
  queryKey:['packages'],
  queryFn:async()=>{
   const res=await axiosPublic('/packages')
   return res.data
  }
 })
return [packages,loading]
};

export default UsePackage;