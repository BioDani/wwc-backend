const express = require('express');
const fs = require('fs/promises');
const boom = require('@hapi/boom');

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

  async findAll() {
    return this.products;
  }

  async findOne(id) {
    const product =  this.products.find((product) => product.id === parseInt(id));

    if (!product){
      throw boom.notFound(`Product with id=[${id}] not found in the DB.`);
    }else{
      return product;
    }
  }

  async create(data) {
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

  async update(id, changes) {
    const index = this.products.findIndex(
      (product) => product.id === parseInt(id)
    );

    if (index===-1) {
      throw boom.notFound(`Product with id=[${id}] not found in the DB.`);
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

  async delete(id) {
    const index = this.products.findIndex(
      (product) => product.id === parseInt(id)
    );

    if (!index) {
      throw boom.notFound(`Product with id=[${id}] not found in the DB.`);
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
