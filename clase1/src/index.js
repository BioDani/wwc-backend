const fs = require('fs/promises');
const fetch = require('./utils/api');

async function read_file() {
  try {
    const data = await fs.readFile('./src/test.txt', { encoding: 'utf8' });
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}



read_file();

const content = 'Nuevo archivo a través de un string versión 2.';

async function write_fle() {
  try {
    await fs.writeFile('./src/test2.txt', content);
  } catch (err) {
    console.log(err);
  }
}

write_fle();


const fetchApi = require('./utils/api');
fetchApi('https://rickandmortyapi.com/api/character');

