import * as APIUtil from "../util/photo_api_util";
export const RECEIVE_PHOTOS = "RECEIVE_PHOTOS";
export const RECEIVE_PHOTO = "RECEIVE_PHOTO";
export const CREATE_PHOTO = "CREATE_PHOTO";


const receive_photo = photo =>({
    type: RECEIVE_PHOTO,
    photo
});

const receive_photos = ()=> ({
    type: RECEIVE_PHOTOS,
    photos
});

const sentPhoto = photo =>({
    type: CREATE_PHOTO,
    photo
});

export const getPhoto = photoId => dispatch =>(
    APIUtil.getPhoto(photoId)
        .then(photo => dispatch(receive_photo(photo))
));

export const getPhotos = () => dispatch => (
    APIUtil.getPhotos()
        .then(photos => dispatch(receive_photos(photos))
));

export const createPhoto = photo => dispatch => (
    APIUtil.createPhoto(photo)
        .then(photo => dispatch(receive_photo(photo))
));

