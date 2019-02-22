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
 
    req.checkBody('firstName', 'First name must be specified.').notEmpty();
    req.checkBody('firstName','First name must be at least 3 character.').isLength({ min: 3, max: 8 });
    req.checkBody('lastName', 'Last name must be specified.').notEmpty();
    req.checkBody('lastName', 'Last name must be at least 3 character.').isLength({ min: 3, max: 8 });

    req.checkBody('userName', 'User name must be specified.').notEmpty();
    req.checkBody('userName', 'User name must be at least 3 character.').isLength({ min: 3, max: 8 });

    req.checkBody('password', 'Password must be specified.').notEmpty();
    req.checkBody('password', 'Password must be at least 8 character.').isLength({ min: 8 });

    req.checkBody('email', 'email must be specified.').notEmpty();

    // sanitizeBody('firstName').trim().escape();
    // sanitizeBody('lastName').trim().escape();
    // sanitizeBody('userName').trim().escape();

    const errors = req.validationErrors(req);
    if (errors) {
        console.log("error in sign up page .!!")
        res.json(errors);
        return;
    } else {

        User.findOne({ email: req.body.email }).then(user => {
            if (user) {
                return res.status(400).json({ email: 'Email already exists' });
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
                            res.json({ err: err });
                        newUser.password = hash;
                        newUser.save()
                            .then(user => res.json(user))
                            .catch(err => console.log(err));
                    });
                });
            }
        });


    }

});

// @route   GET /users/login
// @desc    login user
// @access  Public
router.post('/login', (req, res) => {

    const email = req.body.email;
    const password = req.body.password;
    
    req.checkBody('email', 'Email is required !').notEmpty();
    req.checkBody('email', 'Email is incorrect !').isEmail();
    req.checkBody('password', 'Password is required !').notEmpty();
    
    const errors = req.validationErrors(req);
    if (errors) {
        console.log("error in Log in page .!!");
        res.json(errors);
        return;
    } else {
        User.findOne({ email: email })
        .then(user => {
            if (!user) {
                res.status(404).json({ email: 'email not found' });
            } else {
                bcrypt.compare(password, user.password)
                    .then(isMached => {
                        if (isMached) {
                            //if user mached lets creat the token
                            //create the payload
                            const payload = {
                                _id: user._id,
                                firstName: user.firstName,
                                lastName: user.lastName,
                                userName: user.userName,
                                email: user.email,
                                photo: user.photo
                            };

                            jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                                if (!err) {
                                    res.json({ token: "Bearer " + token });
                                } else {
                                    res.json({ err: err });
                                }
                            });
                            //res.json({msg: 'success'});
                        } else {
                            res.status(400).json({ password: 'password incorrect' });
                        }
                    })
            }
        });

    }

   
});


// @route   GET /users/current
// @desc    get the current user
// @access  private
router.get('/current', passport.authenticate('jwt', {session: false}), (req, res)=>{

    const currentUser = {
        _id: req.user._id,
        firstName: req.user.firstName, 
        lastName: req.user.lastName,
        userName: req.user.userName,
        email: req.user.email,
        photo: req.user.photo,
        isAdmin: req.user.isAdmin, 

    }
    res.json(currentUser);
})
 

module.exports = router;
