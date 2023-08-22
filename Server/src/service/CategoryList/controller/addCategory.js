const { ProductModal } = require("../models/index");
const logger = require("../../../utils/logger");
const fs = require("fs");
const removeNullandDuplicate = (arr) => {
	const categorylist = [];
	arr?.forEach((item) => {
		if (item !== null) {
			const index = categorylist.indexOf(item);
			if (index === -1) {
				categorylist.push(item);
			}
		}
	});
	return categorylist
}
module.exports = async (req, res) => {
	try {
		const { userId, newCategory } = req.body;
		const existingProduct = await ProductModal.findOne({ userId });
		if (!newCategory) throw new Error(`Provided Category is(${newCategory}) `);
		if (existingProduct) {
			existingProduct.categories.push(newCategory);
			const updatedProduct = await existingProduct.save();
			res.status(200).send({
				success: true,
				updatedProduct: removeNullandDuplicate(updatedProduct.categories),
				message: "Category added successfully !",
			});
		} else {
			const newProduct = await new ProductModal({
				isAdmin: req.body.isAdmin,
				userId,
				categories: [newCategory]
			}).save();
			res.status(200).send({
				success: true,
				updatedProduct: removeNullandDuplicate(newProduct.categories),
				message: "Category added successfully",
			});
		}
	} catch (error) {
		res.status(400).send({
			success: false,
			error: error.toString(),
		});
	}

};
