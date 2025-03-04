"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var Math_js_1 = require("./Modules/Math.js"); // Importing Math module
// Writing to a file with callback
fs.writeFile('hello.txt', 'Hello pratik', function () {
    console.log('Success!!');
});
// Calling the functions from Math module
console.log('Addition:', (0, Math_js_1.add)(1, 2));
console.log('Multiplication:', (0, Math_js_1.multiply)(1, 2));
