// Include React
var React = require("react");
//var NewsNavigation = require("./NewsNavigation")
var SaveItem = require('./NewsItems/SaveItem');
var Notification = require('./Notification');
// Helper Function
var helpers = require('../config/helpers');


// Creating the Login component
var NewsResult = React.createClass({	

    getInitialState: function(){
        return {
            ListOfArticles: [],
            modalIsOpen: false,
            message: ""
        }
    },

    // This function will respond to the user click
    handleClick: function(event){

            helpers.getSaved()
                .then(function(data){
                    if (data === false) {
                        // Show message if no results found
                        this.message('Error','No results found. Please refine inputs.');
                    } else {
                        // Save data to state
                        this.setState({
                            ListOfArticles: data
                        });
                    }
                }.bind(this))  

    },
    openModal: function() {
        this.setState({modalIsOpen: true});
    },

    closeModal: function() {
        this.setState({modalIsOpen: false});
    },

    message: function(type,text) {
    // Set text
        this.setState({
            type: type,
                message: text
            });
        // Show modal
            this.openModal();
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
        var saved = this.saved;
	    return (

                <div className="panel-body">
                    <ul className="list-group">
                        {this.props.ListOfArticles.map(function(result) {
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
                    </ul>
                     <Notification
                        modalIsOpen={this.state.modalIsOpen}
                        openModal={this.openModal}
                        closeModal={this.closeModal}
                        message={this.state.message} />
                </div>
	    )
	}
});

// Export the component back for use in other files
module.exports = NewsResult;