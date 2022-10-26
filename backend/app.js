const express = require("express");
const app = express();
const dotenv = require("dotenv");

const errorMiddleware = require("./middleware/error");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
app.use(express.json());
dotenv.config({ path: "backend/config/config.env" });
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Node JS API Project EComm",
      version: "1.0.0",
      description: "this is test",
    },
    servers: [{ url: `http://localhost:${process.env.PORT}` }],
  },
  apis: ["backend/routes/*.js"],
};
const SwaggerSpec = swaggerJSDoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(SwaggerSpec));
//route imports
const products = require("./routes/productRoutes");

app.use("/api/v1", products);

//middleware for errors
app.use(errorMiddleware);
module.exports = app;
