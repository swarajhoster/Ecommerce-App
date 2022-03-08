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
const path = require("path");
dotenv.config({ path: path.join(__dirname, "config/config.env") });

//Connecting to mongoDb
connectDatabase();

//Basic Get Url
app.get("/", (req, res) => {
  res.json(
    "THIS IS A PRIVIATE API, USED FOR COMMERCIAL PURPOSE, ANYONE WHO WILL USE THIS API THEY WILL TRESPASSED"
  );
});

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

//Unhandled Promise Rejection Monitor
process.on("uncaughtExceptionMonitor", (err) => {
  console.log(`Error : ${err}`);
  console.log(`Shtting down the server due to Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});
