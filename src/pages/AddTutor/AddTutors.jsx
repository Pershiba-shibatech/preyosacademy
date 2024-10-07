import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import styles from "./addTutor.module.scss";
import TimeZone from "../../components/TimeZone/TimeZone";
import { useNavigate } from "react-router-dom";
import Header from "../Dashboard/header";

const AddTutors = () => {
  const Navigate = useNavigate();
  return (
    <>
      <div className={`${styles.headerColor} text-white p-3`}>
        <Header />
      </div>
      <div className={`container-fluid ${styles.addTutorWrapper}`}>
        <h2 className="mb-4">Add Tutor</h2>
        <Form className={styles.formContainer}>
          <Row>
            {/* Tutor Name */}
            <Col xs={12} md={6} lg={4}>
              <Form.Group className="mb-3" controlId="FirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter First name of tutor"
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <Form.Group className="mb-3" controlId="LastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Last name of tutor"
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <Form.Group className="mb-3" controlId="tutorName">
                <Form.Label>Tutor Name</Form.Label>
                <Form.Control type="text" placeholder="Enter tutor name" />
              </Form.Group>
            </Col>
            {/* Qualification */}
          </Row>
          <Row>
            <Col xs={12} md={6} lg={4}>
              <Form.Group className="mb-3" controlId="DOB">
                <Form.Label>DOB</Form.Label>
                <Form.Control type="text" placeholder="Enter DOB" />
              </Form.Group>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <Form.Group className="mb-3" controlId="qualification">
                <Form.Label>Qualification</Form.Label>
                <Form.Control type="text" placeholder="Enter qualification" />
              </Form.Group>
            </Col>
            {/* Experience */}
            <Col xs={12} md={6} lg={4}>
              <Form.Group className="mb-3" controlId="experience">
                <Form.Label>Experience</Form.Label>
                <Form.Control type="text" placeholder="Enter experience" />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            {/* Address */}
            <Col xs={6}>
              <Form.Group className="mb-3" controlId="Address">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter Full Address"
                />
              </Form.Group>
            </Col>

            <Col xs={12} md={6} lg={4}>
              <Form.Group className="mb-3" controlId="timeZone">
                <Form.Label>Time Zone</Form.Label>
                {/* <Form.Control type="text" placeholder="Enter time zone" /> */}
                <TimeZone />
              </Form.Group>
            </Col>
          </Row>
          {/* Time Zone */}
          <Row>
            <Col xs={12} md={6} lg={4}>
              <Form.Group className="mb-3" controlId="Country">
                <Form.Label>Country</Form.Label>
                <Form.Control type="text" placeholder="Enter Tutors Country" />
              </Form.Group>
            </Col>
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
            <Col xs={12} md={6} lg={4}>
              <Form.Group className="mb-3" controlId="payment">
                <Form.Label>Payment</Form.Label>
                <Form.Control type="text" placeholder="Enter payment details" />
              </Form.Group>
            </Col>
            {/* Account Number */}
            <Col xs={12} md={6} lg={4}>
              <Form.Group className="mb-3" controlId="accountNumber">
                <Form.Label>Account Number</Form.Label>
                <Form.Control type="text" placeholder="Enter account number" />
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

          {/* Cancel and Register Buttons */}
          <div className="d-flex justify-content-end">
            <Button
              variant="light"
              className={styles.clearBtn}
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

export default AddTutors;
