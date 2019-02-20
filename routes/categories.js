const express = require('express');
const Author = require('../models/author');
const Book = require('../models/book');
const Category = require('../models/category');
const categoryRouter = express.Router();


//get all categories
categoryRouter.get('/', (req, res) => {
    Category.find().then((data) => {
        res.json(data);
    }).catch((err) => {
        res.send('error in getting data');
    });
});


//add new category
categoryRouter.post('/', (req, res) => {
    const category = new Category({
        name: req.body.name
    });
    category.save((err) => {
        if (!err) {
            res.send('saved');
        }else{
            res.send('error'+err);
        }

    });
});

//get all books from spacific category
categoryRouter.get('/:id', (req, res) => {

    Book.find({ categoryId: req.params.id }).then((data) => {
        res.json(data);
    }).catch((err) => {
        res.send('error in getting data ' + err);
    });    
});

// update category by id
categoryRouter.patch('/:id', (req, res) => {
    Category.updateOne({_id: req.params.id},{ $set: { name: req.body.name },}).then(() => {
        res.send('updated')
    }).catch((err) => {
        res.send('error in update data' + err);
    });
});


//delete category by id
categoryRouter.delete('/:id', (req, res) => {


    Category.findByIdAndRemove(req.params.id).then(() => {
        Book.findByIdAndRemove({ categoryId: req.params.id }).then(() => {
            res.send('deleted');
        });
    }).catch(() => {
        res.send('error in delete data ' + err);
    });
});


module.exports = categoryRouter;
