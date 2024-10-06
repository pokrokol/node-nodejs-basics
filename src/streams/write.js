import fs from 'fs';
import { stdin } from 'node:process';
import { fileURLToPath } from 'url';
import { dirname } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const write = async () => {
  const filePath = `${__dirname}/files/fileToWrite.txt`;
  const writable = fs.createWriteStream(filePath);
  stdin.pipe(writable);
};

write();
