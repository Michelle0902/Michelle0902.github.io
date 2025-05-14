// import fs from "fs"; // ES Module
const fs = require('fs'); // CommonJS Module
// import fs from 'fs'; // ES Module

process.nextTick(() => console.log('nextTick 1'));

Promise.resolve().then(() => console.log('promise 1'));

setImmediate(() => { console.log('setImmediate 1') });

setTimeout(() => console.log('setTimeout 1'), 0);

fs.readFile('./files/input.txt', "utf-8", (err, data) => {
    if (err)
        console.log('there is an error. can not read from file');
    else
        console.log(data);
});
