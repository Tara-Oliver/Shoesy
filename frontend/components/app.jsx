import React from 'react';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import Modal from './modal/modal';
import GreetingContainer from './greeting/greeting_container';
import HomeContainer from './home/home_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <>
       <Modal />
      
    <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/users/:id" component={GreetingContainer}/>
        {/* <Route exact path="/signin" component={Signin_container} /> */}
    </Switch>
    </>
);

export default App;



       