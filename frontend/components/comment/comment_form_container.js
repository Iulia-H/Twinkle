import { connect } from "react-redux";
import CommentForm from "./comment_form";
import { createComment } from "../../actions/comments_actions";


const mSTP = (state) => ({
    comment: {
        body: "",
        photo_id: ""
    },
    photo: state.entities.photos
});

const mDTP = dispatch => ({
    createComment: (comment) => dispatch(createComment(comment))
});

export default connect(mSTP, mDTP)(CommentForm);