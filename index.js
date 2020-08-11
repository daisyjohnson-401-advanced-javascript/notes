#!/usr/bin/env node
// ^^ Bash command that looks inside of the user's environment and runs node.

'use strict';
// makes JS "less loose"

const Input = require('./lib/input.js');
// This communicates that you want require to look in this file path for the input library file.

console.log('Input', Input);

const notes = require('./lib/notes.js');
// Requires to look in the filepath for the notes library file.

console.log('notes', notes);


// const options = 
new Input();
// // creates new object from the Input constructor function

// notes.fetch(options);