const express = require("express");
const {faker} = require('@faker-js/faker');


class ProductsService {

  constructor(){
    this.products = [];
    this.generate(); // cada que cree una instancia del servicio, se genera.
  }

  generate(limit){  // Método de la clase
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

  create(){

  };

  find(){
    return this.products;
  };

  findOne(){

  };

  update(){

  };

  delete(){

  };
};

module.exports = ProductsService;
