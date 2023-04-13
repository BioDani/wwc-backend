const express = require('express');
const router = express.Router();
const ProductService = require('../services/product.services');

const service = new ProductService; // create an instance of ProductService

// 1. Get all products
router.get('/', async (req, res, next) => {
  // request & response
  try {
    const products = await service.findAll();
    res.json(products);
  } catch (error) {
    next(error);
  }
});

// 2. Get a product
router.get('/:id',  async (req, res, next) => {
    // request & response
    try {
      const { id } = req.params;
      const product = await service.findOne(id);
      res.json(product);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/', async (req, res, next) => {
  try {
    const body = req.body;
    const newProduct = await service.create(body);
    res.json(newProduct);
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async(req, res, next)=>{
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await service.update(id, body);
    res.json(product);
  } catch (error) {
    next(error);
  }
});

router.patch('/:id', async(req, res, next)=>{
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await service.update(id, body);
    res.json(product);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async(req, res, next)=>{
  try {
    const { id } = req.params;
    const deletedProduct = await service.delete(id);
    res.json(deletedProduct);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
