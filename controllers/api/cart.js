const Cart = require("../../models/cart");

module.exports = {
  index,
  show,
  create,
  delete: deleteOne,
  update
};

function update(req, res) {
  Cart.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(function(
    cart
  ) {
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

async function create(req, res) {
 try {
  const { _id, author, image, quote, price } = req.body;
  const itemInCart = await Cart.findOne({itemId: _id});
  console.log('itemincart', 1111, itemInCart)
  if (itemInCart) {
    itemInCart.quantity += 1;
    const saved = await itemInCart.save();
    console.log("existed was saved", 33333, saved)
    res.json(saved);
  } else {
    const cart = new Cart({
      itemId: _id,
      author,
      image,
      quote,
      price,
      quantity: 1
    });
    const saved = await cart.save();
    console.log("new was saved", 222222, saved)
    res.json(saved);
  }
 } catch (error) {
   console.error(error)
   res.json(error)
 }
}

function index(req, res) {
  Cart.find({}).then(function(cart) {
    res.status(200).json(cart);
  });
}
