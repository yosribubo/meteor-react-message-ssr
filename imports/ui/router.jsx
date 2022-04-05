import React from 'react';
import {Route} from 'react-router';
// import {Redirect, BrowserRouter, Switch, Route} from 'react-router-dom';
import SignInPage from './pages/signInPage';
import SignUpPage from './pages/signUpPage';
import MessageList from './pages/messageList';
import App from './App';

export const Routes = () =>
    <App>
        <Route exact path="/" component={SignInPage}/>
        <Route exact path="/signup" component={SignUpPage}/>
        <Route exact path="/messagelist" component={MessageList}/>
    </App>