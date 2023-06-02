const {OrderModels} = require("../models/index");

module.exports = async (req, res) => {
	try {
		const order = await OrderModels.findById(req.params.id);
		const { password, ...others } = order._doc;
		console.log(others);
		if(others){
			res.status(200).send({
				payload: others,
				message: "order exist  ...",
				responseCode: 200
			})
		}else{
			res.status(400).send({
				payload: {},
				message: "no order found ...",
				responseCode: 400
			})
		}
		
	} catch (err) {
		res.status(401).send({
			payload: {},
			message: "some thing is wrong",
			responseCode: 400
		});
	}
}
