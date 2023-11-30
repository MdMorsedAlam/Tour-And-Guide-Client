import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "./UseAxiosPublic";
import UseAuth from "./UseAuth";

const useWishlist = () => {
 const { user } = UseAuth();
 const axiosPublic=UseAxiosPublic();
 const {data:wishlist=[],isLoading:loading,refetch}=useQuery({
  queryKey:['wishlist',user?.email],
  queryFn:async()=>{
   const res=await axiosPublic(`/wishlist/${user?.email}`)
   return res.data
  }
 })
return [wishlist,loading,refetch]
};

export default useWishlist;