var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var nonGovSchema = new Schema({
	branch: {
		type: String
	},
	person_office:{
		type: String
	},
	handle:{
		type: String
	},
	title:{
		type: String
	}
});

var nonGov = mongoose.model("nonGov", nonGovSchema);
module.exports = nonGov;