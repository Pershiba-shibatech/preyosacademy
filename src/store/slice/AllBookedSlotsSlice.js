import { createSlice } from "@reduxjs/toolkit";
import { GET_BOOKED_SLOTS } from "../reducerConstants";
import { GetBookedPastSlots, GetBookedSlots } from "../api/BookSlotsByTutor";
import { setTimestamps } from "../helperConstants/TimeConverterConstants";


export const initialState = {
    AllSlots: [],
    tutorSlots: [],
    StudentsSlots: [],
    isLoading: false,
    isFetchedSlots: false,
    endSlots: []

};

const GetAllBookedSlotsSlice = createSlice({
    name: GET_BOOKED_SLOTS,
    initialState,
    reducers: {

        setLoading: (state, { payload }) => {
            state.isLoading = payload

        },

        reset: () => { },
    },
    extraReducers: (builder) => {
        builder.addCase(GetBookedSlots.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(GetBookedSlots.fulfilled, (state, { payload }) => {


            if (payload?.data?.statusCode === 200) {
                let DetailWithSession = setTimestamps(payload?.data?.result, payload?.data?.type)
                if (payload?.data?.type === "Student") {
                    state.StudentsSlots = DetailWithSession
                    state.AllSlots = []
                    state.tutorSlots = []

                }

                if (payload?.data?.type === "Tutor") {
                    console.log(DetailWithSession)
                    state.tutorSlots = DetailWithSession
                    state.AllSlots = []

                    state.StudentsSlots = []
                }
                if (payload?.data?.type === 'Admin') {
                    state.AllSlots = DetailWithSession

                    state.tutorSlots = []
                    state.StudentsSlots = []
                }

                state.isFetchedSlots = true
            } else {
                state.AllSlots = []
                state.tutorSlots = []
                state.StudentsSlots = []
                state.isFetchedSlots = true
            }

            state.isLoading = false
        });
        builder.addCase(GetBookedSlots.rejected, (state, { payload }) => {
            state.isLoading = false;
        });
        builder.addCase(GetBookedPastSlots.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(GetBookedPastSlots.fulfilled, (state, { payload }) => {


            if (payload?.data?.statusCode === 200) {
                let DetailWithSession = setTimestamps(payload?.data?.result, payload?.data?.type)
                state.endSlots = DetailWithSession

                state.isFetchedSlots = true
            } else {
                state.endSlots = []

                state.isFetchedSlots = true
            }

            state.isLoading = false
        });
        builder.addCase(GetBookedPastSlots.rejected, (state, { payload }) => {
            state.isLoading = false;
        });

    },

});

export const GetAllBookedSlotsActions = GetAllBookedSlotsSlice.actions;
export default GetAllBookedSlotsSlice.reducer;