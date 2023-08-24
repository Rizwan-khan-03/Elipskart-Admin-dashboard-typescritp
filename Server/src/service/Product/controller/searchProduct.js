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
  secondrycamera
}  = req?.query.data;
console.log('data', available,
brand,
categories,
overallRating,
discount,
ram,
internalstorage,
batterycapacity,
screensize,
primarycamera,
secondrycamera);
  if (available !== undefined) {
    query.available = available;
  }
  if (categories) {
    query.categories = categories;
  }
  if (overallRating) {
    query["ratings.overallRating"] = { $eq: overallRating };
  }

  if (discount) {
    query.discountPercentage = { $gte: discount };
  }

 

  try {
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
//   const { data } = req.query;
//   const query = {};

//   if (data) {
//     // Use a regular expression for partial string matching
//     const regex = new RegExp(data, "i"); // "i" for case-insensitive matching

//     // Define fields where you want to search for the partial string
//     const fieldsToSearch = [
//       "title",
//       "desc",
//       "brand",
//       "categories",
//       "features.ram",
//       "features.rom",
//       "features.screenSize",
//       "features.secondaryCamera",
//       "features.primaryCamera",
//       "features.batteryCapacity",
//     ];
    
//     // Construct the query to search in multiple fields
//     query["$or"] = fieldsToSearch.map((field) => ({
//       [field]: regex,
//     }));
//   }
// console.log('query',query)
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
