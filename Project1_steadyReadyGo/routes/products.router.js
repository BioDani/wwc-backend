const express = require('express');

const router = express.Router();

router.get('/',
async (req, res, next) => {
  // request & response
  try {
    const products =   {
      id : 1,
      title:"macbook pro ",
      description:"bla bla bla bla bla",
      price:2000,
      discountPercentage:0,
      rating:3.3,
      stock:1,
      brand:"apple",
      category : "laptop",
      images: ["https://loremflickr.com/640/480", "https://loremflickr.com/640/481"]
    };
    res.json(products);
  } catch (error) {
    next(error);
  }
});

router.post('/',
async(req,res, next) => {
  try {
    const body = req.body;
    res.json({
      message : "created",
      data : body
    })
  } catch (error) {
    next(error);
  }
});

module.exports = router;
