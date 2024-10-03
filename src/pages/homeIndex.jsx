import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Login/LoginIndex';
import DashboardLayout from "./Dashboard/DashboardIndex";
import DashBoardHomeIndex from "./Home/DashBoardHomeIndex";
import BookSlot from "./BookSlots/BookSlot";
import Library from "./Dashboard/Library";
import ProtectedRouteForStudent from "./ProtectedRoutesStudent";
import AddStudent from './AddStudent/AddStudent';
import AddTutors from './AddTutor/AddTutors';


const HomeIndex = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="" element={<DashBoardHomeIndex />} />
          <Route
            path="BookSlots"
            element={
              <ProtectedRouteForStudent>
                <BookSlot />
              </ProtectedRouteForStudent>
            }
          />
          <Route path="library" element={<Library />} />
          <Route path="allSlots" element={<Library />} />
        </Route>
        <Route path="/AddStudent" element={<AddStudent />} />
        <Route path="/AddTutor" element={<AddTutors />} />
      </Routes>
    </Router>
  );
};

export default HomeIndex;