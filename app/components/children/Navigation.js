// Include React
var React = require("react");

// Creating the Navigation component
var Navigation = React.createClass({	
	render: function() {
	    return (
		    
		    <div>
		    	<div id="topbar">
	        		<h1>BubbleBust</h1>  
	      		</div>         
		      	{/*// <div id="tab-bar-news-sources">            
			      //   <div id="tab-bar-news-sources-menu">             
			      //         <a id="mediaOne" href="">Media1</a>                    
			      //         <a id="mediaTwo" href="">Media2</a>                
			      //         <a id="mediaThree" href="">Media3</a>                    
			      //         <a id="mediaFour" href="">Media4</a>                    
			      //         <a id="mediaFive" href="">Media5</a>                   
			      //         <a id="mediaSix" href="">Media6</a>                    
			      //         <a id="mediaSeven" href="">Media7</a>                    
			      //         <a id="mediaEight" href="">Media8</a>                    
			      //         <a id="mediaNine" href="">Media9</a>                       
			      //         <a id="mediaTen" href="" className="no-border">Media10</a>      
			      //   </div>            
		      	// </div>   
		      	// <div className="seperator"></div>      
		      	// <div id="menu-bar-2-container">                 
		       //    <div id="menu-bar-2">                                 
		       //        	<a id="menu-bar-date">8 January 2017</a>                 
		       //        	<a id="" href="">Twitter API</a>
		       //        	<a id="" href="">Other API</a>
		       //        	<a id="" href="" className="no-border">API</a>
		       //          <input type="text" id="search" placeholder="Search"/>
		       //          <button id="login" href="">Login</button>
		       //     </div>               
		       // 	</div>         
		       //  <div className="seperator"></div>  
	       	// </div>*/}

	       	<nav className="navbar navbar-default">
			    <div className="navbar-header">
			      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
			        <span className="sr-only">Toggle navigation</span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			      </button>
			     
			    </div>

			    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			       <ul className="nav navbar-nav nav-tabs nav-justified">
				        <li><a id="mediaOne" href="">News</a></li>
				        <li><a id="mediaOne" href="">Twitter</a></li>
						<li>
							<form className="navbar-form" role="search">
							  <div className="form-group">
							    <input type="text" className="form-control" placeholder="Search"/>
							  </div>
							  <button type="submit" className="btn btn-default">Submit</button>
							</form>
						</li>
				        
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
			    </div>
			</nav>
		</div>
	    )
	}
});

// Export the component back for use in other files
module.exports = Navigation;


