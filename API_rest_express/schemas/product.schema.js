const Joi = require('joi');

const id = Joi.number();
const name = Joi.string().alphanum();
const price = Joi.number().min(0);
const quantity = Joi.number().min(0);
const isBlock = Joi.boolean();
const image = Joi.string();

const createProductSchema = Joi.object({
  name: name.required,
  price: name.required,
  quantity: name.required,
  isBlock : isBlock.required
});

const updateProductSchema = Joi.object({
});

const getProductSchema = Joi.object({
  id : id.required(),
});

// Attention: Always exports, not export. Here was the error
module.exports = {
  getProductSchema,
  createProductSchema,
  updateProductSchema
};
