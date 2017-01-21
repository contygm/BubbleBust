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
	
	// Here we render the function
	render: function() {
		return (
			<div>

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
						
				      	
						
				    	<p  id="date">January 21, 2017</p>
						<form className="navbar-form navbar-right col-xs-12 col-sm-6 col-md-4 col-lg-3" role="search">
							 
	  							<div className="form-group">							
	    							<input type="text" className="form-control" id="search" placeholder="Search"/>
	  							</div>
	  							<button type="submit" id="submit" className="btn btn-default">Go</button>
	  							<button type="button" className="btn btn-default navbar-btn" id="login">Login</button>
						</form>	

						<ul className="nav nav-pills nav-justified col-xs-12">

					        <li><a id="mediaOne" href="#/news">News</a></li>
					        <li><a id="mediaOne" href="#/Twitter">Twitter</a></li>
					        <li><a id="mediaOne" href="#/saved">News</a></li>
							
				      	</ul>
						
					</div>

				</nav>	
				{this.props.children}

			</div>   
 
		);
	}
});

module.exports = Main;