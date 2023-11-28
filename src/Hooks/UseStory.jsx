import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "./UseAxiosPublic";

const UseStory = () => {
 const axiosPublic=UseAxiosPublic();
 const {data:storis=[],isLoading:loading,refetch}=useQuery({
  queryKey:['storis'],
  queryFn:async()=>{
   const res=await axiosPublic('/storis')
   return res.data
  }
 })
return [storis,loading,refetch]
};

export default UseStory;