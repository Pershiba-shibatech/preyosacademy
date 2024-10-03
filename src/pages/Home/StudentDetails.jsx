import React from "react";
import styles from "./dashboardhome.module.scss";
import BookSlotModal from "../../components/Modals/BookSlotModal/BookSlotModal";
// import { Icon } from "@iconify/react";
const StudentDetails = () => {
    const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <div className={styles.userDetailsWrapper}>
     
        <h1 className={styles.bookedSlotText}>Booked Slots</h1>
        <div className={styles.buttonDiv}>
          <button className={styles.bookSlotButton}>Refresh</button>
          <button
            className={styles.bookSlotButton}
            onClick={() => setModalShow(true)}
          >
            Book Slot
          </button>
        </div>
        <BookSlotModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
    </>
  );
};

export default StudentDetails;
