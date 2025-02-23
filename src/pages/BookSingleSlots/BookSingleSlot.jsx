import React, { useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import styles from "./bookslots.module.scss";
import BookingSlotModel from "../../components/Modals/BookingSlotModel";
import { getAvailableSingleSlots } from "../../store/api/GetAvailableSlotsService";
import { useDispatch, useSelector } from "react-redux";
import { BookedSlotsSliceActions } from "../../store/slice/BookSlotsslice";

const BookSingleSlot = () => {
  const dispatch = useDispatch();
  //const [modalShow, setModalShow] = React.useState(false);
  const subjectModelDetails = useSelector((state) => state.subjectModelData);
  const AllAvailableSlotsDetails = useSelector((state) => state.AllAvailableSlotsDetails);

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
    dispatch(BookedSlotsSliceActions.setSlotType('single'))
    dispatch(BookedSlotsSliceActions.setSelectedStot(slot))
  };


  useEffect(() => {
    
    dispatch(getAvailableSingleSlots({ subject: subjectModelDetails.selectedSubject, date: subjectModelDetails.Date, day: subjectModelDetails.Scheduleday }))
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <div className={styles.bookSlotWrapper}>
      <div className={styles.bookSlotsHeading}>{`Book single Slots for ${subjectModelDetails.selectedSubject}` }</div>
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
            {AllAvailableSlotsDetails?.AvailableSingleSlots?.map((item, index) => (
              <tr key={index}>
                <td>{`${item?.slotDatails?.day} - ${item?.slotDatails?.from} - ${item?.slotDatails?.to}`}</td>
                <td>{item?.tutorDetails?.tutorName}</td>
                <td>{subjectModelDetails.selectedSubject}</td>
                {/* <td>{item.payment}</td> */}
                <td>
                  <Button
                    variant="danger"
                    className={styles.bookButton}
                    onClick={() => handleBookSlot(item)}
                  >
                    Book single slot
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

export default BookSingleSlot;
