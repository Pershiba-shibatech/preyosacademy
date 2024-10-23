import React, { useEffect, useRef } from "react";
import Card from "react-bootstrap/Card";
import styles from "./tutorList.module.scss";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getTutorsListApi } from "../../../store/api/TutorService";
import SpinnerComp from "../../../components/Spinner/Spinner";
import EmptyState from "../../../components/emptyState/EmptyState";

const TutorsList = () => {
  const TutorsDetail = useSelector((state) => state.TutorsList);
  const libraryScrollRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!TutorsDetail.isFetched) {
      dispatch(getTutorsListApi())
    }
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
    <div
      className={styles.libraryscrollWrapper}
      id="tutorlist"
      // onScroll={(e) => handleScroll(e)}
      // onTouchMove={(e) => handleScroll(e)}
      ref={libraryScrollRef}
    >
      <div className={styles.libraryWrapper}>
        <h1 className={styles.bookedSlotText}>Tutors List</h1>
        {TutorsDetail.tutorsList.length > 0&& <Row >
          {TutorsDetail?.tutorsList?.map((Tutor) =>(  
            <Col key={Tutor.userCode} xs={12} md={6} lg={4} style={{ minWidth: '375px', minHeight: '225px' }} className="mb-4">
              <Card className={styles.librarycard} style={{ width: '100%', height: "100%" }}>
                  <Card.Body>
                    <Card.Title> <span>{Tutor.tutorName}</span></Card.Title>
                 
                        <div><span>Qualification:</span> {Tutor?.Qualification ?? "NA"}</div>
                        <div><span>Experience: </span>{Tutor?.experince ?? "NA"}</div>
                        <div><span>Phone:</span> {Tutor?.phoneNumber ?? "NA"}</div>
                        <div><span>Coordinator:</span>{Tutor?.Coordinator?.tutorName??"NA"}</div>
                     
                  </Card.Body>
                </Card>
              </Col>
            
          ))}

        </Row>}
        {TutorsDetail.isLoading && <div>
          <SpinnerComp />
        </div>}
        {TutorsDetail.tutorsList.length === 0 && <EmptyState EmptyStateText={`No Tutors Available`} />}
      </div>
    </div>
  );
};

export default TutorsList;
