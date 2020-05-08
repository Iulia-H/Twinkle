import { connect } from "react-redux";
import Comments from "./comments";
import { updateComment, deleteComment, getComments } from "../../actions/comments_actions";


const mSTP = ({entities}) => ({
    photo: entities.photos,
    comments: entities.comments
});

const mDTP = dispatch => ({
    updateComment: (comment) => dispatch(updateComment(comment)),
    deleteComment: (commentId) => dispatch(deleteComment(commentId)),
    getComments: (photoId) =>dispatch(getComments(photoId))
});

export default connect(mSTP, mDTP)(Comments);