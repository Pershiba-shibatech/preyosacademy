import React, { useState } from "react";
import { Table, Pagination, Form, Button } from "react-bootstrap";
import styles from "./student.module.scss";
import { useSelector } from "react-redux";
import UpdateAttendStatusModel from "../../../components/Modals/UpdateAttendStatusModel";

const StudentTable = () => {
  const [modalShow, setModalShow] = React.useState(false);
    let userDetails = useSelector((state) => state.userDetails);
    const { userType } = userDetails.loggedInUserDetails;

  const exampleData = [
    {
      serialNumber: 1,
      slots: "11/10/2024 - 10:00 AM - 11:00 AM",
      tutor: "Jane Smith",
      paymentStatus: "Paid",
      attendStatus: "Completed",
      link: "View",
      subject: "English",
    },
    {
      serialNumber: 2,
      slots: "11:00 AM - 12:00 PM",
      tutor: "John Doe",
      paymentStatus: "Pending",
      attendStatus: "Rescheduled",
      link: "View",
      subject: "Maths",
    },
    {
      serialNumber: 3,
      slots: "11:00 AM - 12:00 PM",
      tutor: "John Doe",
      paymentStatus: "Pending",
      attendStatus: "Cancelled",
      link: "View",
      subject: "English",
    },
    {
      serialNumber: 4,
      slots: "11:00 AM - 12:00 PM",
      tutor: "John Doe",
      paymentStatus: "Paid",
      attendStatus: "yet To start",
      link: "View",
      subject: "EVS",
    },
    {
      serialNumber: 5,
      slots: "11:00 AM - 12:00 PM",
      tutor: "John Doe",
      paymentStatus: "Pending",
      attendStatus: "Missed",
      link: "View",
      subject: "Social",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState(exampleData);
  const itemsPerPage = 10;

  // Get data to be displayed for the current page
  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSelectChange = (value, rowIndex, field) => {
    const updatedData = [...data];
    updatedData[rowIndex][field] = value;
    setData(updatedData);
  };

  const columns = [
    // { Header: "Serial Number", accessor: "serialNumber" },
    { Header: "Slots", accessor: "slots" },
    { Header: "Subject", accessor: "subject" },
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
              {/* <td>{item.serialNumber}</td> */}
              <td>{item.slots}</td>
              <td>{item.subject}</td>
              <td>{item.tutor}</td>
              {userType !== "Admin" && <td>{item.paymentStatus}</td>}

              {userType === "Student" && <td>{item.attendStatus}</td>}
              {/* Payment Status Dropdown */}
              {userType === "Admin" && (
                <td>
                  <Form.Select
                    value={item.paymentStatus}
                    onChange={(e) =>
                      handleSelectChange(e.target.value, index, "paymentStatus")
                    }
                  >
                    <option value="Paid">Paid</option>
                    <option value="Pending">Pending</option>
                  </Form.Select>
                </td>
              )}

              {/* Attend Status Dropdown */}
              {userType !== "Student" && (
                <td>
                  <div className={styles.updateStatus}>
                    <span className={styles.statusText}>
                      {item.attendStatus}
                    </span>

                    <Button
                      variant="danger"
                      disabled={
                        item.paymentStatus !== "yet To start" ? false : true
                      }
                      onClick={() => setModalShow(true)}
                    >
                      update Status
                    </Button>
                  </div>

                  {/* <Form.Select
                    value={item.attendStatus}
                    onChange={(e) =>
                      handleSelectChange(e.target.value, index, "attendStatus")
                    }
                  >
                    <option value="yet To start">yet To start</option>
                    <option value="Completed">Completed</option>
                    <option value="Rescheduled">Rescheduled</option>
                    <option value="Cancelled">Cancelled</option>
                  </Form.Select> */}
                </td>
              )}

              <td>
                <Button
                  variant="danger"
                  className={styles.bookButton}
                  disabled={item.paymentStatus === "Paid" ? false : true}
                >
                  Join
                </Button>
              </td>
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

      <UpdateAttendStatusModel
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default StudentTable;
