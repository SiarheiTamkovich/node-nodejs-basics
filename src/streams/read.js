import fs from 'fs';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

export const read = async () => {

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const { stdout } = process;
  

  const readableStream = fs.createReadStream(
    path.join(__dirname, './files/fileToRead.txt'), 'utf-8'
  );
  readableStream.on('data', chunk => stdout.write(chunk))
};
read();

// for Powershell terminal run commands:
// node src/streams/read