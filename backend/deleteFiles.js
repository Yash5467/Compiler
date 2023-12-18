const fs = require("fs");
const path = require("path");

function deleteFilesInDirectory(directoryPath) {
  const absolutePath = path.resolve(directoryPath);

  fs.readdir(absolutePath, (err, files) => {
    if (err) {
      console.error(`Error reading directory: ${err}`);
      return;
    }

    files.forEach((file) => {
      const filePath = path.join(absolutePath, file);

      fs.stat(filePath, (err, stat) => {
        if (err) {
          console.error(`Error checking file/directory stat: ${err}`);
          return;
        }

        if (stat.isFile()) {
          fs.unlink(filePath, (err) => {
            if (err) {
              console.error(`Error deleting file: ${err}`);
            } else {
              console.log(`Deleted file: ${filePath}`);
            }
          });
        } else if (stat.isDirectory()) {
          
          deleteFilesInDirectory(filePath);

          fs.rmdir(filePath, (err) => {
            if (err) {
              console.error(`Error deleting directory: ${err}`);
            } else {
              console.log(`Deleted directory: ${filePath}`);
            }
          });
        }
      });
    });
  });
}

module.exports = deleteFilesInDirectory;
