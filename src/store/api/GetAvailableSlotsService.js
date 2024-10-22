
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../reducerConstants";



const getAvailableSlots = createAsyncThunk(`/getAvailableSlots`, async (data) => {
    return axios.post(`${API_URL}/getAvailableSlots`, data).then((response) => {

        return response
    })
        .catch((error) => error);
});

export {
    getAvailableSlots
}