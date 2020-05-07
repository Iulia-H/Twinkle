import { connect } from "react-redux";
import Tags from "./tags";
import { updateTag, deleteTag, getTags } from "../../actions/tags_actions";


const mSTP = ({entities}) => ({
    tags: entities.tags
});

const mDTP = dispatch => ({
    updateTag: (tag) => dispatch(updateTag(tag)),
    deleteTag: (tagId) => dispatch(deleteTag(tagId)),
    getTags: () =>dispatch(getTags())
});

export default connect(mSTP, mDTP)(Tags);