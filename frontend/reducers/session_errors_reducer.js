import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER, DELETE_ERRORS} from "../actions/session_actions";

const sessionErrorsReducer = (state= {}, action)=>{
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            return Object.assign({}, state, {errors: action.errors});
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, {errors: []});
        case DELETE_ERRORS:
            return Object.assign({}, state, {errors: []});
        default:
            return state;
    }
};

export default sessionErrorsReducer;