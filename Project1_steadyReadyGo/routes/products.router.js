const express = require('express');
const router = express.Router();
const ProductService = require('./../services/product.services');

const validatorHandler = require('./../middlewares/validator.handler');
const {
  findOneSchema,
  updatePropertySchema,
  updateTotallySchema,
  createSchema,
  deleteSchema,
} = require('./../schemas/product.schema');

const service = new ProductService(); // create an instance of ProductService

// 1. Get all products
router.get('/', async (req, res, next) => {
  try {
    const products = await service.findAll();
    res.json(products);
  } catch (error) {
    next(error);
  }
});

// 2. Get a product
router.get(
  '/:id',
  validatorHandler(findOneSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await service.findOne(id);
      res.json(product);
    } catch (error) {
      next(error);
    }
  }
);

// 3. Create a product
router.post(
  '/',
  validatorHandler(createSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newProduct = await service.create(body);
      res.json(newProduct);
    } catch (error) {
      next(error);
    }
  }
);

// 4. Update totally a product
router.put(
  '/:id',
  validatorHandler(updateTotallySchema, 'params'),
  validatorHandler(updateTotallySchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const product = await service.update(id, body);
      res.json(product);
    } catch (error) {
      next(error);
    }
  }
);

// 5. Update a product's property
router.patch(
  '/:id',
  validatorHandler(updatePropertySchema, 'params'),
  validatorHandler(updatePropertySchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const product = await service.update(id, body);
      res.json(product);
    } catch (error) {
      next(error);
    }
  }
);

// 6. Delete a product
router.delete(
  '/:id',
  validatorHandler(deleteSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const deletedProduct = await service.delete(id);
      res.json(deletedProduct);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
