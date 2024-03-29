const Router = require("express").Router();
const multer = require("multer");
const path = require("path");
const { verifyTokenAndAdmin ,verifyTokenAndAuthorization,verifyToken } = require("../Auth/AuthMiddlewares");

const {
    addProduct,
    getAllProducts,
    getProduct,
    productByFilters,
    updateProduct,
    deleteProduct,
    adminGetAllProduct
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
Router.post("/addproduct", verifyTokenAndAdmin, upload.single("img"), addProduct);
Router.get("/adminList", verifyTokenAndAdmin,adminGetAllProduct);
// get product
Router.get("/:id", verifyToken,getProduct);
//update product
Router.put("/update", verifyTokenAndAdmin,updateProduct);
// get all product for user
Router.get("/", verifyToken,getAllProducts);
// get all product for admin
// get  product by dates filter
Router.get("/filter", verifyToken,productByFilters);
Router.delete("/:id", verifyTokenAndAdmin,deleteProduct);



module.exports = Router;