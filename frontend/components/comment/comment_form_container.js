import { connect } from "react-redux";
import CommentForm from "./comment_form";
import { createComment, deleteErrors } from "../../actions/comments_actions";


const mSTP = ({entities, errors}) => ({
    photo: entities.photos,
    errors: errors.comment.errors
});

const mDTP = dispatch => ({
    createComment: (comment) => dispatch(createComment(comment)),
    deleteErrors: () => dispatch(deleteErrors())
});

export default connect(mSTP, mDTP)(CommentForm);