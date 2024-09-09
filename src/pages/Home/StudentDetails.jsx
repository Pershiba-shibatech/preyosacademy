import React from 'react'
import styles from "./dashboardhome.module.scss";
import { Icon } from "@iconify/react";
const StudentDetails = () => {
  return (
    <>
      <div className={styles.userDetailsWrapper}>
        {/* Left Side: Profile Image and Details */}
        <div className={styles.profileSection}>
          {/* <img src={profilePic} alt="Profile" className={styles.profileImage} /> */}
          <Icon
            icon="ei:user"
            width="80"
            height="80"
            // style={{ color: "#fff" }}
          />
          <div className={styles.profileDetails}>
            <div className={styles.name}>John Doe</div>
            <div className={styles.grade}>Grade: A</div>
            <div className={styles.country}>Country: USA</div>
          </div>
        </div>

        {/* Right Side: Book Slot Button */}
        <div>
          <button className={styles.bookSlotButton}>Refresh</button>
          <button className={styles.bookSlotButton}>Book Slot</button>
        </div>
      </div>
    </>
  );
}

export default StudentDetails