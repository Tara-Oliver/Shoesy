import React from 'react';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import Modal from './modal/modal';
import UserShowContainer from './users/user_show_container'
import HomeContainer from './home/home_container';
import SneakerContainer from './catergories/sneaker_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavBarContainer from './nav_bar/nav_bar_container'
import ProductIndexContainer from './products/product_index';

const App = () => (
    <>
       <Modal />
       <NavBarContainer/>
       {/* <ProductIndexContainer/> */}
        <Switch>
            <Route exact path="/" component={HomeContainer} />
            {/* <Route exact path="/" component={ProductIndexContainer} /> */}
            <ProtectedRoute exact path="/users/:id" component={UserShowContainer}/>
            <Route exact path="/Sneakers" component={SneakerContainer} />
            {/* <Route exact path="/Sandals" component={IconBar} /> */}

        </Switch>
    </>
);

export default App;



       