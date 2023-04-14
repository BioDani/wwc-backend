const boom = require('@hapi/boom');

function validatorHandler(schema, property) {
  /*
  - schema: findOneSchema, updatePropertySchema, updateTotallySchema, createSchema and deleteSchema
  - property: get(params), post(body), put( params and body), patch(params and body), and delete(params)

  And then it return a middleware
  */

  return (req, res, next) => {
    const data = res[property]; // Condition for a dinamic middleware
    const { error } = schema.validate(data, { abortEarly: false });

    if (error) {
      next(boom.badRequest(error));
    } else {
      next();
    }
  };
}

module.exports = validatorHandler;
