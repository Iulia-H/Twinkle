import * as APIUtil from '../util/comment_api_util';
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const UPDATE_COMMENT = "UPDATE_COMMENT";

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


export const getComment = commentId => dispatch => (
    APIUtil.getComment(commentId)
        .then(comment => dispatch(receiveComment(comment))
));


export const createComment = comment => dispatch => (
    APIUtil.createComment(comment)
        .then(comment => dispatch(receiveComment(comment))
));


export const getComments = (photoId)=> dispatch => (
    APIUtil.getComments(photoId)
        .then(comments => dispatch(receiveComments(comments))
));

export const updateComment = comment => dispatch => (
    APIUtil.updateComment(comment)
        .then(comment => dispatch(receiveComment(comment))
));

export const deleteComment = commentId => dispatch =>(
    APIUtil.deleteComment(commentId)
        .then(()=> dispatch(removeComment(commentId)))
);