const Joi = require('joi');

const id = Joi.number().integer().positive();
const title = Joi.string().alphanum();
const description = Joi.string().alphanum();
const price = Joi.number().min(0); ;
const discountPercentage = Joi.number().min(0).max(100);
const rating = Joi.number().min(0).max(5);
const stock = Joi.number().integer().min(0);
const brand = Joi.string().alphanum();
const category = Joi.string().alphanum();
const images = Joi.string().alphanum();


const findOneSchema = Joi.object({
  id: id.required(),
});

const updatePropertySchema = Joi.object({
  id: id.required(),
  title: title.optional(),
  description: description.optional(),
  price: price.optional(),
  discountPercentage: discountPercentage.optional(),
  rating: rating.optional(),
  stock: stock.optional(),
  brand: brand.optional(),
  category: category.optional(),
  images: images.optional(),
});

const updateTotallySchema = Joi.object({
  id: id.required(),
  title: title.required(),
  description: description.required(),
  price: price.required(),
  discountPercentage: discountPercentage.required(),
  rating: rating.required(),
  stock: stock.required(),
  brand: brand.required(),
  category: category.required(),
  images: images.required(),

});

const createSchema = Joi.object({
  id: id.forbidden(),
  title: title.required(),
  description: description.required(),
  price: price.required(),
  discountPercentage: discountPercentage.required(),
  rating: rating.required(),
  stock: stock.required(),
  brand: brand.required(),
  category: category.required(),
  images: images.required(),
});

const deleteSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  findOneSchema,
  updatePropertySchema,
  updateTotallySchema,
  createSchema,
  deleteSchema
};
