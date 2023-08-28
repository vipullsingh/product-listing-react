const Product = require('../models/productModel');

const createProduct = async (req, res) => {
  try {
    const { title, description,price,imageUrl } = req.body;
    console.log(title)
    const product = new Product({
      title,
      description,
      price,
      imageUrl,
    });
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Error creating product' });
  }
};

const getProducts = async (req, res) => {
  try {

    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching products' });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { title, description, price, imageUrl } = req.body;
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    product.title = title;
    product.price = price;
    product.description = description;
    product.imageUrl = imageUrl;
    await product.save();
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Error updating product' });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting product' });
  }
};

const getProductById = async (req, res) => {
    try {
      const productId = req.params.id;
      const product = await Product.findById(productId);
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.json(product);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching product' });
    }
  };

module.exports = {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
