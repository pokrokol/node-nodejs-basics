import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const calculateHash = async () => {
  try {
    const filePath = `${__dirname}/files/fileToCalculateHashFor.txt`;
    const content = await readFile(filePath, 'utf8');
    const hash = createHash('sha256').update(content).digest('hex');
    console.log(hash);
  } catch (error) {
    console.error('Error calculating hash:', error);
  }
};

calculateHash();
