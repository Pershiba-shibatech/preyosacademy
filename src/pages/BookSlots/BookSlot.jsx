import React, { useEffect, useState } from "react";
import { Table, Pagination, Button } from "react-bootstrap";
import styles from "./bookslots.module.scss";
import BookingSlotModel from "../../components/Modals/BookingSlotModel";
import { getAvailableSlots } from "../../store/api/GetAvailableSlotsService";
import { useDispatch, useSelector } from "react-redux";
import { BookedSlotsSliceActions } from "../../store/slice/BookSlotsslice";

const BookSlot = () => {
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = React.useState(false);
  const subjectModelDetails = useSelector((state) => state.subjectModelData);
  const AllAvailableSlotsDetails = useSelector((state) => state.AllAvailableSlotsDetails);
  console.log(AllAvailableSlotsDetails.AllAvailableSlots)
  const BookSlotsDetails = useSelector((state) => state.BookSlotsDetails);
  // import { BookedSlotsSliceActions } from "../../store/slice/BookSlotsslice";
  const columns = [
    { Header: "Slots", accessor: "slots" },
    { Header: "Tutor", accessor: "tutor" },
    { Header: "Subject", accessor: "subject" },
    { Header: "Action", accessor: "Book" },
  ];

  const handleBookSlot = (slot) => {
    // // Function to handle the booking action
    // setModalShow(true);
    // console.log(`Booking slot: ${slot}`);
    dispatch(BookedSlotsSliceActions.setSelectedStot(slot))
  };


  useEffect(() => {
    
    dispatch(getAvailableSlots({ subject: subjectModelDetails.selectedSubject }))
  
  }, [])
  
  return (
    <div className={styles.bookSlotWrapper}>
      <div className={styles.bookSlotsHeading}>{`Book Slots for ${subjectModelDetails.selectedSubject}` }</div>
      <div className={styles.StudentTableWrapper}>
        <Table bsPrefix={styles.table} striped bordered hover>
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column.Header}>{column.Header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {AllAvailableSlotsDetails?.AllAvailableSlots?.map((item, index) => (
              <tr key={index}>
                <td>{`${item?.slotDatails?.day} - ${item?.slotDatails?.from} - ${item?.slotDatails?.to}`}</td>
                <td>{item.tutorDetails?.tutorName}</td>
                <td>{subjectModelDetails.selectedSubject}</td>
                {/* <td>{item.payment}</td> */}
                <td>
                  <Button
                    variant="danger"
                    className={styles.bookButton}
                    onClick={() => handleBookSlot(item)}
                  >
                    Book slot
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        {/* Pagination Component */}
        {/* <Pagination className={styles.paginationControls}>
          <Pagination.Prev linkClassName={styles.paginationbutton} />
          <Pagination.Item linkClassName={styles.pageCount}>
            {" "}
            {1}
          </Pagination.Item>
          <Pagination.Next linkClassName={styles.paginationbutton} />
        </Pagination> */}
      </div>
      <BookingSlotModel show={BookSlotsDetails.openModel} onHide={()=>dispatch(BookedSlotsSliceActions.setOpenModel())} />
    </div>
  );
};

export default BookSlot;
