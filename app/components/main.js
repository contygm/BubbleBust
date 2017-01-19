// Include React
var React = require("react");

// Helper for making AJAX and Twitter Requests
var helpers = require("../config/helpers");

var News = require("../components/children/News");
var Twitter = require("../components/children/Twitter");
var Login = require("../components/children/Login");
var Result = require("../components/children/Result");

// Creating the Results component
var Main = React.createClass({
	// componentDidMount: function(){},
	// componentDidUpdate: function(){
	// 	helpers.getMyTweets()
	// },

	// Here we render the function
	render: function() {
		return (
			<div>
				<div id="topbar">
	        		<h1>BubbleBust</h1>  
	      		</div> 
	      		<div className="seperator"></div>
	      		<div id="menu-bar-2-container">                 
		          <div id="menu-bar-2">                                 
		              	<a id="menu-bar-date">8 January 2017</a>                 
		              	<a id="" href="#/Twitter">Twitter</a>
		              	<a id="" href="#/News">News</a>
		                <input type="text" id="search" placeholder="Search"/>
		                <button id="login"><a id="" href="#/Login">Login</a></button>
		           </div>               
		       	</div>         
		        <div className="seperator"></div>  

	      		<div className="row">

		          {/* This code will dump the correct Child Component */}
		          {this.props.children}

		        </div>
				
			</div>
		);
	}
});

module.exports = Main;