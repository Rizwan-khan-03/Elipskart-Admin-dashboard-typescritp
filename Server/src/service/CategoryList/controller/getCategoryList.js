const { ProductModal } = require("../models");
module.exports = async (req, res) => {
  try {
    const products = await ProductModal.find();
    const categorylist = [];
    products.forEach((list) => {
      list.categories.forEach((item) => {
        if (item !== null) {
          const index = categorylist.indexOf(item);
          if (index === -1) {
            categorylist.push(item);
          }
        }
      });
    });
    res.status(200).send({
      payload: categorylist,
      success: true,
      message: "all categories list  ...",
      responseCode: 200,
    })
  } catch (err) {
    res.status(400).send({
      payload: {},
      message: "some thing is wrong in getting categories list",
      responseCode: 400,
      error: err.toString(),
      success: false,
    });
  }
}
