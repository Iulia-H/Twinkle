import { connect } from "react-redux";
import {getPhoto} from "../../actions/photos_actions";
import {getComments} from "../../actions/comments_actions";
import {getTags} from "../../actions/tags_actions";
import Photo from "./photo";

const mSTP = ({entities})=> ({
    photo: entities.photos,
    user: entities.user
});

const mDTP = dispatch => ({
    getPhoto: (photoId) => dispatch(getPhoto(photoId)),
    getComments: (photoId) => dispatch(getComments(photoId)),
    getTags: (photoId) => dispatch(getTags(photoId))
    // deleteErrors: () => dispatch(deleteErrors())
});

export default connect(mSTP, mDTP)(Photo);