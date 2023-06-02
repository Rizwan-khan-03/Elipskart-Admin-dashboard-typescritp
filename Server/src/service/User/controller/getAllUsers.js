const { UserModal } = require("../models/");

module.exports = async (req, res) => {
  const query = req.query.new;
  try {
    const users = query
      ? await UserModal.find().sort({ _id: -1 }).limit(5)
      : await UserModal.find();
    res.status(200).send({
      payload: users,
      message: "all User list  ...",
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
