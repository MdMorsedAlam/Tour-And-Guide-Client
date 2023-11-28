import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "./UseAxiosPublic";


const UseUsers = () => {
 const axiosPublic=UseAxiosPublic();
 const {data:users=[],isLoading:loading,refetch}=useQuery({
  queryKey:['users'],
  queryFn:async()=>{
   const res=await axiosPublic('/users')
   return res.data
  }
 })
return [users,loading,refetch]
};

export default UseUsers;