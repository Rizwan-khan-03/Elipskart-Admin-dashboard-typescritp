const Router = require("express").Router();
const multer = require("multer");
const path = require("path");
const { verifyTokenAndAdmin ,verifyTokenAndAuthorization,verifyToken } = require("../Auth/AuthMiddlewares");
// addGrocery: require("./addGrocery"),
// getAllGrocery:require("./getAllGrocery"),
// getGrocery:require("./getGrocery"),
// updateGrocery:require("./updateGrocery"),
// deleteGrocery:require("./deleteGrocery"),
// adminGetAllGrocery:require('./adminGetAllGrocery')
const {
  addGrocery,
    getAllGrocery,
    getGrocery,
    updateGrocery,
    deleteGrocery,
    adminGetAllGrocery
} = require("./controller/index");


// Multer configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, "./images"));
    },
    filename: function (req, file, cb) {
      const ext = file.originalname.split(".").pop();
      cb(null, `${Date.now()}.${ext}`);
    },
  });
  
  const upload = multer({ storage: storage });
// add product 
Router.post("/addproduct", verifyTokenAndAdmin, upload.single("img"), addGrocery);
Router.get("/adminList", verifyTokenAndAdmin,adminGetAllGrocery);
// get product
Router.get("/:id", verifyToken,getGrocery);
//update product
Router.put("/update", verifyTokenAndAdmin,updateGrocery);
// get all product for user
Router.get("/", verifyToken,getAllGrocery);
// get all product for admin
// get  product by dates filter
Router.delete("/:id", verifyTokenAndAdmin,deleteGrocery);



module.exports = Router;