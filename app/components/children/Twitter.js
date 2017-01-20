// Include React
var React = require("react");
var Result = require("./Result");
// Helper for making AJAX and Twitter Requests
var helpers = require("../../config/helpers");

// Creating the Navigation component
var Twitter = React.createClass({

	
	// componentDidUpdate: function(){
	// 	helpers.getMyTweets()
	// },
	getInitialState: function(){
		return {
			tweetData: [],
		}
	},
	componentDidMount: function(){
		var route = "/Twitter/Executive/Executive";
		helpers.getMyTweets(route)
			.then(function(data){
				console.log("Mongo Data: ", data)
				this.setState({tweetData: data})
			}.bind(this));
	},
	// componentDidUpdate: function(){
	// 	;
	// },

	handleClick: function(event){
		event.preventDefault();
		var route = event.target.href;
		console.log(route);
		helpers.getMyTweets(route)
			.then(function(data){
				console.log("Mongo Data: ", data)
				this.setState({tweetData: data})
			}.bind(this));
	},

	render: function() {
	    return (
		    <div>
		      	<div id="tab-bar-news-sources">            
			        <div id="tab-bar-news-sources-menu">             
			              <a id="Executive" href="/Twitter/Executive/Executive" onClick={this.handleClick}>Executive Branch</a>                    
			              <a id="Judicial" href="/Twitter/Executive/Judicial" onClick={this.handleClick}>Supreme Court</a>                
			              <a id="Senator" href="/Twitter/Legislative/Senator" onClick={this.handleClick}>Senate</a>                    
			              <a id="Agency" href="/Twitter/Organization/Agency" onClick={this.handleClick}>Government Departments</a>                    
			              <a id="Parties" href="/Twitter/Parties/Parties" onClick={this.handleClick}>Political Parties</a>                   
			              <a id="Research" href="/Twitter/Organization/Research" onClick={this.handleClick}>Research Organizations</a>                    
			              <a id="Non-Profit" href="/Twitter/Organization/Non-Profit" onClick={this.handleClick}>Non-Profits</a>                                         
			              <a id="ThinkTank" href="/Twitter/Organization/ThinkTank" onClick={this.handleClick} className="no-border">Think Tanks</a>      
			        </div>            
		      	</div>   
		      	<div className="seperator"></div> 
		      	<Result tweets={this.state.tweetData}/>     
	       	</div>
	    )
	}
});

// Export the component back for use in other files
module.exports = Twitter;