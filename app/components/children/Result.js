// Include React
var React = require("react");

// Creating the Login component
var Result = React.createClass({	
	render: function() {
	    return (
	    	<div id="page-container">
                <div className="row">    
                    {this.props.tweets.map(function(tweets, i) {
                        return (
                            <div id={i} key={i} className="col-sm-3"> 
                                <h2 >{tweets.userName}</h2>
                                <p >{tweets.screenName}</p>
                                <a className="" href="">{tweets.createdAt}</a>
                                <p className="" >{tweets.text}</p>
                            </div>   
                        )
                    })}; 
                </div>
            </div>
	    )
	}
});

// Export the component back for use in other files
module.exports = Result;

