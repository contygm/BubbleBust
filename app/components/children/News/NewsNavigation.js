// Include React
var React = require("react");
import { Link } from "react-router";
var NewsResult = require("./NewsResult");
var helpers = require('../../utils/helpers');
// Creating the Navigation component
var NewsNavigation = React.createClass({	

	getInitialState: function(){
		return {
			ListOfArticles: []

		}
	},
 //  componentDidUpdate: function(prevProps, prevState) {
	// this.props.getResults(this.state.ListOfArticles);
	// console.log(this.props);
 //  },

	handleClick: function(event){
		// event.preventDefault();
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
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
						<br/>
							<div className="panel panel-primary">
								<div className="panel-heading">
									<h3 className="panel-title"><strong><i className="fa fa-table"></i>   Top Articles</strong></h3>
									<button type="button" className="btn btn-info" id="scrapeHuff" onClick={this.handleClick}><i className="fa fa-search"></i> The Huffington Post</button>
									<button type="button" className="btn btn-info" id="runGuardian" onClick={this.handleClick}><i className="fa fa-search"></i> The Guardian</button>
									<button type="button" className="btn btn-info" id="scrapeNPR" onClick={this.handleClick}><i className="fa fa-search"></i> NPR</button>
									<button type="button" className="btn btn-info" id="runBBC" onClick={this.handleClick}><i className="fa fa-search"></i> BBC</button>
									<button type="button" className="btn btn-info" id="runCNN" onClick={this.handleClick}><i className="fa fa-search"></i> CNN</button>
									<button type="button" className="btn btn-info" id="runEconomist" onClick={this.handleClick}><i className="fa fa-search"></i> The Economist</button>
									<button type="button" className="btn btn-info" id="scrapeHill" onClick={this.handleClick}><i className="fa fa-search"></i> The HILL</button>
									<button type="button" className="btn btn-info" id="scrapeFOX" onClick={this.handleClick}><i className="fa fa-search"></i> FOX News</button>
									<button type="button" className="btn btn-info" id="scrapeBlaze" onClick={this.handleClick}><i className="fa fa-search"></i> The Blaze</button>
									{/*<button type="button" className="btn btn-default" id="clearAll" onClick={this.handleClick}><i className="fa fa-trash"></i> Clear Results</button>*/}
								</div>
							</div>
						</div>
					</div>

				</div>
			     
			    <NewsResult  ListOfArticles={this.state.ListOfArticles}/>
			</div>
	    )
	}
});

// Export the component back for use in other files
module.exports = NewsNavigation;


