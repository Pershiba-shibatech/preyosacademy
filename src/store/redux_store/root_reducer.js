
import { combineReducers } from "redux";
import * as reducer from './reset_action.js'
import * as reducerConstants from '../reducerConstants';
const combinedReducers = combineReducers({
    loginData: reducer.loginuserWrapper,
    userDetails: reducer.userDetailsWrapper,
    createTutor:reducer.CreateTutorWrapper,
    ToastDetails: reducer.ToastWrapper,
    createStudent: reducer.CreateStudentWrapper,
    TutorsList:reducer.getTutorsListWrapper,
    StudentList:reducer.getStudentListWrapper,
    subjectModelData: reducer.selectSubjectWrapper,
    AllAvailableSlotsDetails: reducer.getAllAvailableSlotsWrapper,
    BookSlotsDetails: reducer.BookedSlotsSliceWrapper,
    selectedStudentDetails: reducer.SelectedStudentSliceWrapper,
    getBookedSlots: reducer.GetAllBookedSlotsSliceWrapper,
    LibraryList: reducer.GetAllMaterialsSliceWrapper
});

const rootReducer = (state, action) => {
    if (action.type === reducerConstants.RESET_STORE) {
        state = undefined; // Reset the state
    }
    return combinedReducers(state, action);
};
export default rootReducer;