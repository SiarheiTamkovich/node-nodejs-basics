import fs from 'fs';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

export const write = async () => {
  
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const { stdin, stdout } = process;
  
  const writeableStream = fs.createWriteStream(
    path.join(__dirname, './files/fileToWrite.txt')
  );

  stdout.write('Enter text:\n');
  stdin.on('data', data => {
    writeableStream.write(data);
    process.exit();
  });
  process.on('exit', () => stdout.write('Text save to file'));
};
write();

// for Powershell terminal run commands:
// node src/streams/write
