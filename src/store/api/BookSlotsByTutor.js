


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
const GetBookedPastSlots = createAsyncThunk(`/fetchBookedPastSlots`, async (data) => {
    return axios.post(`${API_URL}/fetchBookedPastSlots`, data).then((response) => {

        return response
    })
        .catch((error) => error);
});
const updateBookedSLotStatus = createAsyncThunk(`/updateStatus`, async (data) => {
    return axios.post(`${API_URL}/updateStatus`, data).then((response) => {

        return response
    })
        .catch((error) => error);
});
const updateBookedSLotLink = createAsyncThunk(`/updateSlotLink`, async (data) => {
    return axios.post(`${API_URL}/updateSlotLink`, data).then((response) => {

        return response
    })
        .catch((error) => error);
});

const GetParticularSession = createAsyncThunk(`/fetchSingleSession`, async (data) => {
    return axios.get(`${API_URL}/fetchSingleSession?sessionId=${data}`,).then((response) => {

        return response
    })
        .catch((error) => error);
});


export {
    BookSlotsByTutor, GetBookedSlots, GetParticularSession, updateBookedSLotStatus, GetBookedPastSlots, updateBookedSLotLink
}