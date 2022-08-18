import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as ApiUtil from './util/session_api_util'


document.addEventListener('DOMContentLoaded', () => {
    let store;

    if (window.currentUser) {
        const { currentUser } = window;
        const { id } = currentUser;
        const preloadedState = {
            entitities: {
                users: { [id]: currentUser }
            },
            session: { id }
        }
    
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore()
    }
    
    window.login = ApiUtil.login;

    const root = document.getElementById('root');
    ReactDOM.render( <Root store={store} />, root)

});