const {OrderModels} = require("../models/index");

module.exports = async (req, res) => {
  const query = req.query.id;
  try {
    const Orders = query
      ? await OrderModels.find().sort({ _id: -1 }).limit(5)
      : await OrderModels.find();
      if(Orders){
        res.status(200).send({
          payload: Orders,
          message: "all Orders list  ...",
          responseCode: 200
        })
      }else{
        res.status(400).send({
          payload: Orders,
          message: "no Orders list  ...",
          responseCode: 400
        })
      }
   
  } catch (err) {
    res.status(401).send({
      payload: {},
      message: "some thing is wrong",
      responseCode: 401
    });
  }
}
