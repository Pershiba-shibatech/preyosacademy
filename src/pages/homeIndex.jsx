import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Login/LoginIndex';
import DashboardLayout from './Dashboard/DashboardIndex';
import BookedSlots from './Dashboard/bookedSlots';
import DashBoardHomeIndex from './Home/DashBoardHomeIndex';


const HomeIndex = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="home" element={<DashBoardHomeIndex />} />
          <Route path="booked-slots" element={<BookedSlots />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default HomeIndex;