// Include React
var React = require("react");
var SaveItem = require('./NewsItems/SaveItem');
// Helper Function
var helpers = require('../../utils/helpers');


// Creating the Login component
var NewsResult = React.createClass({	

    getInitialState: function(){
        return {
            results: [],
            modalIsOpen: false,
            type: "",
            message: ""
        }
    },

    // This function will respond to the user click
    handleClick: function(event){

            // Search for articles
            helpers.getSaved()
                .then(function(data){
                    if (data === false) {
                        // Show message if no results found
                        this.message('Error','No results found. Please refine inputs.');
                    } else {
                        // Save data to state
                        this.setState({
                            results: data
                        });
                    }
                }.bind(this))       
    },

    saved: function(status) {
        if (status === 'saved') {
        // Show successfully saved message
            this.message('Successfully Saved','Click "Saved Articles" in navigation to review.');
        } else {
        // Show successfully saved message
            this.message('Error','Article was already saved.');
        }
        return
    },

	render: function() {
	    return (
            <div className="container">
    	    	<div id="page-container">
                    <div id="search-results">
                        <h2>Search Results</h2>
                        <div className="article" type="box">
                            <img className="article-photo" src="http://talentandgenius.com/wp-content/uploads/Bubble-Up.jpg"/>
                            <a className="article-title" href="">This Can Be Where a Tweet Goes</a>
                            <p className="article-blurb" >***This Could Be <em>THE</em> Next Tweet that Will Change the world <em>OR NOT</em>***LLorem ipsum dolor sit amet, no vis dicta possit facilis, pro in laudem tamquam. Ad stet salutatus conceptam quo. Quot purto scribentur at eum. Et mel magna scripta oblique.</p>
                        </div> 
                    </div>
            <div>           

              <Query handleChange={this.handleChange} handleClick={this.handleClick} />
              {this.state.results.length !== 0 ? 
                <Result fa="fa fa-newspaper-o" text="Result">
                    {this.state.results.map(function(result) {
                        return (
                            <SaveItem 
                                key={result._id}
                                title={result.title}
                                link={result.link}
                                pubDate={result.pubDate}
                                saved={saved}
                            />
                        )
                    })}
                  </Result> : null}

            </div>
                    <div className="panel-body" >
                        <ul className="list-group" id="wellSection"></ul>
                    </div>
                </div>
            </div>            
	    )
	}
});

// Export the component back for use in other files
module.exports = NewsResult;
