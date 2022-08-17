import React from 'react';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container';
import Modal from './modal/modal';


const App = () => (
    <>
       <Modal/>
       {/* <GreetingContainer /> */}
       <NavBarContainer />
    <Switch>
        {/* <Route exact path="/signup" component={Signup_container}/> */}
            {/* <Route exact path="/signin" component={Signin_container} /> */}
    </Switch>
    </>
);

export default App;



       