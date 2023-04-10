// Imports
const express = require('express');
const ProductService = require('./../services/product.service');

//Joi
const validatorHandler = require('./../middlewares/validator.handler');
const {
  createProductSchema,
  updateProductSchema,
  getProductSchema,
} = require('./../schemas/product.schema');

const router = express.Router();

//Create an instance of service: ProductsService
const service = new ProductService();

// 1. Show all products
router.get('/', async (req, res, next) => {
  // request & response
  try {
    const { size } = req.query;
    const products = service.find();
    res.json(products);
  } catch (error) {
    next(error);
  }
});

// 2. Show a specific product
router.get(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    // request & response
    try {
      const { id } = req.params;
      const product = service.findOne(id);
      res.json(product);
    } catch (error) {
      next(error);
    }
  }
);

// 3. Create a new product
router.post(
  '/',
  //validatorHandler(createProductSchema , 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newProduct = service.create(body);
      res.json(newProduct);
    } catch (error) {
      next(error);
    }
  }
);

// 4. Update partially a product
router.patch('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = service.update(id, body);
    res.json(product);
  } catch (error) {
    next(error);
  }
});

// 5. Update all the details of a product
router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = service.update(id, body);
    res.json(product);
  } catch (error) {
    next(error);
  }
});

// 6. Delete  a product
router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = service.delete(id);
    res.status(201).json(product);
  } catch (error) {
    next(error);
  }
});

// Exports
module.exports = router;
