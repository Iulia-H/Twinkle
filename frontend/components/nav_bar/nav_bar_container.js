import { connect } from "react-redux";
import NavBar from "./nav_bar";
import {logout} from "../../actions/session_actions";
import { deleteAccount } from "../../actions/session_actions";

const mSTP = ({entities, session}) =>({
    currentUser: entities.users[session.id],
});

const mDTP = dispatch => ({
    logout: ()=> dispatch(logout()),
    //deleteAccount: user=> dispatch(deleteAccount(user))
});

export default connect(mSTP, mDTP)(NavBar);