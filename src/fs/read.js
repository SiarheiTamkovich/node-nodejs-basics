import fs from "fs";
import path from "path";

export const read = async () => {

  const __dirname = path.resolve();
  const pathFile = path.join(__dirname, 'src/fs/files/fileToRead.txt');

  fs.access(pathFile, fs.F_OK, (err)=> {
    if(err) return console.error('\x1b[31m%s\x1b[0m','FS operation failed');
    fs.readFile(pathFile, 'utf8', (err, data) => console.log('\x1b[36m%s\x1b[0m', data));
  });
};
read();

// for Powershell terminal run commands:
// node src/fs/read
