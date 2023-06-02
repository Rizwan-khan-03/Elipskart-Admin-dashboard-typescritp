const { ProductModal } = require("../models");

module.exports = async (req, res) => {
	try {
		const product = await ProductModal.findById(req.params.id);
		const { password, ...others } = product._doc;
		console.log(others);
		res.status(200).send({
			payload: others,
			message: "product exist  ...",
			responseCode: 200,
			success:true
		})
	} catch (err) {
		res.status(400).send({
			payload: {},
			message: "some thing is wrong",
			responseCode: 40,
			success:false
		});
	}
}
