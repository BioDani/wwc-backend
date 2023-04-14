// Imports
const express = require("express");
const routerApi = require('./routes');
const {logErrors,errorHandler,boomErrorHandler} = require('./middlewares/error.handler')



const app = express(); // Create application
const PORT = process.env.PORT || 3000;; // PORT where it will run

app.use(express.json()); // Native middleware of express: to receive data in json format

app.get('/', async(req, res) =>{ // request & response
  await res.send("Server is running");
});

routerApi(app);
// Middlewares always goes after the routing

// Put the middlewares in exucution order
app.use(logErrors); // (1st)
app.use(errorHandler); // (2nd)



app.listen(PORT, () =>{
  console.log(`Server running in PORT:${PORT}`);
}); // Show to app in which PORT will be listening
