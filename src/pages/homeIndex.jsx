import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home/home';
import Login from './Login/LoginIndex';


const HomeIndex = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/editPost" element={<CreatePostIndex />} /> */}
      </Routes>
    </Router>
  );
};

export default HomeIndex;