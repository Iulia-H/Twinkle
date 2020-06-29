import { RECEIVE_PHOTO_ERRORS, DELETE_PHOTO_ERRORS } from "../actions/photos_actions";

const photoErrorsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PHOTO_ERRORS:
            return Object.assign({}, state, { errors: action.errors });
        case DELETE_PHOTO_ERRORS:
            return Object.assign({}, state, { errors: [] });
        default:
            return state;
    }
};

export default photoErrorsReducer;