// Include React
var React = require("react");

// Creating the Login component
var Result = React.createClass({	
	render: function() {
	    return (
	    	<div id="page-container">
                <div id="search-results">    
                    {this.props.tweets.map(function(allTweets, i) {
                        return (
                            <div id={i} key={i} className="row">
                                {allTweets.map(function(singleTweets, k){
                                    return (

                                        <div id={k} key={k} className="col s3"> 
                                            
                                            <h2 >{singleTweets.userName}</h2>
                                            <p >{singleTweets.screenName}</p>
                                            <a className="" href="">{singleTweets.createdAt}</a>
                                            <p className="" >{singleTweets.text}</p>
                                        </div>
                                    )
                                })} 
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

