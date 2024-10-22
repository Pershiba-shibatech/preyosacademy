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
    Error: false,
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: []

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
            state.Error = false
        },
        setlastName: (state, { payload }) => {
            state.lastName = payload
            state.Error = false
        },
        setTutorName: (state, { payload }) => {
            state.tutorName = payload
            state.Error = false
        },
        setDob: (state, { payload }) => {
            state.DOB = payload
            state.Error = false
        },
        setqualification: (state, { payload }) => {
            state.qualification = payload
            state.Error = false
        },
        setexperiences: (state, { payload }) => {
            state.experiences = payload
            state.Error = false
        },
        setAddressLine1: (state, { payload }) => {
            state.AddressLine1 = payload
            state.Error = false
        },
        setState: (state, { payload }) => {
            state.State = payload
            state.Error = false
        },
        setCountry: (state, { payload }) => {
            state.Country = payload
            state.Error = false
        },
        setpostalCode: (state, { payload }) => {
            state.postalCode = payload
            state.Error = false
        },
        setCountryCode: (state, { payload }) => {

            state.CountryCode = payload
            state.Error = false
        },
        setTimeZone: (state, { payload }) => {
            state.TimeZone = payload
            state.Error = false
        },

        setemail: (state, { payload }) => {
            state.email = payload
            state.Error = false
        },
        setpassword: (state, { payload }) => {
            state.password = payload
            state.Error = false
        },
        setcontactNumber: (state, { payload }) => {
            state.contactNumber = payload
            state.Error = false
        },
        setAccountNumber: (state, { payload }) => {
            state.AccountNumber = payload
            state.Error = false
        },
        setIFSCCode: (state, { payload }) => {
            state.IFSCCode = payload
            state.Error = false
        },
        setBranch: (state, { payload }) => {
            state.Branch = payload
            state.Error = false
        },
        setError: (state) => {
            state.Error = true
        },
        setSubjects: (state, { payload }) => {
            state.Error = false
            if (state.Subjects?.length > 0) {
                let index = state.Subjects?.findIndex((item) => { return item === payload })


                if (index === -1) {
                    state.Subjects?.push(payload)
                } else {
                    state.Subjects?.splice(index, 1)
                }
            } else {
                state.Subjects = [payload]
            }


        },

        setSelctedMonday: (state, { payload }) => {
            state.Error = false

            let index = state.Monday?.findIndex((item) => { return item?.from === payload?.from })
            if (!index) {

                state.Monday = [payload]
            } else {

                if (index === -1) {
                    state.Monday?.push(payload)
                }
            }
        },
        removeMonday: (state, { payload }) => {
            // //   if(payload>-1){
            // //     state.Monday?.splice(payload, 1)
            // //   }
            //   state.Monday =  state.Monday.filter((item,index)=> {
            //     return index !== payload
            // })
            state.Monday?.splice(payload, 1)

        },
        setSelctedTuesday: (state, { payload }) => {
            state.Error = false

            let index = state.Tuesday?.findIndex((item) => { return item?.from === payload?.from })
            if (!index) {

                state.Tuesday = [payload]
            } else {

                if (index === -1) {
                    state.Tuesday?.push(payload)
                }
            }
        },
        removeTuesday: (state, { payload }) => {

            state.Tuesday?.splice(payload, 1)
        },

        setSelctedWednesday: (state, { payload }) => {
            state.Error = false

            let index = state.Wednesday?.findIndex((item) => { return item?.from === payload?.from })
            if (!index) {

                state.Wednesday = [payload]
            } else {

                if (index === -1) {
                    state.Wednesday?.push(payload)
                }
            }
        },
        removeWednesDay: (state, { payload }) => {

            state.Wednesday?.splice(payload, 1)
        },
        setSelctedThursday: (state, { payload }) => {
            state.Error = false

            let index = state.Thursday?.findIndex((item) => { return item?.from === payload?.from })
            if (!index) {

                state.Thursday = [payload]
            } else {

                if (index === -1) {
                    state.Thursday?.push(payload)
                }
            }
        },
        removeThursday: (state, { payload }) => {
            console.log(payload)
            state.Thursday?.splice(payload, 1)
        },
        setSelctedFriday: (state, { payload }) => {
            state.Error = false

            let index = state.Friday?.findIndex((item) => { return item?.from === payload?.from })
            if (!index) {

                state.Friday = [payload]
            } else {

                if (index === -1) {
                    state.Friday?.push(payload)
                }
            }
        },
        removeFriday: (state, { payload }) => {

            state.Friday?.splice(payload, 1)
        },
        setSelctedSaturday: (state, { payload }) => {
            state.Error = false

            let index = state.Saturday?.findIndex((item) => { return item?.from === payload?.from })
            if (!index) {

                state.Saturday = [payload]
            } else {

                if (index === -1) {
                    state.Saturday?.push(payload)
                }
            }
        },
        removeSaturday: (state, { payload }) => {

            state.Saturday?.splice(payload, 1)
        },
        setSelctedSunday: (state, { payload }) => {
            state.Error = false

            let index = state.Sunday?.findIndex((item) => { return item?.from === payload?.from })
            if (!index) {

                state.Sunday = [payload]
            } else {

                if (index === -1) {
                    state.Sunday?.push(payload)
                }
            }
        },
        removeSunday: (state, { payload }) => {

            state.Sunday?.splice(payload, 1)
        },


        reset: () => { },
    },


});

export const createTutorSliceActions = CreateTutorSlice.actions;
export default CreateTutorSlice.reducer;