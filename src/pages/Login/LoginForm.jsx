import React from "react";
import { Button, Form } from "react-bootstrap";
import LoginInputs from "./LoginInputs";
import styles from "./login.module.scss";
import { Icon } from "@iconify/react";
import { LoginUser } from "../../store/api/LoginService";
import { useNavigate } from "react-router-dom";
const LoginForm = ({ getloginData, loginUserSliceActions, dispatch }) => {
  const navigate = useNavigate();

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

        <Form.Group className="mb-3" controlId="password">
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
