import React from "react";
import styles from "../../Home/dashboardhome.module.scss";
import { Button, Col, Form, Row } from "react-bootstrap";
const ReportsHeader = () => {
  return (
    <>
      <div className={styles.userDetailsWrapper}>
        <h1 className={styles.bookedSlotText}>Reports</h1>
        <div className={styles.inputDiv}>
          <Row>
            <Col>
              <Form.Group controlId="Feedback">

                <Form.Select >
                  <option value="">Choose a subject</option>
                  <option value="maths">Mathematics</option>
                  <option value="science">Science</option>
                  <option value="english">English</option>
                  <option value="history">History</option>
                </Form.Select>
              </Form.Group>

            </Col>
            <Col>
              <Form.Group controlId="subjectSelect">

                <Form.Select >
                  <option value="">Choose a subject</option>
                  <option value="maths">Mathematics</option>
                  <option value="science">Science</option>
                  <option value="english">English</option>
                  <option value="history">History</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
            <Button variant="danger" disabled>
              Filter Report
            </Button>
            </Col>
          </Row>
          {/* <input type="text" className={styles.inputBox} placeholder="Search by name" /> */}

        </div>
        <div className={styles.buttonDiv}>
          <button className={styles.bookSlotButton}>Refresh</button>
        </div>
      </div>
    </>
  );
};

export default ReportsHeader;
