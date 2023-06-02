const { CartModels } = require('../models/index')

module.exports = async (req, res) => {
    try {
        const deletedcart = await CartModels.findByIdAndDelete(req.params.id,);
        res.status(200).send({
            payload: deletedcart,
            message: "Cart has been  deleted...",
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