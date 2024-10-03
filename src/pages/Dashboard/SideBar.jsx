import React from "react";
import {  Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./dashBoard.module.scss";
const SideBar = () => {
  return (
    <div className={styles.sidebarmainWrapper}>
      {/* Left Sidebar */}
      <div className={`${styles.sidebarWrapper}`}>
        <Nav className="flex-column">
          <Nav.Link
            className={`${styles.navLink} ${styles.NavlinkActive}`}
            as={Link}
            to="/dashboard/home"
          >
            Home
          </Nav.Link>
          <Nav.Link
            className={styles.navLink}
            as={Link}
            to="/dashboard/booked-slots"
          >
            Booked Slots
          </Nav.Link>
          <Nav.Link
            className={styles.navLink}
            as={Link}
            to="/dashboard/booked-slots"
          >
            Booked Slots
          </Nav.Link>
          <Nav.Link
            className={styles.navLink}
            as={Link}
            to="/dashboard/booked-slots"
          >
          Library
          </Nav.Link>
        </Nav>
      </div>
     
    </div>
    
  );
};

export default SideBar;
