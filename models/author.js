const mogoose = require('mongoose');

const authorSchema = new Schema({
    photo: String,
    firstName: String,
    lastName: String,
    dateOfBirth: Date,
    description: String
});

const Author = mongoose.model('authors', authorSchema);
module.exports = Author;