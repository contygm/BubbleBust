// Include React
var React = require("react");
// Creating the Navigation component
var News = React.createClass({	
	render: function() {
	    return (
		    <div>
		       	<ul className="nav nav-pills nav-justified">
			        <li><a id="mediaOne" href="">News</a></li>
			        <li><a id="mediaOne" href="">News</a></li>
			        <li><a id="mediaOne" href="">Twitter</a></li>
			        <li><a id="mediaOne" href="">News</a></li>
			        <li><a id="mediaOne" href="">Twitter</a></li>
			        <li><a id="mediaOne" href="">Twitter</a></li>
			        <li><a id="mediaOne" href="">News</a></li>
			        <li><a id="mediaOne" href="">Twitter</a></li>
			        <li><a id="mediaOne" href="">Twitter</a></li>
		      	</ul>
	      	</div>
	    )
	}
});

// Export the component back for use in other files
module.exports = News;