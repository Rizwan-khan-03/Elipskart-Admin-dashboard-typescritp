const Router = require("express").Router();
const { verifyTokenAndAdmin, verifyTokenAndAuthorization } = require("../Auth/AuthMiddlewares");
const {
    addCart,
    getAllCart,
    getCartById,
    updateCart,
    deleteCartItem,
    getCartByUserId,
} = require("./controller/index");




// add cart 
Router.post("/addCart", verifyTokenAndAdmin, addCart);
// get cart by item id
Router.get("/find/:id", verifyTokenAndAdmin, getCartById);
// get cart by item id
Router.get("/userId", verifyTokenAndAdmin, getCartByUserId);
//update cart
Router.put("/updateCart", verifyTokenAndAdmin, updateCart);
// get all cart
Router.get("/", verifyTokenAndAdmin, getAllCart);
// delete cart
Router.delete("/:id", verifyTokenAndAdmin, deleteCartItem);



module.exports = Router;