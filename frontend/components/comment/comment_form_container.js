import { connect } from "react-redux";
import CommentForm from "./comment_form";
import { createComment } from "../../actions/comments_actions";


const mSTP = ({comment = {body: "", photo_id: "", user_id: ""}}) => ({
    comment
});

const mDTP = dispatch => ({
    createComment: (comment) => dispatch(createComment(comment))
});

export default connect(mSTP, mDTP)(CommentForm);