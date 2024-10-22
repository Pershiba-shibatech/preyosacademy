import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import LoginInputs from "./LoginInputs";
import styles from "./login.module.scss";
import { Icon } from "@iconify/react";
import { LoginUser } from "../../store/api/LoginService";
import { useNavigate } from "react-router-dom";
import { getTutorsListApi } from "../../store/api/TutorService";
import { getStudentsListApi } from "../../store/api/StudentService";
const LoginForm = ({ getloginData, loginUserSliceActions, dispatch }) => {
  const navigate = useNavigate();
  const [passwordtype, setpasswordtype] = useState(true)
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/; // Basic email regex
    return emailRegex.test(email);
  };

  const LoginToUser = () => {
    if (!validateEmail(getloginData.userName)) {
      dispatch(loginUserSliceActions.setUserEmail("*Invalid Email Address"));
      return;
    }
    let loginData = {
      userName: getloginData.userName,
      password: getloginData.password,
      type: getloginData.userType,
    };
    console.log(loginData, "loginData");
    dispatch(LoginUser(loginData))
      .unwrap()
      .then((response) => {
        if (response.data.statusCode === 200) {
          dispatch(getTutorsListApi())
          dispatch(getStudentsListApi())
          navigate("/dashboard");
          dispatch(loginUserSliceActions.reset());
        } else {
          if (response.data.message === "User not Found") {
            dispatch(loginUserSliceActions.setUserEmail("*User not Found"));
          } else {
            dispatch(loginUserSliceActions.setUserPassword("*Wrong password "));
          }
        }
      });
  };

  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Username</Form.Label>
          <LoginInputs
            type={"email"}
            placeholder={"Enter your Email"}
            classStyle={styles.inputColor}
            value={getloginData.userName}
            onchangeFunction={(e) =>
              dispatch(loginUserSliceActions.setUserName(e.target.value))
            }
          />
          {getloginData.EmailError ? (
            <div className={styles.errorMessage}>
              {getloginData.EmailErrorMessage}
            </div>
          ) : null}
        </Form.Group>

        {/* <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <LoginInputs
            type={"password"}
            placeholder={"Enter your password"}
            value={getloginData.password}
            classStyle={styles.inputColor}
            onchangeFunction={(e) =>
              dispatch(loginUserSliceActions.setPassword(e.target.value))
            }
          />
          <Icon icon="carbon:view-off" width="14" height="14" style={{ color: "black" }} />
          {getloginData.PasswordError ? (
            <div className={styles.errorMessage}>
              {getloginData.PasswordErrorMessage}
            </div>
          ) : null}
        </Form.Group> */}
        <Form.Group className="mb-3" controlId="password" style={{ position: 'relative' }}>
          <Form.Label>Password</Form.Label>
          <div className={styles.inputWrapper}>
            <LoginInputs
              type={passwordtype?"password":"text"}
              placeholder={"Enter your password"}
              value={getloginData.password}
              classStyle={styles.inputColor}
              onchangeFunction={(e) =>
                dispatch(loginUserSliceActions.setPassword(e.target.value))
              }
            />
            <Icon
              icon={passwordtype ?"carbon:view":"carbon:view-off"}
              width="14"
              height="14"
              onClick={() => setpasswordtype(!passwordtype)}
              style={{ color: "black", position: 'absolute', right: '10px', top: '75%', transform: 'translateY(-50%)', cursor: 'pointer' }}
            />
          </div>
          {getloginData.PasswordError ? (
            <div className={styles.errorMessage}>
              {getloginData.PasswordErrorMessage}
            </div>
          ) : null}
        </Form.Group>
        <Button
          onClick={() => LoginToUser()}
          className={`btn btn-danger w-100 ${styles.buttonDanger}`}
          disabled={
            getloginData.userName === "" ||
              getloginData.password === "" ||
              getloginData.PasswordError ||
              getloginData.EmailError
              ? true
              : false
          }
        >
          {getloginData.userType === 0 ? "Login as Student" : "Login as Tutor"}
          <Icon
            icon="mingcute:arrow-right-line"
            width="24"
            height="24"
            style={{ color: "white", marginLeft: "8px" }}
          />
        </Button>
      </Form>
    </>
  );
};

export default LoginForm;
