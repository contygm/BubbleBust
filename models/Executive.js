var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ExecutiveSchema = new Schema({
  title:{
    type: String
  },
  branch: {
    type: String
  },
  person_office:{
    type: String
  },
  handle:{
    type: String
  },
  position:{
    type: String
  },
  party:{
    type: String
  }
});

var Executive = mongoose.model("Executive", SenateSchema);
module.exports = Executive;