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
  .post("/", createProduct)
  .get("/", getAppProducts)
  .get("/:id", getProdById)
  .put("/:id", updateProd)
  .patch("/:id", updateByPatch)
  .delete("/:id", deleteProd)
  .get("/demo", (req, res) => {
    res.json(products);
  });

exports.router = router;
