import React from 'react'
import styles from "../dashboardhome.module.scss";
import { useNavigate } from 'react-router-dom';
const AdminHeader = () => {
       const Navigate = useNavigate();
  return (
    <>
      <div className={styles.userDetailsWrapper}>
        <h1 className={styles.bookedSlotText}>My Slots</h1>
        <div className={styles.buttonDiv}>
          <button className={styles.bookSlotButton}>Refresh</button>
          <button
            className={styles.bookSlotButton}
            onClick={() => Navigate("/AddStudent")}
          >
            Add Student
          </button>
          <button
            className={styles.bookSlotButton}
            onClick={() => Navigate("/AddTutor")}
          >
            Add Tutor
          </button>
        </div>
      </div>
    </>
  );
}

export default AdminHeader