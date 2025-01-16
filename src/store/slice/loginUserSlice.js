import { createSlice } from "@reduxjs/toolkit";
import { LOGIN_USER } from "../reducerConstants";




export const initialState = {
    userType:0,
    isLoading:true,
    userName:"",
    password:"",
    EmailErrorMessage:"",
    PasswordErrorMessage:"",
    PasswordError:false,
    EmailError:false
};

const loginUserSlice = createSlice({
    name: LOGIN_USER,
    initialState,
    reducers: {
        setLoading: (state) => {
            state.isLoading = !state.isLoading
        },
        setUserName: (state, { payload }) => {
            state.userName = payload
            state.EmailErrorMessage = ""
            state.EmailError = false
            state.PasswordErrorMessage = ''
            state.PasswordError = false
            state.isLoading = true
       
        },
        setPassword: (state, { payload }) => {
            state.password = payload
            state.PasswordErrorMessage = ''
            state.PasswordError = false
            state.EmailErrorMessage = ""
            state.EmailError = false
            state.isLoading = true
        },
        setUserType: (state, { payload }) => {
            state.userType = payload
            state.userName =""
            state.password =""
            state.EmailErrorMessage = ""
            state.EmailError = false
            state.PasswordErrorMessage = ''
            state.PasswordError = false
            state.isLoading = true
        },
        setUserEmail:(state,{payload})=>{
            state.EmailErrorMessage=payload
            state.EmailError = true
            state.isLoading = true
        },
        setUserPassword:(state,{payload})=>{
            state.PasswordErrorMessage =payload
            state.PasswordError = true
            state.isLoading = true
        },
       
      
        reset: () => { },
    },
    
    // extraReducers: (builder) => {
    //     builder.addCase(LoginUser.pending, (state) => {
    //         state.isLoading = true;
    //     });
    //     builder.addCase(LoginUser.fulfilled, (state, { payload }) => {
    //      
            
    //         if (payload?.data?.statusCode === 200) {

    //             state.AllPostList = payload?.data
    //         } else {
    //             state.AllPostList = []
    //         }

    //         state.isLoading = false
    //     });
    //     builder.addCase(LoginUser.rejected, (state, { payload }) => {
    //         state.isLoading = false;
    //     });
    // },
});

export const loginUserSliceActions = loginUserSlice.actions;
export default loginUserSlice.reducer;