import React from "react";
import {renderToNodeStream} from 'react-dom/server';
import {onPageLoad} from 'meteor/server-render';

import App from '../ui/App.jsx';

onPageLoad(sink => {
    sink.renderIntoElementById('root', renderToNodeStream(
        <App location={sink.request.url} />
    ))
})