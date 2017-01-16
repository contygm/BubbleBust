// Include React
var React = require("react");
var NewsNavigation = require("./News/NewsNavigation");

var NewsResult = require("./News/NewsResult");


// Creating the Login component
var News = React.createClass({	
	render: function() {
	    return (
            <div>
                <NewsNavigation/>

                <NewsResult />

            </div>
	    )
	}
});

// Export the component back for use in other files
module.exports = News;