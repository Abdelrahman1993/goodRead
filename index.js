const express = require('express');
const expressValidator=require('express-validator');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const keys = require('./configs/keys');
const autherRouter = require('./routes/authors');
const categoryRouter = require('./routes/categories');
const userRouter = require('./routes/users');
const bookRouter = require('./routes/book');
const app = express();
const PORT = process.env.PORT || 3000;
const uri = keys.mongoURI;
const passport = require('passport');
const passportJWT = require('passport-jwt');
const User = mongoose.model('users');



mongoose.set('useCreateIndex', true);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(expressValidator());
app.use('/uploads', express.static('uploads'));
mongoose.Promise = global.Promise;

//start connection to database
mongoose.connect(uri, {
    autoReconnect: true,
    reconnectTries: Number.MAX_VALUE,
    useNewUrlParser: true
}, (err) => {
    if (!err) {
        console.log("started mongodb connection");
    }
});


////////////////start passport middleware
app.use(passport.initialize());

const JwtStrategy = passportJWT.Strategy;
const extractJWT = passportJWT.ExtractJwt;

const opt = {
    jwtFromRequest: extractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: keys.secretOrKey
}

passport.use(new JwtStrategy(opt, (payload, done)=>{

    //console.log(payload);
    User.findById(payload._id)
        .then(user=>{
            if(user){
                return done(null, user);
            }
            else{
                return done(null, false)
            }
        })
        .catch(err=>{
            console.log(err);
        });

}));


///////////////end of passport middleware
//categories router
app.use('/categories', categoryRouter);

//authors router
app.use('/authors', autherRouter);

// books router
app.use('/books', bookRouter);
//users router
app.use('/users', userRouter);
//books router
// >>>>>>> 0e2c477daa07a911c8a96dbac71f0c4c95441797
app.use('/book', bookRouter);

app.listen(PORT, (req, res) => {
    console.log("server running on port: " + PORT);
});

