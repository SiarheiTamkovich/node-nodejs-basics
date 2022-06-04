import { fileURLToPath } from 'url';
import path from 'path'; 
import { dirname } from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import './files/c.js';
import fs from 'fs';

const random = Math.random();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let unknownObject;

const readJSON = (filePath) => {
  fs.readFile(path.join(__dirname, filePath), (err, data) => {
    if (err) throw err ;
    unknownObject = JSON.parse(data);
    console.log(unknownObject);
  });
}

if (random > 0.5) {
  readJSON('./files/a.json');
} else {
  readJSON('./files/b.json');
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

export const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

export default unknownObject;

// for Powershell terminal run commands:
// node src/modules/cjsToEsm.mjs
