import React, { useRef } from "react";
import Card from "react-bootstrap/Card";
import styles from "./studentList.module.scss";
import { Row, Col } from "react-bootstrap";

const StudentList = () => {
  const libraryScrollRef = useRef(null);

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
      id="studentlist"
      onScroll={(e) => handleScroll(e)}
      onTouchMove={(e) => handleScroll(e)}
      ref={libraryScrollRef}
    >
      <div className={styles.libraryWrapper}>
        <h1 className={styles.bookedSlotText}>Students List</h1>
        <Row>
          <Col xs={12} md={6} lg={4} className="mb-4">
            <Card className={styles.librarycard}>
              <Card.Body>
                <Card.Title>Nithin Subhanesh</Card.Title>
                <Card.Text>
                  <div>
                    <div>Grade: 4</div>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4} className="mb-4">
            <Card className={styles.librarycard}>
              <Card.Body>
                <Card.Title>Nithin Subhanesh</Card.Title>
                <Card.Text>
                  <div>
                    <div>Grade: 4</div>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4} className="mb-4">
            <Card className={styles.librarycard}>
              <Card.Body>
                <Card.Title>Nithin Subhanesh</Card.Title>
                <Card.Text>
                  <div>
                    <div>Grade: 4</div>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4} className="mb-4">
            <Card className={styles.librarycard}>
              <Card.Body>
                <Card.Title>Nithin Subhanesh</Card.Title>
                <Card.Text>
                  <div>
                    <div>Grade: 4</div>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4} className="mb-4">
            <Card className={styles.librarycard}>
              <Card.Body>
                <Card.Title>Nithin Subhanesh</Card.Title>
                <Card.Text>
                  <div>
                    <div>Grade: 4</div>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4} className="mb-4">
            <Card className={styles.librarycard}>
              <Card.Body>
                <Card.Title>Nithin Subhanesh</Card.Title>
                <Card.Text>
                  <div>
                    <div>Grade: 4</div>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4} className="mb-4">
            <Card className={styles.librarycard}>
              <Card.Body>
                <Card.Title>Nithin Subhanesh</Card.Title>
                <Card.Text>
                  <div>
                    <div>Grade: 4</div>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4} className="mb-4">
            <Card className={styles.librarycard}>
              <Card.Body>
                <Card.Title>Nithin Subhanesh</Card.Title>
                <Card.Text>
                  <div>
                    <div>Grade: 4</div>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4} className="mb-4">
            <Card className={styles.librarycard}>
              <Card.Body>
                <Card.Title>Nithin Subhanesh</Card.Title>
                <Card.Text>
                  <div>
                    <div>Grade: 4</div>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4} className="mb-4">
            <Card className={styles.librarycard}>
              <Card.Body>
                <Card.Title>Nithin Subhanesh</Card.Title>
                <Card.Text>
                  <div>
                    <div>Grade: 4</div>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4} className="mb-4">
            <Card className={styles.librarycard}>
              <Card.Body>
                <Card.Title>Nithin Subhanesh</Card.Title>
                <Card.Text>
                  <div>
                    <div>Grade: 4</div>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          
          
        </Row>
      </div>
    </div>
  );
};

export default StudentList;
