import React, { useRef } from "react";
import Card from "react-bootstrap/Card";
import styles from "./library.module.scss";
import { Row, Col } from "react-bootstrap";

const Library = () => {
  const libraryScrollRef = useRef(null);

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
          <Col xs={12} md={6} lg={4} className="mb-4">
            <Card className={styles.librarycard}>
              <Card.Body>
                <Card.Title>Maths</Card.Title>
                {/* <Card.Subtitle className="mb-2 text-muted">
                  Algebra
                </Card.Subtitle> */}
                <Card.Text>Algebra</Card.Text>
                <Card.Link href="#">view Resource</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4} className="mb-4">
            <Card className={styles.librarycard}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>

                <Card.Text className={styles.cardtext}>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. Some quick example text to
                  build on the card title and make up the bulk of the card's
                  content. Some quick example text to build on the card title
                  and make up the bulk of the card's content.
                </Card.Text>

                <Card.Link href="#">view Resource</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4} className="mb-4">
            <Card className={styles.librarycard}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>

                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">view Resource</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4} className="mb-4">
            <Card className={styles.librarycard}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>

                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">view Resource</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4} className="mb-4">
            <Card className={styles.librarycard}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>

                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">view Resource</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4} className="mb-4">
            <Card className={styles.librarycard}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>

                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">view Resource</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4} className="mb-4">
            <Card className={styles.librarycard}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>

                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">view Resource</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4} className="mb-4">
            <Card className={styles.librarycard}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>

                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">view Resource</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4} className="mb-4">
            <Card className={styles.librarycard}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>

                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">view Resource</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4} className="mb-4">
            <Card className={styles.librarycard}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>

                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">view Resource</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4} className="mb-4">
            <Card className={styles.librarycard}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>

                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">view Resource</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4} className="mb-4">
            <Card className={styles.librarycard}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>

                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">view Resource</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4} className="mb-4">
            <Card className={styles.librarycard}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>

                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">view Resource</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Library;
