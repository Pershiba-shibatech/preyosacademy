import React from 'react'
import {  Image } from "react-bootstrap";
import { preyosLogo } from "../../images";
import { Icon } from "@iconify/react";
import styles from "./dashBoard.module.scss";
const Header = () => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          {/* Logo and Title */}
          <Image
            src={preyosLogo}
            className={`me-2 ${styles.imageLogo}`}
            alt="Logo"
            height="40"
          />
          <h3 className="mb-0">Preyo's Academy</h3>
        </div>

        <div className="d-flex align-items-center justify-content-between">
          <div>
            <h3 className="mb-0">Nithin Subhanesh</h3>
            <div className={styles.gradeText}>Grade 4</div>
          </div>

          <Icon
            icon="ei:user"
            width="66"
            height="66"
            style={{ color: "#fff" }}
          />
        </div>
      </div>
    </>
  );
}

export default Header;