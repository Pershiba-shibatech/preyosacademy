import React, { useEffect, useRef } from "react";
import Card from "react-bootstrap/Card";
import styles from "./studentList.module.scss";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteStudent, getStudentsListApi } from "../../../store/api/StudentService";
import BookSlotModal from "../../../components/Modals/BookSlotModal";
import { selectSubjectSliceActions } from "../../../store/slice/selectSubjectModelSlice";
import { SelectedStudentSliceActions } from "../../../store/slice/SelectedStudentSlice";
import EmptyState from "../../../components/emptyState/EmptyState";
import SpinnerComp from "../../../components/Spinner/Spinner";
import { ToastSliceActions } from "../../../store/slice/ToastSlice";
import { getStudentsSliceActions } from "../../../store/slice/getStudentsList";
import { Icon } from "@iconify/react/dist/iconify.js";
import BookSingleSlotModal from "../../../components/Modals/BookSingleSlotModal";

const StudentList = () => {
  const libraryScrollRef = useRef(null);
  const StudentDetail = useSelector((state) => state.StudentList);
  const subjectModelDetails = useSelector((state) => state.subjectModelData);
  const dispatch = useDispatch();
  // const [modalShow, setModalShow] = React.useState(false);
  useEffect(() => {
    // if (!StudentDetail.isFetched) {

    dispatch(getStudentsListApi())
    // }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // const handleScroll = (e) => {

  //   const target = e.target;
  //   const isAtBottom =
  //     target.scrollHeight - target.scrollTop <= target.clientHeight + 1;

  //   if (isAtBottom) {
      
  //     // Load more data or perform another action
  //   }
  // };

  const deleteUStudent = (student) => {
    dispatch(getStudentsSliceActions.setLoading())
    dispatch(deleteStudent(student.userCode)).unwrap().then((response) => {
      if (response.data.statusCode === 200) {
        dispatch(getStudentsListApi())
        dispatch(ToastSliceActions.setSuccessToast("Student deleted Successfully!"))

      } else {
        dispatch(ToastSliceActions.setfailureToast("Failed to delete Student!"))
      }
    })
  }
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
          {StudentDetail.studentList.length > 0 &&
            <Row>
              {!StudentDetail.isLoading && StudentDetail?.studentList?.map((student) => (
                <Col key={student?.userCode} xs={12} md={6} lg={4} style={{ minWidth: '375px', minHeight: '225px' }} className="mb-4">
                  <Card className={styles.librarycard} style={{ width: '100%', height: "100%" }}>
                    <Card.Body>
                      <Card.Title>
                        <div className="d-flex justify-content-between">
                          {student?.studentName}
                          <div>
                            <Icon icon="ic:baseline-edit" width="24" height="30" style={{ color: "#df000d", cursor: 'pointer' }} />
                            <Icon icon="ic:baseline-delete-forever" width="36" height="30" style={{ color: "#df000d", cursor: 'pointer' }}
                              onClick={() => deleteUStudent(student)}
                            />
                          </div>
                
                        </div>
                       
                      </Card.Title>


                      <div><span>Grade:</span> {student?.grade}</div>
                      <div><span>Parent Name:</span> {student?.parentName}</div>
                      <div><span>Phone:</span> {student?.phoneNumber}</div>
                      <div><span>Email:</span> {student?.email}</div>
                      <div><span>Password :</span>{student?.password}</div>
                      <div><span>Coordinator:</span>{student?.Coordinator?.tutorName}</div>
                      <div className={styles.buttonDiv}>
                        <button
                          className={styles.bookSlotButton}
                          onClick={() => {
                            dispatch(selectSubjectSliceActions.setopenSubjectModel());

                            dispatch(SelectedStudentSliceActions.setSelectedSlot(student))
                          }}
                        >
                          Book Multiple Slot
                        </button>
                        <button
                          className={styles.bookSlotButton}
                          onClick={() => {
                            dispatch(selectSubjectSliceActions.setopenSingleSlotModel());

                            dispatch(SelectedStudentSliceActions.setSelectedSlot(student))
                          }}
                        >
                          Book Single Slot
                        </button>

                        {/* <button
                          className={styles.bookSlotButton}
                          onClick={() => deleteUStudent(student)}
                        >
                          Delete
                        </button> */}
                      </div>
                    

                    </Card.Body>
                  </Card>
                </Col>
              ))

              }
            </Row>}
          {StudentDetail.isLoading && <div>
            <SpinnerComp />
          </div>}
          {!StudentDetail.isLoading && StudentDetail.studentList.length === 0 && <EmptyState EmptyStateText={`No Students Available`} />}
        </div>
      </div>
      <BookSlotModal show={subjectModelDetails.openSubjectModel} onHide={() => dispatch(selectSubjectSliceActions.setopenSubjectModel())} />
      <BookSingleSlotModal show={subjectModelDetails.openSingleSlotModel} onHide={() => dispatch(selectSubjectSliceActions.setopenSingleSlotModel())} />
    </>

  );
};

export default StudentList;
