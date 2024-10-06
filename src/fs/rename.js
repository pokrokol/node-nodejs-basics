import { rename } from 'node:fs/promises';
import { fileURLToPath } from 'url';
import path, { dirname } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const renameFile = async () => {
  const oldPath = path.join(__dirname, 'files', 'wrongFilename.txt');
  const newPath = path.join(__dirname, 'files', 'properFilename.md');

  try {
    await rename(oldPath, newPath);
    console.log('File renamed successfully');
  } catch (error) {
    console.error('FS operation failed', error);
    throw new Error('FS operation failed');
  }
};

renameFile();
