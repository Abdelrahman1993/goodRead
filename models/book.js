const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    photo:String,
    name : String,
    categoryId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category"
    },
    authorId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Author"
    },
    //rate:Number
    rate: Number,
});

const Book = mongoose.model('books', bookSchema);
module.exports = Book;