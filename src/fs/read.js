import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'url';
import path, { dirname } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const read = async () => {
  const filePath = path.join(__dirname, 'files', 'fileToRead.txt');

  try {
    const data = await readFile(filePath, { encoding: 'utf8' });
    console.log(data);
  } catch (error) {
    console.error('FS operation failed', error);
    throw new Error('FS operation failed');
  }
};

read();
