import { RECEIVE_PHOTO, RECEIVE_PHOTOS, REMOVE_PHOTO, REMOVE_PHOTOS} from "../actions/photos_actions";

const photosReducer = (state = {}, action) =>{
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_PHOTO:
            newState = action.photo;
            return newState;
        case RECEIVE_PHOTOS:
            // return Object.assign({}, state, action.photos);
            newState = action.photos;
            return newState;
        case REMOVE_PHOTO:
            newState = Object.assign({}, state);
            newState = [];
            return newState;
        case REMOVE_PHOTOS:
            newState = Object.assign({}, state);
            newState = [];
            return newState;
        default:
            return state;
    }
};

export default photosReducer;