import fs from "fs";
import path from "path";

export const rename = async () => {

  const __dirname = path.resolve();
  const pathFile = path.join(__dirname, 'src/fs/files/wrongFilename.txt');
  const pathFileNew = path.join(__dirname, 'src/fs/files/properFilename.md');

  fs.access(pathFileNew, fs.F_OK, (err) => {
    if(err) {
      fs.access(pathFile, fs.F_OK, (err) => {
        if(err) {
          return console.log('FS operation failed');
        }
        return fs.rename(pathFile, pathFileNew, () => {});
      })
      return;
    }
    return console.log('FS operation failed');
  })
};
rename();

// for Powershell terminal run commands:
// node src/fs/rename
