import { RECEIVE_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT, UPDATE_COMMENT, REMOVE_COMMENTS } from "../actions/comments_actions";

const commentsReducer = (state = {}, action)=>{
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_COMMENT:
            return Object.assign({}, state, {[action.comment.id]:action.comment});
        case RECEIVE_COMMENTS:
            // debugger;
            return Object.assign({}, state, action.comments);
        case REMOVE_COMMENT:
            return Object.assign({}, state, { comments: [] });
        case REMOVE_COMMENTS:
            let newState = Object.assign({}, state);
            newState = [];
            return newState;
        case UPDATE_COMMENT:
            return Object.assign({}, state, action.comment);
        default:
            return state;
    }
};

export default commentsReducer;