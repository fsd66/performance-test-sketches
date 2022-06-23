const iterations = 1000;
const stringLength = 100000;

function buildRandomString(length, charLimits = [32, 127]) {
    const [start, end] = charLimits;
    const codes = [];

    for (let i = 0; i < length; i++) {
        codes.push(Math.floor(Math.random() * (end - start)) + start);
    }

    return String.fromCharCode(...codes);
}

function appendStringBuild(string) {
    let str = "";
    for (let i = 0; i < string.length; i++) {
        str += string.charAt(i);
    }

    return str;
}

function arrayJoinBuild(string) {
    const array = [];
    for (let i = 0; i < string.length; i++) {
        array.push(string.charAt(i));
    }

    return array.join("");
}

const generationTimes = [];
const appendTimes = [];
const arrayTimes = [];

const totalStartTime = Date.now();

for (let i = 0; i < iterations; i++) {
    const generationStartTime = Date.now();
    const testString = buildRandomString(stringLength);
    const generationEndTime = Date.now();
    generationTimes.push(generationEndTime - generationStartTime);

    const appendStartTime = Date.now();
    appendStringBuild(testString);
    const appendEndTime = Date.now();
    appendTimes.push(appendEndTime - appendStartTime);

    const arrayStartTime = Date.now();
    arrayJoinBuild(testString);
    const arrayEndTime = Date.now();
    arrayTimes.push(arrayEndTime - arrayStartTime);
}

const totalEndTime = Date.now();
const totalElapsedTime = totalEndTime - totalStartTime;

const generationTime = generationTimes.reduce((pv, cv) => pv + cv);
const appendTime = appendTimes.reduce((pv, cv) => pv + cv);
const arrayTime = arrayTimes.reduce((pv, cv) => pv + cv);

const generationAvg = generationTime / generationTimes.length;
const appendAvg = appendTime / appendTimes.length;
const arrayAvg = arrayTime / arrayTimes.length;


console.log("Average Generation Time:", generationAvg, "ms,", "Total Time:", generationTime, "ms");
console.log("Average String Append Time:", appendAvg, "ms,", "Total Time", appendTime, "ms");
console.log("Average Array Join Time:", arrayAvg, "ms,", "Total Time:", arrayTime, "ms");

console.log("Total Time Elapsed:", totalElapsedTime, "ms,", iterations, "iterations,", "String Length:", stringLength);
