'use strict';

const minimist = require('minimist');
// minimist paress command line argument options

const args = minimist(process.argv.slice(2));
// console.log(args);
// process.argv is an array that contains a collection of command line arguments where the first one is the process being executed (node path), the second one is the file being executed (file path), and everything else is what has been added after. When you "slice" it returns everything after the node and file path.
// minimist wants arguments formatted a certain type of way. "Give me an array with things that minimist needs and it will give you back an object"



// capture/process/validate user input
class Input {

  constructor() {
    let args = minimist(process.argv.slice(2));
    this.command = this.parse(args);
  }


  parse(args) {
    let argsMap = {
      a: 'add',
      add: 'add',
    }

    // console.log(Object.keys(args));

    let arg = Object.keys(args).filter(arg => argsMap[arg])[0];
    // _, add ['add']
    // console.log('arg', arg);

    return {
      action: argsMap[arg],
      payload: args[arg],

    }


    //   const missingExtraBit = command.payload == true;
    //   // if it is missing the extra bit then it is = to true

    //   console.log(command);
    //   // check if payload is true

    if (command.action === undefined || command.payload === undefined) {
      console.log('bad input');
    } else {
      console.log('good input');
    }
    return command;
  };

  valid() {
    return !!(this.command.action && this.command.payload);\
    
  }

};
// checking to see if two things are true. A way to turn truthy or falsey into true or false
// if command.action is truthy then evaluate comman.dpayload. Wraps it up negates it once and the negates it again.

module.exports = Input;
//exports the Input constructor function