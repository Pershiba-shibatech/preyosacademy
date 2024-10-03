import React, { useState } from "react";
import { Image, Dropdown } from "react-bootstrap";
import { preyosLogo } from "../../images";
import { Icon } from "@iconify/react";
import styles from "./dashBoard.module.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";


const Header = () => {
     const Navigate = useNavigate();
      const dispatch = useDispatch();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleToggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleDropdownItemClick = (item) => {
    setShowDropdown(false); 
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
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

          <Dropdown show={showDropdown} onToggle={handleToggleDropdown}>
            <Dropdown.Toggle
              as={Icon}
              icon="ei:user"
              width="66"
              height="66"
              style={{ color: "#fff" }}
              onClick={handleToggleDropdown}
            />
            <Dropdown.Menu align="end" className={styles.dropdownmenu}>
              <Dropdown.Item
                className={styles.dropdownitem}
                onClick={() => handleDropdownItemClick("Profile Details")}
              >
                Profile Details
              </Dropdown.Item>
              <Dropdown.Item
                className={styles.dropdownitem}
                onClick={() =>{  dispatch({ type: "RESET_STORE" }); Navigate('/')}}
              >
                Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </>
  );
};

export default Header;
