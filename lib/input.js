'use strict';

const minimist = require('minimist');
// minimist paress command line argument options

function Input(){
  // capture/process/validate user input
  // ***SYSTEM CAPTURES***
  // console.log('Process', process.argv.slice(2));
  // ***PROCESS***
  const args = minimist(process.argv.slice(2));
  // console.log(args);
  // process.argv is an array that contains a collection of command line arguments where the first one is the process being executed (node path), the second one is the file being executed (file path), and everything else is what has been added after. When you "slice" it returns everything after the node and file path.
  // minimist wants arguments formatted a certain type of way. "Give me an array with things that minimist needs and it will give you back an object"
  
  // ***VALIDATE***
  this.command = this.parse(args);
  
}


Input.prototype.parse = function (args){

  let argsMap = {
    a: 'add',
    add: 'add',
  };

  // console.log(Object.keys(args));

  let arg = Object.keys(args).filter(arg => argsMap[arg])[0];
  // _, add ['add']
  console.log('arg', arg);

  const command = {
    action: argsMap[arg],
    payload: args[arg],

  };

  const missingExtraBit = command.payload == true;
  // if it is missing the extra bit then it is = to true

  console.log(command);
  // check if payload is true

  if(command.action === undefined || command.payload === undefined){
    console.log('bad input');
  } else {
    console.log('good input');
  }
  return command;
};

Input.prototype.valid = function (){
  return !!(this.command.action && this.command.payload);
};


module.exports = Input;
//exports the Input constructor function