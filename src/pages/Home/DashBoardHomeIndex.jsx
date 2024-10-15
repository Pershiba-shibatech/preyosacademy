import React from "react";
import styles from "./dashboardhome.module.scss";
import StudentDashBoard from "./Student/StudentDashBoard";
import { useSelector } from "react-redux";
import AdminDashboard from "./Admin/AdminDashboard";
import TutorDashboard from "./TutorDashBoard.jsx/TutorDashboard";

const DashBoardHomeIndex = () => {
  let usertype = useSelector((state) => state.userDetails);
  const { userType } = usertype.loggedInUserDetails;
  return userType === "Student" ? (
    <StudentDashBoard />
  ) : "Admin" ? (
    <AdminDashboard />
  ) : (
    <TutorDashboard />
  );
};

export default DashBoardHomeIndex;
