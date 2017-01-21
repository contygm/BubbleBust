// Include React
var React = require("react");

// Creating the Login component
var Result = React.createClass({	
	render: function() {
	    return (
            <div id="page-container" className="container">

                <div id="search-results" className="row">
                    {this.props.tweets.map(function(tweets, i) {
                        return (
                            <div id={i} key={i} className="article col-xs-12 col-sm-6  col-md-4 " type="box" id="article-box">
                                <p className="article-title" href="">{tweets.userName}</p>
                                <div className="article-blurb" >
                                    <p className="tweet-info">@{tweets.screenName} <br/> {tweets.createdAt}</p>
                                    <p className="article-text">{tweets.text}</p>
                                </div>
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

