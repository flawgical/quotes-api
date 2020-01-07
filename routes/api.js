var express = require('express');
var router = express.Router();
var quotesCtrl = require('../controllers/api/quotes');

/* GET /api/puppies */
router.get('/quotes', quotesCtrl.index);
router.get('/quotes/:id', quotesCtrl.show);
router.post('/quotes', quotesCtrl.create);
router.delete('/quotes/:id', quotesCtrl.delete);
router.put('/quotes/:id', quotesCtrl.update);

module.exports = router;