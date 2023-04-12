const express = require('express');
const fs = require('fs/promises');

class ProductService {
  constructor() {
    this.database = '././database/products.database.txt';
    this.products = [];
    this.loadDatabase();
  }

  async loadDatabase() {
    try {
      const data = await fs.readFile(this.database, { encoding: 'utf8' });
      this.products = JSON.parse(data);
    } catch (error) {
      console.error(`Got an error trying to open the file: ${error.message}`);
    }
  }

  findAll() {
    return this.products;
  }

  findOne(id) {
    return this.products.find((product) => product.id === parseInt(id));
  }

  create(data) {
    try {
      // Push to list
      const lastId = this.products.slice(-1)[0].id;
      const newProduct = {
        id: parseInt(lastId) + 1,
        ...data,
      };
      this.products.push(newProduct);

      if (newProduct) {
        //const database = this.database;
        const productsUpdated = JSON.stringify(this.products);
        fs.writeFile(this.database, productsUpdated);
        return newProduct;
      } else {
        throw new error();
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  update(id, changes) {
    const index = this.products.findIndex(
      (product) => product.id === parseInt(id)
    );

    if (!index) {
      console.log(`Product not found.`);
    } else {
      const product = this.products[index];
      this.products[index] = {
        ...product,
        ...changes,
      };

      const productsUpdated = JSON.stringify(this.products);
      fs.writeFile(this.database, productsUpdated);
    }
    return this.products[index];
  }

  delete(id) {
    const index = this.products.findIndex(
      (product) => product.id === parseInt(id)
    );

    if (!index) {
      console.log(`Product not found.`);
    } else {
      const deletedProduct = this.products[index];
      this.products.splice(index, 1);

      const productsUpdated = JSON.stringify(this.products);
      fs.writeFile(this.database, productsUpdated);
      return deletedProduct;
    }
  }
}

module.exports = ProductService;
