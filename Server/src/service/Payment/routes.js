const Router = require("express").Router();
const {  verifyToken } = require("../Auth/AuthMiddlewares");
const {
    payment
} = require("./controller/index");
Router.post("/payment", verifyToken, payment);
module.exports = Router;