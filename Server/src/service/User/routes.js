const Router = require("express").Router();
const { verifyTokenAndAdmin ,verifyTokenAndAuthorization } = require("../Auth/AuthMiddlewares");
const {
    getUsers, 
    createAUser,
    loginUser,
    updateUser,
    getAllUsers,
    userByFilters,
} = require("./controller/index");



// create user
Router.post("/register", createAUser);
// login user
Router.post("/login", loginUser);
// get user
Router.get("/find/:id", verifyTokenAndAdmin,getUsers);
//update user
Router.put("/update", verifyTokenAndAuthorization,updateUser);
// get all user
Router.get("/", verifyTokenAndAdmin,getAllUsers);
// get  user by dates filter
Router.get("/filter", verifyTokenAndAdmin,userByFilters);



module.exports = Router;