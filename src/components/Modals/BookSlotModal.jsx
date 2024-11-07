import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectSubjectSliceActions } from "../../store/slice/selectSubjectModelSlice";

const BookSlotModal = (props) => {
  const subjectModelDetails = useSelector((state) => state.subjectModelData);
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  


  const handleSubjectChange = (e) => {
   
    dispatch(selectSubjectSliceActions.setSubject(e.target.value))
  };
  const handleDateChange = (e) => {
   
    dispatch(selectSubjectSliceActions.setselectedDate(e.target.value))
  };



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
            <Form.Select value={subjectModelDetails.selectedSubject} onChange={handleSubjectChange}>
              <option value="">Choose a subject</option>
              <option value="maths">Mathematics</option>
              <option value="science">Science</option>
              <option value="english">English</option>
              <option value="history">History</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="subjectSelect">
            <Form.Label>Select Month</Form.Label>
            <Form.Select value={subjectModelDetails.selectedDate} onChange={handleDateChange}>
              <option value="">Choose  Month</option>
              <option value="Jan">January</option>
              <option value="Feb">February</option>
              <option value="Mar">March</option>
              <option value="Apr">April</option>
              <option value="May">May</option>
              <option value="Jun">June</option>
              <option value="Jul">July</option>
              <option value="Aug">August</option>
              <option value="Sep">September</option>
              <option value="Oct">October</option>
              <option value="Nov">November</option>
              <option value="Dec">December</option>
            </Form.Select>
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
          onClick={() => { Navigate("/dashboard/BookSlots"); props.onHide() }}
        >
          Book Slot
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BookSlotModal;
