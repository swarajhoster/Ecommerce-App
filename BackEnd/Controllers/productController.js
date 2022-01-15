//Defining All the Crud Functions by taking product schema and collections access from productModal
//   functions here, then passing it on to productRoutes

const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const ErrorHander = require("../utils/errorhander");
const Product = require("../Modals/productModel");
const ApiFeatures = require("../utils/apiFeatures");

//Create Product -- Admin
exports.createProduct = catchAsyncErrors(async (req, res) => {
  req.body.user = req.user.id;
  console.log(req.user);

  const product = await Product.create(req.body);

  res.status(200).json({
    succues: true,
    product,
  });
});

//Get All Product
exports.getAllProducts = catchAsyncErrors(async (req, res) => {
  const resultPerPage = 5;
  const productCount = await Product.countDocuments();

  const apiFeature = new ApiFeatures(Product.find(), req.query)
    .search()
    .fliter()
    .pagination(resultPerPage);
  const products = await apiFeature.query;

  res.status(200).json({
    succues: true,
    products,
    productCount,
  });
});

//Get Product Details (only one product)
exports.getProductDetails = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHander("Product Not found", 404));
  }
  res.status(200).json({
    succues: true,
    product,
  });
});

//Update Product -- Admin
exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHander("Product Not found", 404));
  }
  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    succues: true,
    product,
    Message: "Product Updated",
  });
});

//Delete Product -- Admin
exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHander("Product Not found", 404));
  }

  await product.remove();

  res.status(200).json({
    succues: true,
    Message: "Product Deleted",
  });
});


// Product Reviews Starts


exports.deleteUser = catchAsyncErrors(async (req, res, next) => {
  //Destructuring
  const { rating, comment, productId } = req.body;

  const review = {
    user: req.user._id,
    name: req.user.name,
    rating: Number(rating),
    comment,
    productId,
  };

  const product = await Product.findById(productId);

  if (isReviewed) {
    
  } else {
    product.reviews.push(review)
  }
});

