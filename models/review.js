const mogoose = require('mongoose');

const reviewSchema = new Schema({
    body: String,
    bookId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book"
    }
});

const Review = mongoose.modle('reviews', reviewSchema);
module.exports = Review;