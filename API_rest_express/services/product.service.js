const express = require("express");
const {faker} = require('@faker-js/faker');


class ProductService {

  constructor(){
    this.products = [];
    this.generate(); // Each time an product service's instance is created, generate() is runned
  };

  generate(limit){  // Method of the class
    for (let index = 0; index < (limit||10); index++) {
      this.products.push(
        {
          id : index,
          name : faker.commerce.productName(),
          quantity : parseInt(faker.random.numeric(2)),
          price : faker.commerce.price(),
          image : faker.image.imageUrl()
        }
      )
    };
  };

  create(data){ // Method of the class
    const newProduct = {
      id : ++this.products.slice(-1)[0].id , // slice return a list
      ...data
    };
    this.products.push(newProduct);
    return newProduct;
  };

  find(){ // Method of the class
    return this.products;
  }

  findOne(id){ // Method of the class
    return this.products.find(product => product.id === parseInt(id));
  }

  update(){ // Method of the class

  }

  delete(){ // Method of the class

  }
};

// Exports
module.exports = ProductService;
