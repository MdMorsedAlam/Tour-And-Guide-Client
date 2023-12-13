import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import UseAuth from "../Hooks/UseAuth";
import Loading from "../Components/Loading/Loading";

const PrivateRoute = ({ children }) => {
  const { loading, user } =UseAuth();
  const location=useLocation();
  if (loading) {
    return <Loading />;
  }

  if (!user) {
    return <Navigate state={location.pathname} to="/login" />;
  }
  return children;
};
PrivateRoute.propTypes = {
  children: PropTypes.node,
};
export default PrivateRoute;
