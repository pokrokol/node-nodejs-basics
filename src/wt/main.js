import { cpus } from 'os';
import { Worker } from 'worker_threads';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const performCalculations = async () => {
  const cpuCount = cpus().length;
  let num = 10;

  const workerPromises = Array.from({ length: cpuCount }, () => {
    return new Promise((resolve, reject) => {
      const worker = new Worker(join(__dirname, 'worker.js'), {
        workerData: ++num,
      });

      worker.on('message', resolve);
      worker.on('error', reject);
    });
  });

  const results = await Promise.allSettled(workerPromises);

  const formattedResults = results.map(({ status, value }) => ({
    status: status === 'fulfilled' ? 'resolved' : 'error',
    data: status === 'fulfilled' ? value : null,
  }));

  console.log(formattedResults);
};

performCalculations();
