// Include React
var React = require("react");


//var todaysDate = new Date();
// Creating the Navigation component
var Navigation = React.createClass({	
	render: function() {
	    return (
		   
		    
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
			      <ul className="nav nav-pills nav-justified">
				        <li><a id="mediaOne" href="">News</a></li>
				        <li><a id="mediaOne" href="">Twitter</a></li>
				        <li><a id="mediaOne" href="">Twitter</a></li>
				        <li><a id="mediaOne" href="">News</a></li>
				        <li><a id="mediaOne" href="">Twitter</a></li>
				        <li><a id="mediaOne" href="">Twitter</a></li>
				        <li><a id="mediaOne" href="">News</a></li>
				        <li><a id="mediaOne" href="">Twitter</a></li>
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
				</div>
			</nav>
			<div>			
		</div>   
 

	    )
	}
});




// Export the component back for use in other files
module.exports = Navigation;


