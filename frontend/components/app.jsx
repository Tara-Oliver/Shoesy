import React from 'react';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import Modal from './modal/modal';
import GreetingContainer from './greeting/greeting_container';
import HomeContainer from './home/home_container';
import SneakerContainer from './catergories/sneaker_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import IconBar from './icon_bar/icon_bar_container';

const App = () => (
    <>
       <Modal />
    <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/users/:id" component={GreetingContainer}/>
        <Route exact path="/Sneakers" component={SneakerContainer} />
        <Route exact path="/Sandals" component={IconBar} />


    </Switch>
    </>
);

export default App;



       