// const { ProductModal } = require("../models");
// const logger = require("../../../utils/logger");
// module.exports = async (req, res) => {
//   const query = req.query.id;
//   try {
//     const products = query
//       ? await ProductModal.find().sort({ _id: -1 }).limit(5)
//       : await ProductModal.find();
//     res.status(200).send({
//       payload: products,
//       success: true,
//       message: "all Product list  ...",
//       responseCode: 200,
//     })
//   } catch (err) {
//     res.status(400).send({
//       payload: {},
//       message: "some thing is wrong",
//       responseCode: 400,
//       error:err.toString(),
//       success: false,
//     });
//   }
// }
const { ProductModal } = require("../models");
const logger = require("../../../utils/logger");
// function _arrayBufferToBase64(buffer) {
//   var binary = '';
//   var bytes = new Uint8Array(buffer);
//   var len = bytes.byteLength;
//   for (var i = 0; i < len; i++) {
//     binary += String.fromCharCode(bytes[i]);
//   }
//   return window.btoa(binary);
// }
function arrayBufferToBase64(buffer) {
  const binary = Buffer.from(buffer).toString('base64');
  return binary;
}
module.exports = async (req, res) => {
  const query = req.query.id;

  try {
    let products;

    if (query) {
      products = await ProductModal.find().sort({ _id: -1 }).limit(5);
    } else {
      products = await ProductModal.find();
    }
    res.status(200).json({
      payload: products,
      success: true,
      message: "Product list retrieved successfully.",
      responseCode: 200,
    });
  } catch (error) {
    logger.error(error); // Assuming you have a logger implementation

    res.status(500).json({
      payload: {},
      message: "Something went wrong.",
      responseCode: 500,
      error: error.toString(),
      success: false,
    });
  }
};



