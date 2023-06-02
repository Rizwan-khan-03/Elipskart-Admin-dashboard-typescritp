const {UserModal} = require("../models/index");
const CryptoJS = require("crypto-js");
const logger = require("../../../utils/logger");
const getToken = require('../../Auth/getToken')
module.exports = async (req, res) => {
	try {
		const {email, password,isAdmin,firstName,lastName} =req.body;
		
		let user = {
			email,
			firstName,
			lastName,
			password,
			isAdmin
		};
		console.log(req.body)
		// user.password =CryptoJS.AES.encrypt(req.body.password, process.env.PASS_KEY).toString();
		const sameUserExist = await UserModal.exists({email});
		if (sameUserExist){
		  throw Error(`User with email (${email}) already exist.`)	
		}

		const newUser =  await new UserModal(user).save();

		newUser.password = undefined;
		const accesToken = await getToken({ id: newUser._id, isAdmin: newUser.isAdmin });
		logger.info(`newUser on ${newUser}...`);
		res.status(200).send({
			success: true,
			user: newUser,
			message: "Registered successfully",
			accesToken:accesToken
		});
	} catch (error) {
		// console.log('error',error);
		res.status(400).send({
			success: false,
			error: error.toString(),
		});
	}
};
