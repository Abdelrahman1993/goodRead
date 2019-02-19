const mogoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    body: String,
    bookId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book"
    }
});

const Review = mongoose.model('reviews', reviewSchema);
module.exports = Review;