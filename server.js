const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./db/db");
//Router oruulj ireh
const catergoiesRoutes = require("./routes/catergories");
const errorHandler = require("./middlewate/error");

dotenv.config({ path: "./config/config.env" });

const app = express();
connectDB();

//middleware holboh
app.use(express.json());
app.use(morgan("dev"));
app.use("/api/v1/categories", catergoiesRoutes);
app.use(errorHandler);

const server = app.listen(
  process.env.PORT,
  console.log(`Express Server ${process.env.PORT} deer ajillaa`)
);

process.on("unhandledRejection", (err, promise) => {
  console.log(`Aldaa garlaa: ${err.message}`);
  server.close(() => {
    process.exit(1);
  });
});
