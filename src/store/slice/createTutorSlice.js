import { createSlice } from "@reduxjs/toolkit";
import { CREATE_TUTOR } from "../reducerConstants";

export const initialState = {
    isLoading: false,
    firstName: "",
    lastName: "",
    tutorName: "",
    DOB: "",
    qualification: "",
    experiences: "",
    AddressLine1: "",
    State: "",
    Country: "",
    postalCode: "",
    CountryCode: "+",
    TimeZone: "",
    email: "",
    password: "",
    contactNumber: "",
    AccountNumber: "",
    IFSCCode: "",
    Branch: "",
    Subjects: [],
    Error:false
};

const CreateTutorSlice = createSlice({
    name: CREATE_TUTOR,
    initialState,
    reducers: {
        setLoading: (state) => {
            state.isLoading = !state.isLoading
        },
        setFirstName: (state, { payload }) => {
            state.firstName = payload
            state.Error=false
        },
        setlastName: (state, { payload }) => {
            state.lastName = payload
            state.Error=false
        },
        setTutorName: (state, { payload }) => {
            state.tutorName = payload
            state.Error=false
        },
        setDob: (state, { payload }) => {
            state.DOB = payload
            state.Error=false
        },
        setqualification: (state, { payload }) => {
            state.qualification = payload
            state.Error=false
        },
        setexperiences: (state, { payload }) => {
            state.experiences = payload
            state.Error=false
        },
        setAddressLine1: (state, { payload }) => {
            state.AddressLine1 = payload
            state.Error=false
        },
        setState: (state, { payload }) => {
            state.State = payload
            state.Error=false
        },
        setCountry: (state, { payload }) => {
            state.Country = payload
            state.Error=false
        },
        setpostalCode: (state, { payload }) => {
            state.postalCode = payload
            state.Error=false
        },
        setCountryCode: (state, { payload }) => {
         
            state.CountryCode = payload
            state.Error=false
        },
        setTimeZone: (state, { payload }) => {
            state.TimeZone = payload
            state.Error=false
        },

        setemail: (state, { payload }) => {
            state.email = payload
            state.Error=false
        },
        setpassword: (state, { payload }) => {
            state.password = payload
            state.Error=false
        },
        setcontactNumber: (state, { payload }) => {
            state.contactNumber = payload
            state.Error=false
        },
        setAccountNumber: (state, { payload }) => {
            state.AccountNumber = payload
            state.Error=false
        },
        setIFSCCode: (state, { payload }) => {
            state.IFSCCode = payload
            state.Error=false
        },
        setBranch: (state, { payload }) => {
            state.Branch = payload
            state.Error=false
        },
        setError:(state)=>{
            state.Error=true
        },
        setSubjects: (state, { payload }) => {
            state.Error=false
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

export const createTutorSliceActions = CreateTutorSlice.actions;
export default CreateTutorSlice.reducer;