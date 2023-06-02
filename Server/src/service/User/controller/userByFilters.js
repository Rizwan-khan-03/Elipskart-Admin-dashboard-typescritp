const { UserModal } = require("../models/");

module.exports = async (req, res) => {
  // date filter 
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
  const filterdDate = new Date(req.body.start_date || req.body.end_date);
  try {
    const data = await UserModal.aggregate([
      { $match: { createdAt: { $gte: filterdDate } } },
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).send({
      payload: data,
      message: "user state  ...",
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












