import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useLocation, useNavigate } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { BookedSlotsSliceActions } from "../../../store/slice/BookSlotsslice";
import TimepickerComp from "../../TimePicker/TimepickerComp";
import moment from "moment";
import styles from './updatestatus.module.scss'
import { GetBookedSlots, updateBookedSLotStatus } from "../../../store/api/BookSlotsByTutor";
import { ToastSliceActions } from "../../../store/slice/ToastSlice";
import { GetAllBookedSlotsActions } from "../../../store/slice/AllBookedSlotsSlice";
const UpdateAttendStatusModel = (props) => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const pathname = location.pathname;
  const BookSlotsDetails = useSelector((state) => state.BookSlotsDetails);
  const selectedStudentDetails = useSelector((state) => state.selectedStudentDetails);
  const userDetails = useSelector((state) => state.userDetails);
  const { loggedInUserDetails } = userDetails
  const { userType } = loggedInUserDetails;



  const getTime = (e, d) => {

    if (e) {
      let inserDate = {
        from: moment(e[0].$d).format('HH:mm'),
        To: moment(e[1].$d).format('HH:mm')
      }


      dispatch(BookedSlotsSliceActions.setRescheduleTime(inserDate))

    }
  }
  const buttonDisable = BookSlotsDetails.sessionStatus === "completed" && (BookSlotsDetails.topic === "" || BookSlotsDetails.homeworkStatus === "" || BookSlotsDetails.sessionSummary === "" || BookSlotsDetails.studentFeedbackByTutor === "") ? true :
    BookSlotsDetails.sessionStatus === "cancelled" && (BookSlotsDetails.cancelReason === "" || BookSlotsDetails.cancelledBy === "") ? true :
      BookSlotsDetails.sessionStatus === "reschedule" && (BookSlotsDetails.rescheduleReason === ""
        || BookSlotsDetails.rescheduledBy === "" || BookSlotsDetails.rescheduleFrom === "" || BookSlotsDetails.rescheduleto === "" || BookSlotsDetails.Date === "") ? true :
        false
  

  const updateStatus = () => {

    const sessionDetailsData = {
      sessionId: BookSlotsDetails.sessionDetails.slotDetails.sessionId,
      sessionStatus: BookSlotsDetails.sessionStatus,
      topic: BookSlotsDetails.topic,
      homeworkStatus: BookSlotsDetails.homeworkStatus,
      sessionSummary: BookSlotsDetails.sessionSummary,
      studentFeedbackByTutor: BookSlotsDetails.studentFeedbackByTutor,
      cancelReason: BookSlotsDetails.cancelReason,
      cancelledBy: BookSlotsDetails.cancelledBy === "Tutor" ? loggedInUserDetails.userCode : BookSlotsDetails.sessionDetails.studentDetails.userCode,
      rescheduledBy: BookSlotsDetails.rescheduledBy === "Tutor" ? loggedInUserDetails.userCode : BookSlotsDetails.sessionDetails.studentDetails.userCode,
      rescheduleReason: BookSlotsDetails.rescheduleReason,
      month: BookSlotsDetails.month,
      tutorSlotDetails: {
        userCode: BookSlotsDetails.sessionDetails.tutorDetails.userCode,
        day: BookSlotsDetails.reScheduleday,
        from: BookSlotsDetails.rescheduleFrom,
        To: BookSlotsDetails.rescheduleto,
        date: BookSlotsDetails.Date,
        timeStamp: BookSlotsDetails.RescheduleDatetimeStamp,
      }
    }
  
    dispatch(updateBookedSLotStatus(sessionDetailsData)).unwrap().then((response) => {
      if (response?.data?.statusCode === 200) {
        dispatch(GetAllBookedSlotsActions.setLoading(true))
        const data = {
          type: pathname === "/dashboard/allSlots" ? "Admin" : pathname === '/dashboard' && userType === "Admin" ? 'Tutor' : userType,
          studenUsercode: userType === "Student" ? userDetails.loggedInUserDetails.userCode : '',
          tutorUsercode: userType !== "Student" ? userDetails.loggedInUserDetails.userCode : ''
        }
        dispatch(ToastSliceActions.setSuccessToast("Status updated Successfully!"))
        dispatch(GetBookedSlots(data))
        dispatch(BookedSlotsSliceActions.reset());

      } else {
        dispatch(ToastSliceActions.setfailureToast("Unable to update Status please try again in sometimes!"))
      }
    })

  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static" 
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Update status
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {/* Subject Select Dropdown */}
          <Form.Group className="mb-3" controlId="subjectSelect">
            <Form.Label>Select Status</Form.Label>
            <Form.Select value={BookSlotsDetails.sessionStatus}
              onChange={(e) => { dispatch(BookedSlotsSliceActions.setSessionStatus(e.target.value)) }}>
              <option value="yettojoin">Yet To Join</option>
              <option value="completed">Completed</option>
              <option value="reschedule">Rescheduled</option>
              <option value="cancelled">Cancelled</option>
            </Form.Select>
          </Form.Group>

          {BookSlotsDetails.sessionStatus === 'yettojoin' && <div>{"Please select status of the session to update Status"}</div>}

          {/* Date Selection */}
          {BookSlotsDetails.sessionStatus === "completed" && <>
            <Row>
              <Col xs={6}>
                <Form.Group className="mb-3" controlId="topics">
                  <Form.Label> Topic</Form.Label>
                  <Form.Control
                    as="input"
                    value={BookSlotsDetails.topic}
                    onChange={(e) => { dispatch(BookedSlotsSliceActions.setTopic(e.target.value)) }}
                  />
                </Form.Group>
              </Col>
              <Col xs={6}>
                <Form.Group className="mb-3" controlId="subjectSelect">
                  <Form.Label>Homework Status</Form.Label>
                  <Form.Select
                    value={BookSlotsDetails.homeworkStatus}
                    onChange={(e) => { dispatch(BookedSlotsSliceActions.setHomeworkStatus(e.target.value)) }}
                  >
                    <option disabled>Select Home work Status</option>
                    <option value="Done">Done</option>
                    <option value="Partialy Done">Partialy Done</option>
                    <option value="Not Done">Not Done</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
                <Form.Group className="mb-3" controlId="subjectSummary">
                  <Form.Label>Subject Summary</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={BookSlotsDetails.sessionSummary}
                    onChange={(e) => { dispatch(BookedSlotsSliceActions.setSessionSummary(e.target.value)) }}
                  />
                </Form.Group>
              </Col>
              <Col xs={6}>
                <Form.Group className="mb-3" controlId="Feedback">
                  <Form.Label>Feedback</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={BookSlotsDetails.studentFeedbackByTutor}
                    onChange={(e) => { dispatch(BookedSlotsSliceActions.setStudentFeedbackByTutor(e.target.value)) }}
                  />
                </Form.Group>
              </Col>
            </Row>
          </>}

          {BookSlotsDetails.sessionStatus === "reschedule" && <>
            <Row>
              <Col xs={6}>
                <Form.Group className="mb-3" controlId="topics">
                  <Form.Label> Reschedule Reason </Form.Label>
                  <Form.Control
                    as="input"
                    value={BookSlotsDetails.rescheduleReason}
                    onChange={(e) => { dispatch(BookedSlotsSliceActions.setRescheduleReason(e.target.value)) }}
                  />
                </Form.Group>
              </Col>
              <Col xs={6}>
                <Form.Group className="mb-3" controlId="subjectSelect">
                  <Form.Label>Rescheduled By</Form.Label>
                  <Form.Select
                    value={BookSlotsDetails.rescheduledBy}
                    onChange={(e) => { dispatch(BookedSlotsSliceActions.setRescheduledBy(e.target.value)) }}
                  >
                    <option value="Tutor">Tutor</option>
                    <option value="Student">Student</option>
                    <option value="Admin">Admin</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
                <Form.Group className="mb-3" controlId="subjectSummary">
                  <Form.Label>Reschedule Date</Form.Label>
                  <Form.Control type="date"
                    value={BookSlotsDetails.showDate}
                    onChange={(e) => { dispatch(BookedSlotsSliceActions.setRescheduleDate(e.target.value)) }}
                  />
                </Form.Group>
              </Col>
              <Col xs={6}>
                {/* <Form.Group className="mb-3" controlId="Feedback">
                  <Form.Label className={styles.updateStatustime}>Reschedule Time :</Form.Label>
                </Form.Group> */}
                <span>Reschedule Time </span>
                {/* <Form.Control
                    as="textarea"
                    rows={3}
                    
                    // value={BookSlotsDetails.studentFeedbackByTutor}
                    // onChange={(e) => { dispatch(BookedSlotsSliceActions.setStudentFeedbackByTutor(e.target.value)) }}
                  /> */}
                <div className={styles.updateStatustime}>
                  <TimepickerComp onChangeFun={getTime} day='' reschedule={true} />
                </div>



              </Col>
            </Row>
          </>}
          {BookSlotsDetails.sessionStatus === "cancelled" && <>
            <Row>
              <Col xs={6}>
                <Form.Group className="mb-3" controlId="cancel Reason">
                  <Form.Label> Cancel Reason</Form.Label>
                  <Form.Control
                    as="input"
                    value={BookSlotsDetails.cancelReason}
                    onChange={(e) => { dispatch(BookedSlotsSliceActions.setcancelReason(e.target.value)) }}
                  />
                </Form.Group>
              </Col>
              <Col xs={6}>
                <Form.Group className="mb-3" controlId="subjectSelect">
                  <Form.Label>Cancelled By</Form.Label>
                  <Form.Select
                    value={BookSlotsDetails.cancelledBy}
                    onChange={(e) => { dispatch(BookedSlotsSliceActions.setcancelledBy(e.target.value)) }}
                  >
                    <option value="Tutor">Tutor</option>
                    <option value="Student">Student</option>
                    <option value="Admin">Admin</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
          </>

          }

        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="light" onClick={props.onHide}>
          Close
        </Button>
        <Button
          variant="danger"
          disabled={buttonDisable}
          onClick={() => {
            // props.onHide();
            updateStatus();
          }}
        >
          Update Status
        </Button>
      </Modal.Footer>
    </Modal >
  );
};

export default UpdateAttendStatusModel;
