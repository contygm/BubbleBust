// Include React
var React = require("react");

// Creating the Navigation component
var News = React.createClass({	
	render: function() {
	    return (
		    <div> 	        
		      	<div id="tab-bar-news-sources">            
			        <div id="tab-bar-news-sources-menu">             
			              <a id="mediaOne" href="">News1</a>                    
			              <a id="mediaTwo" href="">Media2</a>                
			              <a id="mediaThree" href="">Media3</a>                    
			              <a id="mediaFour" href="">Media4</a>                    
			              <a id="mediaFive" href="">Media5</a>                   
			              <a id="mediaSix" href="">Media6</a>                    
			              <a id="mediaSeven" href="">Media7</a>                                         
			              <a id="mediaTen" href="" className="no-border">Media10</a>      
			        </div>            
		      	</div>   
		      	<div className="seperator"></div>      
	       	</div>
	    )
	}
});

// Export the component back for use in other files
module.exports = News;