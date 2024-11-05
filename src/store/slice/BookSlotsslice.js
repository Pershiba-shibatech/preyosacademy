import { createSlice } from "@reduxjs/toolkit";
import { BOOK_SLOTS } from "../reducerConstants";
import { GetParticularSession } from "../api/BookSlotsByTutor";
import moment from "moment";





export const initialState = {
    openModel: false,
    isBooking: false,
    SelectedSlot: {},
    RelatedTopics: "",
    Materials: "",
    sessionBoardLink: "",
    sessionLink: "",
    sessionDetails: {},
    sessionStatus: "yettojoin",
    topic: "",
    homeworkStatus: "Done",
    sessionSummary: "",
    studentFeedbackByTutor: '',
    cancelledBy: "Tutor",
    rescheduledBy: 'Tutor',
    cancelReason: '',
    rescheduleReason: '',
    openUpdatwStatusModel: false,
    isstatusLoading: false,
    RescheduleDatetimeStamp: "",
    rescheduleFrom: "",
    rescheduleto: '',
    reScheduleday: "",
    Date: "",
    showDate:'',
    month:''

};

const BookedSlotsSlice = createSlice({
    name: BOOK_SLOTS,
    initialState,
    reducers: {
        setOpenModel: (state) => {
            state.openModel = !state.openModel
        },
        setopenUpdatwStatusModel: (state) => {
            state.openUpdatwStatusModel = !state.openUpdatwStatusModel
        },
        setIsBooking: (state, { payload }) => {
            state.isBooking = payload
        },
        setSelectedStot: (state, { payload }) => {
            state.openModel = true
            state.SelectedSlot = payload
        },
        setRelatedTopics: (state, { payload }) => {
            state.RelatedTopics = payload
        },
        setMaterials: (state, { payload }) => {
            state.Materials = payload
        },
        setBoardLink: (state, { payload }) => {
            state.sessionBoardLink = payload
        },
        setsessionLink: (state, { payload }) => {
            state.sessionLink = payload
        },
        setSessionStatus: (state, { payload }) => {
            state.sessionStatus = payload
        },
        setTopic: (state, { payload }) => {
            state.topic = payload
        },
        setHomeworkStatus: (state, { payload }) => {
            state.homeworkStatus = payload
        },
        setSessionSummary: (state, { payload }) => {
            state.sessionSummary = payload
        },
        setStudentFeedbackByTutor: (state, { payload }) => {
            state.studentFeedbackByTutor = payload
        },
        setcancelledBy: (state, { payload }) => {
            state.cancelledBy = payload
        },
        setcancelReason: (state, { payload }) => {
            state.cancelReason = payload
        },
        setRescheduleReason: (state, { payload }) => {
            state.rescheduleReason = payload
        },
        setRescheduledBy: (state, { payload }) => {
            state.rescheduledBy = payload
        },
        setRescheduleDate: (state, { payload }) => {
            let timestamp = Number(moment(payload).format('x'))
            state.RescheduleDatetimeStamp = timestamp
            state.reScheduleday = moment(timestamp).format('dddd')
            state.Date = moment(timestamp).format('YYYY-MM-DD')
            state.month = moment(timestamp).format('MMM')
            state.showDate = payload
        },
        setRescheduleTime: (state, { payload }) => {
            state.rescheduleFrom = payload.from
            state.rescheduleto = payload.To

        },
        reset: () => { },
    },
    extraReducers: (builder) => {

        builder.addCase(GetParticularSession.pending, (state) => {
            state.isstatusLoading = true;
        });
        builder.addCase(GetParticularSession.fulfilled, (state, { payload }) => {
            if (payload?.data?.statusCode === 200) {
                state.isstatusLoading = true;
                state.sessionDetails = payload.data.result
            } else {
                state.isstatusLoading = false;
                state.sessionDetails = {}
            }

        });
        builder.addCase(GetParticularSession.rejected, (state) => {
            state.isstatusLoading = true;
        });
    },

});

export const BookedSlotsSliceActions = BookedSlotsSlice.actions;
export default BookedSlotsSlice.reducer;