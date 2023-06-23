const { ProductModal } = require("../models");

module.exports = async (req, res) => {
  const startDate = req.body.start_date;
  const endDate = req.body.end_date;
  console.log("startDate",startDate);
  console.log("endDate",endDate);
  
  // Check if both start and end dates are provided
  if (!startDate || !endDate) {
    return res.status(400).send({
      payload: {},
      message: "Please provide both start and end dates",
      responseCode: 400,
    });
  }

  // Parse the start and end dates
  const [startDay, startMonth, startYear] = startDate.split('/');
  const [endDay, endMonth, endYear] = endDate.split('/');
  const start = new Date(startYear, startMonth - 1, startDay);
  const end = new Date(endYear, endMonth - 1, endDay);

  // Check if the end date is earlier than the start date
  if (end < start) {
    return res.status(400).send({
      payload: {},
      message: "End date cannot be earlier than start date",
      responseCode: 400,
    });
  }

  const query = {
    $and: [
      { createdAt: { $gte: start } },
      { createdAt: { $lte: end } },
      {
        $or: [
          { product_code: req.query.product_code },
          { title: { $regex: req.query.title, $options: "i" } }
        ]
      }
    ]
  };
  const dateRange = {
    $gte: start,
    $lte: end,
  };

  const filteredData = req.body.product_code || req.body.title;

  let filter = {};
  filter.createdAt = dateRange;
  if (filteredData) {
    filter.$or = [
      { product_code: req.body.product_code },
      { title: { $regex: req.body.title, $options: "i" } },
    ];
  }

  try {
    const data = await ProductModal.aggregate([
      { $match: filter },
      {
        $project: {
          _id: 1,
          product_code: 1,
          title: 1,
          description: 1,
          price: 1,
          createdAt: 1,
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
          products: { $push: "$$ROOT" },
        },
      },
    ]);

    if (data.length === 0) {
      return res.status(200).send({
        payload: [],
        message: "No data found for the given date range",
        responseCode: 200,
      });
    }

    res.status(200).send({
      payload: data,
      message: "filtered data state...",
      responseCode: 200,
    });
  } catch (err) {
    console.error(err);
    res.status(400).send({
      payload: {},
      message: "something went wrong",
      responseCode: 400,
    });
  }
};
