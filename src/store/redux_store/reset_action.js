
import * as reducerConstants from '../reducerConstants'
import loginUserSlice from '../slice/loginUserSlice';
import UserDetailsSlice from '../slice/UserDetailsSlice'
import CreateTutorSlice from '../slice/createTutorSlice'
import ToastSlice from '../slice/ToastSlice'
import CreateStudentSlice from '../slice/createStudentSlice'
import getTutorsSlice from '../slice/getTutorsList'
import getStudentsSlice from '../slice/getStudentsList'

export const loginuserWrapper = (state, action) => {
    if (action.type === `${reducerConstants.LOGIN_USER}/reset`) {
        state = undefined;
    }
    return loginUserSlice(state, action);
};
export const userDetailsWrapper = (state, action) => {
    if (action.type === `${reducerConstants.USER_DETAILS}/reset`) {
        state = undefined;
    }
    return UserDetailsSlice(state, action);
};

export const CreateTutorWrapper =(state,action)=>{
    if(action.type === `${reducerConstants.CREATE_TUTOR}/reset`){
        state = undefined;
    }
    return CreateTutorSlice(state, action)
} 
export const ToastWrapper =(state,action)=>{
    if(action.type === `${reducerConstants.TOAST_MANAGER}/reset`){
        state = undefined;
    }
    return ToastSlice(state, action)
} 
export const CreateStudentWrapper =(state,action)=>{
    if(action.type === `${reducerConstants.CREATE_STUDENT}/reset`){
        state = undefined;
    }
    return CreateStudentSlice(state, action)
} 
export const getTutorsListWrapper =(state,action)=>{
    if(action.type === `${reducerConstants.GET_TUTORS_LIST}/reset`){
        state = undefined;
    }
    return getTutorsSlice(state, action)
} 
export const getStudentListWrapper =(state,action)=>{
    if(action.type === `${reducerConstants.GET_STUDENTS_LIST}/reset`){
        state = undefined;
    }
    return getStudentsSlice(state, action)
} 
