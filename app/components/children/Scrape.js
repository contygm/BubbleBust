// Include React
var React = require("react");

// Creating the Navigation component
var Scrape = React.createClass({	
	render: function() {
	    return (
		    <div> 	        
		      	<div id="tab-bar-news-sources">            
			        <div id="tab-bar-news-sources-menu">             
			              <a id="mediaOne" href="">Media1</a>                    
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
		      	<div id="menu-bar-2-container">                 
		          <div id="menu-bar-2">                                 
		              	<a id="menu-bar-date">8 January 2017</a>                 
		              	<a id="" href="">Twitter API</a>
		              	<a id="" href="">Other API</a>
		              	<a id="" href="" className="no-border">API</a>
		                <input type="text" id="search" placeholder="Search"/>
		                <button id="login" href="">Login</button>
		           </div>               
		       	</div>         
		        <div className="seperator"></div>  
	       	</div>
	    )
	}
});

// Export the component back for use in other files
module.exports = Scrape;