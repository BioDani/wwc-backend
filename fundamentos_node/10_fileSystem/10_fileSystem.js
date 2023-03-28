//Modulo File System
// Permite acceder a archivos leerlos, escribirlos, modificarlos, cambiar nombres, entre otras.

const fs = require("fs/promises"); // importar file system

// 1. Leer un archivo: Puede ser un proceso largo, idealmente debería hacerse asíncrona.

async function leerArchivo(path){
    try {
        const data = await fs.readFile(path);
        return data.toString();
    } catch (error) {
        console.error(error);
    }
};

async function main() {
    const data =  await leerArchivo(`${__dirname}/10_archivo.txt`);
    console.log(data);
};

main();