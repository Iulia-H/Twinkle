import { connect } from "react-redux";
import SessionForm from "./session_form";
import { login , deleteErrors } from "../../actions/session_actions";



const mSTP = state => ({
    errors: state.errors.session,
    formType: "Log In!"
});

const mDTP = dispatch => ({
    action: (user) => dispatch(login(user)),
    deleteErrors: () => dispatch(deleteErrors())
    
});

export default connect(mSTP, mDTP)(SessionForm);
