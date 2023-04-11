// Imports
const express = require("express");
const routerApi = require('./routes');


const app = express(); // Create application
const PORT = process.env.PORT || 3000;; // PORT where it will run

app.use(express.json()); // Use of a middleware to receive data in json format

app.get('/', async(req, res) =>{ // request & response
  await res.send("Server is running");
});

routerApi(app);


app.listen(PORT, () =>{
  console.log(`Server running in PORT:${PORT}`);
}); // Show to app in which PORT will be listening
