import React from "react";
import styles from './dashBoard.module.scss'
import Header from "./header";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
const DashboardLayout = () => {
  return (
    <div className={styles.dashBoardWrapper}>
      {/* Static Header */}
      <div className={`${styles.headerColor} text-white p-3`}>
        <Header />
      </div>
      <div className={styles.bottomContainer}>
        <div className={styles.sideRowWrapper}>
          <SideBar />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
