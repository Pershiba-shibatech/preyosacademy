import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

const UpdateAttendStatusModel = (props) => {
  const Navigate = useNavigate();
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
        <Modal.Title id="contained-modal-title-vcenter">
          Update status
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {/* Subject Select Dropdown */}
          <Form.Group className="mb-3" controlId="subjectSelect">
            <Form.Label>Select Status</Form.Label>
            <Form.Select value={selectedSubject} onChange={handleSubjectChange}>
              <option value="yet To start">yet To start</option>
              <option value="Completed">Completed</option>
              <option value="Rescheduled">Rescheduled</option>
              <option value="Cancelled">Cancelled</option>
            </Form.Select>
          </Form.Group>

          {/* Date Selection */}
          <Row>
            <Col xs={6}>
              <Form.Group className="mb-3" controlId="topics">
                <Form.Label> Topic</Form.Label>
                <Form.Control
                  as="input"
                  value={selectedDate}
                  onChange={handleDateChange}
                />
              </Form.Group>
            </Col>
            <Col xs={6}>
              <Form.Group className="mb-3" controlId="subjectSelect">
                <Form.Label>Homework Status</Form.Label>
                <Form.Select
                  value={selectedSubject}
                  onChange={handleSubjectChange}
                >
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
                  value={selectedDate}
                  onChange={handleDateChange}
                />
              </Form.Group>
            </Col>
            <Col xs={6}>
              <Form.Group className="mb-3" controlId="Feedback">
                <Form.Label>Feedback</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={selectedDate}
                  onChange={handleDateChange}
                />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="light" onClick={props.onHide}>
          Close
        </Button>
        <Button
          variant="danger"
          onClick={() => {
            props.onHide();
          }}
        >
          Update Status
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UpdateAttendStatusModel;
