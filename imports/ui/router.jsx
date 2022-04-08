import React, { Component } from 'react';
import {Route } from 'react-router';

import App from './App';
import SignInPage from './pages/signInPage';
import SignUpPage from './pages/signUpPage';
import MessageList from './pages/messageList';


export const Routes = () =>
    <App>
        <Route exact path="/" render={props => <SignInPage {...props} /> } />
        <Route exact path="/signup" render={props => <SignUpPage {...props} /> } />
        <Route exact path="/messagelist" render={props => <MessageList {...props} /> } />
    </App>