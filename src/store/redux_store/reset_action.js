
import * as reducerConstants from '../reducerConstants'
import loginUserSlice from '../slice/loginUserSlice';
import UserDetailsSlice from '../slice/UserDetailsSlice'


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
