const { ProductModal } = require("../models");

module.exports = async (req, res) => {
	const userId = req.params.id
	try {
		let product = await ProductModal.find({ userId });
		const categorylist = product[0].categories.filter((item) => item !== null)
		product[0].categories = categorylist
		console.log("product", product)
		if (product.length > 0) {
			res.status(200).send({
				payload: product,
				message: "all category list ...",
				responseCode: 200,
				success: true
			})
		} else {

		}
		res.status(400).send({
			message: "category not  exist  ...",
			responseCode: 400,
			success: false
		})
	} catch (err) {
		res.status(400).send({
			payload: {},
			message: "some thing is wrong get product by id",
			responseCode: 400,
			success: false,
			error: err.toString(),
		});
	}
}
