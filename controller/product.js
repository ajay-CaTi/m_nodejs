const fs = require("fs");
// const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;

exports.createProduct = (req, res) => {
  products.push(req.body);
  const id = +req.body.id;
  const product = products.find((p) => p.id === id);
  res.status(200).json({ id: product });
};

exports.getAppProducts = (req, res) => {
  console.log(req.params);
  res.json(products);
};

exports.getProdById = (req, res) => {
  const id = +req.params.id;
  const product = products.find((p) => p.id === id);
  res.json(product);
};

exports.updateProd = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  products.splice(productIndex, 1, { ...req.body, id: id });
  res.status(201).json();
};

exports.updateByPatch = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  const product = products[productIndex];
  products.splice(productIndex, 1, { ...product, ...req.body });
  res.status(201).json();
};

exports.deleteProd = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  const product = products[productIndex];
  products.splice(productIndex, 1);
  res.status(201).json(product);
};
