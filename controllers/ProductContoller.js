const Product = require("../models/ProductModel");
const mongoose = require("mongoose");

const getProducts = async (req, res) => {
  try {
    const allProducts = await Product.find();

    res.status(200).json(allProducts);
  } catch (error) {
    res.status(404).json({ message: "Products not found" });
  }
};
const getProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const singleProduct = await Product.findById(id);

    res.status(200).json(singleProduct);
  } catch (error) {
    res.status(404).json({ message: "Product not found" });
  }
};

const createProduct = async (req, res) => {
  const {
    name,
    category,
    brand,
    price,
    discount,
    image,
    description,
    countInStock,
    sku,
    model
  } = req.body;

  const newProduct = new Product({
    name,
    category,
    brand,
    price,
    discount,
    image,
    description,
    countInStock,
    sku,
    model
  });

  try {
    await newProduct.save();

    res.status(201).json(newProduct);
  } catch (error) {
    res.status(409).json({ message: "Creating product failed" });
  }
};
const updateProduct = async (req, res) => {
  const { id } = req.params;
  const {
    name,
    category,
    brand,
    price,
    discount,
    image,
    description,
    countInStock,
    sku,
    model
  } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No product with id: ${id}`);

  const updatedProduct = {
    name,
    category,
    brand,
    price,
    discount,
    image,
    description,
    countInStock,
    sku,
    model,
    _id: id,
  };

  await Product.findByIdAndUpdate(id, updatedProduct, { new: true });

  res.json(updatedProduct);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No product with id: ${id}`);

  await Product.findByIdAndRemove(id);

  res.json({ message: "Product deleted successfully." });
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
