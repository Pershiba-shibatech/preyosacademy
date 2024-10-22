import { createSlice } from "@reduxjs/toolkit";
import { GET_AVAILABLE_SLOTS } from "../reducerConstants";
import { getAvailableSlots } from "../api/GetAvailableSlotsService";




export const initialState = {
    AllAvailableSlots: [],
    isLoading: false,
    isFetchedSlots: false
};

const GetAvailableSlotsSlice = createSlice({
    name: GET_AVAILABLE_SLOTS,
    initialState,
    reducers: {

        // setSubject: (state, { payload }) => {
        //     state.selectedSubject = payload

        // },

        reset: () => { },
    },
    extraReducers: (builder) => {
        builder.addCase(getAvailableSlots.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getAvailableSlots.fulfilled, (state, { payload }) => {


            if (payload?.data?.statusCode === 200) {

                state.AllAvailableSlots = payload?.data?.result
                state.isFetchedSlots = true
            } else {
                state.AllAvailableSlots = []
                state.isFetchedSlots = true
            }

            state.isLoading = false
        });
        builder.addCase(getAvailableSlots.rejected, (state, { payload }) => {
            state.isLoading = false;
        });
    },

});

export const GetAvailableSlotsSliceActions = GetAvailableSlotsSlice.actions;
export default GetAvailableSlotsSlice.reducer;