import React from "react";
import {  Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./dashBoard.module.scss";
import BookSlotModal from "../../components/Modals/BookSlotModal/BookSlotModal";
import { useSelector } from "react-redux";
const SideBar = () => {
  const [modalShow, setModalShow] = React.useState(false);
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

            <Nav.Link
              className={styles.navLink}
              as={Link}
              onClick={() => setModalShow(true)}
            >
              Book Slots
            </Nav.Link>
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
              className={`${styles.navLink} ${styles.NavlinkActive}`}
              as={Link}
              to="/dashboard"
            >
              My slots
            </Nav.Link>

            <Nav.Link
              className={styles.navLink}
              as={Link}
              onClick={() => setModalShow(true)}
              to="/dashboard/allSlots"
            >
              All Slots
            </Nav.Link>
            <Nav.Link
              className={styles.navLink}
              as={Link}
              to="/dashboard/library"
            >
              Library
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

            <Nav.Link
              className={styles.navLink}
              as={Link}
              onClick={() => setModalShow(true)}
            >
              Book Slots
            </Nav.Link>
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
      <BookSlotModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default SideBar;
