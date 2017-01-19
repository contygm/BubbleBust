// Include React
var React = require("react");

// Helper for making AJAX and Twitter Requests
var helpers = require("../config/helpers");

var Scrape = require("../components/children/Scrape");
var Twitter = require("../components/children/Twitter");
var Login = require("../components/children/Login");
var Result = require("../components/children/Result");
var Footer = require("../components/children/Footer");

// Creating the Results component
var Main = React.createClass({
	// componentDidMount: function(){},
	// componentDidUpdate: function(){},
	// Here we render the function
	render: function() {
		return (
			<div>
				<div id="topbar">
	        		<h1>BubbleBust</h1>  
	      		</div> 

	      		<div className="row">

		          {/* This code will dump the correct Child Component */}
		          {this.props.children}

		        </div>
				
				{/*
				<Navigation/>
				<Login /> 
				<Result />
				<Footer />

			*/}
				
			</div>
		);
	}
});

module.exports = Main;