import fs from 'fs';
import zlib from 'zlib';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { pipeline } from 'stream';

export const decompress = async () => {

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const source = fs.createReadStream(__dirname + '/files/archive.gz');
  const destination = fs.createWriteStream(__dirname + '/files/fileToCompress.txt');
  const gunzip = zlib.createGunzip();

  pipeline(source, gunzip, destination, err => {
    if (err) throw err;
    fs.unlink(__dirname + '/files/archive.gz', err => {
      if (err) throw err;
    })
    console.log('gzip decompressed')
  })
}
decompress();

// for Powershell terminal run commands:
// node src/zip/decompress