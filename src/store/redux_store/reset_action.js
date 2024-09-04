
import * as reducerConstants from '../reducerConstants'
import loginUserSlice from '../slice/loginUserSlice';


export const loginuserWrapper = (state, action) => {
    if (action.type === `${reducerConstants.LOGIN_USER}/reset`) {
        state = undefined;
    }
    return loginUserSlice(state, action);
};
