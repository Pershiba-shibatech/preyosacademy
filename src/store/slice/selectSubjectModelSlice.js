import { createSlice } from "@reduxjs/toolkit";
import { SUBJECT_MODEL } from "../reducerConstants";
import moment from "moment";




export const initialState = {
    selectedSubject: "",
    openSubjectModel: false,
    openSingleSlotModel: false,
    selectedDate: "",
    DatetimeStamp: "",
    Scheduleday: "",
    Date: "",
    month: "",
    showDate: "",
};

const selectSubjectSlice = createSlice({
    name: SUBJECT_MODEL,
    initialState,
    reducers: {
        setopenSubjectModel: (state) => {
            state.openSubjectModel = !state.openSubjectModel
        },
        setopenSingleSlotModel: (state) => {
            state.openSingleSlotModel = !state.openSingleSlotModel
        },
        setSubject: (state, { payload }) => {
            state.selectedSubject = payload

        },
        setselectedDate: (state, { payload }) => {
            state.selectedDate = payload

        },

        SetscheduleDate: (state, { payload }) => {
            let timestamp = Number(moment(payload).format('x'))
            state.DatetimeStamp = timestamp
            state.Scheduleday = moment(timestamp).format('dddd')
            state.Date = moment(timestamp).format('YYYY-MM-DD')
            state.month = moment(timestamp).format('MMM')
            state.showDate = payload
            
        },

        reset: () => { },
    },


});

export const selectSubjectSliceActions = selectSubjectSlice.actions;
export default selectSubjectSlice.reducer;