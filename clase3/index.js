const express = require('express');  // importar express
const PORT = 3000; // definición del puerto
const app = express(); 
//app.use(express.json) //¿para qué era?

/* 
const errorlogger = () => {};
const errorHandler = () => {};
 */

let products = [
    {
        id : 1,
        name : `reloj`,
        price : 2000,
        quantity : 10
    },
    {
        id : 2,
        name : `reloj2`,
        price : 3000,
        quantity : 12
    },
    {
        id : 3,
        name : `reloj3`,
        price : 4000,
        quantity : 34
    }
  ];

app.get("/", (req, res) => {
    res.send(`Primera app de express`);
});

// Trae todos los productos
app.get("/api/v1/products", (req, res) => {
    res.json(products);
    console.log(`funciona`);
});

// Trae un producto por id
app.get("/api/v1/products/:productId", (req, res) => {
    console.log(req.params);
    const {productId} = req.params; // Desestructuramos el objeto que trae 
    console.log(productId);

    const productIdInt = parseInt(productId); // venía como string, cambiamos a int
    const product = products.find((product)=> product.id === productIdInt);
    res.json(product);
});

// Agregar nuevos productos
app.post("/api/v1/products", (req, res) =>{
});

app.listen(PORT, () => {
    console.log(`Escuchando en http://localhost:${PORT}`);
});