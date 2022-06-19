import fs from 'fs';
import zlib from 'zlib';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { pipeline } from 'stream';

export const compress = async () => {

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const source = fs.createReadStream(__dirname + '/files/fileToCompress.txt');
  const destination = fs.createWriteStream(__dirname + '/files/archive.gz');
  const gzip = zlib.createGzip();

  pipeline(source, gzip, destination, err => {
    if (err) throw err;
    fs.unlink(__dirname + '/files/fileToCompress.txt', err => {
      if (err) throw err;
    })
    console.log('gzip created')
  })
}
compress();

// for Powershell terminal run commands:
// node src/zip/compress