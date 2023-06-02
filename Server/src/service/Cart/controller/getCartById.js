const { CartModels } = require('../models/index')
const logger = require("../../../utils/logger");
module.exports = async (req, res) => {
	try {
		const cart = await CartModels.findById(req.params.id);
		// const { password, ...others } = user._doc;
		logger.info(`cart on ${cart}...`);
		res.status(200).send({
			payload: cart,
			message: "current cart item  ...",
			responseCode: 200
		})
	} catch (err) {
		res.status(400).send({
			payload: {},
			message: "some thing is wrong",
			responseCode: 400
		});
	}
}
