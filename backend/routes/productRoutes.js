const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProduct,
} = require("../controller/productController");
const router = express.Router();

/**
 * @swagger
 * /api/v1/products:
 *  get:
 *    summary: To get all products
 *    description: this api is use to fetch data from mongodb
 *    responses:
 *      200:
 *        description: success
 */
router.route("/products").get(getAllProducts);
router.route("/product/new").post(createProduct);
router
  .route("/product/:id")
  .put(updateProduct)
  .delete(deleteProduct)
  .get(getProduct);
module.exports = router;
