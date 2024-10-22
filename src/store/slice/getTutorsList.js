import { createSlice } from "@reduxjs/toolkit";
import { GET_TUTORS_LIST } from "../reducerConstants";
import { getTutorsListApi } from "../api/TutorService";




export const initialState = {
 
    isLoading:true,
    isFetched:false,
    tutorsList:[]
 
};

const getTutorsSlice = createSlice({
    name: GET_TUTORS_LIST,
    initialState,
    reducers: {
        setLoading: (state) => {
            state.isLoading = !state.isLoading
        },
      
        reset: () => { },
    },
    
    extraReducers: (builder) => {
        builder.addCase(getTutorsListApi.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getTutorsListApi.fulfilled, (state, { payload }) => {
           
            
            if (payload?.data?.statusCode === 200) {

                state.tutorsList = payload?.data?.result
                state.isFetched=true
            } else {
                state.tutorsList = []
                state.isFetched=true
            }

            state.isLoading = false
        });
        builder.addCase(getTutorsListApi.rejected, (state, { payload }) => {
            state.isLoading = false;
        });
    },
});

export const getTutorsSliceSliceActions = getTutorsSlice.actions;
export default getTutorsSlice.reducer;