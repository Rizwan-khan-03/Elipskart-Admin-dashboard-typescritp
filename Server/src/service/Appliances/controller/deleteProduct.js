const { ProductModal } = require("../models");

module.exports = async (req, res) => {
    try {
        const deletedProduct = await ProductModal.findByIdAndDelete(req.params.id,);
        res.status(200).send({
            payload: deletedProduct,
            message: "product has been deleted...",
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