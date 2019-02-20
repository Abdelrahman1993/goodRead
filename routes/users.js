const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../configs/keys');
const passport = require('passport');

// Load User model
const User = require('../models/user');

// @route   GET /users/signup
// @desc    signup user
// @access  Public
router.post('/signup', (req, res) => {

User.findOne({email: req.body.email}).then(user => {
    if (user) {
        return res.status(400).json({email: 'Email already exists'});
        } else {
        const newUser = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            userName: req.body.userName,
            email: req.body.email,
            password: req.body.password
        });

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) 
            req.json({err: err});
        
        newUser.password = hash;
        newUser.save()
        .then(user => res.json(user))
        .catch(err => console.log(err));
        });
        });
    }
    });
});



module.exports = router;
