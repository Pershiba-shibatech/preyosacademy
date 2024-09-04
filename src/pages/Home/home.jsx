import React from "react";
import { Button, Container, Row, Col, Image } from "react-bootstrap";
import { homePageImage } from "../../images/index.js";
import styles from "./home.module.scss";
import { useNavigate } from "react-router-dom";
const Home = () => {
    const Navigate = useNavigate()
  return (
    <div className={styles.home}>
      <h1 className={styles.titletext}>Preyo's Academy</h1>
      <Container className={`my-5 pt-5 pb-5 ${styles.containerHome}`}>
        <Row className="d-flex align-items-center">
          <Col md={6} className={styles.rightBoarder}>
            <Image src={homePageImage} alt="Academy" fluid rounded />
          </Col>

          <Col md={6} className={styles.adjustTop}>
            <div className="text-center">
              <h2>Sign in to the Academy</h2>
              <div className="mt-5">
                <Button
                  className={`me-3 ${styles.outlineBorder}`}
                  variant="danger"
                  onClick={()=>Navigate('/login')}
                >
                  Student
                </Button>
                <Button
                  className={`${styles.outlineBorder}`}
                  variant="danger"
                >
                Tutor
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
