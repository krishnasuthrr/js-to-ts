import fs from "fs/promises";
import path from "node:path";


await rename("./main");
// await renameToJs("./main");

// filePath: string = path to your folder containing the js files
async function rename(filePath) {
  const oldFileNames = await fs.readdir(filePath);

  for (const [index, oldFileName] of oldFileNames.entries()) {
    const oldPath = path.join(filePath, oldFileName);

    const newFileNames = oldFileNames.map((fileName) => {
      return fileName.slice(0, -2) + "t" + fileName.slice(-1); // replace 'j' with 't' => js becomes ts
    });

    const newPath = path.join(filePath, newFileNames[index]);

    await fs.rename(oldPath, newPath);
  }
}

// reset
async function renameToJs(filePath) {
  const oldFileNames = await fs.readdir(filePath);

  for (const [index, oldFileName] of oldFileNames.entries()) {
    const oldPath = path.join(filePath, oldFileName);

    const newFileNames = oldFileNames.map((fileName) => {
      return fileName.slice(0, -2) + "j" + fileName.slice(-1);
    });

    const newPath = path.join(filePath, newFileNames[index]);

    await fs.rename(oldPath, newPath);
  }
}