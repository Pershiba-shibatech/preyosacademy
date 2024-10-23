
import * as reducerConstants from '../reducerConstants'
import loginUserSlice from '../slice/loginUserSlice';
import UserDetailsSlice from '../slice/UserDetailsSlice'
import CreateTutorSlice from '../slice/createTutorSlice'
import ToastSlice from '../slice/ToastSlice'
import CreateStudentSlice from '../slice/createStudentSlice'
import getTutorsSlice from '../slice/getTutorsList'
import getStudentsSlice from '../slice/getStudentsList'
import selectSubjectSlice from '../slice/selectSubjectModelSlice'
import GetAvailableSlotsSlice from '../slice/AvailableSlotsSlice'
import BookedSlotsSlice from '../slice/BookSlotsslice'
import SelectedStudentSlice from '../slice/SelectedStudentSlice'
import GetAllBookedSlotsSlice from '../slice/AllBookedSlotsSlice'
import GetAllMaterialsSlice from '../slice/LibrarySlice'
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
export const selectSubjectWrapper =(state,action)=>{
    if(action.type === `${reducerConstants.SUBJECT_MODEL}/reset`){
        state = undefined;
    }
    return selectSubjectSlice(state, action)
} 

export const getAllAvailableSlotsWrapper = (state,action)=>{
    if (action.type === `${reducerConstants.GET_AVAILABLE_SLOTS}/reset`) {
        state = undefined;
    }
    return GetAvailableSlotsSlice(state, action)
    
}
export const BookedSlotsSliceWrapper = (state,action)=>{
    if (action.type === `${reducerConstants.BOOK_SLOTS}/reset`) {
        state = undefined;
    }
    return BookedSlotsSlice(state, action)
    
}
export const SelectedStudentSliceWrapper = (state,action)=>{
    if (action.type === `${reducerConstants.SELECTED_STUDENT}/reset`) {
        state = undefined;
    }
    return SelectedStudentSlice(state, action)
    
}
export const GetAllBookedSlotsSliceWrapper = (state,action)=>{
    if (action.type === `${reducerConstants.GET_BOOKED_SLOTS}/reset`) {
        state = undefined;
    }
    return GetAllBookedSlotsSlice(state, action)
    
}
export const GetAllMaterialsSliceWrapper = (state,action)=>{
    if (action.type === `${reducerConstants.GET_LIBRARY_DETAILS}/reset`) {
        state = undefined;
    }
    return GetAllMaterialsSlice(state, action)
    
}
