const {OrderModels} = require("../models/index");

module.exports = async (req, res) => {
    try {
        const cancelOrder = await OrderModels.findByIdAndDelete(req.params.id,);
        res.status(200).send({
            payload: cancelOrder,
            message: "product has been cancelled...",
            responseCode: 200
        })
    } catch (err) {
        res.status(400).send({
            payload: {},
            message: "some thing is wrong",
            responseCode: 400, err: err
        });
    }
};