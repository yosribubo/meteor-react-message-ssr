import React from 'react';
import ReactDOM from 'react-dom';
import { onPageLoad } from 'meteor/server-render';

const preloadedState = window.__PRELOADED_STATE__; // eslint-disable-line

delete window.__PRELOADED_STATE__; // eslint-disable-line

onPageLoad(async sink => {
	const App = (await import("../../ui/App.js")).default;
	ReactDOM.hydrate(
		<App />,
		document.getElementById('root')
	);
});