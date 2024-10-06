import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const spawnChildProcess = async (args) => {
  const scriptPath = join(__dirname, 'files', 'script.js');
  const childProcess = spawn('node', [scriptPath, ...args]);

  process.stdin.pipe(childProcess.stdin);

  childProcess.stdout.setEncoding('utf8');
  childProcess.stdout.on('data', (data) => {
    process.stdout.write(data);
  });
};

spawnChildProcess(['Dog', 'Cat']);
