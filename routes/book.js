const express = require('express');
const Book = require('../models/book');
const bookRouter = express.Router();

//get all books
bookRouter.get('/', (req, res) => {
    Book.find().then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json({msg:err});
    });

});

//add new book
bookRouter.post('/', (req, res) => {
    const book = new Book({
        photo: req.body.photo,
        name: req.body.name,
        categoryId: req.body.categoryId,
        authorId: req.body.authorId,
        rate: req.body.rate
    });
    book.save((err) => {
        if (!err) {
            console.log("saved");
        }
    });
});

//get book by id
bookRouter.get('/:id', (req, res) => {
    Book.findById(req.params.id).then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json({msg:err});
    });
});

// update book by id
bookRouter.put('/:id', (req, res) => {
    Book.findOneAndUpdate(req.params.id, {
        photo: req.body.photo,
        name: req.body.name,
        categoryId: req.body.categoryId,
        authorId: req.body.authorId,
        rate: req.body.rate
    }).then((data) => {
        res.json(data)
    }).catch((err) => {
        res.json({msg:err});
    });

});

//delete book by id
bookRouter.delete('/:id', (req, res) => {
    Book.findByIdAndRemove(req.params.id).then((data) => {
        res.json(data);

    }).catch((err) => {
        res.json({msg:err});
    });
});

//get books of specific user 
bookRouter.get('/:id/user', (req, res) => {
    Book.find({ userId: req.params.id }).then((data) => {
        res.json(data);
   }).catch((err) => {
    res.json({msg:err});
    });
});

module.exports = bookRouter;