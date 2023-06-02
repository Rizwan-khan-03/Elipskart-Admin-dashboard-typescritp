const { UserModal } = require("../models/");

module.exports = async (req, res) => {
	try {
		const user = await UserModal.findById(req.params.id);
		const { password, ...others } = user._doc;
		console.log(others);
		res.status(200).send({
			payload: others,
			message: "User exist  ...",
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
