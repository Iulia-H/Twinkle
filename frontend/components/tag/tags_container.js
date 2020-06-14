import { connect } from "react-redux";
import Tags from "./tags";
import { updateTag, deleteTag, getTags, removeTags } from "../../actions/tags_actions";


const mSTP = ({entities}) => ({
    tags: entities.tags,
    photos: entities.photos
});

const mDTP = dispatch => ({
    updateTag: (tag) => dispatch(updateTag(tag)),
    deleteTag: (tagId) => dispatch(deleteTag(tagId)),
    getTags: () =>dispatch(getTags()),
    removeTags: () => dispatch(removeTags())
});

export default connect(mSTP, mDTP)(Tags);