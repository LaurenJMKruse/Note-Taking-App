// *******************************
// A. Establish dependencies

// 01. Built-in
const fs = require('fs');
const util = require('util');

// 02. Universally Unique Indentifier
const uuidv1 = require('uuid/v1');


// *******************************
// B. Establish read/write
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);


conste