const express = require('express');
const Author = require('../models/author');
const Book = require('../models/book');
const Category = require('../models/category');
const categoryRouter = express.Router();
const passport = require('passport');


//get all categories
categoryRouter.get('/', (req, res) => {
    Category.find().then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json({msg: 'error in getting data'});
    });
});


//add new category
categoryRouter.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {

    if(req.user.isAdmin != true){
        return res.status(400).json({ msg: 'UnAthorized Access' });
    }

    req.checkBody('name', 'name must be specified.').notEmpty();
    req.checkBody('name', 'name mustn\'t be contain special charachter .').isAlphanumeric();
    req.checkBody('name', 'name mustn\'t be contain numbers .').isNumeric();

    Category.findOne({name: req.body.name}).then(catego => {
        if (catego) {
            return res.status(400).json({name: 'category already exists'});
        } else {
            const category = new Category({
                name: req.body.name
            });
            category.save((err) => {
                if (!err) {
                    res.json({msg: 'saved'});
                } else {
                    res.json({msg: err});
                }

            });
        }
    });
});

//get all books from spacific category
categoryRouter.get('/:id', (req, res) => {

    Book.find({ categoryId: req.params.id }).then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json({msg: err});
    });    
});

// update category by id
categoryRouter.put('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {

    if(req.user.isAdmin != true){
        return res.status(400).json({ msg: 'UnAthorized Access' });
    }

    Category.updateOne({_id: req.params.id},{ $set: { name: req.body.name },}).then(() => {
        res.json({msg: 'updated'})
    }).catch((err) => {
        res.json({msg: err});
    });
});


//delete category by id
categoryRouter.delete('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {

    if(req.user.isAdmin != true){
        return res.status(400).json({ msg: 'UnAthorized Access' });
    }
    
    Category.findByIdAndRemove(req.params.id).then(() => {
        Book.findByIdAndRemove({ categoryId: req.params.id }).then(() => {
            res.json({msg: 'deleted'});
        });
    }).catch(() => {
        res.json({msg: err});
    });
});


module.exports = categoryRouter;
