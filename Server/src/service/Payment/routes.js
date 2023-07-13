const Router = require("express").Router();
const {  verifyToken } = require("../Auth/AuthMiddlewares");
const {
    payment,
    razorpay,
    verifypayment
} = require("./controller/index");
Router.post("/", verifyToken, payment);
Router.post("/creatorder", verifyToken, razorpay);
Router.post("/verifyorder", verifyToken, verifypayment);
module.exports = Router;