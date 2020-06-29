import { connect } from "react-redux";
import Comments from "./comments";
import { updateComment, deleteComment, getComments, removeComments } from "../../actions/comments_actions";


const mSTP = ({entities}) => ({ 
    photos: entities.photos,
    comments: entities.comments
});

const mDTP = dispatch => ({
    updateComment: (comment) => dispatch(updateComment(comment)),
    deleteComment: (commentId) => dispatch(deleteComment(commentId)),
    getComments: (photoId) => dispatch(getComments(photoId)),
    removeComments: () => dispatch(removeComments())
});

export default connect(mSTP, mDTP)(Comments);