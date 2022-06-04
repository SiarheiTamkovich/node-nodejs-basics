import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { createHash } from 'crypto';

export const calculateHash = async () => {

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const hash = (str) => {
    return createHash('sha256').update(str).digest('hex');
  }
  
  const readableStream = fs.createReadStream(
    path.join(__dirname, './files/fileToCalculateHashFor.txt'), 'utf-8'
  );
  readableStream.on('data', chunk => console.log(hash(chunk)));
};
calculateHash();

// for Powershell terminal run commands:
// node src/hash/calcHash