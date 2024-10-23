import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../reducerConstants";

const getTutorsMaterials = createAsyncThunk(`/getTutorsMaterials`, async (data) => {
    return axios.post(`${API_URL}/getTutorsMaterials`, data).then((response) => {

        return response
    })
        .catch((error) => error);
});

const getStudentsMaterials = createAsyncThunk(`/getStudentsMaterials`, async (data) => {
    return axios.post(`${API_URL}/getStudentsMaterials`, data).then((response) => {

        return response
    })
        .catch((error) => error);
});

export {
    getTutorsMaterials, getStudentsMaterials

}