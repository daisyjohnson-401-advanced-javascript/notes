#!/usr/bin/env node
// ^^ Bash command that looks inside of the user's environment and runs node.

'use strict';
// makes JS "less loose"

const Input = require('./lib/input.js');
// This communicates that you want require to look in this file path for the input library file.

// console.log('Input', Input);

const Notes = require('./lib/notes.js');
// Requires to look in the filepath for the notes library file.

// console.log('notes', Notes);


// const options = 
const input = new Input();
const note = new Notes(input);
// // creates new object from the Input constructor function

console.log(note);
