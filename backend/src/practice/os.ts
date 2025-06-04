import os from "os";

import cluster from "cluster";

const platform = () => {
    console.log(os.platform());
    console.log(os.arch());
    console.log(os.cpus().length);

    const cpus = os.cpus();

    for (let i = 0; i < cpus.length - 2; i++) {
        const CPUCore = cpus[i];
    }

    console.log(process.pid);
};

// platform();

const clusterFunc = () => {
    const cpus = os.cpus();

    if (cluster.isPrimary) {
        for (let i = 0; i < cpus.length - 2; i++) {
            cluster.fork();
        }

        cluster.on("exit", (worker, code, signal) => {
            console.log(worker.process.pid + " dead");
            // cluster.fork();
        });
    } else {
        console.log(`Worker pid: ${process.pid}`);

        setInterval(
            () => console.log(`Worker pid: ${process.pid} working yet`),
            5000
        );
    }
};

// clusterFunc();
