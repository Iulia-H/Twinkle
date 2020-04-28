import { connect } from "react-redux";
import SessionForm from "./session_form";
import { login } from "../../actions/session_actions";


const mSTP = state => ({
    user: {
        username: "",
        password: ""
    },
    errors: state.errors,
    formType: "Log In!"
});

const mDTP = dispatch => ({
    action: (user) => dispatch(login(user))
});

export default connect(mSTP, mDTP)(SessionForm);
