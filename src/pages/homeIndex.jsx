import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Login/LoginIndex';
import DashboardLayout from "./Dashboard/DashboardIndex";
import DashBoardHomeIndex from "./Home/DashBoardHomeIndex";
import BookSlot from "./BookSlots/BookSlot";
import Library from "./Dashboard/Library/Library";
import ProtectedRouteForStudent from "./ProtectedRoutesStudent";
import AddStudent from "./AddStudent/AddStudent";
import AddTutors from "./AddTutor/AddTutors";
import AllSlots from "./Dashboard/AllSlots/AllSlots";
import StudentList from "./Dashboard/StudentList/studentList";
import TutorsList from './Dashboard/TutorList/TutorsList';
import ProtectedRouteForAdmin from './ProtectedRoutesAdmin';


const HomeIndex = () => {
  

  return (
   <>

    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="" element={<DashBoardHomeIndex />} />
          <Route
            path="BookSlots"
            element={
              <ProtectedRouteForAdmin>
                <BookSlot />
              </ProtectedRouteForAdmin>
            }
          />
          <Route path="library" element={<Library />} />
          <Route path="studentlist" element={<StudentList />} />
          <Route path="tutorlist" element={<TutorsList />} />
          <Route path="allSlots" element={<AllSlots />} />
        </Route>
        <Route path="/AddStudent" element={<AddStudent />} />
        <Route path="/AddTutor" element={<AddTutors />} />
      </Routes>
    </Router>
   </>

  );
};

export default HomeIndex;