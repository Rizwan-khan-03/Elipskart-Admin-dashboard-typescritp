
const { ProductModal } = require("../models/index");
const remove = (arr, elem) => {
    const categorylist = arr.filter((item) => item !== elem);
    return categorylist
}
module.exports = async (req, res) => {
    try {
        const { category } = req.body;
        const userId = req.params.id
        if (!category) {
            throw new Error("Category to delete is not provided");
        }
        const existingProduct = await ProductModal.findOne({ userId });
        if (!existingProduct) {
            throw new Error("Category not found");
        }
        existingProduct.categories = existingProduct.categories.filter(
            (cate) => cate !== category
        );
        const updatedList = await existingProduct.save();
        res.status(200).send({
            success: true,
            updatedProduct: updatedList,
            message: "Category added successfully",
        });

    } catch (error) {
        res.status(400).send({
            success: false,
            error: error.toString(),
        });
    }

};
