// Include React
var React = require("react");
var helpers = require('../../config/helpers');

var NewsResult = require("./NewsResult");
// Creating the Navigation component
var News = React.createClass({	
	
	getInitialState: function(){
		return {
			ListOfArticles: []

		}
	},

	handleClick: function(event){
		event.preventDefault();
		
		var route = event.currentTarget.id;
		//console.log(event.currentTarget);
		helpers.getArticlesList(route)
			.then(function(data){
				console.log("articles: ", data)
				this.setState({ListOfArticles: data})
			}.bind(this));

	},

	render: function() {
		
		return (
		    <div>
			    <nav className="navbar nav2" id="add-nav-bar-color">
			       	<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				       	<ul className="nav nav-pills nav-justified">
					        <li><a id="scrapeHuff" onClick={this.handleClick}>The Huffington Post</a></li>
					        <li><a id="runGuardian" onClick={this.handleClick}>The Guardian</a></li>
					        <li><a id="scrapeNPR" onClick={this.handleClick}>NPR</a></li>
					        <li><a id="runBBC" onClick={this.handleClick}>BBC</a></li>
					        <li><a id="runCNN" onClick={this.handleClick}>CNN</a></li>
					        <li><a id="runEconomist" onClick={this.handleClick}>The Economist</a></li>
					        <li><a id="scrapeHill" onClick={this.handleClick}>The Hill</a></li>
					        <li><a id="scrapeFOX" onClick={this.handleClick}>FOX News</a></li>
					        <li><a id="scrapeBlaze" onClick={this.handleClick}>The Blaze</a></li>
				      	</ul>
				    </div>
				</nav>

			    <NewsResult  ListOfArticles={this.state.ListOfArticles}/>
	      	</div>
		)}
});

// Export the component back for use in other files
module.exports = News;