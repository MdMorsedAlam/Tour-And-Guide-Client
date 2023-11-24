import {
 createBrowserRouter,
 RouterProvider,
} from "react-router-dom";
import PropTypes from 'prop-types'; 
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";

const myRoute=createBrowserRouter([
 {
  path:'/',
  element:<MainLayout/>,
  children:[
   {
    path:'/',
    element:<Home/>
   },
   {
    path:'/login',
    element:<Login/>
   }
  ]
 }
])
const MainRoute = ({children}) => {
 return (
  <RouterProvider router={myRoute}>
   {children}
  </RouterProvider>
 );
};
MainRoute.propTypes={
 children:PropTypes.node,
}
export default MainRoute;