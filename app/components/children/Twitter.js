// Include React
var React = require("react");
var Result = require("./Result");
// Helper for making AJAX and Twitter Requests
var helpers = require("../../config/helpers");

// Creating the Navigation component
var Twitter = React.createClass({
	
	getInitialState: function(){
		return {
			tweetData: [],
		}
	},

	handleClick: function(event){
		event.preventDefault();
		var route = event.target.href;
		console.log(route);
		
		helpers.getMyTweets(route)
			.then(function(data){
				console.log("Mongo Data: ", data.data)
				this.setState({tweetData: data.data})
			}.bind(this));
	},

	render: function() {
	    return (
		
	       	<div>
		       	<nav className="navbar nav2" id="add-nav-bar-color">
		       		
			       	<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				       	<ul className="nav nav-pills nav-justified">
					        {/*<li><a id="Executive" href="/Twitter/Executive/Executive" onClick={this.handleClick}>Executive Branch</a></li> */}
					        <li><a id="Judicial" href="/Twitter/Executive/Judicial" onClick={this.handleClick}>Supreme Court</a></li>
					        <li><a id="Senator" href="/Twitter/Legislative/Senator" onClick={this.handleClick}>Senate</a></li>
					        <li><a id="Agency" href="/Twitter/Organization/Agency" onClick={this.handleClick}>Gov't Agency</a></li>
					        {/*<li><a id="Parties" href="/Twitter/Parties/Parties" onClick={this.handleClick}>Political Parties</a></li>*/}
					        {/*<li><a id="Research" href="/Twitter/Organization/Research" onClick={this.handleClick}>Research Organizations</a></li>*/}
					        <li><a id="Non-Profit" href="/Twitter/Organization/Non-Profit" onClick={this.handleClick}>Non-Profits</a></li>
					        <li><a id="ThinkTank" href="/Twitter/Organization/ThinkTank" onClick={this.handleClick} className="no-border">Think Tanks</a></li>
				      	</ul>
				     </div>
				</nav>

			     <Result tweets={this.state.tweetData}/>

	      	</div>
	    )
	}
});

// Export the component back for use in other files
module.exports = Twitter;