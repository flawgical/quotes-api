const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quoteSchema = new Schema({
    quantity: {type: String},
    author: {type: String},
    image: {type: String},
    quote: {type: String, required: true},
    price: {type: Number}
 
},{
  timestamps: true
});

module.exports = mongoose.model('Quote', quoteSchema);