import { RECEIVE_COMMENT_ERRORS, DELETE_COMMENT_ERRORS } from "../actions/comments_actions";

const commentErrorsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_COMMENT_ERRORS:
            return Object.assign({}, state, { errors: action.errors });
        case DELETE_COMMENT_ERRORS:
            return Object.assign({}, state, { errors: [] });
        default:
            return state;
    }
};

export default commentErrorsReducer;