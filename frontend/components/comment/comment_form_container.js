import { connect } from "react-redux";
import CommentForm from "./comment_form";
import { createComment } from "../../actions/comments_actions";


const mSTP = ({entities}) => ({
    comment: {
        body: "",
        photo_id: ""
    },
    photo: entities.photos
});

const mDTP = dispatch => ({
    createComment: (comment) => dispatch(createComment(comment))
});

export default connect(mSTP, mDTP)(CommentForm);