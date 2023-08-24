const { ProductModal } = require("../models");
const logger = require("../../../utils/logger");
module.exports = async (req, res) => {
  const query = req.query.id;
  try {
    const products = query
      ? await ProductModal.find().sort({ _id: -1 }).limit(5)
      : await ProductModal.find();
    res.status(200).send({
      payload: products,
      success: true,
      message: "all Product list  ...",
      responseCode: 200,
    })
  } catch (err) {
    res.status(400).send({
      payload: {},
      message: "some thing is wrong",
      responseCode: 400,
      error:err.toString(),
      success: false,
    });
  }
}
