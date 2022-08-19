import React from 'react';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container';
import Modal from './modal/modal';
import GreetingContainer from './greeting/greeting_container';
import IconBar from './icon_bar/icon_bar_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <>
       <Modal />
       <NavBarContainer />
       <IconBar />
    <Switch>
            <Route exact path="/home" component={GreetingContainer}/>
            {/* <Route exact path="/signin" component={Signin_container} /> */}
    </Switch>
    </>
);

export default App;



       