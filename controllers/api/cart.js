const Cart = require("../../models/cart");

module.exports = {
  index,
  show,
  create,
  delete: deleteOne,
  update
};

async function update(req, res) {
  await Cart.findByIdAndUpdate(req.params.id, req.body, { new: true });
}
//need to decrement the quantity
// need to check to see if its less than 0 after decrement,
// then delete from the cart
// else just save it
async function deleteOne(req, res) {
  try {
    const removedItem = await Cart.findOne(req.params._id);
    removedItem.quantity--;
    if (removedItem.quantity <= 0) {
      const success = removedItem.remove();
      res.json(success);
    } else {
      const success = await removedItem.save();
      res.send(success);
    }
  } catch (error) {
    console.error(error);
    res.json(error);
  }
}

async function show(req, res) {
  await Cart.findById(req.params.id);
}

async function create(req, res) {
  try {
    const { _id, author, image, quote, price } = req.body;
    const itemInCart = await Cart.findOne({ itemId: _id });
    console.log("itemincart", 1111, itemInCart);
    if (itemInCart) {
      itemInCart.quantity += 1;
      const saved = await itemInCart.save();
      console.log("existed was saved", 33333, saved);
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
      console.log("new was saved", 222222, saved);
      res.json(saved);
    }
  } catch (error) {
    console.error(error);
    res.json(error);
  }
}

async function index(req, res) {
  await Cart.find({});
}
