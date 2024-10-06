import { createUnzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const inputFilePath = path.join(__dirname, 'files', 'archive.gz');
const outputFilePath = path.join(__dirname, 'files', 'fileToDecompress.txt');

export const decompressFile = async () => {
  const unzipStream = createUnzip();
  const readStream = createReadStream(inputFilePath);
  const writeStream = createWriteStream(outputFilePath);
  
  readStream.pipe(unzipStream).pipe(writeStream);
};

decompressFile();
