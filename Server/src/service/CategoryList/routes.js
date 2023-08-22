const Router = require("express").Router();
const multer = require("multer");
const path = require("path");
const { verifyTokenAndAdmin, verifyToken } = require("../Auth/AuthMiddlewares");
const {
  addCategory,
  getCategoryList,
  deleteCategory,
  getCategoryByUserId,
  updateCategoryList,
} = require("./controller/index");

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
Router.post("/addproduct", verifyTokenAndAdmin, upload.single("img"), addCategory);
// get product
Router.get("/:id", verifyToken, getCategoryByUserId);
//update product
Router.put("/update", verifyTokenAndAdmin, updateCategoryList);
// get all getCategoryList for user
Router.get("/", verifyToken, getCategoryList);
// get  delete Category by dates filter
Router.delete("/:id", verifyTokenAndAdmin, deleteCategory);



module.exports = Router;