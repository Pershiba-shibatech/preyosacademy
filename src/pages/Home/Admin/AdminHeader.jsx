import React from 'react'
import styles from "../dashboardhome.module.scss";
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllBookedSlotsActions } from '../../../store/slice/AllBookedSlotsSlice';
import { GetBookedSlots } from '../../../store/api/BookSlotsByTutor';
const AdminHeader = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const pathname = location.pathname;
  let userDetails = useSelector((state) => state.userDetails);
  const { userType } = userDetails.loggedInUserDetails;
  const data = {
    type: pathname === "/dashboard/allSlots" ? "Admin" : pathname === '/dashboard' && userType === "Admin" ? 'Tutor' : userType,
    studenUsercode: userType === "Student" ? userDetails.loggedInUserDetails.userCode : '',
    tutorUsercode: userType !== "Student" ? userDetails.loggedInUserDetails.userCode : ''
  }
  return (
    <>
      <div className={styles.userDetailsWrapper}>
        <h1 className={styles.bookedSlotText}>My Slots</h1>
        <div className={styles.buttonDiv}>
          <button className={styles.bookSlotButton} onClick={() => { dispatch(GetAllBookedSlotsActions.setLoading(true)); dispatch(GetBookedSlots(data)) }}>Refresh</button>
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