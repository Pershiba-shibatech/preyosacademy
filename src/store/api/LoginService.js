import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../reducerConstants";


const LoginUser = createAsyncThunk(`/loginUser`, async (data) => {
    return axios.post(`${API_URL}/loginUser`,data).then((response) => {

        return response
    })
        .catch((error) => error);
});


export { LoginUser }