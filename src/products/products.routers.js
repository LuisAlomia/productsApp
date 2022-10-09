const router = require("express").Router();
const productsServices = require("./products.services");

router
  .get("/", productsServices.getAllProductsServices)
  .post("/", productsServices.createProductsServices)
  .get("/:id", productsServices.getProductsByIdServices)
  .patch("/:id", productsServices.patchProductsServices)
  .put("/:id", productsServices.putProductsServices)
  .delete("/:id", productsServices.deleteProductsServices);

module.exports = router;
