import React, { useEffect } from "react";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import styles from "./login.module.scss";
import { preyosLogo } from "../../images";
import LoginContainer from "./LoginContainer";
import { useDispatch, useSelector } from "react-redux";
import { loginUserSliceActions } from "../../store/slice/loginUserSlice";

const COLORS_TOP = ["#ff0000", "#b30000", "#660000", "#330000"];

const Login = () => {

  const color = useMotionValue(COLORS_TOP[0]);
    const getloginData = useSelector((state) => state.loginData);
     const dispatch = useDispatch();
  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    }); // eslint-disable-next-line
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;

  return (
    <div className={styles.containerLogin}>
      <motion.section
        style={{
          backgroundImage,
        }}
        className="relative d-flex min-vh-100 align-items-center justify-content-center text-white"
      >
        <div className="position-absolute w-100 h-100">
          <Canvas>
            <Stars radius={50} count={2500} factor={4} fade speed={2} />
          </Canvas>
        </div>
        <div
          className={`position-absolute top-0 w-100 text-center p-3  
            d-flex justify-content-center align-items-center`}
        >
          <img
            src={preyosLogo}
            alt="Preyo's Academy"
            width="80"
            className={styles.imageandName}
          />
          <h1 className={styles.mainheading}>Preyo's Academy</h1>
        </div>
        <LoginContainer
          getloginData={getloginData}
          loginUserSliceActions={loginUserSliceActions}
          dispatch={dispatch}
        />
      </motion.section>
    </div>
  );
};

export default Login;
