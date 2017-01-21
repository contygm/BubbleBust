// Include React
var React = require("react");

// Helper for making AJAX and Twitter Requests
var helpers = require("./utils/helpers");

var Navigation = require("./children/Navigation.js");
var Login = require("./children/Login.js");
var Result = require("./children/Result.js");
var Footer = require("./children/Footer.js");

var NewsNavigation = require("./children/News/NewsNavigation.js");
//var News = require("./children/News.js");
var NewsResult = require("./children/News/NewsResult.js");

// Creating the Results component
var Main = React.createClass({
	// componentDidMount: function(){},
	// componentDidUpdate: function(){},
	// Here we render the function
	render: function() {
		return (
			<div className="container">
				<Navigation/>

				{this.props.children}
				<Footer/>
			</div>
		);
	}
});

module.exports = Main;