// Doing try catch function method, and passing it to productController, for writing less code

module.exports = (theFunc) => (req, res, next) => {
  Promise.resolve(theFunc(req, res, next)).catch(next);
};
