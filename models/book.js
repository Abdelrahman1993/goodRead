const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    photo:String,
    name : String,
    categoryName: String,
    authorName : String,
    //rate:Number
    rate: Number,
});

const Book = mongoose.model('books', bookSchema);
module.exports = Book;
