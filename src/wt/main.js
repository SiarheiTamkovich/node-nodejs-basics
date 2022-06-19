import os from 'os';
import { Worker } from 'worker_threads';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

export const performCalculations = async () => {

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  for (let i = 1; i <= os.cpus().length; i++) {
    const workerData = {
      startNumber: 9 + i,
    }
    const worker = new Worker(__dirname + '/worker.js', { workerData });
    worker.on('message', (result) => {
      if(result.status !== 'resolved') console.error('error');
      console.log(result);
    });
  }
};
performCalculations();

// for Powershell terminal run commands:
// node src/wt/main