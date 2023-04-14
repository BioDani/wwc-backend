const express = require('express');
const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

class ProductService {
  constructor() {
    this.products = [];
    this.generate(); // Each time an product service's instance is created, generate() is runned
  }

  generate() {
    // Method of the class
    for (let index = 0; index < 4; index++) {
      this.products.push({
        id: index,
        name: faker.commerce.productName(),
        quantity: parseInt(faker.random.numeric(2)),
        price: parseInt(faker.commerce.price()),
        isBlock: faker.datatype.boolean(),
        image: faker.image.imageUrl(),
      });
    }
  }

  create(data) {
    // Method of the class
    //const lastId = this.products.slice(-1)[0].id;
    const lastId = this.products[this.products.length - 1].id;
    const newProduct = {
      id: lastId + 1, // slice return a list
      ...data,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  find() {
    // Method of the class
    return this.products;
  }

  findOne(id) {
    // Method of the class
    const product = this.products.find((product) => product.id === parseInt(id));

    if (!product) {
      throw boom.notFound(`Product not found.`);
    }
    if (product.isBlock == true) {
      throw boom.conflict(`Product is blocked.`);
    }
    return product;
  }

  update(id, changes) {
    // Method of the class
    const index = this.products.findIndex(
      (product) => product.id === parseInt(id)
    );
    if (index === -1) {
      throw boom.notFound(`Product not found.`);
    } else {
      const product = this.products[index];
      this.products[index] = {
        ...product,
        ...changes,
      };
    }
    return this.products[index];
  }

  delete(id) {
    // Method of the class
    const index = this.products.findIndex(
      (product) => product.id === parseInt(id)
    );
    if (index === -1) {
      throw boom.notFound(`Product not found.`);
    } else {
      this.products.splice(index, 1);
      return this.products[index];
    }
  }
}

// Exports
module.exports = ProductService;
