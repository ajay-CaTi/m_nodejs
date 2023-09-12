const express = require("express");
const router = express.Router();
const {
  createProduct,
  getAppProducts,
  getProdById,
  updateProd,
  updateByPatch,
  deleteProd,
} = require("../controller/product");

router
  .post("/products", createProduct)
  .get("/products", getAppProducts)
  .get("/products/:id", getProdById)
  .put("/products/:id", updateProd)
  .patch("/products/:id", updateByPatch)
  .delete("/products/:id", deleteProd)
  .get("/demo", (req, res) => {
    res.json(products);
  });

exports.router = router;
