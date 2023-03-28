//Modulo File System
// Permite acceder a archivos leerlos, escribirlos, modificarlos, cambiar nombres, entre otras.

const { triggerAsyncId } = require("async_hooks");
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

// 2. Escribir un nuevo archivo
async function escribirArchivo(path, contenido) {
    try {
        await fs.writeFile(path, contenido);
    } catch (error) {
        console.error(error);
    }
};

// 3. Borrar un archivo
async function borrarArchivo(path) {
    try {
        await fs.unlink(path);
    } catch (error) {
        console.error('No se pudo borrar el archivo');
    }
}

async function main() {
    const data =  await leerArchivo(`${__dirname}/10_archivo.txt`);
    console.log(data);

    let texto = `Este es un nuevo archivo V02`;
    const nombreArchivo = `10_archivoNuevo.txt`;
    await escribirArchivo(`${__dirname}/${nombreArchivo}`, texto);
};

main();
borrarArchivo(`${__dirname}/archivo.txt`);
//borrarArchivo(`${__dirname}/10_archivoNuevo.txt`);
