const {OrderModels} = require("../models/index");
const CryptoJS = require("crypto-js");

module.exports = async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_KEY
    ).toString();
  }
  try {
    // find by product id
    const updateOrder = await OrderModels.findByIdAndUpdate(
      req.body.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    if (updateOrder) res.status(200).send({
      payload: updateOrder,
      message: "order update success",
      responseCode: 200
    });
    else res.status(400).send({
      payload: {},
      message: "order not found",
      responseCode: 400
    });

  } catch (err) {
    res.status(401).send({
      payload: {},
      message: "some thing is wrong",
      responseCode: 401
    });
  }
}
