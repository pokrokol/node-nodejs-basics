import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const copy = async () => {
  const currentFilePath = fileURLToPath(import.meta.url);
  const currentDirPath = path.dirname(currentFilePath);
  const sourceDirPath = path.join(currentDirPath, 'files');
  const targetDirPath = path.join(currentDirPath, 'files_copy');

  try {
    if (await fs.stat(targetDirPath).catch(() => false)) {
      throw new Error('FS operation failed: Target folder already exists');
    }

    await fs.mkdir(targetDirPath);

    const fileList = await fs.readdir(sourceDirPath);
    for (const fileName of fileList) {
      const sourceFilePath = path.join(sourceDirPath, fileName);
      const targetFilePath = path.join(targetDirPath, fileName);
      await fs.copyFile(sourceFilePath, targetFilePath);
    }

    console.log('Folder copied successfully!');
  } catch (error) {
    console.error(error.message);
  }
}

await copy();
