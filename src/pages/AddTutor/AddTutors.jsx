import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import styles from "./addTutor.module.scss";
import TimeZone from "../../components/TimeZone/TimeZone";
import { useNavigate } from "react-router-dom";
import Header from "../Dashboard/header";
import { useDispatch, useSelector } from "react-redux";
import { createTutorSliceActions } from "../../store/slice/createTutorSlice";
import { Subjects } from "../../constants";
import { createTutorApi } from "../../store/api/TutorService";
import { ToastSliceActions } from "../../store/slice/ToastSlice";



const AddTutors = () => {

  const createTutorDetails = useSelector((state) => state.createTutor);
  const userDetails = useSelector((state)=>state.userDetails)
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  console.log(createTutorDetails,"createTutorDetails")
  const RegisterUser=()=>{
console.log( createTutorDetails.firstName==="" ||
  createTutorDetails.lastName==="" ||
  createTutorDetails.tutorName ==="" ||
  createTutorDetails.qualification ==="" ||
  createTutorDetails.experiences ==="" ||
  createTutorDetails.contactNumber ==="" ||
  createTutorDetails.CountryCode ==="+" ||
  createTutorDetails.email ==="" ||
  createTutorDetails.password ==="" ||
  createTutorDetails.TimeZone ==="" ||
  createTutorDetails.AccountNumber ==="" ||
  createTutorDetails.IFSCCode ==="" ||
  createTutorDetails.Branch ==="" ||
  createTutorDetails.Subjects.length===0)
    if (
      createTutorDetails.firstName==="" ||
      createTutorDetails.lastName==="" ||
      createTutorDetails.tutorName ==="" ||
      createTutorDetails.qualification ==="" ||
      createTutorDetails.experiences ==="" ||
      createTutorDetails.contactNumber ==="" ||
      createTutorDetails.CountryCode ==="+" ||
      createTutorDetails.email ==="" ||
      createTutorDetails.password ==="" ||
      createTutorDetails.TimeZone ==="" ||
      createTutorDetails.AccountNumber ==="" ||
      createTutorDetails.IFSCCode ==="" ||
      createTutorDetails.Branch ==="" ||
      createTutorDetails.Subjects.length===0
    ) {
    // dispatch(createTutorSliceActions.setError())
     dispatch(ToastSliceActions.setfailureToast("Please fill out all required fields!."))
      
    }else{
      dispatch(createTutorSliceActions.setLoading())
      const createTutor={
        firstName: createTutorDetails.firstName,
        lastName: createTutorDetails.lastName,
        tutorName: createTutorDetails.tutorName,
        subjects: createTutorDetails.Subjects,
        experince: createTutorDetails.experiences,
        Address: {
            AddressLine1: createTutorDetails.AddressLine1,
            AddressLine2: "",
            State: createTutorDetails.State,
            Country: createTutorDetails.Country,
            postalCode: createTutorDetails.postalCode
        },
        AccountDetails: {
            AccountNumber: createTutorDetails.AccountNumber,
            IFSC_Code: createTutorDetails.IFSCCode,
            Branch: createTutorDetails.Branch
        },
        phoneNumber: createTutorDetails.contactNumber,
        countryCode: createTutorDetails.CountryCode,
        email: createTutorDetails.email,
        password: createTutorDetails.password,
        timeZone: createTutorDetails.TimeZone,
        userType: "Tutor",
        Coordinator:userDetails.userCode,
        Dob:createTutorDetails.DOB,
        Qualification:createTutorDetails.qualification
      }
  
      dispatch(createTutorApi(createTutor)).unwrap().then((response)=>{
        dispatch(createTutorSliceActions.setLoading())
        if (response.data.statusCode === 200) {
          dispatch(ToastSliceActions.setSuccessToast("Tutor Created Successfully!"))
          dispatch(createTutorSliceActions.reset())
          Navigate(-1)
        }else{
          if(response.data.message==='Tutor already exist with the same email'){
            dispatch(ToastSliceActions.setfailureToast("Tutor already exist with the same email!"))
          }else{
            dispatch(ToastSliceActions.setfailureToast("Failed To create Tutor!"))
          }
        
        }
     
      })
    }

  }

  return (
    <>
      <div className={`${styles.headerColor} text-white p-3`} id='tutor-head'>
        <Header />
      </div>
     
      <div className={`container-fluid ${styles.addTutorWrapper}`}>
   

        <h2 className="mb-4">Add Tutor</h2>
       
        <Form className={styles.formContainer}>
          <Row>
            {/* Tutor Name */}
            <Col xs={12} md={6} lg={4}>
              <Form.Group className="mb-3" controlId="FirstName">
                <Form.Label>First Name*</Form.Label>
                <Form.Control
                  type="text"
                  value={createTutorDetails.firstName}
                  onChange={(e)=>dispatch(createTutorSliceActions.setFirstName(e.target.value))}
                  placeholder="Enter First name of tutor"
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <Form.Group className="mb-3" controlId="LastName">
                <Form.Label>Last Name*</Form.Label>
                <Form.Control
                  type="text"
                  value={createTutorDetails.lastName}
                  onChange={(e)=>dispatch(createTutorSliceActions.setlastName(e.target.value))}
                  placeholder="Enter Last name of tutor"
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <Form.Group className="mb-3" controlId="tutorName">
                <Form.Label>Tutor Name*</Form.Label>
                <Form.Control type="text"  value={createTutorDetails.tutorName} 
                 onChange={(e)=>dispatch(createTutorSliceActions.setTutorName(e.target.value))} placeholder="Enter tutor name" />
              </Form.Group>
            </Col>
            {/* Qualification */}
          </Row>
          <Row>
            <Col xs={12} md={6} lg={4}>
              <Form.Group className="mb-3" controlId="DOB">
                <Form.Label>DOB</Form.Label>
                <Form.Control type="date"
                value={createTutorDetails.DOB} 
                onChange={(e)=> dispatch(createTutorSliceActions.setDob(e.target.value))}
                placeholder="Enter DOB" />
              </Form.Group>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <Form.Group className="mb-3" controlId="qualification">
                <Form.Label>Qualification*</Form.Label>
                <Form.Control type="text" 
                  value={createTutorDetails.qualification} 
                  onChange={(e)=>dispatch(createTutorSliceActions.setqualification(e.target.value))}
                 
                placeholder="Enter qualification" />
              </Form.Group>
            </Col>
            {/* Experience */}
            <Col xs={12} md={6} lg={4}>
              <Form.Group className="mb-3" controlId="experience">
                <Form.Label>Experience*</Form.Label>
                <Form.Control type="text"  
                value={createTutorDetails.experiences} 
                  onChange={(e)=>dispatch(createTutorSliceActions.setexperiences(e.target.value))}
                   placeholder="Enter experience" />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            {/* Address */}
            <Col xs={12} md={6} lg={4}>
              <Form.Group className="mb-3" controlId="Address">
                <Form.Label>Building and Street name</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={2}
                  value={createTutorDetails.AddressLine1} 
                  onChange={(e)=>dispatch(createTutorSliceActions.setAddressLine1(e.target.value))}
                  placeholder="Enter Building name & Street name"
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <Form.Group className="mb-3" controlId="State">
                <Form.Label>State</Form.Label>
                <Form.Control type="text" 
                 value={createTutorDetails.State} 
                 onChange={(e)=>dispatch(createTutorSliceActions.setState(e.target.value))}
                placeholder="Enter Tutors State" />
              </Form.Group>
            </Col>
          
            <Col xs={12} md={6} lg={4}>
              <Form.Group className="mb-3" controlId="Country">
                <Form.Label>Country</Form.Label>
                <Form.Control type="text"
                 value={createTutorDetails.Country} 
                 onChange={(e)=>dispatch(createTutorSliceActions.setCountry(e.target.value))}
                placeholder="Enter Tutors Country" />
              </Form.Group>
            </Col>
            
          </Row>
          {/* Time Zone */}
          <Row>
          <Col xs={12} md={6} lg={4}>
              <Form.Group className="mb-3" controlId="postal code">
                <Form.Label>Postal code</Form.Label>
                <Form.Control type="text"
                value={createTutorDetails.postalCode} 
                onChange={(e)=>dispatch(createTutorSliceActions.setpostalCode(e.target.value))}
                placeholder="Enter tutors Zip code" />
              </Form.Group>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <Form.Group className="mb-3" controlId="countryCode">
                <Form.Label>Country Code*</Form.Label>
                <Form.Control type="text"
                  value={createTutorDetails.CountryCode} 
                  onChange={(e) => {
                    const value = e.target.value;
                   
                    if (/^[+\d]*$/.test(value)) {
                      dispatch(createTutorSliceActions.setCountryCode(value === "" ? "+" : value));
                    }
                  }}
                              placeholder="Enter country code" />
              </Form.Group>
            </Col>
           
           {/* Contact Number */}
           <Col xs={12} md={6} lg={4}>
              <Form.Group className="mb-3" controlId="contactNumber">
                <Form.Label>Contact Number*</Form.Label>
                <Form.Control type="text" 
                 value={createTutorDetails.contactNumber} 
                 onChange={(e) => {
                  const value = e.target.value;
                
                  if (/^\d*$/.test(value)) {
                    dispatch(createTutorSliceActions.setcontactNumber(value));
                  }
                }}                placeholder="Enter contact number" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            {/* Email */}
            <Col xs={12} md={6} lg={4}>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email*</Form.Label>
                <Form.Control type="email" placeholder="Enter email"  
                 value={createTutorDetails.email} 
                  onChange={(e)=>dispatch(createTutorSliceActions.setemail(e.target.value))} />
              </Form.Group>
            </Col>
            {/* Password */}
            <Col xs={12} md={6} lg={4}>
              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password*</Form.Label>
                <Form.Control type="password" 
                  value={createTutorDetails.password} 
                  onChange={(e)=>dispatch(createTutorSliceActions.setpassword(e.target.value))}
                placeholder="Enter password" />
              </Form.Group>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <Form.Group className="mb-3" controlId="timeZone">
                <Form.Label>Time Zone*</Form.Label>
                {/* <Form.Control type="text" placeholder="Enter time zone" /> */}
                <TimeZone dispatch={dispatch} value={createTutorDetails.TimeZone} onChange={createTutorSliceActions.setTimeZone}  />
              </Form.Group>
            </Col>
             
          </Row>
          <Row>
            {/* Account Number */}
            <Col xs={12} md={6} lg={4}>
              <Form.Group className="mb-3" controlId="accountNumber">
                <Form.Label>Account Number*</Form.Label>
                <Form.Control type="text" 
                  value={createTutorDetails.AccountNumber} 
                  onChange={(e) => {
                    const value = e.target.value;
                    if (/^\d*$/.test(value)) {
                      dispatch(createTutorSliceActions.setAccountNumber(value));
                    }
                  }}                placeholder="Enter account number" />
              </Form.Group>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <Form.Group className="mb-3" controlId="ifscCode">
                <Form.Label>IFSC Code*</Form.Label>
                <Form.Control type="text"
                 value={createTutorDetails.IFSCCode} 
                 onChange={(e)=>dispatch(createTutorSliceActions.setIFSCCode(e.target.value))}
                placeholder="Enter Ifsc code" />
              </Form.Group>
            </Col>
            
            <Col xs={12} md={6} lg={4}>
              <Form.Group className="mb-3" controlId="Branch">
                <Form.Label>Branch*</Form.Label>
                <Form.Control type="text" 
                 value={createTutorDetails.Branch} 
                 onChange={(e)=>dispatch(createTutorSliceActions.setBranch(e.target.value))}
                placeholder="Enter Branch name" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            {/* Subject Selection */}
            <Col xs={12} md={6}>

              <Form.Group className="mb-3">
                <Form.Label>Select Subjects*</Form.Label>
                <div className="d-flex justify-content-between flex-wrap">
                {Subjects.map((subject,index)=>{
                  return <>
                    <Button variant="outline-light" key={index}
                    onClick={()=> dispatch(createTutorSliceActions.setSubjects(subject))}
                    className={ createTutorDetails?.Subjects?.includes(subject)?`${styles.subjectActive} ${styles.subjectBtn}`:`${styles.subjectBtn}`}>
                   {subject}
                 </Button>
                  </>
                 
                })}
                </div>
              </Form.Group>
            </Col>
          </Row>

          {/* Cancel and Register Buttons */}
          <div className="d-flex justify-content-end">
            <Button
              variant="light"
              className={styles.clearBtn}
              onClick={() => Navigate(-1)}
            >
              Cancel
            </Button>

            <Button
              variant="light"
              className={styles.clearbtn}
             
              onClick={() => dispatch(createTutorSliceActions.reset())}
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

export default AddTutors;
