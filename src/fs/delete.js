import fs from "fs";
import path from "path";

export const remove = async () => {
  
  const __dirname = path.resolve();
  const pathFile = path.join(__dirname, 'src/fs/files/fileToRemove.txt');

  fs.access(pathFile, fs.F_OK, (err) => {
    if(err) return console.log('FS operation failed');
    fs.unlink(pathFile, () => {});
  })
};
remove();

// for Powershell terminal run commands:
// node src/fs/delete
