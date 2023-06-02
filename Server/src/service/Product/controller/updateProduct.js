const { ProductModal } = require("../models");
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
    const updatedUser = await ProductModal.findByIdAndUpdate(
      req.body.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    if (updatedUser) res.status(200).send({
      payload: updatedUser,
      message: "product update success",
      responseCode: 200
    });
    else res.status(400).send({
      payload: {},
      message: "product not found",
      responseCode: 400
    });

  } catch (err) {
    res.status(400).send({
      payload: {},
      message: "some thing is wrong",
      responseCode: 401
    });
  }
}
