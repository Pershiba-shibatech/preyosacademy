import React, { useEffect, useRef } from "react";
import Card from "react-bootstrap/Card";
import styles from "./library.module.scss";
import { Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getTutorsMaterials } from "../../../store/api/LibraryService";

const Library = () => {
  const libraryScrollRef = useRef(null);
  const LibraryList = useSelector((state) => state.LibraryList);
  const userDetails = useSelector((state) => state.userDetails)
  const dispatch = useDispatch();
  console.log(userDetails.userCode, "userCode")
  useEffect(() => {
    // if (!StudentDetail.isFetched) {
    const data = {
      userCode: userDetails.userCode
    }
    dispatch(getTutorsMaterials(data))
    // }
  }, [])
  console.log(LibraryList.tutorsMaterials, "LibraryList")
  const handleScroll = (e) => {

    // const bottom =
    //   e.target.scrollHeight - Math.round(e.target.scrollTop) ===
    //   e.target.clientHeight;

    // if (bottom) {
    //   console.log("reached bottom");
    // }
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
      id="library"
      onScroll={(e) => handleScroll(e)}
      onTouchMove={(e) => handleScroll(e)}
      ref={libraryScrollRef}
    >
      <div className={styles.libraryWrapper}>
        <h1 className={styles.bookedSlotText}>
          Library - find all your Study Materials
        </h1>
        <Row>
          {LibraryList.tutorsMaterials.map((material) => {
            return <>
              <Col key={material.materialId} xs={12} md={6} lg={4} style={{ minWidth: '375px', minHeight: '225px' }} className="mb-4">
                <Card className={styles.librarycard} style={{ width: '100%', height: "100%" }}>
                  <Card.Body>
                    <p className={styles.StudentName}>{material.studentDetails.studentName}</p>

                    <div className={styles.SessionSubject}>Subject : <p className={styles.InnerSessionSubject}>{material.sessionSubject}</p></div>
                    <Button variant="danger" className={styles.SessionLink} onClick={() => {
                      window.open(material.sessionMaterial.url, "_blank")
                    }}>view Resource</Button>
                  </Card.Body>
                </Card>
              </Col>
            </>

          })}

        </Row>
      </div>
    </div>
  );
};

export default Library;
