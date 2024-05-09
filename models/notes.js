const mongoose = require('mongoose');

const dbSchema = mongoose.Schema ({
    paragraph : String,
})
const Note = mongoose.model('note' , dbSchema);

module.exports = Note;