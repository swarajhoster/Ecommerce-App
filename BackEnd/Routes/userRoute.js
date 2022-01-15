const express = require("express");
const {
  registerUser,
  loginUser,
  logout,
  forgotPassword,
  resetPassword,
  getUserDetails,
  updatePassword,
  updateProfile,
  getAllUser,
  getSingleUser,
  deleteUser,
  updateUserRole,
} = require("../Controllers/userController");
const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");
const router = express.Router();

//Regiteration Route
router.route("/register").post(registerUser);

//Login User Route
router.route("/login").post(loginUser);

//Forgot Password
router.route("/password/forgot").post(forgotPassword);

//Reset Password
router.route("/password/reset/:token").put(resetPassword);

//LogOut User Route
router.route("/logout").get(logout);

//Get user Detail
router.route("/me").get(isAuthenticatedUser, getUserDetails);

//Update User Password
router.route("/password/update").put(isAuthenticatedUser, updatePassword);

//Update User Profile
router.route("/me/update").put(isAuthenticatedUser, updateProfile);

//Update User Profile
router
  .route("/admin/users")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAllUser);

//Update User Profile
router
  .route("/admin/user/:id")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getSingleUser);

//Update User Role --Admin
router
  .route("/admin/user/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateUserRole);

//Delete User --Admin
router
  .route("/admin/user/:id")
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteUser);

module.exports = router;
