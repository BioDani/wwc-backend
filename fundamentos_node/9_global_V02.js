// 3. setImmediate() es una función asíncrona, por lo que se ejecutará luego de que se libere el hilo principal.

setImmediate(() => {
    console.log(`Último.`);
});
console.log(`Console 1`);
console.log(`Console 2`);
console.log(`Console 3`);

// 4. setTimeout(): Llama a una función despues de cierto periodo de tiempo

setTimeout(() => {
    console.log(`Pasaron 3000ms antes de poner este console.log()`);
}, 3000);

// 5. clearTimeout: detiene un setTimeout

// 6. Acceder a la ubicación en la cuál estamos
console.log(__dirname); // directorio
console.log(__filename); // nombre del archivo actual



