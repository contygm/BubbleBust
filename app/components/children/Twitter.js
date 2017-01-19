// Include React
var React = require("react");

// Creating the Navigation component
var Twitter = React.createClass({	
	render: function() {
	    return (
		    <div>
		      	<div id="tab-bar-news-sources">            
			        <div id="tab-bar-news-sources-menu">             
			              <a id="mediaOne" href="">Executive Branch</a>                    
			              <a id="mediaTwo" href="">Judicial Branch</a>                
			              <a id="mediaThree" href="">Senate</a>                    
			              <a id="mediaFour" href="">Government Departments</a>                    
			              <a id="mediaFive" href="">Political Parties</a>                   
			              <a id="mediaSix" href="">Research Organizations</a>                    
			              <a id="mediaSeven" href="">Non-Profits</a>                                         
			              <a id="mediaTen" href="" className="no-border">Think Tanks</a>      
			        </div>            
		      	</div>   
		      	<div className="seperator"></div>      
	       	</div>
	    )
	}
});

// Export the component back for use in other files
module.exports = Twitter;