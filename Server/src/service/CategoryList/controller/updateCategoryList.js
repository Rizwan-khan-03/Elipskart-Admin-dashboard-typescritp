
const { ProductModal } = require("../models/index");
module.exports = async (req, res) => {
  try {
    const { userId, deleteCategory, updateCategory } = req.body;
    console.log('deleteCategory',deleteCategory ,'updateCategory',updateCategory);
    if (!deleteCategory) {
      throw new Error("Category to update is not provided");
    }
    const existingProduct = await ProductModal.findOne({ userId });
    if (!existingProduct) {
      throw new Error("Category not found");
    }
    const updatedCategories = existingProduct.categories.map((cate) => {
      if (cate === deleteCategory) {
        return updateCategory;
      }
      return cate;
    });

    existingProduct.categories = updatedCategories;

    const updatedList = await existingProduct.save();
    res.status(200).send({
      success: true,
      updatedProduct: updatedList,
      message: "Category update successfully",
    });

  } catch (error) {
    res.status(400).send({
      success: false,
      error: error.toString(),
    });
  }

};
