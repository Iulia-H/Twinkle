import React from "react";
import NavBarContainer from "./nav_bar/nav_bar_container";
import HomePageContainer from "./home_page/home_page_container";
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import { AuthRoute} from '../util/route_util';


const App = () => (
    <div>
        <header className="links">
        <NavBarContainer />
        {/* <Route exact path="/" component={NavBarContainer}/> */}
        </header>
        <div>
        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <Route path="/" component={HomePageContainer} />
        </Switch>
        </div>
    </div>
);

export default App;