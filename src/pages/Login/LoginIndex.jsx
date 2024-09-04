import React from "react";
import { Container,  Button, Card } from "react-bootstrap";
import styles from "./login.module.scss"; // Custom styles
import { useNavigate } from "react-router-dom";

const Login = () => {
      const Navigate = useNavigate()
  return (
    <div className={styles.loginPage}>
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        <Card className={`p-4 ${styles.cardLogin}`}>
          <h3 className="text-center mb-4">Login</h3>
          <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
              />
            </div>

            <Button variant="danger" onClick={() => Navigate('/admindashboard')} className="w-100">
              Login
            </Button>
          </form>
        </Card>
      </Container>
    </div>
  );
};

export default Login;
