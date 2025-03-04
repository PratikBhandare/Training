import * as fs from 'fs';
import {add,multiply} from './Modules/Math.js';  // Importing Math module

// Writing to a file with callback
fs.writeFile('hello.txt', 'Hello pratik', () => {
    console.log('Success!!');
});

// Calling the functions from Math module
console.log('Addition:', add(1, 2));
console.log('Multiplication:', multiply(1, 2));
