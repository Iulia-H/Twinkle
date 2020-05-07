import { connect } from "react-redux";
import TagForm from "./tag_form";
import { createTag } from "../../actions/tags_actions";


const mSTP = ({tag = {body: "", photo_id: ""}}) => ({
    tag
});

const mDTP = dispatch => ({
    createTag: (tag) => dispatch(createTag(tag))
});

export default connect(mSTP, mDTP)(TagForm);