import { createSlice } from "@reduxjs/toolkit";
import { SUBJECT_MODEL } from "../reducerConstants";




export const initialState = {
    selectedSubject: "",
    openSubjectModel: false,
    selectedDate:""
};

const selectSubjectSlice = createSlice({
    name: SUBJECT_MODEL,
    initialState,
    reducers: {
        setopenSubjectModel: (state) => {
            state.openSubjectModel= !state.openSubjectModel
        },
        setSubject: (state, { payload }) => {
            state.selectedSubject = payload

        },
        setselectedDate: (state, { payload }) => {
            state.selectedDate = payload

        },

        reset: () => { },
    },


});

export const selectSubjectSliceActions = selectSubjectSlice.actions;
export default selectSubjectSlice.reducer;