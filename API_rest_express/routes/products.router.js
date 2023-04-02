const express = require("express"); // importo express
const {faker} = require('@faker-js/faker');

const router = express.Router()

const products2 = [

];

// 1. Show all products
// /api/v1/products?limit=10&offset=10
router.get('/', (req, res) =>{ // request & response
  let products = [];
  const {size} = req.query;
  const limit = size || 5;  // 10 by default

  for (let index = 0; index < limit; index++) {
    products.push(
      {
        id : index,
        name : faker.commerce.productName(),
        quantity : faker.random.numeric(2),
        price : faker.commerce.price(),
        image : faker.image.imageUrl()
      }
    )
  };

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
