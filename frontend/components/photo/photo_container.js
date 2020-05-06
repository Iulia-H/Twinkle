import { connect } from "react-redux";
import {getPhoto} from "../../actions/photos_actions";
import Photo from "./photo";

const mSTP = ({entities})=> ({
    photo: entities.photos
});

const mDTP = dispatch => ({
    getPhoto: (photoId) => dispatch(getPhoto(photoId)),

    // deleteErrors: () => dispatch(deleteErrors())
});

export default connect(mSTP, mDTP)(Photo);