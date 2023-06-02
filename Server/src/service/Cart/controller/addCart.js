const { CartModels } = require('../models/index');

module.exports = async (req, res) => {
	const newCart = new CartModels(req.body);
	try {
		const savedCart = await newCart.save();
		res.status(200).send({
			payload: savedCart,
			message: "Cart has been added...",
			responseCode: 200
		})
	} catch (err) {
		res.status(400).send({
			payload: {},
			message: "some thing is wrong",
			responseCode: 400,
			err: err
		});
	}
}
