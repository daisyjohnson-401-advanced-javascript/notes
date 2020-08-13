'use strict';

const NotesModel = require('./notes-schema.js');

class Notes {
  constructor() {
    // this.action = opts.command.action;
    // this.payload = opts.command.payload;

  }
  // Create a prototype method called execute that executes the correct operation

  // switch statement that puts action and payload
  async execute(command) {
    switch (command.action) {
    case 'add':
      // add note and category
      return this.add(command.payload, command.category);
    case 'list':
      // add list name (category)
      return this.list(command.category);
    case 'delete':
      //deletes note
      return this.delete(command.payload);
    default:
      return Promise.resolve();
    }
  }
  //Create a prototype method called add that will create an object representing a note and console.log of the text of the note to be added when the add command s executed
  // add
  // Signature of the add function: The number and types of the arguments and the type of return value
  // body = the ability to use strings
  async add(text, category) {

    const newNote = new NotesModel({ category, text});
    let saved = await newNote.save();
    return saved;
    
  }
  async list(category){
    const foundIt = await NotesModel.find(category);
    return foundIt;
  }

  async delete(id){
    await new NotesModel.findByIdAndDelete(id);
    return console.log('Deleted ID: ', id);
  }
}

module.exports = Notes;