import { createGzip } from 'zlib';
import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const input = path.join(__dirname, 'files', 'fileToCompress.txt');
const output = path.join(__dirname, 'files', 'archive.gz');

export const compress = async () => {
  const readStream = fs.createReadStream(input);
  const writeStream = fs.createWriteStream(output);
  const gzipStream = createGzip();

  readStream.pipe(gzipStream).pipe(writeStream);
};

compress();
