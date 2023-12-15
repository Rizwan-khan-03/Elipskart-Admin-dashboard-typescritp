const { ProductModal } = require("../models");

module.exports = async (req, res) => {
  try {
	console.log("req.params.id",req.params.id);
    const product = await ProductModal.findById(req.params.id);
	console.log("product",product);
    if (!product) {
      return res.status(404).send({
        payload: {},
        message: "Product not found",
        responseCode: 404,
        success: false
      });
    }
    const { password, ...others } = product._doc;
    res.status(200).send({
      payload: others,
      message: "Product exists",
      responseCode: 200,
      success: true
    });
  } catch (err) {
    res.status(500).send({
      payload: {},
      message: "Something went wrong while getting the product by id",
      responseCode: 500,
      success: false,
      err: err.toString()
    });
  }
};
