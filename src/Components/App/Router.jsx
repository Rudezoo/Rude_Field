
import Tweet from 'Components/tweet/tweet';
import React, { useState } from 'react'
import {  Route, Switch } from 'react-router-dom'
import AboutPage from 'routes/About';
import Auth from 'routes/Auth';
import CodePage from 'routes/Code';
import GamePage from 'routes/Game';
import Home from 'routes/Home';
import MusicPage from 'routes/Music';
import StudyPage from 'routes/Study';

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
                    <Route path="/About">
                        <AboutPage></AboutPage>
                    </Route>
                    <Route path="/Study">
                        <StudyPage></StudyPage>
                    </Route>
                    <Route path="/Code">
                        <CodePage></CodePage>
                    </Route>
                    <Route path="/Game">
                        <GamePage></GamePage>
                    </Route>
                    <Route path="/Music">
                        <MusicPage></MusicPage>
                    </Route>
                </Switch>
        </>
    );
}

export default Routers;