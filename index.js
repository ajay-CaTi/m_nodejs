const fs = require("fs");
// const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;

const express = require("express");
const app = express();
const PORT = 4000;
// const morgan = require("morgan");

app.use(express.json());
// third party middleware
// app.use(morgan("default"));
app.use(express.static("public"));

// CREATE APi
app.post("/products", (req, res) => {
  products.push(req.body);
  const id = +req.body.id;
  const product = products.find((p) => p.id === id);
  res.status(200).json({ id: product });
});

// :Api root, base url, google.com/api/v2/
// READ Get /products
app.get("/products", (req, res) => {
  console.log(req.params);
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  const id = +req.params.id;
  const product = products.find((p) => p.id === id);
  res.json(product);
});

// UPDATE API
app.put("/products/:id", (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  products.splice(productIndex, 1, { ...req.body, id: id });
  res.status(201).json();
});

// UPDATE API patch
app.patch("/products/:id", (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  const product = products[productIndex];
  products.splice(productIndex, 1, { ...product, ...req.body });
  res.status(201).json();
});

// DELETE APi
app.delete("/products/:id", (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  const product = products[productIndex];
  products.splice(productIndex, 1);
  res.status(201).json(product);
});

app.get("/demo", (req, res) => {
  // res.send("Hello express");
  // res.file("pathHere");
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Server started`);
});
