import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BookedSlotsSliceActions } from "../../store/slice/BookSlotsslice";
import { getWeekdaysInMonth } from "../../ConstantFunction";
import { BookSlotsByTutor } from "../../store/api/BookSlotsByTutor";
import { SelectedStudentSliceActions } from "../../store/slice/SelectedStudentSlice";
import { selectSubjectSliceActions } from "../../store/slice/selectSubjectModelSlice";
import { ToastSliceActions } from "../../store/slice/ToastSlice";

const BookingSlotModel = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // States for input fields

  const BookSlotsDetails = useSelector((state) => state.BookSlotsDetails);
  const selectedStudentDetails = useSelector((state) => state.selectedStudentDetails);
  const userDetails = useSelector((state) => state.userDetails);

  const subjectModelDetails = useSelector((state) => state.subjectModelData);
  const { loggedInUserDetails } = userDetails

  const BooktheSlot = () => {

    const selctedDays = getWeekdaysInMonth(BookSlotsDetails.SelectedSlot.slotDatails.day, BookSlotsDetails.SelectedSlot.slotDatails.from, BookSlotsDetails.SelectedSlot.slotDatails.to);
    console.log(selctedDays, "selctedDays")

    const BookSlotData = {
      studenUsercode: selectedStudentDetails.selctedStudent.userCode,
      Bookedby: loggedInUserDetails.userCode,
      tutorUsercode: BookSlotsDetails.SelectedSlot.tutorDetails.userCode,
      sessionMaterial: {
        url: BookSlotsDetails.Materials,
        display_name: subjectModelDetails.selectedSubject,
        format: "link"
      },

      sessionDetails: BookSlotsDetails.SelectedSlot.slotId,
      sessionSubject: subjectModelDetails.selectedSubject,
      paymentStatus: "paid",
      sessionLink: BookSlotsDetails.sessionLink,
      sessionStatus: "Yettojoin",
      topic: "",
      homeworkStatus: "",
      sessionSummary: "",
      studentFeedbackByTutor: "",
      AllDate: selctedDays.map((day) => {
        return day.date
      }),
      sessionBookingDetails: selctedDays.map(day => {
        return {
          from: day.from,
          to: day.to,
          day: day.dayName,
          date: day.date,
          timeStamp: day.timeStamp,
          id: BookSlotsDetails.SelectedSlot.slotId,
        }

      })


    }
    dispatch(BookedSlotsSliceActions.setIsBooking(true))
    dispatch(BookSlotsByTutor(BookSlotData)).unwrap().then((response) => {
      
      if (response.data.statusCode === 200) {
        dispatch(BookedSlotsSliceActions.reset())
        dispatch(SelectedStudentSliceActions.reset())
        dispatch(selectSubjectSliceActions.reset())
        navigate('/dashboard/allSlots')
        dispatch(ToastSliceActions.setSuccessToast("Slot Booked Successfully!"))
      }else{
        dispatch(ToastSliceActions.setfailureToast("Failed to createSlot!"))

      }
    })
    // console.log(BookSlotData, "BookSlotData")


  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Book Slot</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {/* Related Topic Textarea Field */}
          <Form.Group controlId="formRelatedTopic">
            <Form.Label>Related Topic</Form.Label>
            <Form.Control
              as="textarea"
              rows={3} // You can adjust the number of rows
              placeholder="Enter the related topic"
              value={BookSlotsDetails.RelatedTopics}
              onChange={(e) => dispatch(BookedSlotsSliceActions.setRelatedTopics(e.target.value))}
            />
          </Form.Group>

          {/* Materials Input Field */}
          <Form.Group controlId="formMaterials" className="mt-3">
            <Form.Label>
              Materials (resourse links are allowed to paste)
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter materials"
              value={BookSlotsDetails.Materials}
              onChange={(e) => dispatch(BookedSlotsSliceActions.setMaterials(e.target.value))}
            />
          </Form.Group>
          <Form.Group controlId="SessionLink" className="mt-3">
            <Form.Label>
              Session Join Link
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Session link"
              value={BookSlotsDetails.sessionLink}
              onChange={(e) => dispatch(BookedSlotsSliceActions.setsessionLink(e.target.value))}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="light" onClick={props.onHide}>
          Cancel booking
        </Button>
        <Button variant="danger" onClick={() => { BooktheSlot() }}>
          Book it
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BookingSlotModel;
