const express = require('express');
const mongoose = require('mongoose')
const Note = require('./models/notes');
const {DB_URL} =require('./models/index');

const router = express.Router();
router.get('/notes/add' , async(req , res , next) =>{
    res.render('index1');
})
router.post('/notes/add' , async(req , res , next) => {
    await mongoose.connect(DB_URL);
    let newNote = new Note ({
        paragraph : req.body.paragraph,
    })
    let note = await newNote.save();
    console.log(note);
    mongoose.disconnect();
    res.redirect('/');
})
module.exports = router;