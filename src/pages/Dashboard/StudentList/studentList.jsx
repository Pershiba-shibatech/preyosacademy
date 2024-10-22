import React, { useEffect, useRef } from "react";
import Card from "react-bootstrap/Card";
import styles from "./studentList.module.scss";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getStudentsListApi } from "../../../store/api/StudentService";
import BookSlotModal from "../../../components/Modals/BookSlotModal";
import { selectSubjectSliceActions } from "../../../store/slice/selectSubjectModelSlice";
import { SelectedStudentSliceActions } from "../../../store/slice/SelectedStudentSlice";

const StudentList = () => {
  const libraryScrollRef = useRef(null);
  const StudentDetail = useSelector((state) => state.StudentList);
  const subjectModelDetails = useSelector((state) => state.subjectModelData);
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = React.useState(false);
  useEffect(() => {
    // if (!StudentDetail.isFetched) {
    
      dispatch(getStudentsListApi())
    // }
  }, [])

  const handleScroll = (e) => {

    const target = e.target;
    const isAtBottom =
      target.scrollHeight - target.scrollTop <= target.clientHeight + 1;

    if (isAtBottom) {
      console.log("reached bottom");
      // Load more data or perform another action
    }
  };
  return (
    <>
      <div
        className={styles.libraryscrollWrapper}
        id="studentlist"
        // onScroll={(e) => handleScroll(e)}
        // onTouchMove={(e) => handleScroll(e)}
        ref={libraryScrollRef}
      >
        <div className={styles.libraryWrapper}>
          <h1 className={styles.bookedSlotText}>Students List </h1>
         
        
          <Row>
            {StudentDetail?.studentList?.map((student) => (
              <Col key={student?.userCode} xs={12} md={6} lg={4} className="mb-4 d-flex gap-2">
                <Card className={styles.librarycard}>
                  <Card.Body>
                    <Card.Title>{student?.studentName}</Card.Title>


                    <div><span>Grade:</span> {student?.grade}</div>
                    <div><span>Parent Name:</span> {student?.parentName}</div>
                    <div><span>Phone:</span> {student?.phoneNumber}</div>
                    <div><span>Email:</span> {student?.email}</div>
                    <div><span>Coordinator:</span>{student?.Coordinator?.tutorName}</div>
                    <button
                      className={styles.bookSlotButton}
                      onClick={() => {dispatch(selectSubjectSliceActions.setopenSubjectModel());

                        dispatch(SelectedStudentSliceActions.setSelectedSlot(student))
                      }}
                    >
                      Book Slot
                    </button>

                  </Card.Body>
                </Card>
              </Col>
            ))

            }



          </Row>
        </div>
      </div>

      <BookSlotModal show={subjectModelDetails.openSubjectModel} onHide={() => dispatch(selectSubjectSliceActions.setopenSubjectModel())} />
    </>

  );
};

export default StudentList;
