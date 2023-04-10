const boom = require('@hapi/boom');
//const schema = require('../schemas/product.schema');

/*
Post: info comes from a req.body
Get: info comes from a req.params or req.quey
*/


function validatorHandler(schema, property) {
  //validator in a dinamic way: Using clousures
  return (req, res, next) => {
    const data = req[property];
    const { error } = schema.validate(data, { abortEarly: false });
    if (error) {
      next(boom.badRequest(error));
    }
    next();
  };
}
module.exports = validatorHandler;

module.exports = validatorHandler;
