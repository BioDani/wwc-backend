/* Nota: No solo existe el console.log(), hay otras opciones también muy utiles.

*/
const zapatos = [
    {
        id: 1,
        marca:`adidas`,
        modelo: `run falcon`
    },
    {
        id: 2,
        marca:`adidas`,
        modelo: `otro`
    }
];

console.clear();
console.log(zapatos);

// console.table(): Muestra una tabla a partir de un objeto
console.table(zapatos);

console.group('Un grupo de consoles'); //Inicio del grupo de consoles
console.log('console 1');
console.log('console 1');
console.log('console 1');
console.groupEnd('')//Fin del grupo de consoles (hace una especie de identación)
console.log('Otra cosa diferente');

// console.count(): Cuenta las veces que muestra algo.
['DANIEL 1','DANIEL 1','DANIEL 1'].forEach(element => {
    console.count(element); // Cuenta las veces que imprime algo
});