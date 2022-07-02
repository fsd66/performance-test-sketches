module.exports.timeAndExecute = (functionToTest, inputs, iterations) => {
    let totalTime = 0;
    for (let i = 0; i < iterations; i++) {
        const startTime = Date.now();
        for (let j = 0; j < inputs.length; j++) {
            functionToTest.apply(null, inputs[j]);
        }
        totalTime += Date.now() - startTime;
    }

    return { totalTime, averageTime: totalTime / iterations };
};
