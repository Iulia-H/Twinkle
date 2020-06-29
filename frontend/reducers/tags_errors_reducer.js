import { RECEIVE_TAGS_ERRORS, DELETE_TAGS_ERRORS } from "../actions/tags_actions";

const tagErrorsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_TAGS_ERRORS :
            return Object.assign({}, state, { errors: action.errors });
        
        case DELETE_TAGS_ERRORS:
            return Object.assign({}, state, { errors: [] });
        default:
            return state;
    }
};

export default tagErrorsReducer;