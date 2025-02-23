import React from "react";
import styles from "./dashboardhome.module.scss";
//import BookSlotModal from "../../components/Modals/BookSlotModal";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetBookedSlots } from "../../store/api/BookSlotsByTutor";
// import { Icon } from "@iconify/react";
const StudentDetails = () => {
   // const [modalShow, setModalShow] = React.useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  let userDetails = useSelector((state) => state.userDetails);
  const { userType } = userDetails.loggedInUserDetails;
  const dispatch = useDispatch();
    const refrestSlots=()=>{
      const data = {
        type: pathname === "/dashboard/allSlots" ? "Admin" : pathname === '/dashboard' && userType === "Admin" ? 'Tutor' : userType,
        studenUsercode: userType === "Student" ? userDetails.loggedInUserDetails.userCode : '',
        tutorUsercode: userType !== "Student" ? userDetails.loggedInUserDetails.userCode : ''
      }
      dispatch(GetBookedSlots(data))
    }

  return (
    <>
      <div className={styles.userDetailsWrapper}>
     
        <h1 className={styles.bookedSlotText}>Booked Slots</h1>
        <div className={styles.buttonDiv}>
          <button className={styles.bookSlotButton} onClick={() => refrestSlots()} >Refresh</button>
          {/* <button
            className={styles.bookSlotButton}
            onClick={() => setModalShow(true)}
          >
            Book Slot
          </button> */}
        </div>
     
      </div>
    </>
  );
};

export default StudentDetails;
