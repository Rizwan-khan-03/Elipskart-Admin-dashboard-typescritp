const Router = require("express").Router();
const multer = require("multer");
const path = require("path");
const { verifyTokenAndAdmin, verifyTokenAndAuthorization, verifyToken } = require("../Auth/AuthMiddlewares");
const {
  addProduct,
  getAllProducts,
  getProduct,
  productByFilters,
  updateProduct,
  deleteProduct,
  adminGetAllProduct,
  search
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

// Get all products for users
Router.get("/", verifyToken, getAllProducts);

// Add a product
Router.post("/addproduct", verifyTokenAndAdmin, upload.single("img"), addProduct);

// Get the list of products for admins
Router.get("/adminList", verifyTokenAndAdmin, adminGetAllProduct);

// Update a product
Router.put("/update", verifyTokenAndAdmin, updateProduct);

// Get products by date filters
Router.get("/filter", verifyToken, productByFilters);

// Search for a product
Router.get("/search", verifyToken, search);

// Get a specific product by productId
Router.get("/:productId", verifyToken, getProduct);

// Delete a product by productId
Router.delete("/:id", verifyTokenAndAdmin, deleteProduct);

module.exports = Router;
