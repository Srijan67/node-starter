const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error");
app.use(express.json());

//route imports
const products = require("./routes/productRoutes");

app.use("/api/v1", products);

//middleware for errors
app.use(errorMiddleware);
module.exports = app;
