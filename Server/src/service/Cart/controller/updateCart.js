const { CartModels } = require('../models/index')
const CryptoJS = require("crypto-js");

module.exports = async (req, res) => {
  try {
    const updatedCart = await CartModels.findByIdAndUpdate(
      req.body._id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).send({
      payload: updatedCart,
      message: "Cart has been updated...",
      responseCode: 200
    })
  } catch (err) {
    res.status(400).send({
      payload: {},
      message: "some thing is wrong",
      responseCode: 400,
      err: err
    });
  }
}
