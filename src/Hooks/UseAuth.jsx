import { useContext } from "react";
import { MyContext } from "../Providers/AuthProvider";


const UseAuth = () => {
 const auth=useContext(MyContext)
 return auth;
};

export default UseAuth;