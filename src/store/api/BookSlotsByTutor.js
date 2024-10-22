


import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../reducerConstants";



const BookSlotsByTutor = createAsyncThunk(`/bookSlot`, async (data) => {
    return axios.post(`${API_URL}/bookSlot`, data).then((response) => {

        return response
    })
        .catch((error) => error);
});


const GetBookedSlots = createAsyncThunk(`/fetchBookedSlots`, async (data) => {
    return axios.post(`${API_URL}/fetchBookedSlots`, data).then((response) => {

        return response
    })
        .catch((error) => error);
});


export {
    BookSlotsByTutor, GetBookedSlots
}