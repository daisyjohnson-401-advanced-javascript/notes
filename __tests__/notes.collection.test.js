'use strict';

require('@code-fellows/supergoose');
// const mongoose = require('mongoose');
// const MONGOOSE_URI = 'mongodb://localhost:27017/food';
// mongoose.connect(MONGOOSE_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const NotesCollection = require('../model/notes-collection.js');
const notesCollection = new NotesCollection();

describe('Notes Collection', () => {
  it('can create new note', async () => {
    const noteData = { text: 'fun', category: 'school' };
    // node {_id: '1234', text: '....;, category: '.....}
    // Lets make sure that 1234 is the same as what noteData has which is undefined. 
    const note = await notesCollection.create(noteData);
    expect(note._id).toBeDefined();
    expect(note.text).toBe('fun');
    expect(note.category).toBe('school');

    // compareProps(noteData, note);
    //when noteData = 1
  });
  it('can get notes', async () => {
    const noteOne = {category: 'toDoList'};
    await notesCollection.create(noteOne);
    const note = await notesCollection.get();
    expect(note._id).toBe();
    expect(note.category).toBe('toDoList');

  });  
});
// function compareProps(one, other){
//   for(const key in one){
//     expect(one[key]).toBe(other[key]);
//   }
// }

