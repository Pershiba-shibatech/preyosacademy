import React from "react";
import { Button, Form } from "react-bootstrap";
import LoginInputs from "./LoginInputs";
import styles from "./login.module.scss";
import { Icon } from "@iconify/react";
const LoginForm = ({ getloginData, loginUserSliceActions, dispatch }) => {
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
        </Form.Group>

        <Button
          type="submit"
          className={`btn btn-danger w-100 ${styles.buttonDanger}`}
          disabled={
            getloginData.userName === "" || getloginData.password === ""
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
