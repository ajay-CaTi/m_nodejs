const {
  createProduct,
  getAppProducts,
  getProdById,
  updateProd,
  updateByPatch,
  deleteProd,
} = require("./controller/product");

const express = require("express");
const app = express();
const PORT = 4000;

//middleware
app.use(express.json());
app.use(express.static("public"));

// CREATE APi
app.post("/products", createProduct);

// READ Get /products
app.get("/products", getAppProducts);

// READ get products
app.get("/products/:id", getProdById);

// UPDATE API
app.put("/products/:id", updateProd);

// UPDATE API patch
app.patch("/products/:id", updateByPatch);

// DELETE APi
app.delete("/products/:id", deleteProd);

app.get("/demo", (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Server started`);
});
