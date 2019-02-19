const mogoose = require('mongoose');

const userBookSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    bookId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book"
    },
    shelve: { type: 'String', enum: ['Reading', 'will read', 'read'] },
    rate: Number

});

const UserBook = mongoose.model('userBooks', userBookSchema);
module.exports = Category;