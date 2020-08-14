const NotesModel = require('./notes-schema.js');


// get() create() update() delete()


class Notes {
  create(info) {

    let note = new NotesModel(info);

    return note.save();
  }

  get(category) {
    if (category) {
      return NotesModel.find({ category });
      
    } else {
      return NotesModel.find({});
    }


  }
  delete(_id) {
    return NotesModel.findByIdAndDelete(_id);
  }
}

module.exports = Notes;