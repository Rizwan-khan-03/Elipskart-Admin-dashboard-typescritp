const { CartModels } = require('../models/index')

module.exports = async (req, res) => {
  const query = req.query.id;
  try {
    const carts = query
      ? await CartModels.find().sort({ _id: -1 }).limit(5)
      : await CartModels.find();
    res.status(200).send({
      payload: carts,
      message: "all Cart list  ...",
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
