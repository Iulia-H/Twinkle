import * as APIUtil from "../util/photo_api_util";
export const RECEIVE_PHOTOS = "RECEIVE_PHOTOS";
export const RECEIVE_PHOTO = "RECEIVE_PHOTO";
export const CREATE_PHOTO = "CREATE_PHOTO";


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
        .then(photo => dispatch(receivePhoto(photo))
));
