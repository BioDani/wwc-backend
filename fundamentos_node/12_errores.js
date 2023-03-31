// 1. Opción 1: Usando try y catch, ejecutando la función en el try
function rota(){
    return 3+ z;
}

/*
try {
    rota()
} catch (error) {
    console.log('Función rota');
    console.error(error.message); // Muestra cuál es el error particular que vemos
}
*/

// 2.  Usando funciones asíncronas
async function otraRota(){ 
    setTimeout(() => { //Captura de errores asíncrona con esta función
        try {
            return 3 + z;
        } catch (error) {
            console.error(error);
            console.log('Ocurrió un error.');
        }
    });
};

async function main(){
    await otraRota();
};

main();


