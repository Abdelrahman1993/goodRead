const mogoose = require('mongoose');

const bookSchema = new Schema({
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
    rate:Number
});

const Book = mongoose.modle('books', bookSchema);
module.exports = Book;