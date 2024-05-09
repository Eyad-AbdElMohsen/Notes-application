const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose')
const addNote = require('./addnote');
const {DB_URL} =require('./models/index');
const Note = require('./models/notes');

const bodyparserMW = bodyParser.urlencoded({
    extended : true
})

const app = express()
app.set('view engine' , 'ejs');
app.set('views' , 'views')
app.use(morgan('tiny'));
app.use(bodyparserMW);
app.use(express.static(path.join(__dirname , 'statics')));
app.use(addNote);


app.get('/' , async(req, res , next) => {
    await mongoose.connect(DB_URL);
    let notes = await Note.find();
    res.render("index" , {
        notes : notes
    })
    mongoose.disconnect();
})

app.listen(4000 , () => {
    console.log("running on port 4000");
})