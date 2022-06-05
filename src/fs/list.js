import fs from "fs";
import path from "path";

export const list = async () => {

  const __dirname = path.resolve();
  const pathFolder = path.join(__dirname, 'src/fs/files');
    
  fs.access(pathFolder, fs.F_OK, (err) => {
    if(err) return console.log('FS operation failed');
    fs.readdir(pathFolder, (err, files) => console.log(files));
  })
};
list();

// for Powershell terminal run commands:
// node src/fs/list
