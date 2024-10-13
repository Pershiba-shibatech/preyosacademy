import { createSlice } from "@reduxjs/toolkit";
import { CREATE_STUDENT } from "../reducerConstants";

export const initialState = {
    isLoading: false,
    firstName: "",
    lastName: "",
    studentName: "",
    DOB: "",
    grade: "",
    ParentName: "",
    AddressLine1: "",
    State: "",
    Country: "",
    postalCode: "",
    CountryCode: "+",
    TimeZone: "",
    email: "",
    password: "",
    contactNumber: "",
    Subjects: [],
    Coordinator:"",
    Admin:""
 
};

const CreateStudentSlice = createSlice({
    name: CREATE_STUDENT,
    initialState,
    reducers: {
        setLoading: (state) => {
            state.isLoading = !state.isLoading
        },
        setFirstName: (state, { payload }) => {
            state.firstName = payload
           
        },
        setlastName: (state, { payload }) => {
            state.lastName = payload
           
        },
        setstudentName: (state, { payload }) => {
            state.studentName = payload
           
        },
        setDob: (state, { payload }) => {
            state.DOB = payload
           
        },
        setgrade: (state, { payload }) => {
            state.grade = payload
           
        },
        setParentNames: (state, { payload }) => {
            state.ParentName = payload
           
        },
      
        setCountry: (state, { payload }) => {
            state.Country = payload
           
        },
      
        setCountryCode: (state, { payload }) => {
         
            state.CountryCode = payload
           
        },
        setTimeZone: (state, { payload }) => {
            state.TimeZone = payload
           
        },

        setemail: (state, { payload }) => {
            state.email = payload
           
        },
        setpassword: (state, { payload }) => {
            state.password = payload
           
        },
        setcontactNumber: (state, { payload }) => {
            state.contactNumber = payload
           
        },
        setCoordinator: (state, { payload }) => {
            state.Coordinator = payload
           
        },
        setAdmin: (state, { payload }) => {
            state.Admin = payload
           
        },
      
       
        setSubjects: (state, { payload }) => {
           
            if(state.Subjects?.length>0){
                let index = state.Subjects?.findIndex((item) =>{return item === payload})
               
                if (index === -1) {
                    state.Subjects?.push(payload)
                }else{
                    state.Subjects?.splice(index,1)
                }
            }else{
                state.Subjects = [payload]
            }
         

        },
        reset: () => { },
    },


});

export const CreateStudentSliceActions = CreateStudentSlice.actions;
export default CreateStudentSlice.reducer;