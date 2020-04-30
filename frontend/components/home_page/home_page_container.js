import { connect } from "react-redux";
import HomePage  from "./home_page";

const mSTP = (state) => ({
    state: state
});

// const mDTP = dispatch => ({
//     logout: () => dispatch(logout()),
//     deleteAccount: user => dispatch(deleteAccount(user))
// });

export default connect(mSTP, null)(HomePage);