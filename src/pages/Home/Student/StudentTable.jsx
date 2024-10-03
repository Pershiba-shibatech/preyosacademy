import React, { useState } from "react";
import { Table, Pagination } from "react-bootstrap";
import styles from "./student.module.scss";
const StudentTable = () => {
  const exampleData = [
    {
      serialNumber: 1,
      slots: "11/10/2024 - 10:00 AM - 11:00 AM",
      tutor: "Jane Smith hane hane",
      paymentStatus: "Paid",
      attendStatus: "Attended",
      link: "View",
      subject: "English",
    },
    {
      serialNumber: 2,
      slots: "11:00 AM - 12:00 PM",
      tutor: "John Doe",
      paymentStatus: "Pending",
      attendStatus: "Absent",
      link: "View",
      subject: "Maths",
    },
    {
      serialNumber: 2,
      slots: "11:00 AM - 12:00 PM",
      tutor: "John Doe",
      paymentStatus: "Pending",
      attendStatus: "Absent",
      link: "View",
      subject: "English",
    },
    {
      serialNumber: 2,
      slots: "11:00 AM - 12:00 PM",
      tutor: "John Doe",
      paymentStatus: "Pending",
      attendStatus: "Absent",
      link: "View",
      subject: "EVS",
    },
    {
      serialNumber: 2,
      slots: "11:00 AM - 12:00 PM",
      tutor: "John Doe",
      paymentStatus: "Pending",
      attendStatus: "Absent",
      link: "View",
      subject: "Social",
    },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // // Calculate total number of pages
  // const totalPages = Math.ceil(exampleData.length / itemsPerPage);

  // // Function to handle page change
  // const handlePageChange = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  // };

  // Get data to be displayed for the current page
  const currentData = exampleData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const columns = [
    { Header: "Serial Number", accessor: "serialNumber" },
    { Header: "Slots", accessor: "slots" },
    {Header:"Subject",accessor:'subject'},
    { Header: "Tutor", accessor: "tutor" },
    { Header: "Payment Status", accessor: "paymentStatus" },
    { Header: "Attend Status", accessor: "attendStatus" },
    { Header: "Link", accessor: "link" },
  ];
  return (
    
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
              <td>{item.serialNumber}</td>
              <td>{item.slots}</td>
              <td>{item.subject}</td>
              <td>{item.tutor}</td>
              <td>{item.paymentStatus}</td>
              <td>{item.attendStatus}</td>
              <td>{item.link}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Pagination Component */}
      <Pagination className={styles.paginationControls}>
        <Pagination.Prev linkClassName={styles.paginationbutton} />
        <Pagination.Item linkClassName={styles.pageCount}> {1}</Pagination.Item>
        <Pagination.Next linkClassName={styles.paginationbutton} />
      </Pagination>
    </div>
  );
};

export default StudentTable;
