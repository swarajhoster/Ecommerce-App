const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/dataBase");

//Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err}`);
  console.log("Shtting down the server due to Uncaught Exception");
  process.exit(1);
});

//Config
dotenv.config({ path: "BackEnd/config/config.env" });

//Connecting to mongoDb
connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(`Server Running on : http://localhost:${process.env.PORT}`);
});

//Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error : ${err}`);
  console.log(`Shtting down the server due to Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});
