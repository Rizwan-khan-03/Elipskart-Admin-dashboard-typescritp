const { ProductModal } = require("../models");
const CryptoJS = require("crypto-js");

module.exports = async (req, res) => {
  const { id, formData } = req.body;
  if (formData.productCode) {
    // Check if the product code already exists in the database
    const productWithSameCode = await ProductModal.findOne({
      productCode: formData.productCode
    });

    // If the product exists and has a different ID, return an error response
    if (productWithSameCode && productWithSameCode._id.toString() !== id) {
      return res.status(400).send({
        payload: {},
        message: "Product code must be unique",
        responseCode: 400
      });
    }
  }

  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_KEY
    ).toString();
  }
  
  try {
    const updatedUser = await ProductModal.findByIdAndUpdate(
      id,
      {
        $set: formData,
      },
      { new: true }
    );
    
    if (updatedUser) {
      return res.status(200).send({
        payload: updatedUser,
        message: "Product update success",
        responseCode: 200
      });
    } else {
      return res.status(400).send({
        payload: {},
        message: "Product not found",
        responseCode: 400
      });
    }
  } catch (err) {
    return res.status(400).send({
      payload: {},
      message: "Something went wrong",
      responseCode: 401
    });
  }
};
