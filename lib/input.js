'use strict';

const minimist = require('minimist');
// minimist paress command line argument options

function Input(){
  const args = minimist(process.argv.slice(2));
  // process.argv is an array that contains a collection of command line arguments where the first one is the process being executed (node path), the second one is the file being executed (file path), and everything else is what has been added after. When you "slice" it returns everything after the node and file path.
  
  this.action = this.getAction(args.a);
  // the letter is creating a shortcut
  // end up with a property of the input instance that is atleast a GET
  this.payload = this.getPayload(args.p);
  
  
}

Input.prototype.getAction = function (action = ''){
  //command line argument must be acceptable
  // REGEX that is looking for get, put, patch, post, delete and don't worry about case.
  let validActions = /get|put|patch|post|delete/i;
  // test action, if it finds it it creates a boolean and passes it back? if it doesn't recognize it 
  // checks for truthiness on the left of the ? and if it is truthy ten it does the left side, if falsy than overall turnary expression resolves to everything on the right side of the expression.
  return validActions.test(action) ? action : 'GET';
};

Input.prototype.getPayload = function (payload = ''){
  return payload ? payload : undefined;
};



module.exports = Input;
//exports the Input constructor function