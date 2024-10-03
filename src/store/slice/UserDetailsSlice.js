import { createSlice } from "@reduxjs/toolkit";
import { USER_DETAILS } from "../reducerConstants";
import { LoginUser } from "../api/LoginService";
import {  decodeToken } from "react-jwt";
export const initialState = {
    loggedInUserType: '',
    loggedInUserDetails: {},
    userCode: '',
    email: ''

};


const UserDetailsSlice = createSlice({
    name: USER_DETAILS,
    initialState,
    reducers: {
        setLoading: (state) => {

        },
        setUserName: (state, { payload }) => {


        },



        reset: () => { },
    },

    extraReducers: (builder) => {
        builder.addCase(LoginUser.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(LoginUser.fulfilled, (state, { payload }) => {
           
            if (payload?.data?.statusCode === 200) {

                const myDecodedToken = decodeToken(payload?.data.result[0].Accesstoken);
                state.loggedInUserDetails = myDecodedToken.loginDetails
                state.loggedInUserType = myDecodedToken.userType
                state.userCode = myDecodedToken.userCode
                state.loggedInUserType = myDecodedToken.email
            } else {
                state.loggedInUserDetails = {}
                state.loggedInUserType = ""
                state.userCode = ""
                state.loggedInUserType = ""
            }

            state.isLoading = false
        });
        builder.addCase(LoginUser.rejected, (state, { payload }) => {
            state.isLoading = false;
        });
    },
});

export const UserDetailsSliceActions = UserDetailsSlice.actions;
export default UserDetailsSlice.reducer;