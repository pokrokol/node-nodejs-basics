import path from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import a from './files/a.json' assert { type: 'json' };
import b from './files/b.json' assert { type: 'json' };
import { fileURLToPath } from 'url';
import('./files/c.js');

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const random = Math.random();
export const unknownObject = random > 0.5 ? a : b;

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);
console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

export const createMyServer = createServerHttp((_, res) => {
  res.end('Request accepted');
});
