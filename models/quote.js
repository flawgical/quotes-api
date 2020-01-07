var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var quoteSchema = new Schema({
  quote: {type: String, required: true},
 
},{
  timestamps: true
});

module.exports = mongoose.model('Quote', quoteSchema);