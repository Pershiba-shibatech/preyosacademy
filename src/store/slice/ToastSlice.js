import { createSlice } from "@reduxjs/toolkit";
import { TOAST_MANAGER } from "../reducerConstants";




export const initialState = {
  isShowSuccess:false,
  isShowFailure:false,
  ToastMessage:""
};

const ToastSlice = createSlice({
    name: TOAST_MANAGER,
    initialState,
    reducers: {
       
        setSuccessToast: (state, { payload }) => {
            state.isShowSuccess = true
            state.ToastMessage=payload
        },
        setfailureToast: (state, { payload }) => {
            state.isShowFailure = true
            state.ToastMessage=payload
        },
        clearToast:(state)=>{
            state.isShowSuccess=false
            state.isShowFailure=false
           state.ToastMessage=""
        },  
        reset: () => { },
    },
    
   
});

export const ToastSliceActions = ToastSlice.actions;
export default ToastSlice.reducer;