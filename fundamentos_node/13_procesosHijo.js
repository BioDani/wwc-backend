// El módulo de procesos secundarios de Node.js (child_process) tiene dos funciones spawn y exec, mediante las cuales podemos iniciar un proceso secundario para ejecutar otros programas en el sistema.

//const {exec} = require(`child_process`);

const { stderr } = require('node:process');
const util = require('node:util');
const exec = util.promisify(require('node:child_process').exec);

async function lsExample() {
        try {
            const { stdout, stderr } = await exec('ls');
            console.log('stdout:', stdout);
        } catch (error) {
            console.error('stderr:', stderr);
        }
};

lsExample();