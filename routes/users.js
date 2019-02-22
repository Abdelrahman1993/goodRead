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

// @route   GET /users/login
// @desc    login user
// @access  Public
router.post('/login', (req, res)=>{

    const email= req.body.email;
    const password = req.body.password;
    User.findOne({email: email})
        .then(user=>{
            if(!user){
                res.status(404).json({email: 'email not found'});
            }else{
                bcrypt.compare(password, user.password)
                    .then(isMached=>{
                        if(isMached){
                            //if user mached lets creat the token
                            //create the payload
                            const payload={
                                firstName: user.firstName,
                                lastName: user.lastName,
                                userName: user.userName,
                                email: user.email,
                                photo: user.photo
                            };

                            jwt.sign(payload, keys.secretOrKey, {expiresIn: 3600}, (err,token)=>{
                                if(!err){
                                    res.json({token: "Bearer "+ token});
                                }else{
                                    res.json({err: err});
                                }
                            });
                            //res.json({msg: 'success'});
                        }else{
                            res.status(400).json({password: 'password incorrect'});
                        }
                    })
            }
        });

});

module.exports = router;
