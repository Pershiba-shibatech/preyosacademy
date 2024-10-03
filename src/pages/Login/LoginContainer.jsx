import React from 'react'
import { Container, Card, Button } from "react-bootstrap";
import styles from "./login.module.scss";
import LoginForm from './LoginForm';

const LoginContainer = ({ getloginData, loginUserSliceActions, dispatch }) => {

  return (
    <>
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        <Card className={`p-4 ${styles.cardLogin}`}>
          <div className="d-flex justify-content-center mb-4">
            <Button
              variant={
                getloginData.userType === 0
                  ? `danger ${styles.buttonDanger}`
                  : `outline-danger ${styles.hoverButton}`
              }
              onClick={() => dispatch(loginUserSliceActions.setUserType(0))}
              className="me-2"
            >
              Login as Student
            </Button>
            <Button
              variant={
                getloginData.userType !== 0
                  ? `danger ${styles.buttonDanger}`
                  : `outline-danger ${styles.hoverButton}`
              }
              onClick={() => dispatch(loginUserSliceActions.setUserType(1))}
            >
              Login as Tutor
            </Button>
          </div>

          {/* Login Form */}
          <LoginForm
            getloginData={getloginData}
            loginUserSliceActions={loginUserSliceActions}
            dispatch={dispatch}
          />
        </Card>
      </Container>
    </>
  );
};

export default LoginContainer