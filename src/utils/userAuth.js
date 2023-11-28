import axiosSecure from "../Hooks/UseAxiosSecure";



export const saveUser=async user=>{
 const currentUser={
  name:user.displayName,
  email:user.email,
  photo:user.photoURL,
  role:'tourist',
 }

 const {data}=await axiosSecure.put(`/users/${user?.email}`,currentUser)
 return data;
}


export const setToken=async(email)=>{
 const {data}=await axiosSecure.post(`/jwt`,email)
 return data;
}

export const removeToken=async()=>{
 const {data}=await axiosSecure.get('/logout')
 return data;
}