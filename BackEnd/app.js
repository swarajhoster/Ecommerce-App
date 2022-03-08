const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const errorMiddelware = require("./middlewares/error");

//Using third-party applications
app.use(express.json());
app.use(cookieParser());

//Route Imports
const product = require("./Routes/productRoute");
const user = require("./Routes/userRoute");
const order = require("./Routes/orderRoutes");

//Using Routes
app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);

//Middelware for Error
app.use(errorMiddelware);

module.exports = app;
