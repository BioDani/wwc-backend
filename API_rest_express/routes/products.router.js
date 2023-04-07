// Imports
const express = require('express');
const ProductService = require('./../services/product.service');
const router = express.Router()

//Create an instance of service: ProductsService
const service = new ProductService;

// 1. Show all products
router.get('/', (req, res) =>{ // request & response
  const {size} = req.query;
  const products = service.find();
  res.json(products);
});

// 2. Show a specific product
router.get('/:id', (req, res) =>{ // request & response
  const { id } = req.params;
  const product = service.findOne(id);
  res.json(product)
});

// 3. Create a new product
router.post('/', (req,res) => {
  const body = req.body;
  const newProduct = service.create(body);
  res.json(newProduct);
});

// 4. Update partially a product
router.patch('/:id', (req,res) => {
  const { id } = req.params;
  const body = req.body;
  const product = service.update(id,body);
  res.json(product)
});

// 5. Update partially a product
router.put('/:id', (req,res) => {
  const { id } = req.params;
  const body = req.body;
  const product = service.update(id,body);
  res.json(product)
});

// 6. Delete  a product
router.delete('/:id', (req,res) => {
  const { id } = req.params;
  const product = service.delete(id);
  res.status(201).json(product)
});


// Exports
module.exports = router;
