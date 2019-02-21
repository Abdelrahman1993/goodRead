const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    photo: { data: Buffer, contentType: String},
    firstName: String,
    lastName: String,
    dateOfBirth: Date,
    description: String
});

const Author = mongoose.model('authors', authorSchema);
module.exports = Author;