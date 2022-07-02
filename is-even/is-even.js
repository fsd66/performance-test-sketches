const { timeAndExecute } = require("../testing-apparatus");

const isEvenModulo = (number) => {
    return number % 2 === 0;
};

const isEvenBitwise = (number) => {
    return number & 1 === 0;
};

async function main() {
    const iterations = 1e5;
    const tests = (new Array(1000)).fill(0).map((_, i) => [i]);

    const moduloTime = timeAndExecute(isEvenModulo, tests, iterations);
    const bitwiseTime = timeAndExecute(isEvenBitwise, tests, iterations);

    console.log(`Iterations: ${iterations}, Number of Tests per Iteration: ${tests.length}`);
    console.log(`Modulo Elapsed Time: ${moduloTime.totalTime}ms, Avg: ${moduloTime.averageTime}ms`);
    console.log(`Bitwise Elapsed Time: ${bitwiseTime.totalTime}ms, Avg: ${bitwiseTime.averageTime}ms`);
}

main().catch(err => console.error(err));
