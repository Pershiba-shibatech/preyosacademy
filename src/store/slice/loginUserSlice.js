import { createSlice } from "@reduxjs/toolkit";
import { LOGIN_USER } from "../reducerConstants";



export const initialState = {
   userType:0,
    isdataLoading:true,
    userName:"",
    password:"",
};

const loginUserSlice = createSlice({
    name: LOGIN_USER,
    initialState,
    reducers: {
        setLoading: (state) => {
            state.isdataLoading = !state.isdataLoading
        },
        setTitle: (state, { payload }) => {
            state.userName = payload;
       
        },
        setDescription: (state, { payload }) => {
            state.password = payload;
        },
      
        reset: () => { },
    },

});

export const loginUserSliceActions = loginUserSlice.actions;
export default loginUserSlice.reducer;