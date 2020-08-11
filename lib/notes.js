'use strict';

function Notes (args){ 
  this.action = args.action;
  this.payload = args.payload;
}


// Create a prototype method called execute that executes the correct operation
Notes.prototype.execute = function(args){
  if(args) {
    console.log(`Action ${args.action}`);
    console.log(`Payload ${args.payload}`);
  }
};

//Create a prototype method called add that will create an object representing a note and console.log of the text of the note to be added when the add command s executed
// add
// Signature of the add function: The number and types of the arguments and the type of return value
// body = the ability to use strings
Notes.prototype.add = function (body) {
  
};

module.exports = Notes;