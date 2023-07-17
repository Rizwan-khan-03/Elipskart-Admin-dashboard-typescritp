// const Razorpay = require('razorpay');
// const razorpay = new Razorpay({
//     key_id: 'YOUR_KEY_ID',
//     key_secret: 'YOUR_SECRET_KEY',
//   });
//   module.exports = async (req, res) => {
//     const { product, token } = req.body;
//     const options = {
//         amount: 1000, // The payment amount in paise or the smallest currency unit
//         currency: 'INR',
//       };
//     try {
//         const order = await razorpay.orders.create(options);
//       res.status(200).send({
//         success: true,
//         charge: order,
//       });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
//   };
const Razorpay = require("razorpay");
const crypto = require("crypto");

module.exports = async (req, res) => {
	try {
		const instance = new Razorpay({
			key_id: process.env.KEY_ID,
			key_secret: process.env.KEY_SECRET,
		});

		const options = {
			amount: req.body.amount * 100,
			currency: "INR",
			receipt: crypto.randomBytes(10).toString("hex"),
		};

		 instance.orders.create(options, (error, order) => {
			if (error) {
				console.log(error);
				return res.status(500).json({ message: "Something Went Wrong!" });
			}
			res.status(200).json({ data: order });
		});
	} catch (error) {
		console.log(error)
		res.status(500).json({ message: "Internal Server Error!",error:error });
		console.log(error);
	}
};
