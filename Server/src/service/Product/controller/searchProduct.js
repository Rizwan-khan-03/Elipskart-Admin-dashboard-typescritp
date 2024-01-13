const { ProductModal } = require("../models");
const logger = require("../../../utils/logger");

module.exports = async (req, res) => {
  const query = {};
  const {
    available,
    brand,
    categories,
    overallRating,
    discount,
    ram,
    internalstorage,
    batterycapacity,
    screensize,
    primarycamera,
    secondrycamera,
  } = req?.query;

  if (available !== undefined) {
    query.available = available;
  }

  if (categories) {
    query.categories = { $regex: new RegExp(categories, 'i') };
  }

  if (overallRating) {
    query["ratings.overallRating"] = { $eq: parseFloat(overallRating) };
  }

  if (discount) {
    query.discountPercentage = { $gte: parseFloat(discount) };
  }

  if (brand) {
    query.brand = brand
  }

  try {
    console.log('query',query)
    const products = await ProductModal.find(query);
    res.status(200).send({
      payload: products,
      success: true,
      message: "Searched Product list...",
      responseCode: 200,
    });
  } catch (err) {
    res.status(400).send({
      payload: {},
      message: "Something went wrong while searching",
      responseCode: 400,
      error: err.toString(),
      success: false,
    });
  }
};
// const { ProductModal } = require("../models");
// const logger = require("../../../utils/logger");

// module.exports = async (req, res) => {
//   const query = { brand: 'samsung' }; // Set the brand condition here

//   try {
//     const products = await ProductModal.find(query);
//     res.status(200).send({
//       payload: products,
//       success: true,
//       message: "Searched Product list...",
//       responseCode: 200,
//     });
//   } catch (err) {
//     res.status(400).send({
//       payload: {},
//       message: "Something went wrong while searching",
//       responseCode: 400,
//       error: err.toString(),
//       success: false,
//     });
//   }
// };
