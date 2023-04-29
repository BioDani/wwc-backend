const Joi = require('joi');

const id = Joi.number().required();
const title = Joi.string().alphanum();
const description = Joi.string().alphanum();
const price = Joi.number().min(0);
const discountPercentage = Joi.number().min(0).max(100);
const rating = Joi.number().min(0).max(5);
const stock = Joi.number().integer().min(0);
const brand = Joi.string().alphanum();
const category = Joi.string().alphanum();
const images = Joi.string().alphanum();

const findOneSchema = Joi.object({
  id: id
});

const updatePropertySchema = Joi.object({
  id : id,
  title : title,
  description : description,
  price : price,
  discountPercentage : discountPercentage,
  rating : rating,
  stock : stock,
  brand : brand,
  category : category,
  images : images
});

const updateTotallySchema = Joi.object({
  id: id,
  title: title.required,
  description: description.required,
  price: price.required,
  discountPercentage: discountPercentage.required,
  rating: rating.required,
  stock: stock.required,
  brand: brand.required,
  category: category.required,
  images: images.required
});

const createSchema = Joi.object({
  title: title.required,
  description: description.required,
  price: price.required,
  discountPercentage: discountPercentage.required,
  rating: rating.required,
  stock: stock.required,
  brand: brand.required,
  category: category.required,
  images: images.required
});

const deleteSchema = Joi.object({
  id: id
});

module.exports = {
  findOneSchema,
  updatePropertySchema,
  updateTotallySchema,
  createSchema,
  deleteSchema
};
