// Include the Main React Dependencies
var React = require('react');
var ReactDOM = require('react-dom');

// Grab the properties associated with react-router
// var Router = require('react-router').Router;
// var hashHistory = require('react-router').hashHistory;
// var Route = require('react-router').Route;
// var IndexRoute	= require('react-router').IndexRoute;

import { Router, Route, hashHistory, IndexRoute } from 'react-router'

// Reference the high-level components
var Main = require('./components/Main');
var News = require('./components/children/News/News'); 
var Saved = require('./components/children/News/SavedArticles');

// Renders the contents according to the route page. 
ReactDOM.render(
	<Router history={hashHistory}>

		{/*High level component is the Main component*/}
		<Route path='/' component={Main}>

			{/* If user selects Child1 then show the appropriate component*/}
			<Route path='news' component={News} />

			{/* If user selects Child2 then show the appropriate component*/}
			<Route path='saved' component={Saved} />

			{/*If user selects any other path... we get the Home Route*/}
			<IndexRoute component={News} />
			
		</Route>

	</Router>,
	document.getElementById('app')
)