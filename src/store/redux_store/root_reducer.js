
import { combineReducers } from "redux";
import * as reducer from './reset_action.js'

const combinedReducers = combineReducers({
    loginData: reducer.loginuserWrapper,


});

const rootReducer = (state, action) => {
    return combinedReducers(state, action);
};
export default rootReducer;