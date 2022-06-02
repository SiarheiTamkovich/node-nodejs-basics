import fs from "fs";
import path from "path";

export const read = async () => {

  const __dirname = path.resolve();
  const pathFile = path.join(__dirname, 'src/fs/files/fileToRead.txt');

  fs.access(pathFile, fs.F_OK, (err)=> {
    if(err) return console.log('FS operation failed');
    const $stream = fs.createReadStream(pathFile);
    $stream.on('data', (data) => console.log(data.toString()));
  });
};
read();
