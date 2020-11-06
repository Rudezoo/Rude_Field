import Tweet from 'Components/tweet/tweet';
import React, { useState } from 'react'
import {  Route, Switch } from 'react-router-dom'
import Auth from 'routes/Auth';
import Home from 'routes/Home';

const Routers = ({ isLoggedIn }) => {

    return (
        <>
                <Switch>
{/*                     {isLoggedIn ? (
                        <>
                            <Route exact path="/">
                                <Home></Home>
                            </Route>
                        </>
                    ) : (
                            <>
                                <Route exact path="/">
                                    <Auth></Auth>
                                </Route>
                            </>
                        )} */}
                         <Route exact path="/">
                                    <Auth></Auth>
                                </Route>
                    <Route path="/tweet">
                        <Tweet></Tweet>
                    </Route>
                </Switch>
        </>
    );
}

export default Routers;