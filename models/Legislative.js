var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var LegistlativeSchema = new Schema({
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
  },
  state:{
    type: String
  }
});

var Legistlative = mongoose.model("Legistlative", SenateSchema);
module.exports = Legistlative;
