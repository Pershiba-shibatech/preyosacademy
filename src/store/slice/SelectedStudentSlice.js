import { createSlice } from "@reduxjs/toolkit";
import { SELECTED_STUDENT } from "../reducerConstants";





export const initialState = {
    selctedStudent :{},
   
};

const SelectedStudentSlice = createSlice({
    name: SELECTED_STUDENT,
    initialState,
    reducers: {

        setSelectedSlot: (state, { payload }) => {
            state.selctedStudent = payload
        },

        reset: () => { },
    },
    extraReducers: (builder) => {
      
    },

});

export const SelectedStudentSliceActions = SelectedStudentSlice.actions;
export default SelectedStudentSlice.reducer;