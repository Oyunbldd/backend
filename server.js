const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./db/db");
//Router oruulj ireh
const catergoiesRoutes = require("./routes/catergories");

//App iin tohirhoog process.env ruu achaallah
dotenv.config({ path: "./config/config.env" });
const app = express();
connectDB();

//middleware holboh
app.use(express.json());
app.use(morgan("dev"));
app.use("/api/v1/categories", catergoiesRoutes);

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
