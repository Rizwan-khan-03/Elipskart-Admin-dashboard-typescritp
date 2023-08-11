const { ProductModal } = require("../models");
const logger = require("../../../utils/logger");
module.exports = async (req, res) => {
  try {
    const products = await ProductModal.find();
    const categorylist = [];
    products.forEach((list) => (
      list.categories.filter((item) => {
        if(item !== null){
          categorylist.push(item)
        }
      })
    ));
    
    res.status(200).send({
      payload: categorylist,
      success: true,
      message: "all categories list  ...",
      responseCode: 200,
    })
  } catch (err) {
    res.status(400).send({
      payload: {},
      message: "some thing is wrong",
      responseCode: 400,
      error: err.toString(),
      success: false,
    });
  }
}
