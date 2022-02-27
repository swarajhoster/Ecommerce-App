//Defining All routes here, all then passing it to app.js

const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
  getProductReviews,
  deleteReview,
  createProductReview,
} = require("../Controllers/productController");
const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");

const router = express.Router();

//Get All products
router.route("/products").get(getAllProducts);

//Create Products
router
  .route("/admin/products/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), createProduct);

//Update Products
router
  .route("/admin/product/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct);

//Delete Products
router
  .route("/admin/product/:id")
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct);

//Get Product Details (only this product with respect to ID)
router.route("/product/:id").get(getProductDetails);

//Create Review
router.route("/review").put(isAuthenticatedUser, createProductReview);

//Get review Review Single(id)
router.route("/reviews").get(getProductReviews);

//Delete review
router.route("reviews").delete(isAuthenticatedUser, deleteReview);

module.exports = router;
