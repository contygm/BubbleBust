// Include React
var React = require("react");
var NewsNavigation = require("./News/NewsNavigation");

var NewsResult = require("./News/NewsResult");


// Creating the Login component
var News = React.createClass({	
	getInitialState: function() {
    	return { ListOfArticles: [{}] };
  	},

  componentDidUpdate: function(prevProps, prevState) {
    // Since our component recieves no props, we'll log out just the current and previous state each
    // time the component updates.

  },

  getResults: function(data) {
    console.log("data: " + data);
    
    var newsResults;// = this.state.ListOfArticles.concat(data);
    newsResults.push.apply(newsResults, data);
    console.log("newsResults: " + newsResults);

    this.setState({
        ListOfArticles:  newsResults 
      });

     console.log("Results: " + newsResults);
  },

	render: function() {
	    return (
            <div className="container">
                <NewsNavigation  getResults={this.getResults}/>

            </div>
	    )
	}
});

// Export the component back for use in other files
module.exports = News;