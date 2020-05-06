import React from "react";
import NavBarContainer from "./nav_bar/nav_bar_container";
import HomePageContainer from "./home_page/home_page_container";
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import { AuthRoute} from '../util/route_util';
import PhotoContainer from "./photo/photo_container";
import PhotoFormContainer from "./photo/photo_form";


const App = () => (
    <div>
        <header className="links">
        {/* <NavBarContainer /> */}
        {/* <Route exact path="/" component={NavBarContainer}/> */}
        </header>
        <div>
        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <Route exact path="/photos/:id" component={PhotoContainer}/>
            <Route exact path="/" component={HomePageContainer} />
            <Route exact path="/photo/new" component={PhotoFormContainer}/>
        </Switch>
       
        </div>
    </div>
);

export default App;