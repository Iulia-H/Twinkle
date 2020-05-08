import { connect } from "react-redux";
import TagForm from "./tag_form";
import { createTag } from "../../actions/tags_actions";


const mSTP = ({entities}) => ({
    tag:{
        body: "",
        photo_id: ""
    },
    photo: entities.photos
});

const mDTP = dispatch => ({
    createTag: (tag) => dispatch(createTag(tag))
});

export default connect(mSTP, mDTP)(TagForm);