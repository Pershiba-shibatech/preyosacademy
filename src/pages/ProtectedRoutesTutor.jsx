import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRouteForTutor = ({ children }) => {
  let usertype = useSelector((state) => state.userDetails);


  return usertype.loggedInUserDetails.userType === "Tutor" ? (
    children
  ) : (
    <Navigate to="/dashboard" replace />
  );
};

export default ProtectedRouteForTutor;
