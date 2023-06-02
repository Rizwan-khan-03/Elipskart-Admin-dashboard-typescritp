const Router = require("express").Router();
const { verifyTokenAndAdmin, verifyTokenAndAuthorization, verifyToken } = require("../Auth/AuthMiddlewares");
const {
    // addProduct,
    // getAllProducts,
    // getProduct,
    // productByFilters,
    // updateProduct,
    createOrder,
    CancelOrder,
    updateOrder,
    allOrderDetails,
    getSingleOrder,
} = require("./controller/index");



// create Order
Router.post("/createOrder", verifyToken, createOrder);
// cancell order
Router.delete("/:id", verifyToken, CancelOrder);
//update product
Router.put("/update", verifyToken, updateOrder);
 // get order
 Router.get("/details/:id", verifyToken,getSingleOrder);
// get all order only for admin
Router.get("/", verifyTokenAndAdmin, allOrderDetails);



module.exports = Router;