import {RECEIVE_PHOTO, RECEIVE_PHOTOS} from "../actions/photos_actions";

const photosReducer = (state = {}, action) =>{
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PHOTO:
            return Object.assign({}, state, action.photo);
        case RECEIVE_PHOTOS:
            return Object.assign({}, state, action.photos);
        default:
            return state;
    }
};

export default photosReducer;