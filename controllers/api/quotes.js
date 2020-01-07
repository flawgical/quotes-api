const Quote = require('../../models/quote');

module.exports = {
  index,
  show,
  create,
  delete: deleteOne,
  update
};

function update(req, res) {
  Quote.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(function(quote) {
    res.status(200).json(quote);
  });
}

function deleteOne(req, res) {
  Quote.findByIdAndDelete(req.params.id).then(function(quote) {
    res.status(200).json(quote);
  });
}

function show(req, res) {
  Quote.findById(req.params.id).then(function(quote) {
    res.status(200).json(quote);
  });
}

function create(req, res) {
  Quote.create(req.body).then(function(quote) {
    res.status(201).json(quote);
  });
}

function index(req, res) {
    Quote.find({}).then(function(quotes) {
      res.status(200).json(quotes);
    });
  }