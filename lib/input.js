'use strict';

const minimist = require('minimist');
// minimist paress command line argument options

// const args = minimist(process.argv.slice(2));
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


    const argsMap = {
      a: 'add',
      add: 'add',
      list: 'list',
      l: 'list',
      d: 'delete',
      delete: 'delete',
    };


    const theKeySwitch = Object.keys(args).find(key => argsMap[key]);
    //An additional switch, making sure that the main switch is there. If you passed in something with a key of c that's what I want for the category or what was passed with key of category. It will be the right thing or nothing.
    
    const action = argsMap[theKeySwitch];
    const payload = typeof args[theKeySwitch] === 'string' ? args[theKeySwitch] : undefined;
    const category = args.c || args.category;
    return {
      action, // same as action:action
      payload,
      category, // same as category:category
      // when you have a key and a value that is held in a variable with the same name, then you can skip it. IT is synonomous
    };

  }

  valid() {

    // command must have an action
    if (!this.command.action) { return false; }
    // add should have a payload
    if (this.command.action == 'add') {
      if (!this.command.payload) {
        return false;
      }
    }
    // delete should have a payload
    if (this.command.action == 'delete') {
      if (!this.command.payload) {
        return false;
        // list does not need a payload

      }

    }
    return true;
  }
}

// checking to see if two things are true. A way to turn truthy or falsey into true or false
// if command.action is truthy then evaluate comman.dpayload. Wraps it up negates it once and the negates it again.

module.exports = Input;
