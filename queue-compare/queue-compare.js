const { LinkedListQueue, ArrayQueue } = require("./queue-data-structures");

const elements = 1e4;
const iterations = 100;

runTest(elements, iterations);

function generateRandomizedElements(numberOfElements) {
    const output = [];
    for (let i = 0; i < numberOfElements; i++) {
        output.push(Math.random());
    }

    return output;
}

function runTest(numberOfElements, iterations) {
    const generationTimes = [];
    const linkedListQueuePushTimes = [];
    const linkedListQueuePopTimes = [];

    const arrayQueuePushTimes = [];
    const arrayQueuePopTimes = [];

    const totalStartTime = Date.now();

    for (let i = 0; i < iterations; i++) {
        const generationStartTime = Date.now();

        const testData = generateRandomizedElements(numberOfElements);

        const generationEndTime = Date.now();
        generationTimes.push(generationEndTime - generationStartTime);


        const llq = new LinkedListQueue();


        const linkedListQueuePushStartTime = Date.now();

        testData.forEach(v => llq.push(v));

        const linkedListQueuePushEndTime = Date.now();
        linkedListQueuePushTimes.push(linkedListQueuePushEndTime - linkedListQueuePushStartTime);


        const linkedListQueuePopStartTimes = Date.now();

        while(llq.size > 0) {
            llq.pop();
        }

        const linkedListQueuePopEndTimes = Date.now();
        linkedListQueuePopTimes.push(linkedListQueuePopEndTimes - linkedListQueuePopStartTimes);


        const arrayQueue = new ArrayQueue();


        const arrayQueuePushStartTime = Date.now();

        testData.forEach(v => arrayQueue.push(v));

        const arrayQueuePushEndTime = Date.now();
        arrayQueuePushTimes.push(arrayQueuePushEndTime - arrayQueuePushStartTime);


        const arrayQueuePopStartTime = Date.now();

        while(arrayQueue.data.length > 0) {
            arrayQueue.pop();
        }

        const arrayQueuePopEndTime = Date.now();
        arrayQueuePopTimes.push(arrayQueuePopEndTime - arrayQueuePopStartTime);
    }

    const totalEndTime = Date.now();
    const totalElapsedTime = totalEndTime - totalStartTime;

    const generationTime = generationTimes.reduce((p, c) => p + c);
    const linkedListQueuePushTime = linkedListQueuePushTimes.reduce((p, c) => p + c);
    const linkedListQueuePopTime = linkedListQueuePopTimes.reduce((p, c) => p + c);

    const arrayQueuePushTime = arrayQueuePushTimes.reduce((p, c) => p + c);
    const arrayQueuePopTime = arrayQueuePopTimes.reduce((p, c) => p + c);

    const generationAvg = generationTime / iterations;
    const llqPushTimeAvg = linkedListQueuePushTime / iterations;
    const llqPopTimeAvg = linkedListQueuePopTime / iterations;
    const aqPushTimeAvg = arrayQueuePushTime / iterations;
    const aqPopTimeAvg = arrayQueuePopTime / iterations;

    console.log(`Average Generation Time: ${generationAvg}ms, Total time: ${generationTime}ms`);
    console.log("\n");

    console.log("Linked List Queue Results:");
    console.log(`Average Push Time: ${llqPushTimeAvg}ms, Total time: ${linkedListQueuePushTime}ms`);
    console.log(`Average Pop Time: ${llqPopTimeAvg}ms, Total time: ${linkedListQueuePopTime}ms`);
    console.log("\n");

    console.log("Array Queue Results:");
    console.log(`Average Push Time: ${aqPushTimeAvg}ms, Total time: ${arrayQueuePushTime}ms`);
    console.log(`Average Pop Time: ${aqPopTimeAvg}ms, Total time: ${arrayQueuePopTime}ms`);
    console.log("\n");

    console.log(`Total Time Elapsed: ${totalElapsedTime}ms, Iterations: ${iterations}, Number of Elements Pushed and Popped: ${numberOfElements}`);
}
