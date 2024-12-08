import React from "react";
import styles from "../../Home/dashboardhome.module.scss";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { GetAllBookedSlotsActions } from "../../../store/slice/AllBookedSlotsSlice";
import { GetReportsList } from "../../../store/api/BookSlotsByTutor";
const ReportsHeader = () => {
  const StudentDetail = useSelector((state) => state.StudentList);
  const getBookedSlotsDetails = useSelector((state) => state.getBookedSlots);
  const dispatch = useDispatch()



  const selectSubject = (value) => {

      dispatch(GetAllBookedSlotsActions.setReportSubject(value))
  }

  return (
    <>
      <div className={styles.userDetailsWrapper}>
        <h1 className={styles.bookedSlotText}>Reports</h1>
        <Form>
          <div className={styles.inputDiv}>
            <Row>
              <Col>
                <Form.Group controlId="selectStudent">
                  <Form.Select defaultValue={getBookedSlotsDetails.reportSelectedStudentName}
                    onChange={(e) => {
                      let Student = StudentDetail.studentList.find((item) => item.userCode === e.target.value)
                      if (Student) {
                        dispatch(GetAllBookedSlotsActions.setReportSelectedStudent(Student))
                      }else{
                        dispatch(GetAllBookedSlotsActions.setempty())
                      }
                    }} >
                    <option value="">{"Select a Student"}</option>
                    {StudentDetail.studentList.map((student) => (
                      <option value={student.userCode}>{student.studentName}</option>
                    )

                    )}
                  </Form.Select>
                </Form.Group>

              </Col>
              <Col>
                <Form.Group controlId="subjectSelect">

                  <Form.Select defaultValue={getBookedSlotsDetails.reportSubject} onChange={(e) => selectSubject(e.target.value)} >
                    <option value="">Choose a subject</option>
                    <option value="maths">Mathematics</option>
                    <option value="science">Science</option>
                    <option value="english">English</option>
                    <option value="history">History</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col>
                <Button variant="danger"

                  disabled={getBookedSlotsDetails.reportSubject !== "" || getBookedSlotsDetails?.reportSelectedStudent !== "" ? false : true}
                  onClick={() => dispatch(GetReportsList({ student: getBookedSlotsDetails.reportSelectedStudent, subject: getBookedSlotsDetails.reportSubject }))}>
                  Filter Report
                </Button>
              </Col>
            </Row>
            {/* <input type="text" className={styles.inputBox} placeholder="Search by name" /> */}

          </div>

        </Form>

        <div className={styles.buttonDiv}>
          <button className={styles.bookSlotButton} onClick={() => dispatch(GetReportsList({ student: getBookedSlotsDetails.reportSelectedStudent, subject: getBookedSlotsDetails.reportSubject }))}>
            Refresh</button>
        </div>
      </div>
    </>
  );
};

export default ReportsHeader;
