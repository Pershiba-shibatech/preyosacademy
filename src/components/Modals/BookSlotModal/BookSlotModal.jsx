import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const BookSlotModal = (props) => {
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const handleSubjectChange = (e) => {
    setSelectedSubject(e.target.value);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Book slot</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {/* Subject Select Dropdown */}
          <Form.Group className="mb-3" controlId="subjectSelect">
            <Form.Label>Select Subject</Form.Label>
            <Form.Select value={selectedSubject} onChange={handleSubjectChange}>
              <option value="">Choose a subject</option>
              <option value="math">Mathematics</option>
              <option value="science">Science</option>
              <option value="english">English</option>
              <option value="history">History</option>
            </Form.Select>
          </Form.Group>

          {/* Date Selection */}
          <Form.Group className="mb-3" controlId="dateSelect">
            <Form.Label>Select Date</Form.Label>
            <Form.Control
              type="date"
              value={selectedDate}
              onChange={handleDateChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="light" onClick={props.onHide}>
          Close
        </Button>
        <Button variant="danger" onClick={() => console.log("Booking")}>
          Book Slot
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BookSlotModal;
