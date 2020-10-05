import React from "react";
import ReactGA from 'react-ga';
import NavBarContainer from "./nav_bar/nav_bar_container";
import HomePageContainer from "./home_page/home_page_container";
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import { AuthRoute} from '../util/route_util';
import PhotoContainer from "./photo/photo_container";
import PhotoFormContainer from "./photo/photo_form";
import TagFormContainer from "./tag/tag_form_container";
import PhotosContainer from "./photo/photos";


// function initializeReactGA() {
//     ReactGA.initialize('UA-179152947-1');
//     history.listen((location) => {
//         if (window.ga) {
//             window.ga('send', 'pageview', location.pathname);
//         }
//     });
//     ReactGA.pageview('/');
// }


ReactGA.initialize('UA-179152947-1');
ReactGA.pageview(window.location.pathname + window.location.search);


const App = () => (
    <div>
        <header className="links">
        <NavBarContainer />
        {/* <Route exact path="/" component={NavBarContainer}/> */}
        </header>
        <div >
        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <Route exact path="/photos" component={PhotosContainer}/>
            <Route exact path="/photos/:id" component={PhotoContainer}/>
            <Route exact path="/photo/new" component={PhotoFormContainer}/>
            <Route exact path="/tag/new" component={TagFormContainer}/>
            
            <Route exact path="/" component={HomePageContainer} />
        </Switch>
       
        </div>
    </div>
    
);

// initializeReactGA();

export default App;