const Router = require("express").Router();
const multer = require("multer");
const path = require("path");
const { verifyTokenAndAdmin ,verifyTokenAndAuthorization,verifyToken } = require("../Auth/AuthMiddlewares");

const {
    addAppliances,
    getAllAppliances,
    getAppliances,
    productByFilters,
    updateAppliances,
    deleteAppliances,
    adminGetAllAppliances
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
Router.post("/addproduct", verifyTokenAndAdmin, upload.single("img"), addAppliances);
Router.get("/adminList", verifyTokenAndAdmin,adminGetAllAppliances);
// get product
Router.get("/:id", verifyToken,getAppliances);
//update product
Router.put("/update", verifyTokenAndAdmin,updateAppliances);
// get all product for user
Router.get("/", verifyToken,getAllAppliances);
// get all product for admin
// get  product by dates filter
Router.get("/filter", verifyToken,productByFilters);
Router.delete("/:id", verifyTokenAndAdmin,deleteAppliances);



module.exports = Router;