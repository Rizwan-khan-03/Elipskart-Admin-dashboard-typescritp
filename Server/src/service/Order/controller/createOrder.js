const {OrderModels} = require("../models/index");
const logger = require("../../../utils/logger");
module.exports = async (req, res) => {
	try {
		const newOrder = await new OrderModels(req.body).save();
		// logger.info(`newOrder on ${newOrder}...`);
		res.status(200).send({
			success: true,
			newOrder: newOrder,
			message: "order placed successfully",
		});
	} catch (error) {
		res.status(400).send({
			success: false,
			error: error.toString(),
		});
	}
};

