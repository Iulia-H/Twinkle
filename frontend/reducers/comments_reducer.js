import { RECEIVE_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT, UPDATE_COMMENT } from "../actions/comments_actions";

const commentsReducer = (state = {}, action)=>{
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_COMMENT:
            return Object.assign({}, state, {[action.comment.id]:action.comment});
        case RECEIVE_COMMENTS:
            return Object.assign({}, state, action.comments);
        case REMOVE_COMMENT:
            return Object.assign({}, state, { comments: [] });
        case UPDATE_COMMENT:
            return Object.assign({}, state, action.comment);
        default:
            return state;
    }
};

export default commentsReducer;