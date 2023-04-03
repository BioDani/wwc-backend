const express = require("express");
const {faker} = require('@faker-js/faker');

const router = express.Router()


// 1. Get all products
// /api/v1/products?limit=10&offset=10
router.get('/', (req, res) =>{ // request & response
  let products = [];
  const {size} = req.query;
  const limit = size || 5;  // 10 by default

  for (let index = 0; index < limit; index++) {
    products.push(
      {
        id : index +1,
        name : faker.commerce.productName(),
        quantity : faker.random.numeric(2),
        price : faker.commerce.price(),
        image : faker.image.imageUrl()
      }
    )
  };

  res.status(201).json(products);

})

// 2. Create a new product
router.post('/', (req,res) => {
  const body = req.body;
  res.status(201).json({
    message : 'Created',
    data : body
  })
});

// 3. Update partially a product
router.patch('/:id', (req,res) => {
  const { id } = req.params;
  const body = req.body;
  res.status(200).json({
    message : `The product id:${id} was partially updated`,
    data : body,
    id,
  })
});

// 4. Update completely a product
router.put('/:id', (req,res) => {
  const { id } = req.params;
  const body = req.body;
  res.status(200).json({
    message : `The product id:${id} was updated`,
    data : body,
    id,
  });
});

// 5. Delete a product
router.delete('/:id', (req,res) => {
  const { id } = req.params;

  res.status(200).json({
    message : `The product id:${id} was deleted`,
    id,
  });
});

// 6. Get a specific product
router.get('/:id', (req, res) =>{ // request & response
  const { id } = req.params;

  if (id === '999') {
    res.status(404).json(
      {
        message : `Not found`
      });
  } else {
    res.status(200).json(
      {
        id
      })
  }
});

module.exports = router;
