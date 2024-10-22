import React from "react";
import {  Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import styles from "./dashBoard.module.scss";

import { useSelector } from "react-redux";
const SideBar = () => {
  const location = useLocation();
  const pathname = location.pathname;

  let userDetails = useSelector((state) => state.userDetails);
  const { userType } = userDetails.loggedInUserDetails;

  return (
    <div className={styles.sidebarmainWrapper}>
      {/* Left Sidebar */}
      <div className={`${styles.sidebarWrapper}`}>
        {userType === "Student" && (
          <Nav className="flex-column">
            <Nav.Link
              className={`${styles.navLink} ${styles.NavlinkActive}`}
              as={Link}
              to="/dashboard"
            >
              Home
            </Nav.Link>

            {/* <Nav.Link
              className={styles.navLink}
              as={Link}
              onClick={() => setModalShow(true)}
            >
              Book Slots
            </Nav.Link> */}
            <Nav.Link
              className={styles.navLink}
              as={Link}
              to="/dashboard/library"
            >
              Library
            </Nav.Link>
          </Nav>
        )}
        {userType === "Admin" && (
          <Nav className="flex-column">
            <Nav.Link
              className={pathname === "/dashboard" ? `${styles.navLink} ${styles.NavlinkActive}` : styles.navLink}
              as={Link}
              to="/dashboard"
            >
              My slots
            </Nav.Link>

            <Nav.Link
              className={pathname === "/dashboard/allSlots" ? `${styles.navLink} ${styles.NavlinkActive}` :styles.navLink}
              as={Link}
              // onClick={() => setModalShow(true)}
              to="/dashboard/allSlots"
            >
              All Slots
            </Nav.Link>
            <Nav.Link
              className={pathname === "/dashboard/library" ? `${styles.navLink} ${styles.NavlinkActive}` : styles.navLink}

              as={Link}
              to="/dashboard/library"
            >
              Library
            </Nav.Link>
            <Nav.Link
              className={pathname === "/dashboard/studentlist" ? `${styles.navLink} ${styles.NavlinkActive}` : styles.navLink}

              as={Link}
              // onClick={() => setModalShow(true)}
              to="/dashboard/studentlist"
            >
              Students list
            </Nav.Link>
            <Nav.Link
              className={pathname === "/dashboard/tutorlist" ? `${styles.navLink} ${styles.NavlinkActive}` : styles.navLink}

              as={Link}
              to="/dashboard/tutorlist"
            >
              Tutor list
            </Nav.Link>
          </Nav>
        )}
        {userType === "Tutor" && (
          <Nav className="flex-column">
            <Nav.Link
              className={`${styles.navLink} ${styles.NavlinkActive}`}
              as={Link}
              to="/dashboard"
            >
              Home
            </Nav.Link>

            {/* <Nav.Link
              className={styles.navLink}
              as={Link}
             
            >
              Book Slots
            </Nav.Link> */}
            <Nav.Link
              className={styles.navLink}
              as={Link}
              to="/dashboard/library"
            >
              Library
            </Nav.Link>
          </Nav>
        )}
      </div>
    </div>
  );
};

export default SideBar;
