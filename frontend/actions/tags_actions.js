import * as APIUtil from '../util/tag_api_util';
export const RECEIVE_TAG = "RECEIVE_TAG";
export const RECEIVE_TAGS = "RECEIVE_TAGS";
export const REMOVE_TAG = "REMOVE_TAG";
export const UPDATE_TAG = "UPDATE_TAG";
export const REMOVE_TAGS = "REMOVE_TAGS";
export const RECEIVE_TAGS_ERRORS = 'RECEIVE_TAGS_ERRORS';
export const DELETE_TAGS_ERRORS = "DELETE_TAGS_ERRORS";

const receiveTag = (tag) =>({
    type: RECEIVE_TAG,
    tag
});

const receiveTags = (tags) => ({
    type: RECEIVE_TAGS,
    tags
});

const removeTag = (tagId) => ({
    type: REMOVE_TAG,
    tagId
});

export const removeTags = () => ({
    type: REMOVE_TAGS
});

const receiveErrors = errors => ({
    type: RECEIVE_TAGS_ERRORS,
    errors
});

export const deleteErrors = () => ({
    type: DELETE_TAGS_ERRORS,

});


export const getTag = tagId => dispatch => (
    APIUtil.getTag(tagId)
        .then(tag => dispatch(receiveTag(tag))
));


export const createTag = tag => dispatch => (
    APIUtil.createTag(tag)
        .then(tag => dispatch(receiveTag(tag)),
    err => dispatch(receiveErrors(err.responseJSON))
));


export const getTags = (photoId)=> dispatch => (
    APIUtil.getTags(photoId)
        .then(tags => dispatch(receiveTags(tags))
));

export const updateTag = tag => dispatch => (
    APIUtil.updateTag(tag)
        .then(tag => dispatch(receiveTag(tag)),
    err => dispatch(receiveErrors(err.responseJSON))
));

export const deleteTag = tagId => dispatch =>(
    APIUtil.deleteTag(tagId)
        .then(()=> dispatch(removeTag(tagId)))
    
);