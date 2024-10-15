import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../reducerConstants";


const createStudentApi = createAsyncThunk(`/createStudent`, async (data) => {
    return axios.post(`${API_URL}/createStudent`,data).then((response) => {

        return response
    })
        .catch((error) => error);
});

const getStudentsListApi = createAsyncThunk(`/getStudentsList`, async (data) => {
    return axios.get(`${API_URL}/getStudentsList`).then((response) => {

        return response
    })
        .catch((error) => error);
});


export { createStudentApi,getStudentsListApi }