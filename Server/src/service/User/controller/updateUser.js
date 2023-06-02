const { UserModal } = require("../models/");
const CryptoJS = require("crypto-js");
module.exports = async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_KEY
    ).toString();
  }
  try {
    const updatedUser = await UserModal.findByIdAndUpdate(
      req.body.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    if (updatedUser) res.status(200).send({
      payload: updatedUser,
      message: "user update success",
      responseCode: 200
    });
    else res.status(400).send({
      payload: {},
      message: "user not found",
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
