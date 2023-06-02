
const { ProductModal } = require("../models/index");
const logger = require("../../../utils/logger");
const fs = require("fs");
module.exports = async (req, res) => {
	try {
		const { isAdmin, title, brand, available, desc, categories, price, productCode, discountPercentage } = req.body;
		const features = {
			ram: req.body.ram,
			rom: req.body.rom,
			screenSize: req.body.screenSize,
			secondaryCamera: req.body.secondaryCamera,
			primaryCamera: req.body.primaryCamera,
			batteryCapacity: req.body.batteryCapacity,
			warranty: req.body.warranty,
		}
		const ratings = {
			overallRating: req.body.overallRating,
			totalRatings: req.body.totalRatings,
			totalReviews: req.body.totalReviews,
		}
		let product = { isAdmin, title, brand, desc, available, categories, price, productCode, features, ratings, discountPercentage };

		const sameProductExist = await ProductModal.exists({ productCode });
		if (sameProductExist) {
			throw new Error(`Product with title(${title}) and productCode(${productCode}) already exists.`);
		}
		const imageUrl = req.file ? req.file.path : null;
		product.img = imageUrl;
		logger.info(`product.img- ${product.img}`)
		let newProduct = await new ProductModal(product).save();
		res.status(200).send({
			success: true,
			newProduct: { ...newProduct._doc, img: imageUrl },
			message: "Product added successfully",
		});

	} catch (error) {
		res.status(400).send({
			success: false,
			error: error.toString(),
		});
	}
};
