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
Notes.prototype.add = function(args){
  console.log(args.payload);
};

module.exports = Notes;