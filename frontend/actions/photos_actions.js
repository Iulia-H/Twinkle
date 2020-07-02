import * as APIUtil from "../util/photo_api_util";
export const RECEIVE_PHOTOS = "RECEIVE_PHOTOS";
export const RECEIVE_PHOTO = "RECEIVE_PHOTO";
export const CREATE_PHOTO = "CREATE_PHOTO";
export const RECEIVE_PHOTO_ERRORS = 'RECEIVE_PHOTO_ERRORS';
export const DELETE_PHOTO_ERRORS = "DELETE_PHOTO_ERRORS";
export const REMOVE_PHOTO = "REMOVE_PHOTO";
export const REMOVE_PHOTOS = "REMOVE_PHOTOS";

const receivePhoto = photo =>({
    type: RECEIVE_PHOTO,
    photo
});

const receivePhotos = (photos)=> ({
    type: RECEIVE_PHOTOS,
    photos
});

const sentPhoto = photo =>({
    type: CREATE_PHOTO,
    photo
});

export const removePhoto = () => ({
    type: REMOVE_PHOTO
})

export const removePhotos = () => ({
    type: REMOVE_PHOTOS
})

const receiveErrors = errors => ({
    type: RECEIVE_PHOTO_ERRORS,
    errors
});

export const deleteErrors = () => ({
    type: DELETE_PHOTO_ERRORS,

});

export const getPhoto = photoId => dispatch =>(
    APIUtil.getPhoto(photoId)
        .then(photo => dispatch(receivePhoto(photo))
));

export const getPhotos = () => dispatch => (
    APIUtil.getPhotos()
        .then(photos => dispatch(receivePhotos(photos))
));

export const createPhoto = photo => dispatch => (
    APIUtil.createPhoto(photo)
        .then(photo => dispatch(receivePhoto(photo)),
    err => dispatch(err.responseJSON ? receiveErrors(err.responseJSON) : receiveErrors(["Please upload a picture"]))
));

