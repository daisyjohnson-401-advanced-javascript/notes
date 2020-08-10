'use strict';

const minimist = require('minimist');
// minimist paress command line argument options

function Input(){
  const args = minimist(process.argv.slice(2));
  // process.argv is an array that contains a collection of command line arguments where the first one is the process being executed (node path), the second one is the file being executed (file path), and everything else is what has been added after. When you "slice" it returns everything after the node and file path.

  
  
  
}

//command line argument must be acceptable


module.exports = Input;
//exports the Input constructor function