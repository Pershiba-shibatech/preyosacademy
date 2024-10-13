import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const BookingSlotModel = (props) => {
  const navigate = useNavigate();

  // States for input fields
  const [relatedTopic, setRelatedTopic] = useState("");
  const [materials, setMaterials] = useState("");

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
              value={relatedTopic}
              onChange={(e) => setRelatedTopic(e.target.value)}
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
              value={materials}
              onChange={(e) => setMaterials(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="light" onClick={props.onHide}>
          Cancel booking
        </Button>
        <Button variant="danger" onClick={props.onHide}>
          Book it
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BookingSlotModel;
