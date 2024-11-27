import React, { useContext } from "react";
import { AuthContext } from "../../context/Index";
import { Navigate } from "react-router-dom";

const Routee = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if(loading) return <h1>Loading! Please Wait</h1>

  if (user) return children;
  return <Navigate to={"/login"} />;
};

export default Routee;
