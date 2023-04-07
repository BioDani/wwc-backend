// Imports
const express = require('express');
const ProductService = require('./../services/product.service');
const router = express.Router()

//Create an instance of service: ProductsService
const service = new ProductService;

// 1. Show all products
router.get('/', async(req, res) =>{ // request & response
  const {size} = req.query;
  const products = await service.find();
  res.json(products);
});

// 2. Show a specific product
router.get('/:id', async (req, res) =>{ // request & response
  const { id } = req.params;
  const product = await service.findOne(id);
  res.status(201).json(product)
});

// 3. Create a new product
router.post('/', async(req,res) => {
  const body = req.body;
  const newProduct = await service.create(body);
  res.status(201).json(newProduct);
});

// 4. Update partially a product
router.patch('/:id', async (req,res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await service.update(id,body);
    res.status(201).json(product)
  } catch (error) {
    res.status(404).json({
      message: error.message
    })
  }

});

// 5. Update all the details of a product
router.put('/:id', async(req,res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await service.update(id,body);
    res.status(201).json(product)
  } catch (error) {
    res.status(404).json({
      message: error.message
    })
  }
});

// 6. Delete  a product
router.delete('/:id', async(req,res) => {
  try {
    const { id } = req.params;
    const product = await service.delete(id);
    res.status(201).json(product)
  } catch (error) {
    res.status(404).json({
      message: error.message
    })
  }
});


// Exports
module.exports = router;
