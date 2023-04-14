function logErrors(err, req, res, next) {
  //Capture and show errors in console
  console.log(err);
  next(err); // send to the other error
}

function errorHandler(err, req, res, next) {
  //Show errors as a json response
  res.status(500).json({
    message: err.message,
    stack: err.stack, // It doesnt have a next, it goes directly to the res.
  });
}

function boomErrorHandler(err, req, res, next) {
  //Show error using Boom library in the json response
  if (err.isBoom){
    const { output } = err;
    res.status(output.statusCode).json(output.payload)
  } else {
    next(err);
  }
}

module.exports = {
  logErrors,
  errorHandler,
  boomErrorHandler
};
