import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { BookedSlotsSliceActions } from "../../../store/slice/BookSlotsslice";
import { GetBookedSlots, updateBookedSLotLink } from "../../../store/api/BookSlotsByTutor";
import { GetAllBookedSlotsActions } from "../../../store/slice/AllBookedSlotsSlice";
import { ToastSliceActions } from "../../../store/slice/ToastSlice";

const UpdateSlots = (props) => {

  const Navigate = useNavigate();
  const dispatch = useDispatch();
  let userDetails = useSelector((state) => state.userDetails);
  const { userType } = userDetails.loggedInUserDetails;
  const location = useLocation();
  const pathname = location.pathname;

  const BookSlotsDetails = useSelector((state) => state.BookSlotsDetails);


  const updateLinks = () => {
    let updateData = {
      sessionId: BookSlotsDetails.sessionDetails.slotDetails.sessionId,
      sessionLink: BookSlotsDetails.sessionLink,
      sessionBoardLink: BookSlotsDetails.sessionBoardLink
    }
    dispatch(updateBookedSLotLink(updateData)).unwrap().then((response) => {
      if (response?.data?.statusCode === 200) {
        dispatch(BookedSlotsSliceActions.reset())
        dispatch(GetAllBookedSlotsActions.setLoading(true))
        const data = {
          type: pathname === "/dashboard/allSlots" ? "Admin" : pathname === '/dashboard' && userType === "Admin" ? 'Tutor' : userType,
          studenUsercode: userType === "Student" ? userDetails.loggedInUserDetails.userCode : '',
          tutorUsercode: userType !== "Student" ? userDetails.loggedInUserDetails.userCode : ''
        }
        dispatch(GetBookedSlots(data))
        dispatch(ToastSliceActions.setSuccessToast("Updated link successFully"))
      } else {
        dispatch(ToastSliceActions.setfailureToast("Failed to update Link please try again in sometimes!"))

      }
    })
  }


  // const handleDateChange = (e) => {
  //   setSelectedDate(e.target.value);
  // };

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
        <Modal.Title id="contained-modal-title-vcenter">Book slot</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {/* Subject Select Dropdown */}
          <Form.Group className="mb-3" controlId="subjectSelect">
            <Form.Label>Select Subject</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Session link"
              value={BookSlotsDetails.sessionLink}
              onChange={(e) => dispatch(BookedSlotsSliceActions.setsessionLink(e.target.value))}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="subjectSelect">
            <Form.Label>Select Month</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Session Board link"
              value={BookSlotsDetails.sessionBoardLink}
              onChange={(e) => dispatch(BookedSlotsSliceActions.setBoardLink(e.target.value))}
            />
          </Form.Group>

          {/* Date Selection */}
          {/* <Form.Group className="mb-3" controlId="dateSelect">
            <Form.Label>Select Date</Form.Label>
            <Form.Control
              type="date"
              value={selectedDate}
              onChange={handleDateChange}
            />
          </Form.Group> */}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="light" onClick={props.onHide}>
          Close
        </Button>
        <Button
          variant="danger"
          onClick={() => { updateLinks() }}
        >
          Update Slot Link
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UpdateSlots;
