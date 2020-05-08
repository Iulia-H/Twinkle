import { RECEIVE_TAG, RECEIVE_TAGS, REMOVE_TAG, UPDATE_TAG } from "../actions/tags_actions";

const tagsReducer = (state = {}, action)=>{
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_TAG:
            return Object.assign({}, state, { [action.tag.id]: action.tag });
        case RECEIVE_TAGS:
            return Object.assign({}, state, action.tags);
        case REMOVE_TAG:
            return Object.assign({}, state, { tags: [] });
        case UPDATE_TAG:
            return Object.assign({}, state, action.tag);
        default:
            return state;
    }
};

export default tagsReducer;