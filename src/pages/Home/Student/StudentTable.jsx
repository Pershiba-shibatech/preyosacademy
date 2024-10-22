import React, { useEffect, useState } from "react";
import { Table, Pagination, Form, Button } from "react-bootstrap";
import styles from "./student.module.scss";
import { useDispatch, useSelector } from "react-redux";
import UpdateAttendStatusModel from "../../../components/Modals/UpdateAttendStatusModel";
import { GetBookedSlots } from "../../../store/api/BookSlotsByTutor";
import { useLocation } from "react-router-dom";
import { GetAllBookedSlotsActions } from "../../../store/slice/AllBookedSlotsSlice";
import StudentSkeleton from "../StudentSkeleton/StudentSkeleton";
import SpinnerComp from "../../../components/Spinner/Spinner";
import moment from "moment";
import EmptyState from "../../../components/emptyState/EmptyState";
import { getStatusOfSession } from "../../../ConstantFunction";

const StudentTable = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const [modalShow, setModalShow] = useState(false);
  let userDetails = useSelector((state) => state.userDetails);
  const { userType } = userDetails.loggedInUserDetails;
  const dispatch = useDispatch();
  let getBookedSlotsDetails = useSelector((state) => state.getBookedSlots);
  console.log(getBookedSlotsDetails, "getBookedSlotsDetails")
  const DisplayData = pathname === "/dashboard/allSlots" ? getBookedSlotsDetails.AllSlots : pathname === '/dashboard' && userType === "Admin" ? getBookedSlotsDetails.tutorSlots : getBookedSlotsDetails.StudentsSlots
  const EmptyStateText = pathname === "/dashboard/allSlots" ? "No slots available" : pathname === '/dashboard' && userType === "Admin" ? "No slots For you Today" : "No Slots Booked"

  useEffect(() => {
    dispatch(GetAllBookedSlotsActions.setLoading(true))
    const data = {
      type: pathname === "/dashboard/allSlots" ? "Admin" : pathname === '/dashboard' && userType === "Admin" ? 'Tutor' : userType,
      studenUsercode: userType === "Student" ? userDetails.loggedInUserDetails.userCode : '',
      tutorUsercode: userType !== "Student" ? userDetails.loggedInUserDetails.userCode : ''
    }

    dispatch(GetBookedSlots(data))
  }, [])



  const [currentPage, setCurrentPage] = useState(1);
  // const [data, setData] = useState(exampleData);
  const itemsPerPage = 10;

  // Get data to be displayed for the current page
  // const currentData = data.slice(
  //   (currentPage - 1) * itemsPerPage,
  //   currentPage * itemsPerPage
  // );

  // const handleSelectChange = (value, rowIndex, field) => {
  //   const updatedData = [...data];
  //   updatedData[rowIndex][field] = value;
  //   setData(updatedData);
  // };

  let StudentColumn = ["Slot Date", "Slot Timing", "Subject", "Tutor", "Attend Status", "Link"]
  const TutorColumn = ["Student", "Slot Date", "Slot Timing", "Subject", "Attend Status", "Link"]
  const AdminColumn = ["Student", "Slot Date", "Slot Timing", "Tutor", "Subject", "Attend Status", "Payment Status", "Link"]
  const columns = userType === "Student" ? StudentColumn : userType === "Tutor" ? TutorColumn : AdminColumn
  return (
    <>
      <div className={styles.StudentTableWrapper}>

        {getBookedSlotsDetails.isFetchedSlots && DisplayData.length > 0 && <Table bsPrefix={styles.table} striped bordered hover>
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {DisplayData.map((item, index) => {
              console.log(item, "item")
              return <>
                <tr key={index}>
                  {userType === "Student" ?
                    <>
                      <td>{`${item.sessionBookingDetails?.localDate}`}</td>
                      <td>{`${item.sessionBookingDetails?.fromLocalTime} - ${item.sessionBookingDetails?.toLocalTime} `}</td>
                      <td>{item?.sessionSubject}</td>
                      <td>{item?.tutorDetails?.tutorName}</td>
                      <td>{getStatusOfSession(item.sessionStatus)}</td>
                      <td>
                        <Button
                          variant="danger"
                          className={styles.bookButton}
                          onClick={() => { window.open(item.sessionLink, '_blank'); }}
                          disabled={item.paymentStatus === "paid" ? false : true}
                        >
                          Join
                        </Button>
                      </td>
                    </> : userType === "Tutor" ? <>
                      <td>{item?.StudentDetails?.studentName}</td>
                      <td>{`${item.sessionBookingDetails?.localDate}`}</td>
                      <td>{`${item.sessionBookingDetails?.fromLocalTime} - ${item.sessionBookingDetails?.toLocalTime} `}</td>
                      <td>{item?.sessionSubject}</td>
                      <td>
                        <div className={styles.updateStatus}>
                          <span className={styles.statusText}>
                            {getStatusOfSession(item.sessionStatus)}
                          </span>

                          <Button
                            variant="danger"
                            disabled={
                              moment(Number(item.sessionBookingDetails.timeStamp)) < moment().format('x') ? false : true
                            }
                            onClick={() => setModalShow(true)}
                          >
                            update Status
                          </Button>
                        </div>
                      </td>

                      <td>
                        <Button
                          variant="danger"
                          className={styles.bookButton}
                          onClick={() => { window.open(item.sessionLink, '_blank'); }}
                          disabled={item.paymentStatus === "paid" ? false : true}
                        >
                          Join
                        </Button>
                      </td>
                    </> : <>
                      <td>{item?.StudentDetails?.studentName}</td>
                      <td>{`${item.sessionBookingDetails?.localDate}`}</td>
                      <td>{`${item.sessionBookingDetails?.fromLocalTime} - ${item.sessionBookingDetails?.toLocalTime} `}</td>
                      <td>{item?.tutorDetails?.tutorName}</td>
                      <td>{item?.sessionSubject}</td>
                      <td>
                        <div className={styles.updateStatus}>
                          <span className={styles.statusText}>
                            {getStatusOfSession(item.sessionStatus)}
                          </span>

                          <Button
                            variant="danger"
                            disabled={
                              moment(Number(item.sessionBookingDetails.timeStamp)) < moment().format('x') ? false : true
                            }
                            onClick={() => setModalShow(true)}
                          >
                            update Status
                          </Button>
                        </div>
                      </td>
                      <td>{item.paymentStatus}</td>
                      <td>
                        <Button
                          variant="danger"
                          className={styles.bookButton}
                          onClick={() => { window.open(item.sessionLink, '_blank'); }}
                          disabled={item.paymentStatus === "paid" ? false : true}
                        >
                          Join
                        </Button>
                      </td>
                    </>


                  }
                </tr>
              </>

            })}
          </tbody>
        </Table>}



        {/* <Pagination className={styles.paginationControls}>
            <Pagination.Prev linkClassName={styles.paginationbutton} />
            <Pagination.Item linkClassName={styles.pageCount}> {1}</Pagination.Item>
            <Pagination.Next linkClassName={styles.paginationbutton} />
          </Pagination> */}





        <UpdateAttendStatusModel
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
      {getBookedSlotsDetails.isLoading &&
        <div>
          <SpinnerComp />
        </div>
      }

      {!getBookedSlotsDetails.isLoading &&
        getBookedSlotsDetails.isFetchedSlots && DisplayData.length === 0 &&
        <EmptyState EmptyStateText={EmptyStateText} />}

    </>

  );
};

export default StudentTable;
