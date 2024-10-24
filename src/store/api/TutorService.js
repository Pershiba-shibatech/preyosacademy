import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../reducerConstants";


const createTutorApi = createAsyncThunk(`/createTutor`, async (data) => {
    return axios.post(`${API_URL}/createTutor`,data).then((response) => {

        return response
    })
        .catch((error) => error);
});

const getTutorsListApi = createAsyncThunk(`/getTutorsList`, async (data) => {
    return axios.get(`${API_URL}/getTutorsList`).then((response) => {

        return response
    })
        .catch((error) => error);
});


export { createTutorApi,getTutorsListApi }