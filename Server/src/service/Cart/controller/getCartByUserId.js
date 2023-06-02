const { CartModels } = require('../models/index')
const logger = require("../../../utils/logger");

module.exports = async (req, res) => {
  const userId = req.body.userId;
  try {
    let cart = userId
      ? await CartModels.find({ userId: userId }).sort({ createdAt: -1 }).limit(5)
      : await CartModels.find().sort({ createdAt: -1 });

    // logger.info(`cart: ${JSON.stringify(cart)}`);

    res.status(200).send({
      payload: cart,
      message: "Current cart items",
      responseCode: 200
    });
  } catch (err) {
    res.status(400).send({
      payload: {},
      message: "Something went wrong",
      responseCode: 400
    });
  }
}
