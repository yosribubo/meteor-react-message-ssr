import React from "react";
import { renderToString } from "react-dom/server";
import { onPageLoad } from "meteor/server-render";
import { StaticRouter } from 'react-router';
import {Routes} from '../imports/ui/router';
import {addUser} from '../imports/api/addUser';

const App = (props) => {
    return (
        <StaticRouter location={props.location.path} context={{}}>
            <Routes/>
        </StaticRouter>
    )
};

onPageLoad((sink) => {
    // addUser();
    sink.renderIntoElementById('root', renderToString(<App location={sink.request.url} />));
});