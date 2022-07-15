module.exports.timeAndExecute = (functionToTest, inputs, iterations) => {
    const startTime = process.hrtime();
    for (let i = 0; i < iterations; i++) {
        for (let j = 0; j < inputs.length; j++) {
            functionToTest.apply(null, inputs[j]);
        }
    }

    const [seconds, nanoseconds] = process.hrtime(startTime);

    const totalTime = (seconds * 1000) + (nanoseconds / (1000 * 1000));

    return { totalTime, averageTime: totalTime / iterations, hrtime: [seconds, nanoseconds] };
};
