const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    quantity: {type: Number},
    author: {type: String},
    image: {type: String},
    quote: {type: String, required: true},
    price: {type: Number}
 
},{
  timestamps: true
});

module.exports = mongoose.model('Cart', cartSchema);