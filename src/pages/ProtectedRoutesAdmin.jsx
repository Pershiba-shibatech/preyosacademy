import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRouteForAdmin = ({ children }) => {
  let usertype = useSelector((state) => state.userDetails);


  return usertype.loggedInUserDetails.userType === "Admin" ? (
    children
  ) : (
    <Navigate to="/dashboard" replace />
  );
};

export default ProtectedRouteForAdmin;
