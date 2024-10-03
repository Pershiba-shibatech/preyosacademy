import React, { useState } from "react";
import { Table, Pagination, Button } from "react-bootstrap";
import styles from "./bookslots.module.scss";
import BookingSlotModel from "../../components/Modals/BookSlotModal/BookingSlotModel";
const BookSlot = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const exampleData = [
    {
      slots: "11/10/2024 - 10:00 AM - 11:00 AM",
      tutor: "Jane Smith hane hane",
      subject: "Mathematics",
      payment: "10$",
    },
    {
      slots: "11:00 AM - 12:00 PM",
      tutor: "John Doe",
      subject: "Maths",
      subject: "Maths",
      payment: "10$",
    },
    {
      slots: "11:00 AM - 12:00 PM",
      tutor: "John Doe",
      subject: "Maths",
      payment: "10$",
    },
    {
      slots: "11:00 AM - 12:00 PM",
      tutor: "John Doe",
      subject: "Maths",
      payment: "10$",
    },
    {
      slots: "11:00 AM - 12:00 PM",
      tutor: "John Doe",
      subject: "Maths",
      payment: "10$",
    },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const currentData = exampleData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const columns = [
    { Header: "Slots", accessor: "slots" },
    { Header: "Tutor", accessor: "tutor" },
    { Header: "Subject", accessor: "subject" },
    { Header: "Payment", accessor: "payment" },
    { Header: "Action", accessor: "Book" },
  ];

  const handleBookSlot = (slot) => {
    // Function to handle the booking action
    setModalShow(true);
    console.log(`Booking slot: ${slot}`);
  };
  return (
    <div>
      <h1 className={styles.bookSlotsHeading}>Book Slots for Maths</h1>
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
            {currentData.map((item, index) => (
              <tr key={index}>
                <td>{item.slots}</td>
                <td>{item.tutor}</td>
                <td>{item.subject}</td>
                <td>{item.payment}</td>
                <td>
                  <Button
                    variant="danger"
                    className={styles.bookButton}
                    onClick={() => handleBookSlot(item.slots)}
                  >
                    Book slot
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        {/* Pagination Component */}
        <Pagination className={styles.paginationControls}>
          <Pagination.Prev linkClassName={styles.paginationbutton} />
          <Pagination.Item linkClassName={styles.pageCount}>
            {" "}
            {1}
          </Pagination.Item>
          <Pagination.Next linkClassName={styles.paginationbutton} />
        </Pagination>
      </div>
      <BookingSlotModel show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default BookSlot;
