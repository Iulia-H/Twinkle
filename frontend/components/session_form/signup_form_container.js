import { connect } from "react-redux";
import SessionForm from "./session_form";
import { signup, deleteErrors} from "../../actions/session_actions";


const mSTP = state =>({
    errors: state.errors.session,
    formType: "Sign Up!"
});

const mDTP = dispatch =>({
    action: (user)=> dispatch(signup(user)),
    deleteErrors: ()=> dispatch(deleteErrors())
});

export default connect(mSTP, mDTP)(SessionForm);
