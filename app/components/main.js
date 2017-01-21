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
			{/*<div>
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

		          {/* This code will dump the correct Child Component 
		          {this.props.children}

		        </div>
				
			</div>*/}


			<div id="topbar col-xs-12 col-sm-6 col-md-4 col-lg-3">
	        		<h1>BubbleBust</h1>  
     		</div> 

	       	<nav className="navbar navbar-default" id="add-nav-bar-color">
			    <div className="navbar-header">
			      <button type="button" className="navbar-toggle collapsed" id="nav-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">			       
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			      </button>
			    </div>

			    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					<ul className="nav nav-pills nav-justified">

				        <li><a id="mediaOne" href="">News</a></li>
				        <li><a id="mediaOne" href="">Twitter</a></li>
						
			      	</ul>

					<p  id="date">January 21, 2017</p>

					<form className="navbar-form navbar-right col-xs-12 col-sm-6 col-md-4 col-lg-3" role="search">
  							<div className="form-group">							
    							<input type="text" className="form-control" id="search" placeholder="Search"/>
  							</div>
  								<button type="submit" id="submit" className="btn btn-default">Go</button>
  								<button type="button" className="btn btn-default navbar-btn" id="login">Login</button>
					</form>	
					{this.props.children}
				</div>
			</nav>
			<div>			
		</div>   
 
		);
	}
});

module.exports = Main;