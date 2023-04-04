// Importaciones
const express = require('express');
const ProductsService = require('./../services/product.service');
const router = express.Router()

//Creo una instancia del servicio: ProductsService
const service = new ProductsService;

// 1. Show all products
// /api/v1/products?limit=10&offset=10
router.get('/', (req, res) =>{ // request & response
  const {limit} = req.query;
  const products = service.find();
  res.json(products);
})

// 2. Create a new product
router.post('/', (req,res) => {
  const body = req.body;
  res.json({
    message : 'Created',
    data : body
  })
});

// 3. Update partially a product
router.patch('/:id', (req,res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message : `Updated partially the product id:${id}`,
    data : body,
    id,
  })
});

// 4. Update completely a product
router.put('/:id', (req,res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message : `Updated the product id:${id}`,
    data : body,
    id,
  });
});

module.exports = router;
