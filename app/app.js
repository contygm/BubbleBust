// Include the Main React Dependencies
var React = require('react');
var ReactDOM = require('react-dom');

import { Router, Route, hashHistory, IndexRoute } from 'react-router'

// Reference the high-level components
var Main = require('./components/Main');
//var News = require('./components/children/News'); 
var NewsNavigation = require("./components/children/News/NewsNavigation");
var Saved = require('./components/children/News/SavedArticles');
var NewsResult = require('./components/children/News/NewsResult');

// Renders the contents according to the route page. 
ReactDOM.render(
	<Router history={hashHistory}>

		{/*High level component is the Main component*/}
		<Route path='/' component={Main}>
			<Route path='news' component={NewsNavigation} />
			<Route path='saved' component={Saved} />
		</Route>

	</Router>,
	document.getElementById('app')
)



