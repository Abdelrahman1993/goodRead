const express = require('express');
const Book = require('../models/book');
const Category = require('../models/category');
// <<<<<<< HEAD
const author = require('../models/author');
const Author = require('../models/author');
const bookRouter = express.Router();

const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString() + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});

//get all books
bookRouter.get('/', (req, res) => {
    Book.find().populate('authorId').populate('categoryId').then((data) => {
        //    const book_author=[];
        //     data.forEach(authorData=>{
        //         book_author.push(authorData.authorId.firstName+" "+authorData.authorId.lastName);
        //     });
        res.json(data);
        console.log(data);
    }).catch(err => {
        console.log(err);
    })

});

//add new book
bookRouter.post('/', upload.single('photo'), (req, res) => {
    Category.findOne({ categoryName: req.body.categoryName }).then(category => {
        if (!category) {
            return res.status(400).json({ categoryName: 'this category dose not exiest' });
        }
    
        Author.findOne({ authorName: req.body.authorName }).then(author => {
            if (!author) {
                return res.status(400).json({ email: 'this Author dose not exiest' });
            }
        const book = new Book({
            photo: req.file.path,
            name: req.body.name,
            categoryName: req.body.categoryName,
            authorName: req.body.authorName,
            rate: req.body.rate
        });

    book.save().then(result => {
        console.log(result);
        res.status(201).json({
            message: "Created book successfully",
        });
    }).catch(err => {
        console.log("err : " + err);
        res.status(500).json({
            error: err
        });
    });
        });
    });

});
//get book by id
bookRouter.get('/:id', (req, res) => {
    Book.findById(req.params.id).populate('authorId').populate('categoryId').then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json({ msg: err });
    });
});

// update book by id
bookRouter.put('/:id', upload.single('photo'), (req, res) => {
    Book.findOneAndUpdate(req.params.id, {
        photo: req.file.path,
        name: req.body.name,
        categoryId: req.body.categoryId,
        authorId: req.body.authorId,
        rate: req.body.rate
    }).then((data) => {
        res.json(data)
    }).catch((err) => {
        res.json({ msg: err });
    });

});

//delete book by id
bookRouter.delete('/:id', (req, res) => {
    Book.findByIdAndRemove(req.params.id).then((data) => {
        res.json(data);

    }).catch((err) => {
        res.json({ msg: err });
    });
});

module.exports = bookRouter;