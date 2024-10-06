import fs from 'fs';
import { stdout } from 'node:process';
import { fileURLToPath } from 'url';
import { dirname } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const read = async () => {
  const filePath = `${__dirname}/files/fileToRead.txt`;
  const readableStream = fs.createReadStream(filePath);

  readableStream.on('data', (chunk) => {
    stdout.write(chunk);
  });
};

read();
