const fs = require("fs");
// const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;

const express = require("express");
const app = express();
const PORT = 4000;

//middleware
app.use(express.json());
app.use(express.static("public"));

const createProduct = (req, res) => {
  products.push(req.body);
  const id = +req.body.id;
  const product = products.find((p) => p.id === id);
  res.status(200).json({ id: product });
};
// CREATE APi
app.post("/products", createProduct);

const getAppProducts = (req, res) => {
  console.log(req.params);
  res.json(products);
};
// READ Get /products
app.get("/products", getAppProducts);

const getProdById = (req, res) => {
  const id = +req.params.id;
  const product = products.find((p) => p.id === id);
  res.json(product);
};
// READ get products
app.get("/products/:id", getProdById);

const updateProd = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  products.splice(productIndex, 1, { ...req.body, id: id });
  res.status(201).json();
};
// UPDATE API
app.put("/products/:id", updateProd);

const updateByPatch = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  const product = products[productIndex];
  products.splice(productIndex, 1, { ...product, ...req.body });
  res.status(201).json();
};
// UPDATE API patch
app.patch("/products/:id", updateByPatch);

// DELETE APi
app.delete("/products/:id", (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  const product = products[productIndex];
  products.splice(productIndex, 1);
  res.status(201).json(product);
});

app.get("/demo", (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Server started`);
});
