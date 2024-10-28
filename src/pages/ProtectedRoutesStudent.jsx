import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRouteForStudent = ({ children }) => {
  let usertype = useSelector((state) => state.userDetails);


  return usertype.loggedInUserDetails.userType === "Student" ? (
    children
  ) : (
    <Navigate to="/dashboard" replace />
  );
};

export default ProtectedRouteForStudent;
