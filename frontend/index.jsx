import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from "./store/store";
import Root from "./components/root";
import ReactGA from 'react-ga';

//testing
import { deleteAccount } from "./util/session_api_util";
import { getPhoto} from "./util/photo_api_util";
import { getTags } from "./actions/tags_actions";


function initializeReactGA() {
    ReactGA.initialize('UA-179152947-1');
    ReactGA.pageview(`${window.location.href}`);
}

document.addEventListener('DOMContentLoaded', () => {
    let store;
    //debugger;
    if (window.currentUser) {
        
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);
    
    //testing
    window.getPhoto = getPhoto;
    window.deleteAccount = deleteAccount;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.getTags = getTags;
});

window.onpopstate = function (e) {
    initializeReactGA();
};