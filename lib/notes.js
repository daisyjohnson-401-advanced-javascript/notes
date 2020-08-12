'use strict';

// function Notes(opts) {
//   this.action = opts.command.action;
//   this.payload = opts.command.payload;
// }

class Notes {
  constructor(opts) {
    this.action = opts.command.action;
    this.payload = opts.command.payload;

  }
  // Create a prototype method called execute that executes the correct operation

  // switch statement that puts action and payload
  execute(command) {
    switch (this.action) {
    case 'add':
      this.add(this.payload);
      break;
    default:
      break;
    }
  }
  //Create a prototype method called add that will create an object representing a note and console.log of the text of the note to be added when the add command s executed
  // add
  // Signature of the add function: The number and types of the arguments and the type of return value
  // body = the ability to use strings
  add(payload) {
    console.log(`new note ${payload}`);
  }
}

module.exports = Notes;