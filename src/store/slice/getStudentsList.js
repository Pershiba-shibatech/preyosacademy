import { createSlice } from "@reduxjs/toolkit";
import { GET_STUDENTS_LIST } from "../reducerConstants";
import { getStudentsListApi } from "../api/StudentService";




export const initialState = {
 
    isLoading:true,
    studentList:[],
    isFetched:false
 
};

const getStudentsSlice = createSlice({
    name: GET_STUDENTS_LIST,
    initialState,
    reducers: {
        setLoading: (state) => {
            state.isLoading = !state.isLoading
        },
      
        reset: () => { },
    },
    
    extraReducers: (builder) => {
        builder.addCase(getStudentsListApi.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getStudentsListApi.fulfilled, (state, { payload }) => {
            console.log(payload,"payload")
            
            if (payload?.data?.statusCode === 200) {

                state.studentList = payload?.data?.result
                state.isFetched=true
            } else {
                state.studentList = []
                state.isFetched=true
            }

            state.isLoading = false
        });
        builder.addCase(getStudentsListApi.rejected, (state, { payload }) => {
            state.isLoading = false;
        });
    },
});

export const getStudentsSliceActions = getStudentsSlice.actions;
export default getStudentsSlice.reducer;