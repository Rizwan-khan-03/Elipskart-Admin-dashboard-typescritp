const { ProductModal } = require("../models");
const logger = require("../../../utils/logger");

module.exports = async (req, res) => {
  try {
    const { isAdmin, userId ,categories} = req.query;
    logger.info(`userId ${userId} isAdmin${isAdmin} categories${categories}`);

    const products = await ProductModal.find({ userId: userId.trim(), isAdmin: isAdmin,categories:categories });
    res.status(200).send({
      payload: products,
      success: true,
      message: "Product list found",
      responseCode: 200,
    });
  } catch (err) {
    logger.info(`err ${err}`);

    res.status(400).send({
      payload: {},
      message: "Something went wrong in get admin list",
      responseCode: 400,
      error: err.toString(),
      success: false,
    });
  }
};
