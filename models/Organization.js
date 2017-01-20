var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var OrganizationSchema = new Schema({
	title: {
		type: String
	},
	handle:{
		type: String
	},
	person_office:{
		type: String
	},
	branch:{
		type: String
	}
});

var Organization = mongoose.model("Organization", OrganizationSchema, "Organizations");
module.exports = Organization;

//mongoimport -h ds155418.mlab.com:55418 -d heroku_nhk3bbmv --collection Organizations -u contygm -p contygm --file Organization.csv --type csv --headerline
//mongoimport -d bubbleBust --collection Executive --file Executive.csv --type csv --headerline