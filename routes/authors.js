const express = require('express');
const Author = require('../models/author');
const Book = require('../models/book');
const authorRouter = express.Router();
const multer = require('multer');
const passport = require('passport');

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

//get all authors
authorRouter.get('/', (req, res) => {
    Author.find().then((data) => {
        res.json(data);
    }).catch((err) => {
        res.send('error in getting data');
    });

});

//add new author
authorRouter.post('/', passport.authenticate('jwt', { session: false }), upload.single('photo'), (req, res, next) => {

    if(req.user.isAdmin != true){
        return res.status(400).json({ msg: 'UnAthorized Access' });
    }

    req.checkBody('firstName', 'firstName must be specified.').notEmpty();
    req.checkBody('firstName', 'firstName mustn\'t be contain special charachter .').isAlphanumeric();
    req.checkBody('firstName', 'firstName mustn\'t be contain numbers .').isNumeric();
    //=======================
    req.checkBody('lastName', 'lastName must be specified.').notEmpty();
    req.checkBody('lastName', 'lastName mustn\'t be contain special charachter .').isAlphanumeric();
    req.checkBody('lastName', 'lastName mustn\'t be contain numbers .').isNumeric();

    const errors = req.validationErrors(req);


    if (errors){
        res.json(errors);
        return;
    }
    else{
        Author.findOne({ name: req.body.name }).then(author => {

            if (author) {
                return res.status(400).json({ name: 'author already exists' });
            }
            else{

                const author = new Author({
                    photo: req.file.path,
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    dateOfBirth: req.body.dateOfBirth,
                    description: req.body.description
                });

                author.save().then(result => {
                    console.log(result);
                    res.status(201).json({
                        message: "Created author successfully",
                    });
                }).catch(err => {
                    console.log("err : " + err);
                    res.status(500).json({error: err})
                    });

            }


        })


    }

});



//get author by id
authorRouter.get('/:id', (req, res) => {
    Author.findById(req.params.id).then((data) => {
        res.send(data);
    }).catch((err) => {
        res.send('error in getting data');
    });
});


// update author by id
authorRouter.put('/:id', passport.authenticate('jwt', { session: false }), upload.single('photo'), (req, res) => {

    if(req.user.isAdmin != true){
        return res.status(400).json({ msg: 'UnAthorized Access' });
    }

    Author.findOneAndUpdate(req.params.id, {
        photo: req.file.path,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        dateOfBirth: req.body.dateOfBirth,
        description: req.body.description
    }).then(() => {
        res.send('updated')
    }).catch((err) => {
        res.send('error in update data' + err);
    });

});


//delete author by id
authorRouter.delete('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {

    if(req.user.isAdmin != true){
        return res.status(400).json({ msg: 'UnAthorized Access' });
    }

    Author.findByIdAndRemove(req.params.id).then(() => {
        Book.findByIdAndRemove({ authorId: req.params.id }).then(() => {
            res.send('deleted');
        });
    }).catch(() => {
        res.send('error in delete data ' + err);

    });
});


//get books of specific author 
authorRouter.get('/:id/books', (req, res) => {
    Book.find({ authorId: req.params.id }).then((books) => {
        res.json(books);
    }).catch((err) => {
        res.send('error in getting data ' + err);
    });
});

module.exports = authorRouter;
