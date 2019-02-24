const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    photo: String,
    name: String,
    categoryName: { type: String, required: true },
    authorName:{ type: String, required: true },
    //rate:Number
    rate: Number,
});

const Book = mongoose.model('books', bookSchema);
module.exports = Book;
