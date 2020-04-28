import React from "react";
import NavBarContainer from "./nav_bar/nav_bar_container";
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import { AuthRoute} from '../util/route_util';
const App = () => (
    <div>
        <NavBarContainer />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <Route exact path="/" component={NavBarContainer}/>
    </div>
);

export default App;