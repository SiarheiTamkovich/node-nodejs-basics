import fs from "fs";
import path from "path";

export const copy = async () => {

  const __dirname = path.resolve();
  const pathFolder = path.join(__dirname, 'src/fs/files');
  const pathFolderNew = path.join(__dirname, 'src/fs/files_copy');

  fs.access(pathFolder, fs.F_OK, (err) => {
    if(err){
      return console.log('FS operation failed');
    }
    fs.access(pathFolderNew, fs.F_OK, (err) => {
      if(err){
        fs.promises.mkdir(pathFolderNew, { recursive: true });
        fs.readdir(pathFolder, (err, files) => {
          files.forEach(file => {
            fs.copyFile(`${pathFolder}/${file}`, `${pathFolderNew}/${file}`,(err) => {
              if (err) {
                  console.error(err)
                  return
              };
            })
          })
        })
        return;
      }
      return console.log('FS operation failed');
    })
  })
};
copy();