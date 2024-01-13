const { UserModal } = require("../models/index");
// const { signupEmail } = require("../../sendEmail/controllers/signupEmail.js");
const { OAuth2Client } = require('google-auth-library');
const getToken = require('../../Auth/getToken')
module.exports = async (req, res) => {
	const client = new OAuth2Client("909068552875-q51o79f2369llc0eolvoo8mqfpslbtcn.apps.googleusercontent.com");
	let newUser;
	try {
		const { googleToken } = req.body;

		const ticket = await client.verifyIdToken({
			idToken: googleToken,
			audience: "909068552875-q51o79f2369llc0eolvoo8mqfpslbtcn.apps.googleusercontent.com"
		});
		const { name, email, email_verified } = ticket.getPayload();

		let user = {
			email,
			firstName : name,
			lastName : "",
			phoneNo: ""
		}

		const sameUserExist = await UserModal.findOne({email});
		if (sameUserExist) {
			newUser = sameUserExist;
		}else{
			if(email_verified) {
				user.isVerified = true;
				user.google = {
					access_token : googleToken
				}
			}else{
				return res.status(400).send({
					success: false,
					message: "Google email verified false. Please first verify your google email then login your account",
					error: "Google email verified false. Please first verify your google email then login your account"
				});
			}

			newUser = await new UserModal(user).save();

			// await signupEmail(newUser);
		}

		newUser.password = undefined;
        console.log('newUser',newUser);
        const accesToken = await getToken({ id: user._id, isAdmin: false })
		// const authToken = newUser.getAuthToken();
        if (accesToken) {
            res.status(200).send({
                success: true,
                payload: newUser,
                message: "Login Success",
                accesToken: accesToken
            })
        } else {
            logger.info(`accesToken  ${accesToken}...`);
            res.status(400).send({
                payload: {},
                message: "token not exist",
            })
        }
	} catch (error) {
		res.status(400).send({
			success: false,
			error: error.toString()
		});
	}
}