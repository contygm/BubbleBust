// Include React 
var React = require('react');

// Helper Function
var helpers = require('../../../config/helpers');

var ListItem = React.createClass({

  // This function will respond to the user click
  handleClick: function(event){
    // Send article data to server to save to db
    helpers.saveArticle({
      title: this.props.title,
      pubDate: this.props.pubDate,
      link: this.props.link
    }).then(function(res){
      // console.log(res.status);
      // Show message
      this.props.saved(res.status);
    }.bind(this));
  },

	// Here we render the function
	render: function(){

		return(
			<li className="list-group-item">
        <h3>
        	<em>{this.props.title}</em>
        	<div className="btn-group pull-right">
        		<button className="btn btn-primary" onClick={this.handleClick}>Save</button>
        		<a className="btn btn-default" href={this.props.link} target="_blank">
        			View Article
        		</a>
        	</div>
        </h3>
        <p>Date Published: {this.props.pubDate}</p>
      </li>
		)
	}
});

// Export the component back for use in other files
module.exports = ListItem;