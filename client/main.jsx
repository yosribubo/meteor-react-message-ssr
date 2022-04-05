import React from 'react';
import ReactDOM from "react-dom";
import { Meteor } from 'meteor/meteor';
import { onPageLoad } from "meteor/server-render";
import {BrowserRouter, Router} from 'react-router-dom';
import {Routes} from '../imports/ui/router';
// import {App} from './App';

const App = props =>
    <BrowserRouter>
        <Routes />
    </BrowserRouter>;

// const history = createHistory();

onPageLoad((sink) => {
    ReactDOM.hydrate(
        <App />,
        document.getElementById("root")
    );
});