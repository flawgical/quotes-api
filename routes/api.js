const express = require('express');
const router = express.Router();
const quotesCtrl = require('../controllers/api/quotes');
const cartCtrl = require('../controllers/api/cart');

/* GET /api/quotes */
router.get('/quotes', quotesCtrl.index);
router.get('/quotes/:id', quotesCtrl.show);
router.post('/quotes', quotesCtrl.create);
router.delete('/quotes/:id', quotesCtrl.delete);
router.put('/quotes/:id', quotesCtrl.update);

/* GET /api/carts */
router.get('/cart', cartCtrl.index);
router.get('/cart/:id', cartCtrl.show);
router.post('/cart', cartCtrl.create);
router.delete('/cart/:id', cartCtrl.delete);
router.put('/cart/:id', cartCtrl.update);

module.exports = router;