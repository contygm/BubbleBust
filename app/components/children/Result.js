// Include React
var React = require("react");

// Creating the Login component
var Result = React.createClass({	
	render: function() {
	    return (
	    	<div id="page-container">
                <div id="search-results">    
                    {this.props.tweets.map(function(result, i) {
                        return (
                            <div id={i} key={i} className="article" type="box">
                                <img className="article-photo" src="http://talentandgenius.com/wp-content/uploads/Bubble-Up.jpg"/>
                                <a className="article-title" href="">{result.title}</a>
                                <p className="article-blurb" >{result.handle}</p>
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

