import React from "react";
import styles from "../../Home/dashboardhome.module.scss";
const SlotsHeader = () => {
  return (
    <>
      <div className={styles.userDetailsWrapper}>
        <h1 className={styles.bookedSlotText}>All Slots</h1>
        <div className={styles.buttonDiv}>
          <button className={styles.bookSlotButton}>Refresh</button>
        </div>
      </div>
    </>
  );
};

export default SlotsHeader;
