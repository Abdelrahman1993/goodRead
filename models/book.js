const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    photo:String,
    name : String,
    categoryId: {type: mongoose.Schema.Types.ObjectId, ref: 'catogries'},
    authorId: { type: mongoose.Schema.Types.ObjectId, ref: 'authors' },   
    rate: Number
});

const Book = mongoose.model('books', bookSchema);
module.exports = Book;
