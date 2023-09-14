const express = require("express");
const router = express.Router();
const {
  createProduct,
  getAllProducts,
  getProdById,
  updateProd,
  updateByPatch,
  deleteProd,
} = require("../controller/product");

router
  .post("/", createProduct)
  .get("/", getAllProducts)
  .get("/:id", getProdById)
  .put("/:id", updateProd)
  .patch("/:id", updateByPatch)
  .delete("/:id", deleteProd)
  .get("/demo", (req, res) => {
    res.json(products);
  });

exports.router = router;
