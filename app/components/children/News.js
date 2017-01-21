// Include React
var React = require("react");
// Creating the Navigation component
var News = React.createClass({	
	render: function() {
	    return (
		    <div>
			    <nav className="navbar nav2" id="add-nav-bar-color">
			       	<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				       	<ul className="nav nav-pills nav-justified">
					        <li><a id="mediaOne" href="">The Huffington Post</a></li>
					        <li><a id="mediaOne" href="">The Guardian</a></li>
					        <li><a id="mediaOne" href="">NPR</a></li>
					        <li><a id="mediaOne" href="">BBC</a></li>
					        <li><a id="mediaOne" href="">CNN</a></li>
					        <li><a id="mediaOne" href="">The Economist</a></li>
					        <li><a id="mediaOne" href="">The Hill</a></li>
					        <li><a id="mediaOne" href="">FOX News</a></li>
					        <li><a id="mediaOne" href="">The Blaze</a></li>
				      	</ul>
				    </div>
				</nav>

			    {/* <Result />*/}
	      	</div>
	    )
	}
});

// Export the component back for use in other files
module.exports = News;