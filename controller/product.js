const fs = require("fs");
const model = require("../model/product");
const Product = model.Product;

exports.createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save(); // to save data in db
    console.log(product);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.getAllProducts = async (req, res) => {
  const products = await Product.find();
  console.log(req.params);
  res.json(products);
};

exports.getProdById = async (req, res) => {
  try {
    const id = req.params.id;
    console.log({ id });
    const product = await Product.findById(id);
    res.json(product);
  } catch (error) {
    console.log(error);
    res.send({ result: "No result found" });
  }
};

exports.updateProd = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Product.findOneAndReplace({ _id: id }, req.body, {
      new: true,
    });
    res.status(201).json(doc);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.updateByPatch = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Product.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(201).json(doc);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.deleteProd = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Product.findOneAndDelete({ _id: id });
    res.status(201).json(doc);
  } catch (error) {
    res.status(400).json(error);
  }
};
