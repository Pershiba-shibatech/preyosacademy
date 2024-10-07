import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import styles from "./addStudent.module.scss";
import Header from "../Dashboard/header";
import TimeZone from "../../components/TimeZone/TimeZone";
import { useNavigate } from "react-router-dom";
const AddStudent = () => {
  const Navigate = useNavigate();
  return (
    <>
      <div className={`${styles.headerColor} text-white p-3`}>
        <Header />
      </div>
      <div className={`container-fluid ${styles.addStudentWrapper}`}>
        <h2 className="mb-4">Add Student</h2>
        <Form className={styles.formContainer}>
          <Row>
            {/* Student Name */}
            <Col xs={12} md={6} lg={4}>
              <Form.Group className="mb-3" controlId="studentName">
                <Form.Label>Student Name</Form.Label>
                <Form.Control type="text" placeholder="Enter student name" />
              </Form.Group>
            </Col>

            {/* DOB */}
            <Col xs={12} md={6} lg={4}>
              <Form.Group className="mb-3" controlId="dob">
                <Form.Label>DOB</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Student Date of Birth"
                />
              </Form.Group>
            </Col>

            {/* Grade */}
            <Col xs={12} md={6} lg={4}>
              <Form.Group className="mb-3" controlId="grade">
                <Form.Label>Grade</Form.Label>
                <Form.Control type="text" placeholder="Enter grade" />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            {/* Parent Name */}
            <Col xs={12} md={6} lg={4}>
              <Form.Group className="mb-3" controlId="parentName">
                <Form.Label>Parent Name</Form.Label>
                <Form.Control type="text" placeholder="Enter parent name" />
              </Form.Group>
            </Col>

            {/* Time Zone */}
            <Col xs={12} md={6} lg={4}>
              <Form.Group className="mb-3" controlId="timeZone">
                <Form.Label>Time Zone</Form.Label>
                {/* <Form.Control type="text" placeholder="Enter time zone" /> */}
                <TimeZone />
              </Form.Group>
            </Col>

            {/* Country */}
            <Col xs={12} md={6} lg={4}>
              <Form.Group className="mb-3" controlId="country">
                <Form.Label>Country</Form.Label>
                <Form.Control type="text" placeholder="Enter Student Country" />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            {/* Country Code */}
            <Col xs={12} md={6} lg={4}>
              <Form.Group className="mb-3" controlId="countryCode">
                <Form.Label>Country Code</Form.Label>
                <Form.Control type="text" placeholder="Enter country code" />
              </Form.Group>
            </Col>

            {/* Contact Number */}
            <Col xs={12} md={6} lg={4}>
              <Form.Group className="mb-3" controlId="contactNumber">
                <Form.Label>Contact Number</Form.Label>
                <Form.Control type="text" placeholder="Enter contact number" />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            {/* Email */}
            <Col xs={12} md={6} lg={4}>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
            </Col>

            {/* Password */}
            <Col xs={12} md={6} lg={4}>
              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password" />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            {/* Requirement Text Area */}
            <Col xs={6}>
              <Form.Group className="mb-3" controlId="requirement">
                <Form.Label>Requirement</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter requirements"
                />
              </Form.Group>
            </Col>

            {/* Payment */}
            <Col xs={12} md={6} lg={4}>
              <Form.Group className="mb-3" controlId="payment">
                <Form.Label>Payment</Form.Label>
                <Form.Control type="text" placeholder="Enter payment details" />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            {/* Coordinator/Admin Dropdown */}
            <Col xs={12} md={6}>
              <Form.Group className="mb-3" controlId="coordinator">
                <Form.Label>Select Coordinator</Form.Label>
                <Form.Select>
                  <option>Coordinator</option>
                  <option>Admin</option>
                </Form.Select>
              </Form.Group>
            </Col>

            {/* Select Admin */}
            <Col xs={12} md={6}>
              <Form.Group className="mb-3" controlId="admin">
                <Form.Label>Select Admin</Form.Label>
                <Form.Select>
                  <option>Admin</option>
                  <option>Coordinator</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            {/* Subject Selection */}
            <Col xs={12} md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Select Subjects</Form.Label>
                <div className="d-flex justify-content-between flex-wrap">
                  <Button variant="outline-light" className={styles.subjectBtn}>
                    Math
                  </Button>
                  <Button variant="outline-light" className={styles.subjectBtn}>
                    Science
                  </Button>
                  <Button variant="outline-light" className={styles.subjectBtn}>
                    English
                  </Button>
                  <Button variant="outline-light" className={styles.subjectBtn}>
                    History
                  </Button>
                  <Button variant="outline-light" className={styles.subjectBtn}>
                    Geography
                  </Button>
                </div>
              </Form.Group>
            </Col>
          </Row>

          {/* Clear and Submit Buttons in Right Bottom Corner */}
          <div className="d-flex justify-content-end">
            <Button
              variant="light"
              className={`${styles.clearBtn} me-2`}
              onClick={() => Navigate(-1)}
            >
              Cancel
            </Button>
            <Button variant="danger" className={styles.submitBtn}>
              Register
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default AddStudent;
