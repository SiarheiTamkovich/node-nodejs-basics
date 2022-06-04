import fs from 'fs';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

export const read = async () => {

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const readableStream = fs.createReadStream(
    path.join(__dirname, './files/fileToRead.txt'), 'utf-8'
  );
  readableStream.on('data', chunk => console.log('\x1b[36m%s\x1b[0m', chunk))
};
read();

// for Powershell terminal run commands:
// node src/streams/read