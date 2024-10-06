import { readdir } from 'node:fs/promises';
import { fileURLToPath } from 'url';
import path, { dirname } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const list = async () => {
  const dirPath = path.join(__dirname, 'files');

  try {
    const files = await readdir(dirPath);
    console.log(files);
  } catch (error) {
    console.error('FS operation failed', error);
    throw new Error('FS operation failed');
  }
};

list();
