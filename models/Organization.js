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
//mongoimport -h ds155418.mlab.com:55418 -d heroku_nhk3bbmv --collection Parties -u contygm -p contygm --file Organization.csv --type csv --headerline
//mongoimport -h ds155418.mlab.com:55418 -d heroku_nhk3bbmv --collection Executive -u contygm -p contygm --file Executive.csv --type csv --headerline
//mongoimport -h ds155418.mlab.com:55418 -d heroku_nhk3bbmv --collection Legislative -u contygm -p contygm --file Legislative.csv --type csv --headerline
//mongoimport -d bubbleBust2 --collection Parties --file Party.csv --type csv --headerline