const mongoose = require('mongoose');

const userBookSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    bookId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "books"
    },
    shelve: { type: 'String', enum: ['reading', 'will read', 'read'], default: null },
    rate: { type: Number, default: null }
});

const UserBook = mongoose.model('userBooks', userBookSchema);
module.exports = UserBook;