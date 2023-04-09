function logErrors(err, req, res, next) {
  //Show errors in console
  console.log(err);
  next(err); // send to the other error
}

function errorHandler(err, req, res, next) {
  //Show errors in the json response
  res.status(500).json({
    message: err.message,
    stack: err.stack, // It doesnt have a next, it goes directly to the res.
  });
}

module.exports = {
  logErrors,
  errorHandler,
};
