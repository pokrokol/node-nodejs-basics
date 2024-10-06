import * as fs from 'node:fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const create = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.resolve(__dirname, 'files', 'fresh.txt');
  const text = 'I am fresh and young';

  try {
    await fs.access(filePath, fs.constants.F_OK);
    console.error("File already exists");
  } catch {
    try {
      await fs.writeFile(filePath, text, { flag: 'wx' });
      console.log('File created');
    } catch (writeError) {
      console.error('FS operation failed', writeError);
    }
  }
};

create();
