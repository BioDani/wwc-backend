// Imports
const express = require("express");
const routerApi = require('./routes');
const {logErrors,errorHandler, boomErrorHandler} = require('./middlewares/error.handler');

const app = express(); // Create application
const PORT = process.env.PORT || 8000; // PORT where it will run

app.use(express.json()); // Use of a middleware to receive data in json format

app.get('/', async(req, res) =>{ // request & response
  await res.send("Server is running");
});

routerApi(app);

// Usign the middlewares. They always go after the routing.
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);



app.listen(PORT, () =>{
  console.log(`Server running in PORT:${PORT}`);
}); // Show to app in which PORT will be listening
