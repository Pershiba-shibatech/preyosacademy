import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import styles from "./addStudent.module.scss";
import Header from "../Dashboard/header";
import TimeZone from "../../components/TimeZone/TimeZone";
import { useNavigate } from "react-router-dom";
import { Subjects } from "../../constants";
import { CreateStudentSliceActions } from "../../store/slice/createStudentSlice";
import { useDispatch, useSelector } from "react-redux";
import { ToastSliceActions } from "../../store/slice/ToastSlice";
import { createStudentApi, getStudentsListApi } from "../../store/api/StudentService";
const AddStudent = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const createStudentDetails = useSelector((state) => state.createStudent);
  const TutorsDetail = useSelector((state) => state.TutorsList);
  const userDetails = useSelector((state) => state.userDetails)

  const RegisterUser=()=>{
  console.log(createStudentDetails?.Coordinator, createStudentDetails?.Coordinator.hasOwnProperty('userCode'))
        if (
          createStudentDetails.firstName==="" ||
          createStudentDetails.lastName==="" ||
          createStudentDetails.studentName ==="" ||
          createStudentDetails.ParentName ==="" ||
          createStudentDetails.grade ==="" ||
          createStudentDetails.contactNumber ==="" ||
          createStudentDetails.CountryCode ==="+" ||
          createStudentDetails.email ==="" ||
          createStudentDetails.password ==="" ||
          createStudentDetails.TimeZone ==="" ||
          createStudentDetails.Subjects.length===0
        ) {
        // dispatch(CreateStudentSliceActions.setError())
         dispatch(ToastSliceActions.setfailureToast("Please fill out all required fields!."))
          
        }else if( !createStudentDetails?.Coordinator.hasOwnProperty('userCode')){
          dispatch(ToastSliceActions.setfailureToast("Please Select Coordinator for Student."))
        }
        else{
          dispatch(CreateStudentSliceActions.setLoading())
          const createStudentData={
            firstName: createStudentDetails.firstName,
            lastName: createStudentDetails.lastName,
            studentName: createStudentDetails.studentName,
            subjects: createStudentDetails.Subjects,
            parentName: createStudentDetails.ParentName,
            Address: {
                AddressLine1: createStudentDetails.AddressLine1,
                AddressLine2: "",
                State:createStudentDetails.State,
                Country: createStudentDetails.Country,
                postalCode:createStudentDetails.postalCode
            },
            AccountDetails: {
                AccountNumber: "",
                IFSC_Code: "",
                Branch: ""
            },
            phoneNumber: createStudentDetails.contactNumber,
            countryCode: createStudentDetails.CountryCode,
            email: createStudentDetails.email,
            password: createStudentDetails.password,
            timeZone: createStudentDetails.TimeZone,
            userType: "Student",
            Coordinator:createStudentDetails.Coordinator.userCode,
            Dob:createStudentDetails.DOB,
            grade:createStudentDetails.grade,
            Requirements:createStudentDetails.requirements
          }
      
          dispatch(createStudentApi(createStudentData)).unwrap().then((response)=>{
            dispatch(CreateStudentSliceActions.setLoading())
            if (response.data.statusCode === 200) {
              dispatch(getStudentsListApi())
              dispatch(ToastSliceActions.setSuccessToast("Tutor Created Successfully!"))
              dispatch(CreateStudentSliceActions.reset())
              Navigate(-1)
            }else{
              if(response.data.message==='Student already exist with the same email'){
                dispatch(ToastSliceActions.setfailureToast("Student already exist with the same email!"))
              }else{
                dispatch(ToastSliceActions.setfailureToast("Failed To create Tutor!"))
              }
            
            }
         
          })
        }
    
      }

  return (
    <>
      <div className={`${styles.headerColor} text-white p-3`}>
        <Header />
      </div>
      <div className={`container-fluid ${styles.addStudentWrapper}`}>
        <h2 className="mb-4">Add Student</h2>
        <Form className={styles.formContainer}>
          <Row>
            {/* Student Name */}
            <Col xs={12} md={6} lg={4}>
              <Form.Group className="mb-3" controlId="firstName">
                <Form.Label>First Name*</Form.Label>
                <Form.Control type="text" placeholder="Enter student name"
                  value={createStudentDetails.firstName}
                  onChange={(e) => dispatch(CreateStudentSliceActions.setFirstName(e.target.value))}
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <Form.Group className="mb-3" controlId="lastName">
                <Form.Label>Last Name*</Form.Label>
                <Form.Control type="text" placeholder="Enter student name"
                  value={createStudentDetails.lastName}
                  onChange={(e) => dispatch(CreateStudentSliceActions.setlastName(e.target.value))}
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <Form.Group className="mb-3" controlId="studentName">
                <Form.Label>Student Name*</Form.Label>
                <Form.Control type="text" placeholder="Enter student name"
                  value={createStudentDetails.studentName}
                  onChange={(e) => dispatch(CreateStudentSliceActions.setstudentName(e.target.value))}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            {/* DOB */}
            <Col xs={12} md={6} lg={4}>
              <Form.Group className="mb-3" controlId="dob">
                <Form.Label>DOB</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Enter Student Date of Birth"
                  value={createStudentDetails.DOB}
                  onChange={(e) => dispatch(CreateStudentSliceActions.setDob(e.target.value))}
                />
              </Form.Group>
            </Col>

            {/* Grade */}
            <Col xs={12} md={6} lg={4}>
              <Form.Group className="mb-3" controlId="grade">
                <Form.Label>Grade*</Form.Label>
                <Form.Control type="text" placeholder="Enter grade"
                  value={createStudentDetails.grade}
                  onChange={(e) => dispatch(CreateStudentSliceActions.setgrade(e.target.value))}
                />
              </Form.Group>
            </Col>
            {/* Parent Name */}
            <Col xs={12} md={6} lg={4}>
              <Form.Group className="mb-3" controlId="parentName">
                <Form.Label>Parent Name*</Form.Label>
                <Form.Control type="text" placeholder="Enter parent name"
                  value={createStudentDetails.ParentName}
                  onChange={(e) => dispatch(CreateStudentSliceActions.setParentNames(e.target.value))}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            {/* Time Zone */}
            <Col xs={12} md={6} lg={4}>
              <Form.Group className="mb-3" controlId="timeZone">
                <Form.Label>Time Zone*</Form.Label>
                {/* <Form.Control type="text" placeholder="Enter time zone" /> */}
                <TimeZone dispatch={dispatch} value={createStudentDetails.TimeZone} onChange={CreateStudentSliceActions.setTimeZone} />
              </Form.Group>
            </Col>

            {/* Country */}
            <Col xs={12} md={6} lg={4}>
              <Form.Group className="mb-3" controlId="country">
                <Form.Label>Country*</Form.Label>
                <Form.Control type="text" placeholder="Enter Student Country"
                  value={createStudentDetails.Country}
                  onChange={(e) => dispatch(CreateStudentSliceActions.setCountry(e.target.value))}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            {/* Country Code */}
            <Col xs={12} md={6} lg={4}>
              <Form.Group className="mb-3" controlId="countryCode">
                <Form.Label>Country Code*</Form.Label>
                <Form.Control type="text" placeholder="Enter country code"
                  value={createStudentDetails.CountryCode}
                  onChange={(e) => {
                    const value = e.target.value;
                   
                    if (/^[+\d]*$/.test(value)) {
                      dispatch(CreateStudentSliceActions.setCountryCode(value === "" ? "+" : value));
                    }
                  }}

                />
              </Form.Group>
            </Col>

            {/* Contact Number */}
            <Col xs={12} md={6} lg={4}>
              <Form.Group className="mb-3" controlId="contactNumber">
                <Form.Label>Contact Number*</Form.Label>
                <Form.Control type="text" placeholder="Enter contact number"
                  value={createStudentDetails.contactNumber}
                  onChange={(e) => {
                    const value = e.target.value;
                  
                    if (/^\d*$/.test(value)) {
                      dispatch(CreateStudentSliceActions.setcontactNumber(value));
                    }
                  }}   
                  />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            {/* Email */}
            <Col xs={12} md={6} lg={4}>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email*</Form.Label>
                <Form.Control type="email" placeholder="Enter email"
                  value={createStudentDetails.email}
                  onChange={(e) => dispatch(CreateStudentSliceActions.setemail(e.target.value))}
                />
              </Form.Group>
            </Col>

            {/* Password */}
            <Col xs={12} md={6} lg={4}>
              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password*</Form.Label>
                <Form.Control type="password" placeholder="Enter password"
                  value={createStudentDetails.password}
                  onChange={(e) => dispatch(CreateStudentSliceActions.setpassword(e.target.value))}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            {/* Requirement Text Area */}
            <Col xs={6}>
              <Form.Group className="mb-3" controlId="requirement">
                <Form.Label>Requirement</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter requirements"
                  value={createStudentDetails.requirements}
                  onChange={(e) => dispatch(CreateStudentSliceActions.setrequirements(e.target.value))}

                />
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group className="mb-3" controlId="coordinator">
                <Form.Label>Select Coordinator*</Form.Label>
                <Form.Select
                defaultValue={createStudentDetails.Coordinator?.tutorName}
                  // value={createStudentDetails.Coordinator}  // Use a unique identifier for the value
                  onChange={(e) => {
                    const selectedTutor = TutorsDetail.tutorsList.find(tutor => tutor.userCode === e.target.value);
                    if (selectedTutor) {
                      dispatch(CreateStudentSliceActions.setCoordinator(selectedTutor) );
                    }
                  }}
                >
                  <option >{"select Coordinator"}</option>
                  {TutorsDetail.tutorsList.map((tutor) => (
                    <option  value={tutor.userCode}>
                      {`${tutor?.tutorName} (${tutor.userType})`}
                    </option>
                  ))}
                </Form.Select>

              </Form.Group>
            </Col>
          </Row>
          <Row>
            {/* Subject Selection */}
            <Col xs={12} md={6}>

              <Form.Group className="mb-3">
                <Form.Label>Select Subjects*</Form.Label>
                <div className="d-flex justify-content-between flex-wrap">
                  {Subjects.map((subject, index) => {
                    return <>
                      <Button variant="outline-light" key={index}
                        onClick={() => dispatch(CreateStudentSliceActions.setSubjects(subject))}
                        className={createStudentDetails?.Subjects?.includes(subject) ? `${styles.subjectActive} ${styles.subjectBtn}` : `${styles.subjectBtn}`}>
                        {subject}
                      </Button>
                    </>

                  })}
                </div>
              </Form.Group>
            </Col>
          </Row>

          {/* Clear and Submit Buttons in Right Bottom Corner */}
          <div className="d-flex justify-content-end">
            <Button
              variant="light"
              className={`${styles.clearBtn} me-2`}
              onClick={() => Navigate(-1)}
            >
              Cancel
            </Button>
            <Button
              variant="light"
              className={styles.clearbtn}

              onClick={() => dispatch(CreateStudentSliceActions.reset())}
            >
              Clear
            </Button>
            <Button variant="danger" className={styles.submitBtn} onClick={()=>RegisterUser()}>
              Register
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default AddStudent;
