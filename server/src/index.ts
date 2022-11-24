import cluster from 'node:cluster';
import { cpus } from 'node:os';
import App from "app";

// const totalCPUs: number = cpus().length
// if (cluster.isPrimary) {
//     console.log(`Primary ${process.pid} is running`);
//     for (let i = 0; i < totalCPUs; i++) {
//         cluster.fork();
//     }
//     cluster.on('exit', (worker, code, signal) => { // console.log(`worker ${worker.process.pid} died`);
//     });
// } else {
    App() 
    // console.log(`Worker ${process.pid} started`);
// }

