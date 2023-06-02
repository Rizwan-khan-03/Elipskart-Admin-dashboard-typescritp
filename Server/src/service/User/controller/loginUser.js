const { UserModal } = require("../models/index");
const CryptoJS = require("crypto-js");
const logger = require("../../../utils/logger");
const getToken = require('../../Auth/getToken')
module.exports = async (req, res) => {

    try {
        const user = await UserModal.findOne({ email: req.body.email });
        !user && res.status(400).send({ payload: {}, message: "User Not Found" });

        // const hashedPssword = CryptoJS.AES.decrypt(user.password, process.env.PASS_KEY);
        // const originalPassword = hashedPssword.toString(CryptoJS.enc.Utf8);

        user.password !== req.body.password && res.status(400).send({
            payload: {},
            message: "Wrong Cendential"
        });

        const { password, ...others } = user._doc;

        const accesToken = await getToken({ id: user._id, isAdmin: user.isAdmin })
        if (accesToken) {
            res.status(200).send({
                success: true,
                payload: { ...others },
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
            payload: {},
            message: "Wrong Cendential",
            err: error
        })
    }

}
