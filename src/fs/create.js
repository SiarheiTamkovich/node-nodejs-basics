import fs from "fs";
import path from "path";

export const create = async () => {
  
  const __dirname = path.resolve();
  const pathFile = path.join(__dirname, 'src/fs/files', 'fresh.txt');

  fs.access(pathFile, fs.F_OK, (err) => {
    if(err) {
      fs.writeFile(pathFile, "I am fresh and young", (err) => {   
        if(err) {
          return console.log(err);
        }
      }); 
      return
    }
    console.log('FS operation failed')
  })
};
create();

// for Powershell terminal run commands:
// node src/fs/create
