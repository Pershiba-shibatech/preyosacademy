import React from 'react'
import styles from "./dashboardhome.module.scss";
import { Icon } from "@iconify/react";
const StudentDetails = () => {
  return (
    <>
      <div className={styles.userDetailsWrapper}>
        {/* Left Side: Profile Image and Details */}
        {/* <div className={styles.profileSection}>
        
          <Icon
            icon="ei:user"
            width="80"
            height="80"
      
          />
          <div className={styles.profileDetails}>
            <div className={styles.name}>John Doe</div>
            <div className={styles.grade}>Grade: A</div>
            <div className={styles.country}>Country: USA</div>
          </div>
        </div> */}
<h1 className={styles.bookedSlotText}>Booked Slots</h1>
        {/* Right Side: Book Slot Button */}
        <div className={styles.buttonDiv}>
          <button className={styles.bookSlotButton}>Refresh</button>
          <button className={styles.bookSlotButton}>Book Slot</button>
        </div>
      </div>
    </>
  );
}

export default StudentDetails