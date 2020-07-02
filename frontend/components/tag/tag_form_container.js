import { connect } from "react-redux";
import TagForm from "./tag_form";
import { createTag, deleteErrors } from "../../actions/tags_actions";


const mSTP = ({entities, errors}) => ({
    photo: entities.photos,
    errors: errors.tag.errors
});

const mDTP = dispatch => ({
    createTag: (tag) => dispatch(createTag(tag)),
    deleteErrors: () => dispatch(deleteErrors())
});

export default connect(mSTP, mDTP)(TagForm);