// Include React
var React = require("react");

// Creating the Login component
var Result = React.createClass({	
	render: function() {
	    return (
	    	<div id="page-container">
                <div id="search-results">
                    <h2>Search Results</h2>
                    <div className="article" type="box">
                        <img className="article-photo" src="http://talentandgenius.com/wp-content/uploads/Bubble-Up.jpg"/>
                        <a className="article-title" href="">This Can Be Where a Tweet Goes</a>
                        <p className="article-blurb" >***This Could Be <em>THE</em> Next Tweet that Will Change the world <em>OR NOT</em>***LLorem ipsum dolor sit amet, no vis dicta possit facilis, pro in laudem tamquam. Ad stet salutatus conceptam quo. Quot purto scribentur at eum. Et mel magna scripta oblique.</p>
                    </div> 
                </div>
            </div>
	    )
	}
});

// Export the component back for use in other files
module.exports = Result;