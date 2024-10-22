import { createSlice } from "@reduxjs/toolkit";
import { BOOK_SLOTS } from "../reducerConstants";





export const initialState = {
    openModel: false,
    isBooking:false,
    SelectedSlot: {},
    RelatedTopics:"",
    Materials:"",
    sessionLink:""
};

const BookedSlotsSlice = createSlice({
    name: BOOK_SLOTS,
    initialState,
    reducers: {
        setOpenModel: (state) => {
            state.openModel = !state.openModel
        },
        setIsBooking:(state,{payload})=>{
            state.isBooking=payload
        },
        setSelectedStot: (state, { payload }) => {
            state.openModel = true
            state.SelectedSlot = payload
        },
        setRelatedTopics:(state,{payload})=>{
            state.RelatedTopics = payload
        },
        setMaterials:(state,{payload})=>{
            state.Materials = payload
        },
        setsessionLink:(state,{payload})=>{
            state.sessionLink = payload
        },
        reset: () => { },
    },
    extraReducers: (builder) => {

    },

});

export const BookedSlotsSliceActions = BookedSlotsSlice.actions;
export default BookedSlotsSlice.reducer;