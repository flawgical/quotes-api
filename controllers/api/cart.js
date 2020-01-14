const Cart = require('../../models/cart');

module.exports = {
  index,
  show,
  create,
  delete: deleteOne,
  update
};

function update(req, res) {
  Cart.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(function(cart) {
    res.status(200).json(cart);
  });
}

function deleteOne(req, res) {
  Cart.findByIdAndDelete(req.params.id).then(function(cart) {
    res.status(200).json(cart);
  });
}

function show(req, res) {
  Cart.findById(req.params.id).then(function(cart) {
    res.status(200).json(cart);
  });
}

function create(req, res) {
  Cart.create(req.body).then(function(cart) {
    res.status(201).json(cart);
  });
}

function index(req, res) {
    Cart.find({}).then(function(cart) {
      res.status(200).json(cart);
    });
  }