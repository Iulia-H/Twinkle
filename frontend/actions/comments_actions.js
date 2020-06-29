import * as APIUtil from '../util/comment_api_util';
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const UPDATE_COMMENT = "UPDATE_COMMENT";
export const REMOVE_COMMENTS = "REMOVE_COMMENTS";
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';
export const DELETE_COMMENT_ERRORS = "DELETE_COMMENT_ERRORS";

const receiveComment = (comment) =>({
    type: RECEIVE_COMMENT,
    comment
});

const receiveComments = (comments) => ({
    type: RECEIVE_COMMENTS,
    comments
});

const removeComment = (commentId) => ({
    type: REMOVE_COMMENT,
    commentId
});

const receiveErrors = errors => ({
    type: RECEIVE_COMMENT_ERRORS,
    errors
});

export const deleteErrors = () => ({
    type: DELETE_COMMENT_ERRORS,
});

export const removeComments = ()=>({
    type: REMOVE_COMMENTS
})


export const getComment = commentId => dispatch => (
    APIUtil.getComment(commentId)
        .then(comment => dispatch(receiveComment(comment))
));


export const createComment = comment => dispatch => (
    APIUtil.createComment(comment)
        .then(comment => dispatch(receiveComment(comment)),
    err => dispatch(receiveErrors(err.responseJSON))
));


export const getComments = (photoId) => dispatch => {
    // debugger;
    return APIUtil.getComments(photoId)
        .then(comments => dispatch(receiveComments(comments))
)};

export const updateComment = comment => dispatch => (
    APIUtil.updateComment(comment)
        .then(comment => dispatch(receiveComment(comment)),
    err => dispatch(receiveErrors(err.responseJSON))
));

export const deleteComment = commentId => dispatch =>(
    APIUtil.deleteComment(commentId)
        .then(()=> dispatch(removeComment(commentId)))
);